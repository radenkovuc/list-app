import React from "react";
import {TextField} from "@mui/material";

import {useStateContext} from "@/state";


export const PostBody = () => {
    const {postBody, setPostBody} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostBody(event.target.value);
    }

    return <TextField
        variant="outlined"
        label="Body"
        multiline
        value={postBody}
        maxRows={4}
        fullWidth
        onChange={onChange}
    />
}