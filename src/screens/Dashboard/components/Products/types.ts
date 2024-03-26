export type ProductsProps = {
    name: string;
    price: number;
    quantity: number;
    productType: string;
    img: string;
    onPress?: () => void;
}