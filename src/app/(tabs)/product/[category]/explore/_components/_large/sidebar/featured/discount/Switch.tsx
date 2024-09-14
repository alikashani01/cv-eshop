"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Switch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const [isActive, setIsActive] = useState(false);
    const handleActivation = () => {
        params.delete("discount");
        setIsActive(!isActive);
        router.replace(
            `?discount=${isActive ? "false" : "true"}&${params.toString()}`
        );
    };
    return (
        <button className={styles.switch} onClick={handleActivation}>
            <span id={isActive ? styles.active : ""}></span>
        </button>
    );
};

export default Switch;
