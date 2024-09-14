import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Online Shop",
        short_name: "OnlineShop",
        description: "Online Shop",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
            {
                src: "/logo.png",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
