import {Metadata} from "next";
import {ReactNode} from "react";

import Layout from "@/components/layout";

export const metadata: Metadata = {
    title: "Not found",
    description: "Post not found"
}

const NotFound = (): ReactNode =>
    <Layout title="Not found page">
        <div>Post not found</div>
    </Layout>

export default NotFound