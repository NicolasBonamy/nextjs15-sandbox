import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`smartphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product | ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  const productId = params.productId;
  return <h1>Details about product {productId}</h1>;
}
