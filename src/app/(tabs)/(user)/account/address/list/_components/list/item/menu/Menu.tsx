"use client";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import * as React from "react";
import Delete from "./Delete";
import SetDefault from "./SetDefault";
import Details from "./details/Details";
import EditLink from "./EditLink";
import DetailsContainer from "./details/Container";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 12,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(4),
        minWidth: 160,
        background: "#1f2937",
        boxShadow: "0 0 2px #aaa5",
        padding: 0,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        "& .MuiMenu-list": { padding: "0" },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

interface Props {
    isDefault: boolean;
    id: string;
}

export default function MenuContainer({ id, isDefault }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
    const handleClickDetails = () => setIsDetailsOpen(!isDetailsOpen);
    return (
        <>
            <button
                className="bg-neutral-200 min-w-[30px] w-[30px] h-[30px] rounded-full ml-2"
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#666666"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
            </button>

            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <div>
                    <Details
                        onClose={handleClose}
                        onOpenDetails={handleClickDetails}
                    />
                    <EditLink id={id} />
                    <SetDefault id={id} isDefault={isDefault} />
                    <Delete id={id} />
                </div>
            </StyledMenu>
            <DetailsContainer
                id={id}
                isOpen={isDetailsOpen}
                onClose={handleClickDetails}
            />
        </>
    );
}
