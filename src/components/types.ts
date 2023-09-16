export type ProductItem = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	coverImage: {
		src: string;
		alt: string;
	};
};
