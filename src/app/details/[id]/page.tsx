import {notFound} from "next/navigation";

import {getPost} from "@/services";
import {Post} from "@/domain";

import Header from "@/components/header";
import Body from "@/components/body";
import PostDetails from "@/components/post-details";


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
            <Header title="Post details"/>
            <Body>
                <PostDetails post={post}/>
            </Body>
        </>
    )
}

export default Details