import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItem } from "../types";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li
			className="flex justify-center"
			// onClick={() => router.push(`/product/${product.id}`)}
		>
			<Link href={`/product/${product.id}`} className="cursor-pointer">
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};

type ProductListItemProps = {
	product: ProductItem;
};
