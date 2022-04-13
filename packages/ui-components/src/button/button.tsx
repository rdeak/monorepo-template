import { HTMLAttributes } from "react";
import * as classes from "./button.module.scss";
import clsx from "clsx";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  ...buttonProps
}: ButtonProps): JSX.Element => {
  return (
    <button className={clsx(classes.base, className)} {...buttonProps}>
      {children}
    </button>
  );
};
