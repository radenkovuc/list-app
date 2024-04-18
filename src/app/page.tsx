import type {Metadata} from "next";

import {Post} from "@/domain";
import {getPosts} from "@/services";

import Header from "@/components/header";
import Body from "@/components/body";
import Posts from "@/components/posts";
import NewPostButton from "@/components/new-post-button";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = async () => {
    const posts: Post[] = await getPosts()

    return (
        <>
            <Header title="Posts" actions={<NewPostButton/>}/>
            <Body>
                <Posts posts={posts}/>
            </Body>
        </>
    )
}

export const dynamic = 'force-dynamic'
export default Home