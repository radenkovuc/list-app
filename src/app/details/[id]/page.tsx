import {Typography} from "@mui/material";
import {notFound} from "next/navigation";

import {getPost} from "@/services";
import {Post} from "@/domain";

import Header from "@/components/header";
import Body from "@/components/body";


interface Props {
    params: {
        id: string
    }
}

export async function generateMetadata({params}: Props) {
    const post: Post | null = await getPost(params.id)

    if (!post) {
        notFound()
    }

    return {
        title: post.title,
        description: post.body
    }
}

const Details = async ({params}: Props) => {
    const post: Post | null = await getPost(params.id)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Header title="Details page"/>
            <Body>
                <Typography>Title: {post.title}</Typography>
                <Typography>Body: {post.body}</Typography>
            </Body>
        </>
    )
}

export default Details