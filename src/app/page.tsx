import type {Metadata} from "next";
import Link from "next/link";
import {Container} from "@mui/material";

import Header from "@/components/header";
import Body from "@/components/body";
import Posts from "@/components/posts";

export const metadata: Metadata = {
    title: "Posts list",
    description: "Page with list of posts",
};

const Home = () => (
    <Container maxWidth="lg">
        <Header title="Posts" actions={<Link href="/create">New post</Link>}/>
        <Body>
            <Posts/>
        </Body>
    </Container>
)

export const dynamic = 'force-dynamic'
export default Home