export default async function ProductDetails({
	params,
}: {
	params: Promise<{ product_id: string }>;
}) {
	const product_id = (await params).product_id;
	return <h1>Details about product {product_id}</h1>;
}
