'use client'

import React from "react";

import PostTitle from "@/components/post-title";
import PostBody from "@/components/post-body";

import classes from "./create-post-details.module.css";


export const CreatePostDetails = () => {
    return <div className={classes.container}>
        <PostTitle/>
        <PostBody/>
    </div>
}