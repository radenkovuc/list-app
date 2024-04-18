'use client'

import {ReactNode} from "react";

import {StateProvider} from "@/state";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => (
    <StateProvider>
        {children}
    </StateProvider>
);

export default Layout