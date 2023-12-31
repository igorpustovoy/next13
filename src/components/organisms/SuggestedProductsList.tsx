import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProducts(4);
	await sleep(5000);
	return <ProductList products={products.slice(-4)} />;
};
