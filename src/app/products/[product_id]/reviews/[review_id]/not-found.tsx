"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();
	const product_id = pathname.split("/")[2];
	const review_id = pathname.split("/")[4];
	return (
		<div>
			<h2>Review {review_id} not found for product {product_id}</h2>
		</div>
	);
}
