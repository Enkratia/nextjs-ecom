"use-client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

import ProductImage from "@/components/ProductImage";

import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const Modal: React.FC = () => {
  let [isOpen, setIsOpen] = React.useState(true);
  const id = useParams().id;

  const [product, setProduct] = React.useState<Product>();

  React.useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product: Product = await res.json();
      setProduct(product);
    }
    fetchProducts();
  }, [id]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        {/* <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently
          removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */}

        <div className="flex gap-x-8 h-96">
          {product?.image && (
            <div className="relative w-72 h-full hidden md:inline">
              <ProductImage product={product} fill />
            </div>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
