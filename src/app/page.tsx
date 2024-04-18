import type {Metadata} from "next";

import {Post} from "@/domain";
import {getPosts} from "@/services/postServices";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = async () => {
    const posts: Post[] = await getPosts()

    return (
        <>
            <Header title="Home page"/>
            <Body>
                <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>
            </Body>
        </>
    )
}

export const dynamic = 'force-dynamic'
export default Home