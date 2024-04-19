import React, {ReactNode} from "react";
import {TextField} from "@mui/material";

import {useStateContext} from "@/state";
import {FieldStatus} from "@/domain";


export const PostBody = (): ReactNode => {
    const {postBody, updateBody} = useStateContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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