import type {Metadata} from "next";
import {Container} from "@mui/material";
import React from "react";

import Header from "@/components/header";
import Body from "@/components/body";
import CreatePostDetails from "../../components/create-post-details";
import CreateButton from "@/components/create-button";

export const metadata: Metadata = {
    title: "Create new item",
    description: "Page for creating new item",
};

const Create = () => (
    <Container maxWidth="lg">
        <Header title="Create page" actions={<CreateButton/>}/>
        <Body>
            <CreatePostDetails/>
        </Body>
    </Container>
)

export const dynamic = 'force-dynamic'
export default Create