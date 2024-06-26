export type CardProps = {
  name: string;
  category: string;
  price: number;
  amount: number;
  img: string;
  brand: string;
  handleIncreaseAmount: () => void;
  handleDecreaseAmount: () => void;
}