export type ProductsProps = {
    name: string;
    price: number;
    quantity: number;
    productType: string;
    onPress?: () => void;
}