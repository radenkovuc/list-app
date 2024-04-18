'use client'

import React, {useEffect} from "react";

import {Post} from "@/domain";
import {useStateContext} from "@/state";

import PostTitle from "@/components/post-title";
import PostBody from "@/components/post-body";

import classes from "./post-details.module.css";

interface Props {
    post?: Post
}

export const PostDetails = ({post}: Props) => {
    const {setPost} = useStateContext();

    useEffect(() => {
        setPost(post)
    }, [post])

    return <div className={classes.container}>
        <PostTitle/>
        <PostBody/>
    </div>
}