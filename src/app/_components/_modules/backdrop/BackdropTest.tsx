import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>
) {
    return (
        <Slide
            className="!bottom-0 bg-red-500"
            direction="up"
            ref={ref}
            {...props}
        />
    );
});

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function BackdropTest({ isOpen, onClose, children }: Props) {
    return (
        <Dialog
            // fullScreen
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            className=""
        >
            <List>{children}</List>
        </Dialog>
    );
}
