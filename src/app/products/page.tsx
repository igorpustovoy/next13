import Link from "next/link";
import { getProducts } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};

export default async function ProductsPage() {
	const products = await getProducts(4);

	return (
		<>
			<ProductList products={products} />
			<Link href={`/products/1`}>See More</Link>
		</>
	);
}
