'use client'

import {useStateContext} from "@/state";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

import {createPost} from "@/services";

export const CreateButton = () => {
    const {postBody, postTitle, setPostTitle} = useStateContext();
    const router = useRouter()

    const onClick = () => {
        void createPost(postTitle, postBody)
        router.push('/')
    }

    return <Button onClick={onClick}>Create</Button>
}