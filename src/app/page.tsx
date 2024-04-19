import type {Metadata} from "next";
import {ReactNode} from "react";

import {Post} from "@/domain";
import {getPosts} from "@/services";

import Posts from "@/components/posts";
import NewPostButton from "@/components/new-post-button";
import Layout from "@/components/layout";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = async (): Promise<ReactNode> => {
    const posts: Post[] = await getPosts()

    return (
        <Layout title="Posts" actions={<NewPostButton/>}>
            <Posts posts={posts}/>
        </Layout>
    )
}

export const dynamic = 'force-dynamic'
export default Home