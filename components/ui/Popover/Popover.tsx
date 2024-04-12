import * as RadixPopover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Popover.css';

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Popover = ({
  children,
  content
}: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        {children}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content sideOffset={20} className='PopoverContent'>
          {content}
          <RadixPopover.PopoverClose className="PopoverClose" aria-label="Закрыть">
            <Cross2Icon />
          </RadixPopover.PopoverClose>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
export default Popover;
