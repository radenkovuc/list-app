'use client'

import {Button} from "@mui/material";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

import {createPost} from "@/services";
import {FieldStatus} from "@/domain";
import {useStateContext} from "@/state";

export const CreateButton = (): ReactNode => {
    const {postBody, postTitle, setMessage, validatePost} = useStateContext();
    const router = useRouter()

    const onClick = () => {
        validatePost()

        if (postTitle.status === FieldStatus.VALID && postBody.status === FieldStatus.VALID) {
            void createPost(postTitle.value, postBody.value)
            setMessage("New post created")
            router.push('/')
        }
    }

    return <Button variant="contained" onClick={onClick}>Create</Button>
}