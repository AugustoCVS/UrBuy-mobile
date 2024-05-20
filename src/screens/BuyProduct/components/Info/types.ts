export type InfoProps = {
  label: string,
  value: string | number,
  isAmount?: boolean,
  increaseAmount: () => void,
  decreaseAmount: () => void,
};