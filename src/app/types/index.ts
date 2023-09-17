import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    btnType?: 'button' | 'submit';
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}