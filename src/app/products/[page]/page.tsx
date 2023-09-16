import { getProducts } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductList";

//TODO: change this to number from API
const API_PRODUCT_NUMBER = 237;

export function generateStaticParams() {
	const pageCount = Math.ceil(API_PRODUCT_NUMBER / 20);

	return Array.from({ length: pageCount }, (_, i) => ({ page: `${i + 1}` }));
}

export default async function Page({ params }: PageParams) {
	const products = await getProducts(20, (params.page - 1) * 20);

	return (
		<div className="flex w-full flex-col align-middle">
			<Pagination />
			<ProductList products={products} />
			<Pagination />
		</div>
	);
}

type PageParams = {
	params: { page: number };
};
