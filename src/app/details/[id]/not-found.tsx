import {Metadata} from "next";
import {Typography} from "@mui/material";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Item not Found",
    description: "Item not Found"
}

const NotFound = () => (
    <>
        <Header title="Not found page"/>
        <Body>
            <Typography>Item not Found</Typography>
        </Body>
    </>)

export default NotFound