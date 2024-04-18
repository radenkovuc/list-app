import React, {ReactNode} from 'react';
import {Post} from "@/domain";

type StateServices = {
    readonly message?: string
    readonly setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
    readonly postId?: number;
    readonly postTitle: string;
    readonly setPostTitle: React.Dispatch<React.SetStateAction<string>>;
    readonly postBody: string;
    readonly setPostBody: React.Dispatch<React.SetStateAction<string>>;
    readonly setPost: (post?: Post) => void;
};

interface Props {
    readonly children: ReactNode;
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({children}: Props): JSX.Element => {
    const [message, setMessage] = React.useState<string | undefined>();
    const [postTitle, setPostTitle] = React.useState<string>('');
    const [postBody, setPostBody] = React.useState<string>('');
    const [postId, setPostId] = React.useState<number | undefined>();

    const setPost = (post?: Post) => {
        setPostTitle(post?.title || "");
        setPostBody(post?.body || "");
        setPostId(post?.id);
    }

    return (
        <StateContext.Provider
            value={{
                message,
                setMessage,
                postId,
                postTitle,
                setPostTitle,
                postBody,
                setPostBody,
                setPost
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateServices => {
    const context = React.useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};
