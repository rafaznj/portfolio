import * as React from "react";
import { Tooltip } from "radix-ui";
import { LinkWithIcon, type LinkWithIconProps } from "../ButtonWithIcon";
import {
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "../Tooltip";

export interface LinkWithTooltipProps extends LinkWithIconProps {
  tooltip: React.ReactNode;
  tooltipContentProps?: React.ComponentPropsWithoutRef<typeof Tooltip.Content>;
  side?: "top" | "right" | "bottom" | "left";
}

const LinkWithTooltip = React.forwardRef<
  HTMLAnchorElement,
  LinkWithTooltipProps
>(
  (
    {
      tooltip,
      variant,
      $borderRadius,
      left,
      right,
      iconSize,
      children,
      tooltipContentProps,
      side,
      ...props
    },
    ref,
  ) => (
    <TooltipProvider delayDuration={0}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <LinkWithIcon
            ref={ref}
            variant={variant}
            $borderRadius={$borderRadius}
            left={left}
            right={right}
            iconSize={iconSize}
            {...props}
          >
            {children}
          </LinkWithIcon>
        </TooltipTrigger>
        <TooltipPortal container={document.body}>
          <TooltipContent
            sideOffset={4}
            side={side || "bottom"}
            {...tooltipContentProps}
          >
            {tooltip}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  ),
);

LinkWithTooltip.displayName = "LinkWithTooltip";

export { LinkWithTooltip };
