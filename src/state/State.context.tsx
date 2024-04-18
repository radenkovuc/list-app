import React, {ReactNode} from 'react';

type StateServices = {
    readonly postTitle: string;
    readonly setPostTitle: React.Dispatch<React.SetStateAction<string>>;
    readonly postBody: string;
    readonly setPostBody: React.Dispatch<React.SetStateAction<string>>;
};

interface Props {
    readonly children: ReactNode;
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({children}: Props): JSX.Element => {
    const [postTitle, setPostTitle] = React.useState<string>('');
    const [postBody, setPostBody] = React.useState<string>('');

    return (
        <StateContext.Provider
            value={{
                postTitle,
                setPostTitle,
                postBody,
                setPostBody
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
