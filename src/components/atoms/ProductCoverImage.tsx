export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => (
	<div>
		<img height={240} width={240} src={src} alt={alt} />
	</div>
);

type ProductCoverImageProps = {
	src: string;
	alt: string;
};
