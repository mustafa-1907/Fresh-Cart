import { AllProductsData, AllProductsResponse, getAllCategoriesData, getAllCategoriesResponse, ProductDetailsResponse } from "./home.interface";

export  async function getAllProducts(): Promise<AllProductsData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`,{
      cache:"force-cache"
    });
    const data:AllProductsResponse = await response.json();
    return data.data;
  }


export  async function getAllCategories(): Promise<getAllCategoriesData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`,{
      cache:"force-cache"
    });
    const data:getAllCategoriesResponse = await response.json();
    return data.data;
  }

export  async function getSpecificProduct(id: string): Promise<AllProductsData> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`);
    const data:ProductDetailsResponse = await response.json();
    return data.data;
  }