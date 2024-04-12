import { forwardRef } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref): JSX.Element => {
  return (
    <button ref={ref} onClick={props.onClick} type={props.type} style={props.style} className={cn(styles.default, {
      [styles.primary]: props.variant === 'primary',
      [styles.ghost]: props.variant === 'ghost'
    }, props.className)}>{props.children}</button>
  );
});

Button.displayName = 'Button';

export default Button;
