import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { FC, forwardRef, ReactNode } from 'react'

import { DEFAULT_INPUT_CLASSNAME, ERROR_INPUT_CLASSNAME } from '../input'
import { ExtractProps } from '../types'
import { Typography } from '../typography'

export type SelectButtonProps = ExtractProps<typeof Listbox.Button> & {
  children?: ReactNode
  standalone?: boolean
  error?: boolean
}

const SelectButton: FC<SelectButtonProps> = forwardRef(
  ({ className, children, standalone, error = false, open, ...props }, ref) => {
    return React.createElement(
      standalone ? 'div' : Listbox.Button,
      {
        open,
        ...props,
        ref,
        className: classNames(
          open ? 'ring-2 ring-offset-2 ring-blue !bg-slate-600' : '',
          'relative w-full pr-10',
          DEFAULT_INPUT_CLASSNAME,
          error ? ERROR_INPUT_CLASSNAME : '',
          className
        ),
      },
      <>
        <Typography
          variant="sm"
          weight={children ? 500 : 400}
          className={classNames(children ? '' : 'text-slate-600', 'block truncate')}
        >
          {children}
        </Typography>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon className="w-5 h-5" aria-hidden="true" />
        </span>
      </>
    )
  }
)

export default SelectButton
