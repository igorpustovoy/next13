import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex justify-center gap-4">
						<li>
							<ActiveLink exact={true} href="/">
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">All</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center text-sm text-gray-500">
					<Link href="/static/terms">Terms</Link>
					<p>© 2023 Demo</p>
				</footer>
			</body>
		</html>
	);
}
