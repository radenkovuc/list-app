import {notFound} from "next/navigation";
import {Metadata} from "next";
import {ReactNode} from "react";

import {getPost} from "@/services";
import {Post} from "@/domain";

import PostDetails from "@/components/post-details";
import PostActions from "@/components/post-actions";
import Layout from "@/components/layout";


interface Props {
    params: {
        id: string
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const post: Post | null = await getPost(params.id)

    if (!post) {
        notFound()
    }

    return {
        title: post.title,
        description: post.body
    }
}

const Details = async ({params}: Props): Promise<ReactNode> => {
    const post: Post | null = await getPost(params.id)

    if (!post) {
        notFound()
    }

    return (
        <Layout title="Post details" actions={<PostActions/>}>
            <PostDetails post={post}/>
        </Layout>
    )
}

export default Details