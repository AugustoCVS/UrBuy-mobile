export type ProductsProps = {
    id: string,
    name: string;
    price: number;
    amount: number;
    category: string;
    img: string;
    onPress?: () => void;
}