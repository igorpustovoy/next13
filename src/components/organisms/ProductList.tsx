import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItem } from "../types";

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="grid w-full justify-center gap-10 p-12 sm:grid-cols-2 xl:grid-cols-4"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

type ProductListProps = {
	products: ProductItem[];
};
