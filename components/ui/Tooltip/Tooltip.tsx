import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import './Tooltip.css';

interface TooltipProps extends TooltipPrimitive.TooltipProps, TooltipPrimitive.TooltipContentProps {}

const Tooltip = (
  {
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    side,
    ...props
  } : TooltipProps 
) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content className='TooltipContent' side={side} align="center" {...props}>
          {content}
          <TooltipPrimitive.Arrow className='TooltipArrow' width={11} height={5} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
export default Tooltip;
