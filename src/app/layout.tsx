import {ReactNode} from "react";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {Container} from "@mui/material";

import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
    children: ReactNode;
}

const RootLayout = ({children}: Props) => (
    <html lang="en">
    <body>
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
        <Container maxWidth="lg">
            {children}
        </Container>
    </AppRouterCacheProvider>
    </body>
    </html>
);

export default RootLayout