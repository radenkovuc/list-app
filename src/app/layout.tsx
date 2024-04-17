import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";

export const metadata: Metadata = {
    title: "Items list",
    description: "Page with list of items",
};

interface Props {
    children: ReactNode;
}

const RootLayout = ({children}: Props) => (
    <html lang="en">
    <body>{children}</body>
    </html>
);

export default RootLayout