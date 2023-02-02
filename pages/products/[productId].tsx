import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductIdDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  // const {query : {productId}} = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);
  return (
    <>
      <div>Name: {product?.name}</div>
      <div>Description: {product?.attributes.description}</div>
    </>
  );
};

export default ProductIdDetails;
