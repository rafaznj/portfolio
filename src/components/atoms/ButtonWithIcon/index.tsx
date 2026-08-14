import * as React from "react";
import type { IconType } from "react-icons";
import { AtomButtonWithIcon, AtomButtonWithIconText } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  $borderRadius?: "default" | "pill";
  children: React.ReactNode;
  left?: IconType;
  right?: IconType;
  iconSize?: number;
  $isOpen?: boolean;
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      $borderRadius = "default",
      left,
      right,
      iconSize = 20,
      children,
      $isOpen,
      ...props
    },
    ref,
  ) => {
    const isChildrenString = typeof children === "string";

    const LeftIcon = left;
    const RightIcon = right;

    return (
      <AtomButtonWithIcon
        $variant={variant}
        $borderRadius={$borderRadius}
        $isOpen={$isOpen}
        ref={ref}
        {...props}
      >
        {LeftIcon && <LeftIcon size={iconSize} />}
        {isChildrenString ? (
          <AtomButtonWithIconText>{children}</AtomButtonWithIconText>
        ) : (
          children
        )}
        {RightIcon && <RightIcon size={iconSize} />}
      </AtomButtonWithIcon>
    );
  },
);

ButtonWithIcon.displayName = "ButtonWithIcon";

export { ButtonWithIcon };
