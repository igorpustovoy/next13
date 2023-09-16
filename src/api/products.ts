import { type ProductResponseItem } from "@/app/products/page";

export const getProducts = async (take: number, offset?: number) => {
	const url = `https://naszsklep-api.vercel.app/api/products?take=${take}${
		offset ? `&offset=${offset}` : ""
	}`;

	const res = await fetch(url);

	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResponseToProductItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseToProductItemType(productResponse);
};

const productResponseToProductItemType = (product: ProductResponseItem) => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	description: product.description,
	coverImage: {
		src: product.image,
		alt: product.title,
	},
});
