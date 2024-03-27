export type ProductsProps = {
    name: string;
    price: number;
    amount: number;
    category: string;
    img: string;
    onPress?: () => void;
}