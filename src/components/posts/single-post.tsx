import Link from "next/link";
import React from "react";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

import {Post} from "@/domain";

interface Props {
    post: Post;
}

export const SinglePost = async ({post}: Props) => (
    <Link href={`/details/${post.id}`}>
        <ListItem disablePadding alignItems="center">
            <ListItemButton>
                <ListItemText primary={post.title} />
            </ListItemButton>
        </ListItem>
    </Link>
)