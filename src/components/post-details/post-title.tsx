'use client'

import {TextField} from "@mui/material";
import React, {ReactNode} from "react";

import {useStateContext} from "@/state";
import {FieldStatus} from "@/domain";

import classes from "./post-details.module.css";

export const PostTitle = (): ReactNode => {
    const {postTitle, updateTitle} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        updateTitle(event.target.value);
    }

    const isInvalidField = postTitle.status === FieldStatus.INVALID

    return <TextField
        error={isInvalidField}
        variant="outlined"
        label="Title"
        value={postTitle.value}
        onChange={onChange}
        fullWidth
        className={classes.field}
        helperText={isInvalidField ? "Field can not be empty." : ""}
    />
}