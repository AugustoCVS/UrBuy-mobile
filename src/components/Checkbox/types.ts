export type CheckboxProps = {
    label: string,
    checked: boolean,
    onChange?: (checked: boolean) => void
    onPress?: void
    errorMessage?: string
}