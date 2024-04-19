"use client"

import {List} from "@mui/material";
import React, {ReactNode} from "react";

import {Post} from "@/domain";

import {SinglePost} from "./single-post";
import classes from "./posts.module.css";

interface Props {
    posts: Post[]
}

export const Posts = ({posts}: Props): ReactNode =>
    <List className={classes.posts}>
        {posts.map(post => <SinglePost key={post.id} post={post}/>)}
    </List>
