import type {Metadata} from "next";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Create new item",
    description: "Page for creating new item",
};

const Create = () => (
    <>
        <Header title="Create page"/>
        <Body>
            <div>Create</div>
        </Body>
    </>
)

export default Create