import {Metadata} from "next";
import {Typography} from "@mui/material";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Post not Found",
    description: "Post not Found"
}

const NotFound = () => (
    <>
        <Header title="Not found page"/>
        <Body>
            <Typography>Post not found</Typography>
        </Body>
    </>)

export default NotFound