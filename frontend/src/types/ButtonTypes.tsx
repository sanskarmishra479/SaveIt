import type { ReactElement } from "react";

export interface ButtonTypes{
    variant: "primary" | "secondary";
    size: "sm"| "md"| "lg";
    text?: string;
    startIcon?:ReactElement;
    onclick?: () => void;
}