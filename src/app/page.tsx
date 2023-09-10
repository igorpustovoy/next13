import { ProductList } from "@/components/organisms/ProductList";
import { type ProductItem } from "@/components/types";

const products: ProductItem[] = [
	{
		id: "1",
		name: "Basic Tee",
		category: "Shirts",
		price: 2525,
		coverImage: {
			alt: "Basic Tee",
			src: "https://dummyimage.com/300x300/ccc/000",
		},
	},
	{
		id: "2",
		name: "Baseball Cap",
		category: "Accessories",
		price: 1500,
		coverImage: {
			alt: "Baseball Cap",
			src: "https://dummyimage.com/300x300/ccc/000",
		},
	},
	{
		id: "3",
		name: "Jeans",
		category: "Pants",
		price: 5099,
		coverImage: {
			alt: "Jeans",
			src: "https://dummyimage.com/300x300/ccc/000",
		},
	},
	{
		id: "4",
		name: "Socks",
		category: "Accessories",
		price: 5,
		coverImage: {
			alt: "Socks",
			src: "https://dummyimage.com/300x300/ccc/000",
		},
	},
];

export default function Home() {
	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
