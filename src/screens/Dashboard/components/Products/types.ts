export type ProductsProps = {
    id: number,
    name: string;
    price: number;
    amount: number;
    category: string;
    img: string;
    onPress?: () => void;
}