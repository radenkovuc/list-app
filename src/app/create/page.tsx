import type {Metadata} from "next";
import React, {ReactNode} from "react";

import CreateButton from "@/components/create-button";
import PostDetails from "@/components/post-details";
import Layout from "@/components/layout";

export const metadata: Metadata = {
    title: "Create new post",
    description: "Page for creating new post",
};

const Create = (): ReactNode =>
    <Layout title="Create post" actions={<CreateButton/>}>
        <PostDetails/>
    </Layout>


export default Create