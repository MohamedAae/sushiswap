import classNames from 'classnames'
import React, { FC, forwardRef, Ref } from 'react'

import { DEFAULT_INPUT_CLASSNAME, ERROR_INPUT_CLASSNAME } from './index'


export type DatetimeLocalProps = Omit<React.HTMLProps<HTMLInputElement>, 'as' | 'onChange' | 'value'> & {
  error: boolean
  value: string | undefined | null
  onChange(x: string): void
  ref?: Ref<HTMLInputElement> | undefined
  variant?: 'default' | 'unstyled'
  placeholder?: string
}

export const Time: FC<DatetimeLocalProps> = forwardRef<HTMLInputElement, DatetimeLocalProps>(
  ({ value, onChange, className, error, variant = 'default', ...rest }, ref) => {

    const today = new Date();
    // 2022-10-09 format for input
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2);

    return (
      <>
        <input
          ref={ref}
          type="time"
          className={
            variant === 'default'
              ? classNames(DEFAULT_INPUT_CLASSNAME, error ? ERROR_INPUT_CLASSNAME : '', className)
              : className
          }
          value={value || "hh:mm"}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
          placeholder="hh:mm"
        />
      </>
    )
  }
)
