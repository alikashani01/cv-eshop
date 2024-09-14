"use client";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useState } from "react";

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
        borderRadius: 15,
        marginTop: theme.spacing(1),
        minWidth: 180,
        background: "#282828",
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const { replace } = useRouter();
    const pathname = usePathname();

    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);

    const sort = useSearchParams().get("sort") || "جدیدترین";

    const handleSort = (value: string) => {
        params.delete("sort");
        params.append("sort", value);
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <>
            <button className="gap-[6px]" onClick={handleClick} type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    fill="#007fff"
                    className="bi bi-filter-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                </svg>
                <p className="font-shabt text-sm text-[#007fff]">{sort}</p>
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
                <ul>
                    <li onClick={handleClose}>
                        <button
                            className="w-full text-neutral-400 font-shabt text-sm py-[10px] border-b border-[#333]"
                            onClick={() => handleSort("جدیدترین")}
                        >
                            جدیدترین
                        </button>
                    </li>
                    <li onClick={handleClose}>
                        <button
                            className="w-full text-neutral-400 font-shabt text-sm py-[10px] border-b border-[#333]"
                            onClick={() => handleSort("قدیمی‌ترین")}
                        >
                            قدیمی‌ترین
                        </button>
                    </li>
                    <li onClick={handleClose}>
                        <button
                            className="w-full text-neutral-400 font-shabt text-sm py-[10px] border-b border-[#333]"
                            onClick={() => handleSort("گران‌ترین")}
                        >
                            گران‌ترین
                        </button>
                    </li>
                    <li onClick={handleClose}>
                        <button
                            className="w-full text-neutral-400 font-shabt text-sm py-[10px]"
                            onClick={() => handleSort("ارزان‌ترین")}
                        >
                            ارزان‌ترین
                        </button>
                    </li>
                </ul>
            </StyledMenu>
        </>
    );
}
