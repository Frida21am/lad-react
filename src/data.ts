export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;
  rating: number;
}

export const product: IProduct = {
  id: 1,
  name: "Наручные часы мужские SKMEI 1251",
  imageUrl:
    "https://static.insales-cdn.com/images/products/1/4108/504852492/YN55-325A661.jpg",
  price: 8165,
  discount: 90,
  rating: 4.7,
};
