'use client'

import {Metadata} from "next";
import {ReactNode} from "react";

import Layout from "@/components/layout";

export const metadata: Metadata = {
    title: "Error",
    description: "Something went wrong"
}

const ErrorPage = (): ReactNode =>
    <Layout title="Error page">
        <div>Something went wrong</div>
    </Layout>

export default ErrorPage