import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export function generateStaticParams() {
	return [{ filename: "terms" }];
}

export const generateMetadata = ({ params }: StaticPageParams) => {
	return {
		title: params.filename,
		description: "This is a static page",
	};
};

export default async function StaticPage({ params }: StaticPageParams) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(mod: { default: ComponentType }) => mod.default,
		() => notFound(),
	);

	return (
		<div className="flex justify-center">
			<article className="prose">
				<Page />
			</article>
		</div>
	);
}

type StaticPageParams = {
	params: { filename: string };
};
