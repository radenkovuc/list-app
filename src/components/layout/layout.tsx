import {ReactNode} from "react";

import Header from "@/components/header";

import classes from "./layout.module.css";

interface Props {
    children: ReactNode
    title: string
    actions?: ReactNode
}

export const Layout = ({children, title, actions}: Props):ReactNode =>
    <div className={classes.container}>
        <Header title={title} actions={actions}/>
        {children}
    </div>