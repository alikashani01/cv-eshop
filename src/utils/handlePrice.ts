// import { Pricing } from "@/queries/product/Entities";

// type PromiseValue = {
//     price: number;
//     oldPrice: number;
//     discount: number;
//     discountedPrice: number;
// };

// export const handlePrice = (pricing: Pricing[]): PromiseValue => {
//     const hasDiscount = pricing.find((price) => price.discount?.value! > 0);
//     const discountedPrice =
//         hasDiscount?.value! -
//         (hasDiscount?.discount?.value! / 100) * hasDiscount?.value!;
//     return {
//         price: (!hasDiscount && pricing[0].value) || 0,
//         oldPrice: hasDiscount?.value!,
//         discount: hasDiscount?.discount?.value!,
//         discountedPrice,
//     };
// };
