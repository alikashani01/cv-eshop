import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();
        const url = new URL(request.url);
        const searchParams = url.searchParams;

        // Sort
        const sort = searchParams.get("sort") || "جدیدترین";

        const transformedSortOptions: [string, 1 | -1][] = [];
        if (sort === "جدید‌ترین") {
            transformedSortOptions.push(["createdAt", -1]);
        } else if (sort === "قدیمی‌ترین") {
            transformedSortOptions.push(["createdAt", 1]);
        } else if (sort === "گران‌ترین") {
            transformedSortOptions.push(["pricing.value", -1]);
        } else if (sort === "ارزان‌ترین") {
            transformedSortOptions.push(["pricing.value", 1]);
        } else if (sort === "محبوب‌ترین") {
            transformedSortOptions.push(["rating", -1]);
        }

        // Filtering
        interface Query {
            [key: string]: any;
        }

        let query: Query = {};

        const queries = searchParams.get("queries") || "";
        const parsedQueries = JSON.parse(queries);

        query["category.en"] = parsedQueries.category;

        const brands: string[] = (parsedQueries.brands as string[]) || [];
        if (brands.length > 0) {
            query["brand.fa"] = { $in: brands };
        }

        const colors: string[] = (parsedQueries.colors as string[]) || [];
        if (colors.length > 0) {
            query["colors.fa"] = { $in: colors };
        }

        const cpus: string[] = (parsedQueries.cpu as string[]) || [];
        if (cpus.length > 0) {
            const convertedCPUs = cpus.map((cpu) => cpu.split("-").join(" "));
            query["specs.proccessors.cpu.model"] = {
                $in: convertedCPUs,
            };
        }

        const chipsets: string[] = (parsedQueries.chipsets as string[]) || [];
        if (chipsets.length > 0) {
            query["specs.proccessors.chipset"] = { $in: chipsets };
        }

        const applications: string[] =
            (parsedQueries.applications as string[]) || [];
        if (applications.length > 0) {
            query["subCategory.fa"] = { $in: applications };
        }

        // const discount: boolean = (parsedQueries.discount as boolean) || false;
        // if (discount) {
        //     query["pricing.discount.value"] = { $gt: 0 };
        // }

        const products = await Product.find(query).sort(transformedSortOptions);

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
