import React from "react";
import {List} from "@mui/material";

import {getPosts} from "@/services";
import {Post} from "@/domain";

import {SinglePost} from "./single-post";
import classes from "./posts.module.css";

export const Posts = async () => {
    const posts: Post[] = await getPosts()

    return <List className={classes.posts}>
        {posts.map(post => <SinglePost key={post.id} post={post}/>)}
    </List>
}