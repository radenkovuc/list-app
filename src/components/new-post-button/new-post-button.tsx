'use client'

import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

export const NewPostButton = () => {
    const router = useRouter()

    const onClick = () => {
        router.push('/create')
    }

    return <Button variant="contained" onClick={onClick}>New Post</Button>
}