import connectDB from "@/db";
import Product from "@/src/models/Product";

import { NextRequest, NextResponse } from "next/server";

interface Color {
    _id?: string;
    fa?: string | null;
    en?: string | null;
    code?: string | null;
}

export async function GET(request: NextRequest) {
    try {
        connectDB();
        const category =
            new URL(request.url).searchParams.get("category") || "لپتاپ";
        const products = await Product.find({});
        const brands = Array.from(
            new Set(products.map((product) => product.brand))
        );
        const colors = Array.from(
            new Set(
                products.flatMap((product) =>
                    product.colors.map((color) => color)
                )
            )
        );

        const uniqueColors: Color[] = products
            .flatMap((product) => product.colors)
            .reduce<Color[]>((acc, current) => {
                if (
                    !acc.find(
                        (color) =>
                            color.fa === current.fa &&
                            color.en === current.en &&
                            color.code === current.code
                    )
                ) {
                    acc.push({
                        fa: current.fa,
                        en: current.en,
                        code: current.code,
                    });
                }
                return acc;
            }, []);

        const subCategories = products.flatMap((product) =>
            product.subCategories.map((sb) => sb)
        );
        const applications = products.flatMap((product) =>
            product.application.map((application) => application)
        );
        const kinds = products.flatMap((product) =>
            product.kinds.map((kind) => kind)
        );
        const compatibilities = Array.from(
            new Set(
                products.flatMap((product) =>
                    product.compatibility.map((c) => c)
                )
            )
        );
        const materials = products.flatMap(
            (product) => product.specs?.body?.materials
        );

        const specs = {
            brands,
            colors: uniqueColors,
            subCategories,
            applications,
            kinds,
            compatibilities,
            materials,
        };
        return NextResponse.json(specs, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
