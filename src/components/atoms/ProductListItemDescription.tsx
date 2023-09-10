import { type ProductItem } from "../types";
import { formatMoney } from "@/utils";

export const ProductListItemDescription = ({ product }: ProductListItemDescriptionProps) => (
	<div>
		<h3 className="text-lg font-bold">{product.name}</h3>
		<p>{product.category}</p>
		<p>{formatMoney(product.price / 100)}</p>
	</div>
);

type ProductListItemDescriptionProps = {
	product: ProductItem;
};
