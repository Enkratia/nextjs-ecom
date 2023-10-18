"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

import ProductImage from "@/components/ProductImage";

import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const Modal: React.FC = () => {
  const [product, setProduct] = React.useState<Product>();
  const [loading, setLoading] = React.useState(false);

  const id = useParams().id;
  const router = useRouter();

  // router.back();

  React.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product: Product = await res.json();
      setProduct(product);

      setLoading(false);
    }
    fetchProducts();
  }, [id]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {product?.image && (
        <div className="relative w-72 h-full">
          <ProductImage product={product} fill />
        </div>
      )}

      <div>
        <div>
          <h4>{product?.title}</h4>
          <p>${product?.price}</p>
          <div>
            <p>{product?.rating.rate}</p>
            {product?.rating.rate && (
              <div>
                {Array.from(
                  {
                    length: Math.floor(product.rating.rate),
                  },
                  (_, i) => (
                    <StarIcon key={i} />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <button>Add to basket</button>
        <button>View all details</button>
      </div>
    </div>
  );
};

export default Modal;

// <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
//   <Dialog.Panel>
{
  /* <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently
          removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */
}
// </Dialog.Panel>
// </Dialog>
