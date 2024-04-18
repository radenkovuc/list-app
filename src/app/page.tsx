import type {Metadata} from "next";

import Header from "@/components/header";
import Body from "@/components/body";
import Posts from "@/components/posts";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = () => (
    <>
        <Header title="Posts"/>
        <Body>
            <Posts/>
        </Body>
    </>
)

export const dynamic = 'force-dynamic'
export default Home