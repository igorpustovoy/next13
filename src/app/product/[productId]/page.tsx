import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/components/organisms/SuggestedProductsList";

export const generateMetadata = async ({ params }: SingleProductParams) => {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProduct({ params }: SingleProductParams) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article>
				<Suspense fallback={<div>Loading...</div>}>
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</Suspense>
			</article>
			<aside>
				<Suspense fallback={<div>Loading...</div>}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}

type SingleProductParams = {
	params: { productId: string };
};
