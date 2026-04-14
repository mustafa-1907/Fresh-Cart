export interface AllProductsResponse {
  results: number
  metadata: Metadata
  data: AllProductsData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface AllProductsData {
  sold: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
  availableColors?: any[]
    __v: number
  reviews: any[]
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}


export interface getAllCategoriesResponse {
  results: number
  metadata: Metadata
  data: getAllCategoriesData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface getAllCategoriesData {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
 export interface ProductDetailsResponse {
  data: AllProductsData
}


export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
