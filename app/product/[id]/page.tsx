import React from "react";
import ProductImage from "@/components/ProductImage";

import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
      <div className="max-w-5xl mx-auto flex flex-col md:flex:row items:center gap-8 px-4 mt-48 pb-10">
        <ProductImage product={product} />
        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2x1 md:text-4x1 font-semibold">{product.title}</h1>
            <p className="text-gray-600 font-bold text-xl md:text-3xl">${product.price}</p>
          </div>

          <div className="pt-8">
            <p className="text-sx md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductPage;

// import ProductImage from "@/components/ProductImage";
// import { notFound } from "next/navigation";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// async function ProductPage({ params: { id } }: Props) {
//   try {
//     // console.log(props);
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const product: Product = await res.json();
//     return (
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
//         <ProductImage product={product} />
//         <div className="divide-y">
//           <div className="space-y-2 pb-8">
//             <h1 className="text-2xl md:text-4xl font-semibold">{product.title}</h1>
//             <h2 className="text-gray-600 font-bold text-xl md:text-3xl">${product.price}</h2>
//           </div>

//           <div className="pt-8">
//             <p className="text-sx md:text-sm">{product.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.log(notFound);
//     notFound();
//   }
// }

// export default ProductPage;
