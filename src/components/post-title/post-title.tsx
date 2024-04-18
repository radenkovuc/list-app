'use client'

import React from "react";
import {TextField} from "@mui/material";

import {useStateContext} from "@/state";

import {FieldStatus} from "@/domain";

import classes from "./post-title.module.css";

export const PostTitle = () => {
    const {postTitle, updateTitle} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        className={classes.container}
        helperText={isInvalidField ? "Field can not be empty." : ""}
    />
}