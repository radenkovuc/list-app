import type {Metadata} from "next";
import Link from "next/link";

import {Post} from "@/domain";
import {getPosts} from "@/services";

import Header from "@/components/header";
import Body from "@/components/body";
import Posts from "@/components/posts";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = async () => {
    const posts: Post[] = await getPosts()

    return (
        <>
            <Header title="Posts" actions={<Link href="/create">New post</Link>}/>
            <Body>
                <Posts posts={posts}/>
            </Body>
        </>
    )
}

export const dynamic = 'force-dynamic'
export default Home