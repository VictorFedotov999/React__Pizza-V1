export interface ProductType {
    id: string;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export interface CartItemType {
    id: string;
    productTitle: string;
    imageUrl: string;
    price: number;
    selectedType: number;
    selectedSize: number;
    typeName: string;
    productCount: number;
}
