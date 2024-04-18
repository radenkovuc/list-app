import React from "react";
import {TextField} from "@mui/material";

import {useStateContext} from "@/state";
import {FieldStatus} from "@/domain";


export const PostBody = () => {
    const {postBody, updateBody} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateBody(event.target.value);
    }

    const isInvalidField = postBody.status === FieldStatus.INVALID

    return <TextField
        error={isInvalidField}
        variant="outlined"
        label="Body"
        multiline
        value={postBody.value}
        maxRows={4}
        fullWidth
        onChange={onChange}
        helperText={isInvalidField ? "Field can not be empty." : ""}
    />
}