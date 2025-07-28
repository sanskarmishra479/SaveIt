export interface InputTypes{
    size: "sm" | "md" | "lg" | "xl";
    variant: "primary" | "secondary" | "tertiary";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}