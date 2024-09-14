import { PropsWithChildren, useEffect, useRef } from "react";

const Container = ({ children }: PropsWithChildren) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            document.addEventListener("scroll", () => {
                const windowHeight = window.innerHeight;
                const elTop = el.getBoundingClientRect().top;
                if (elTop <= windowHeight) {
                    el.style.transform = "translateY(0)";
                    el.style.transition = "2s ease";
                } else {
                    el.style.transform = "translateY(50px)";
                    el.style.transition = "0s ease";
                }
            });
        }
    }, [ref.current]);
    return <div ref={ref}>{children}</div>;
};

export default Container;
