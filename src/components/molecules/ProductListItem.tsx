import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItem } from "../types";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="flex justify-center">
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};

type ProductListItemProps = {
	product: ProductItem;
};
