'use client'

import {Button} from "@mui/material";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

export const NewPostButton = (): ReactNode => {
    const router = useRouter()

    const onClick = (): void  => {
        router.push('/create')
    }

    return <Button variant="contained" onClick={onClick}>New Post</Button>
}