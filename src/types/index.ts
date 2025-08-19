export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
  verified: boolean;
}