import * as React from "react";
import { Tooltip } from "radix-ui";

import { ButtonWithIcon, type ButtonProps } from "../../atoms/ButtonWithIcon";
import {
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "../../atoms/Tooltip";

export interface ButtonWithTooltipProps extends ButtonProps {
  tooltip: React.ReactNode;
  tooltipContentProps?: React.ComponentPropsWithoutRef<typeof Tooltip.Content>;
}

const ButtonWithTooltip = React.forwardRef<
  HTMLButtonElement,
  ButtonWithTooltipProps
>(
  (
    {
      tooltip,
      variant: variant,
      $borderRadius,
      left,
      right,
      iconSize,
      children,
      tooltipContentProps,
      ...props
    },
    ref,
  ) => (
    <TooltipProvider delayDuration={0}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <ButtonWithIcon
            ref={ref}
            variant={variant}
            $borderRadius={$borderRadius}
            left={left}
            right={right}
            iconSize={iconSize}
            {...props}
          >
            {children}
          </ButtonWithIcon>
        </TooltipTrigger>
        <TooltipPortal container={document.body}>
          <TooltipContent sideOffset={4} side="top" {...tooltipContentProps}>
            {tooltip}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  ),
);

ButtonWithTooltip.displayName = "ButtonWithTooltip";

export { ButtonWithTooltip };
