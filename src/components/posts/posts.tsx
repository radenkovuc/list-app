"use client"

import React from "react";
import {List} from "@mui/material";

import {Post} from "@/domain";

import {SinglePost} from "./single-post";
import classes from "./posts.module.css";

interface Props {
    posts: Post[]
}

export const Posts = async ({posts}: Props) => {

    return <List className={classes.posts}>
        {posts.map(post => <SinglePost key={post.id} post={post}/>)}
    </List>
}