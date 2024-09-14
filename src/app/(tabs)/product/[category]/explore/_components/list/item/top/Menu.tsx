"use client";
import convertProductFaName from "@/src/utils/convertProductFaName";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Context } from "../Item";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 8,
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1),

        background: "#303",
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

export default function MenuContainer() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const pathname = usePathname();
    const { category, name } = React.useContext(Context);
    return (
        <>
            <button onClick={handleClick}>
                <Image
                    width={16}
                    height={16}
                    src="/icons/more.png"
                    alt=""
                    className=""
                />
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
                    <Link
                        href={`${convertProductFaName(
                            name.fa
                        )}/compare?lastPath=${pathname}`}
                        onClick={handleClose}
                        className="p-2 px-4 pl-5 gap-2 text-neutral-200 justify-start"
                    >
                        <Image
                            width={26}
                            height={26}
                            src="/icons/compare.png"
                            alt=""
                        />
                        <p>مقایسه</p>
                    </Link>
                </div>
            </StyledMenu>
        </>
    );
}
