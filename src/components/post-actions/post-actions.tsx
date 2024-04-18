'use client'

import {useStateContext} from "@/state";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

import {deletePost, updatePost} from "@/services";
import {FieldStatus} from "@/domain";

import classes from "./post-actions.module.css";

export const PostActions = () => {
    const {postBody, postId, postTitle, setMessage} = useStateContext();
    const router = useRouter()

    const onUpdate = () => {
        if (postId && postTitle.status === FieldStatus.VALID && postBody.status === FieldStatus.VALID) {
            void updatePost(postId, postTitle.value, postBody.value)
            setMessage("Post updated")
        }
    }

    const onDelete = () => {
        if (postId) {
            void deletePost(postId)
            setMessage("Post deleted")
            router.push('/')
        }
    }

    return <div className={classes.container}>
        <Button onClick={onUpdate} className={classes.button} variant="contained">Update</Button>
        <Button onClick={onDelete} className={classes.button} variant="outlined">Delete</Button>
    </div>
}