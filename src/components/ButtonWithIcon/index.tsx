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
  as?: React.ElementType;
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
        ref={ref as React.Ref<HTMLButtonElement>}
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

export interface LinkWithIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost";
  $borderRadius?: "default" | "pill";
  children: React.ReactNode;
  left?: IconType;
  right?: IconType;
  iconSize?: number;
}

const PROTOCOLS_WITHOUT_BLANK = ["mailto:", "tel:"];

const LinkWithIcon = React.forwardRef<HTMLAnchorElement, LinkWithIconProps>(
  (
    {
      variant = "default",
      $borderRadius = "default",
      left,
      right,
      iconSize = 20,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    const isChildrenString = typeof children === "string";
    const LeftIcon = left;
    const RightIcon = right;

    const isProtocolLink = PROTOCOLS_WITHOUT_BLANK.some((protocol) =>
      href?.startsWith(protocol),
    );

    const resolvedTarget = isProtocolLink ? target : (target ?? "_blank");
    const resolvedRel = isProtocolLink ? rel : (rel ?? "noopener noreferrer");

    return (
      <AtomButtonWithIcon
        as="a"
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        $variant={variant}
        $borderRadius={$borderRadius}
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

LinkWithIcon.displayName = "LinkWithIcon";

export { ButtonWithIcon, LinkWithIcon };
