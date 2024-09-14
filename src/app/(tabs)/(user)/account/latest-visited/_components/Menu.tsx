"use client";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import * as React from "react";
import useLatestVisitedStore from "../store";

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
        borderRadius: 8,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
        minWidth: 160,
        background: "#e1e1e1",
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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);
    const products = useLatestVisitedStore((s) => s.products);
    const setRemoveAll = useLatestVisitedStore((s) => s.setRemoveAll);

    return (
        products.length > 0 && (
            <>
                <button onClick={handleClick}>
                    <Image
                        width={16}
                        height={16}
                        src="/icons/menu/dark.png"
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
                        <button
                            onClick={() => {
                                setRemoveAll();
                                handleClose();
                            }}
                            className="p-3 px-4 gap-2 text-[#444] justify-start"
                        >
                            <Image
                                width={22}
                                height={22}
                                src="/icons/trash/red.png"
                                alt=""
                            />
                            <p className="text-sm">حذف کامل بازدیدها</p>
                        </button>
                    </div>
                </StyledMenu>
            </>
        )
    );
}
