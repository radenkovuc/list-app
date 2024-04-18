'use client'

import {useStateContext} from "@/state";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

import {createPost} from "@/services";

export const CreateButton = () => {
    const {postBody, postTitle, setMessage} = useStateContext();
    const router = useRouter()

    const onClick = () => {
        void createPost(postTitle, postBody)
        setMessage("New post created")
        router.push('/')
    }

    return <Button variant="contained" onClick={onClick}>Create</Button>
}