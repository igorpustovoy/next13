import { ActiveLink } from "../atoms/ActiveLink";

//TODO: change this to number from API
const API_PRODUCT_NUMBER = 237;

export const Pagination = () => {
	const pageCount = Math.ceil(API_PRODUCT_NUMBER / 20);

	return (
		<div className="flex justify-center gap-1">
			{Array.from({ length: pageCount }, (_, i) => (
				<ActiveLink exact={true} href={`/products/${i + 1}`} key={i}>
					{i + 1}
				</ActiveLink>
			))}
		</div>
	);
};
