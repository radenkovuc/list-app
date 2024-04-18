'use client'

import {useStateContext} from "@/state";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

import {deletePost, updatePost} from "@/services";

export const PostActions = () => {
    const {postBody, postId, postTitle, setPostTitle} = useStateContext();
    const router = useRouter()

    const onUpdate = () => {
        if (postId) {
            void updatePost(postId, postTitle, postBody)
        }
    }

    const onClick = () => {
        if (postId) {
            void deletePost(postId)
            router.push('/')
        }
    }

    return <Button onClick={onClick}>Update</Button>
}