import classnames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import classNames from 'classnames';

type ButtonTypes = 'default' | 'outline' | 'plain';

type ButtonProps<C extends ElementType = 'button'> = {
  as?: C;
  type?: ButtonTypes;
  children?: ReactNode;
} & Omit<React.ComponentPropsWithRef<C>, 'as' | 'children'>;

const DEFAULT_CLASSES =
  'align-middle items-center flex select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-[10px] px-6 rounded-lg border-2 hover:opacity-75 active:opacity-[0.85] w-fit';

const TYPE_CLASSES = {
  outline: 'bg-transparent text-style border-style',
  default: 'bg-style text-white border-style',
  plain: 'border-white bg-white text-style',
};

const getClasses = (type: ButtonTypes) =>
  classnames(DEFAULT_CLASSES, TYPE_CLASSES[type]);

const Button = <C extends ElementType = 'button'>({
  as,
  type = 'default',
  className,
  children,
  ...props
}: ButtonProps<C>) => {
  // Assert 'as' to be of type C
  const Component = as || ('button' as unknown as C);

  const classes = classNames(getClasses(type), className);

  return React.createElement(
    Component,
    { ...props, className: classes, type: 'submit' },
    children
  );
};

export default Button;
