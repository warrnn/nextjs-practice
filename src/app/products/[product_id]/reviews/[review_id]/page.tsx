export default async function ProductReview({
	params,
}: {
	params: Promise<{ product_id: string; review_id: string }>;
}) {
	const { product_id, review_id } = await params;
	return (
		<h1>
			Review {review_id} for product {product_id}
		</h1>
	);
}
