'use client'

import React, {ReactNode, useEffect} from "react";

import {Post} from "@/domain";
import {useStateContext} from "@/state";

import {PostTitle} from "./post-title";
import {PostBody} from "./post-body";
import classes from "./post-details.module.css";

interface Props {
    post?: Post
}

export const PostDetails = ({post}: Props): ReactNode => {
    const {setPost} = useStateContext();

    useEffect(() => {
        setPost(post)
    }, [post, setPost])

    return (
        <div className={classes.container}>
            <PostTitle/>
            <PostBody/>
        </div>
    )
}