'use client'

import {Button} from "@mui/material";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

import {deletePost, updatePost} from "@/services";
import {FieldStatus} from "@/domain";
import {useStateContext} from "@/state";

import classes from "./post-actions.module.css";

export const PostActions = (): ReactNode => {
    const {postBody, postId, postTitle, setMessage} = useStateContext();
    const router = useRouter()

    const onUpdate = (): void  => {
        if (postId && postTitle.status === FieldStatus.VALID && postBody.status === FieldStatus.VALID) {
            void updatePost(postId, postTitle.value, postBody.value)
            setMessage("Post updated")
        }
    }

    const onDelete = (): void  => {
        if (postId) {
            void deletePost(postId)
            setMessage("Post deleted")
            router.push('/')
        }
    }

    return (
        <div className={classes.container}>
            <Button onClick={onUpdate} className={classes.button} variant="contained">Update</Button>
            <Button onClick={onDelete} className={classes.button} variant="outlined">Delete</Button>
        </div>
    )
}