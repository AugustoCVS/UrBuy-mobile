export type ProductsProps = {
    name: string;
    price: number;
    quantity: number;
    description: string;
    onPress?: () => void;
}