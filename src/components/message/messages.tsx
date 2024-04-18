'use client'

import {useStateContext} from "@/state";

import {Snackbar} from "./snackbar";

import classes from "./snackbar.module.css";

export const Message = () => {
    const {message, setMessage} = useStateContext();

    if (!message) {
        return null
    }

    return <div className={classes.messages}>
        <Snackbar message={message} onClose={() => setMessage(undefined)}/>
    </div>
}