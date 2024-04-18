import type {Metadata} from "next";

import Header from "@/components/header";
import Body from "@/components/body";

export const metadata: Metadata = {
    title: "Items list",
    description: "Page with list of items",
};

const Home = () => (
    <>
        <Header title="Home page"/>
        <Body>
            <div>Items</div>
        </Body>
    </>
)

export default Home