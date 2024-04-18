import {Metadata} from "next";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Not Found",
    description: "Not Found page"
}

const NotFound = () => (
    <>
        <Header title="Not found page"/>
        <Body>
            <div>Page not found</div>
        </Body>
    </>)

export default NotFound