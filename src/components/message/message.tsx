'use client'

import {ReactNode} from "react";

import {useStateContext} from "@/state";

import {Snackbar} from "./snackbar";
import classes from "./message.module.css";

export const Message = (): ReactNode | null => {
    const {message, setMessage} = useStateContext();

    if (!message) {
        return null
    }

    return <div className={classes.message}>
        <Snackbar message={message} onClose={() => setMessage(undefined)}/>
    </div>
}