import Link from "next/link";
import React from "react";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

import {Post} from "@/domain";

import classes from "./posts.module.css";

interface Props {
    post: Post;
}

export const SinglePost = async ({post}: Props) => (
    <ListItem disablePadding alignItems="center">
        <ListItemButton>
            <Link href={`/details/${post.id}`} className={classes.text}>
                <ListItemText primary={post.title}/>
            </Link>
        </ListItemButton>
    </ListItem>
)