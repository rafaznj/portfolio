import { Tooltip } from "radix-ui";
import * as React from "react";
import { StyledAtomTooltipContent } from "./styles";

const TooltipProvider = Tooltip.Provider;

const TooltipRoot = Tooltip.Root;

const TooltipTrigger = Tooltip.Trigger;

const TooltipPortal = Tooltip.Portal;

const TooltipArrow = Tooltip.Arrow;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Tooltip.Content>,
  React.ComponentPropsWithoutRef<typeof Tooltip.Content> & {
    maxWidth?: number;
  }
>(({ sideOffset = 4, maxWidth, ...props }, ref) => (
  <StyledAtomTooltipContent
    ref={ref}
    sideOffset={sideOffset}
    $maxWidth={maxWidth}
    {...props}
  />
));

TooltipContent.displayName = Tooltip.Content.displayName;

export {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  TooltipArrow,
};
