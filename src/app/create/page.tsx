import type {Metadata} from "next";
import React from "react";

import Header from "@/components/header";
import Body from "@/components/body";
import CreateButton from "@/components/create-button";
import PostDetails from "@/components/post-details";

export const metadata: Metadata = {
    title: "Create new item",
    description: "Page for creating new item",
};

const Create = () => (
    <>
        <Header title="Create post" actions={<CreateButton/>}/>
        <Body>
            <PostDetails/>
        </Body>
    </>
)

export const dynamic = 'force-dynamic'
export default Create