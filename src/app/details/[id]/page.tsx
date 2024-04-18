import type {Metadata} from "next";
import {Typography} from "@mui/material";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Item details",
    description: "Page with item details",
};

interface Props {
    params: {
        id: string
    }
}

const Details = ({params}: Props) => (
    <>
        <Header title="Details page"/>
        <Body>
            <Typography>Item: {params.id}</Typography>
        </Body>
    </>
)

export default Details