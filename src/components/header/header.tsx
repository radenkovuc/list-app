import Link from "next/link";
import React, {ReactNode} from "react";

import classes from "./header.module.css";

interface Props {
    title: string
    actions?: ReactNode
}

export const Header = ({title, actions}: Props):ReactNode =>
    <header className={classes.container}>
        <div className={classes.meniContainer}>
            <Link className={classes.link} href='/'>Home</Link>
            {actions}
        </div>
        <div className={classes.headerContainer}>
            <h4 className={classes.title}>{title}</h4>
        </div>
    </header>