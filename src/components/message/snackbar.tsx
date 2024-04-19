import {useSnackbar} from '@mui/base/useSnackbar';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {Typography} from "@mui/material";
import {ReactNode} from "react";

import classes from "./message.module.css";

interface Props {
    message: string,
    onClose: () => void
}

export const Snackbar = ({message, onClose}: Props): ReactNode => {
    const {getRootProps, onClickAway} = useSnackbar({
        onClose,
        open: true,
        autoHideDuration: 3000,
    });

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <div
                className={classes.snackbar}
                {...getRootProps()}
            >
                <Typography>{message}</Typography>
            </div>
        </ClickAwayListener>
    )
}