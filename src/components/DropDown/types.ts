
export enum DropDownTheme {
    DEFAULT = "DEFAULT",
    DARK = "DARK",
    LIGHT = "LIGHT"
}

export enum DropDownMode {
    SIMPLE = "SIMPLE",
    BADGE = "BADGE"
}

export type DropDownProps = {
    items: any;
    open: boolean;
    setOpen: () => void;
    setValue: (val: string) => void;
    onChangeValue: any;
    value: string;
    dropDownDirection: "TOP" | "BOTTOM";
    placeholder: string;
    errorMessage: string;
    maxHeight?: number;
    autoScroll?: boolean;
    showTickIcon?: boolean;
    showArrowIcon?: boolean;
    disabled?: boolean;
    theme?: DropDownTheme;
    min?: number;
    max?: number;
    mode?: DropDownMode;
}