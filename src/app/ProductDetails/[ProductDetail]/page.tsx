
import { getSpecificProduct } from "@/app/home.services";
import ProductDetailsClient from "@/components/ProductDetailsClient/ProductDetailsClient";

export default async function Page({ params }: Promise<{ ProductDetail: string  }>) {
  const{ ProductDetail } = await params;
  console.log(ProductDetail);
  
  const productDetails = await getSpecificProduct(ProductDetail);
  console.log("Product Details:", productDetails);
  const {

  } = productDetails;

   return <ProductDetailsClient productDetails={productDetails} />;
  
}