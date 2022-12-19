// import React, { FC, MouseEvent, ReactElement } from 'react';

// interface Props {
//   className?: string;
//   onClick: (event: MouseEvent<HTMLButtonElement>) => void;
//   children: ReactElement;
// }

// export const Button: FC<Props> = ({ onClick, className, children }): ReactElement => {
//   return (
//     <button className={`astrosat-btn astrosat-bg-green-500 ${className ? className : ''}`} onClick={onClick}>
//       {children}
//     </button>
//   );
// };
// import { FC } from 'react';
// import { ButtonProps } from './button.types';
// // import Button from '@'

// const buttonDefaultStyles = {
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContents: 'center',
//   border: 'none',
//   borderRadius: '4px',
// };
// const buttonSizes = {
//   small: {
//     height: '28px',
//     fontSize: '14px',
//     padding: '3px 16px',
//   },
//   medium: {
//     height: '36px',
//     fontSize: '16px',
//     padding: '4px 20px',
//   },
//   large: {
//     height: '48px',
//     fontSize: '20px',
//     padding: '5px 24px',
//   },
// };
// const Button: FC<ButtonProps> = props => {
//   const { children, size = 'medium', ...rest } = props;
//   const buttonStyles = {
//     ...rest.style,
//     ...buttonDefaultStyles,
//     ...buttonSizes[size],
//   };
//   return (
//     <button className="btn" {...rest}>
//       {children}
//     </button>
//   );
// };
// export default Button;
import React, { ReactNode, forwardRef } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, ComponentShape, ComponentSize, IComponentBaseProps } from './button.types';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  IComponentBaseProps & {
    href?: string;
    shape?: ComponentShape;
    size?: ComponentSize;
    variant?: 'outline' | 'link';
    color?: ComponentColor;
    fullWidth?: boolean;
    responsive?: boolean;
    animation?: boolean;
    loading?: boolean;
    active?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      ...props
    },
    ref,
  ): JSX.Element => {
    const classes = twMerge(
      'btn',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`btn-${variant}`]: variant,
        [`btn-${color}`]: color,
        'btn-block': fullWidth,
        'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
        loading: loading,
      }),
    );

    if (href) {
      return (
        <a className={classes} href={href} style={style}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      );
    } else {
      return (
        <button {...props} ref={ref} className={classes} data-theme={dataTheme} disabled={disabled} style={style}>
          {startIcon && !loading && startIcon}
          {children}
          {endIcon && endIcon}
        </button>
      );
    }
  },
);

Button.displayName = 'Button';

export default Button;
