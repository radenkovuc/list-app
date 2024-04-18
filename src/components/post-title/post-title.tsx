'use client'

import React from "react";
import {TextField} from "@mui/material";

import {useStateContext} from "@/state";


export const PostTitle = () => {
    const {postTitle, setPostTitle} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value);
    }

    return <TextField
        variant="outlined"
        label="Title"
        value={postTitle}
        onChange={onChange}
        fullWidth
    />
}