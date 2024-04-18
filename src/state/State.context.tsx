import React, {ReactNode} from 'react';

import {Field, FieldStatus, Post} from "@/domain";

type StateServices = {
    readonly message?: string
    readonly setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
    readonly postId?: number;
    readonly postTitle: Field;
    readonly postBody: Field;
    readonly setPost: (post?: Post) => void;
    readonly updateTitle: (title: string) => void
    readonly updateBody: (body: string) => void
    readonly validatePost: () => void
};

interface Props {
    readonly children: ReactNode;
}

const INITIAL_FIELD: Field = {
    value: "",
    status: FieldStatus.INITIAL
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({children}: Props): JSX.Element => {
    const [message, setMessage] = React.useState<string | undefined>();
    const [postTitle, setPostTitle] = React.useState<Field>(INITIAL_FIELD);
    const [postBody, setPostBody] = React.useState<Field>(INITIAL_FIELD);
    const [postId, setPostId] = React.useState<number | undefined>();

    const setPost = (post?: Post) => {
        if (post) {
            setPostTitle({value: post.title, status: FieldStatus.VALID});
            setPostBody({value: post.body, status: FieldStatus.VALID});
            setPostId(post.id)
        } else {
            setPostBody(INITIAL_FIELD)
            setPostTitle(INITIAL_FIELD)
            setPostId(undefined)
        }
    }

    const updateTitle = (title: string) => {
        setPostTitle({
            value: title,
            status: title ? FieldStatus.VALID : FieldStatus.INVALID
        });
    }

    const updateBody = (body: string) => {
        setPostBody({
            value: body,
            status: body ? FieldStatus.VALID : FieldStatus.INVALID
        });
    }

    const validatePost = () => {
        setPostTitle({
            value: postTitle.value,
            status: postTitle.value ? FieldStatus.VALID : FieldStatus.INVALID
        });
        setPostBody({
            value: postBody.value,
            status: postBody.value ? FieldStatus.VALID : FieldStatus.INVALID
        });

    }

    return (
        <StateContext.Provider
            value={{
                message,
                setMessage,
                postId,
                postTitle,
                postBody,
                setPost,
                updateTitle,
                updateBody,
                validatePost
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
