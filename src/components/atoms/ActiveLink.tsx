"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
}: PropsWithChildren<ActiveLinkProps<T>>) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(`font text-lg text-blue-400 hover:text-blue-600`, {
				underline: isActive,
			})}
		>
			{children}
		</Link>
	);
};

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	exact?: boolean;
};
