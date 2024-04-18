'use client'

import {Metadata} from "next";
import {Typography} from "@mui/material";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Error",
    description: "Something went wrong"
}

const ErrorPage = () => (
    <>
        <Header title="Error page"/>
        <Body>
            < Typography>Something went wrong</Typography>
        </Body>
    </>)

export default ErrorPage