'use client'

import {ReactNode} from "react";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';

import {StateProvider} from "@/state";

import Message from "@/components/message";

import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
    children: ReactNode;
}

const RootLayout = ({children}: Props): ReactNode =>
    <html lang="en">
    <body>
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
        <StateProvider>
            {children}
            <Message/>
        </StateProvider>
    </AppRouterCacheProvider>
    </body>
    </html>

export default RootLayout