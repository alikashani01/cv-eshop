"use client";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import SortLink from "./SortLink";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 10,
        marginTop: theme.spacing(1),
        minWidth: 180,
        background: "#333",
        border: "1px solid #484848",
        padding: 0,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        "& .MuiMenu-list": {
            padding: "0",
        },
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

export default function Sort() {
    const sort = useSearchParams().get("sort") || "جدیدترین";
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);
    return (
        <>
            <button className="gap-2" onClick={handleClick} type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="#007aff"
                    className="bi bi-filter-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="text-sm font-shabt text-[#007aff]">
                    {sort}
                </span>
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
                <ul className="">
                    <li
                        onClick={handleClose}
                        className="border-b border-b-[#484848]"
                    >
                        <SortLink option="جدیدترین" />
                    </li>
                    <li
                        onClick={handleClose}
                        className="border-b border-b-[#484848]"
                    >
                        <SortLink option="قدیمی‌ترین" />
                    </li>
                    <li
                        onClick={handleClose}
                        className="border-b border-b-[#484848]"
                    >
                        <SortLink option="بالاترین امتیاز" />
                    </li>
                    <li onClick={handleClose}>
                        <SortLink option="کمترین امتیاز" />
                    </li>
                </ul>
            </StyledMenu>
        </>
    );
}
