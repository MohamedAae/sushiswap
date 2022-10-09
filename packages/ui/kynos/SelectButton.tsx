import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
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

export const SelectButton: FC<SelectButtonProps> = forwardRef(
  ({ className, children, standalone, error = false, open, ...props }, ref) => {
    return React.createElement(
      standalone ? 'div' : Listbox.Button,
      {
        open,
        ...props,
        ref,
        className: classNames(
          open ? '!bg-primary' : '',
          'relative w-auto pr-10 text-secondary font-bold',
          error ? ERROR_INPUT_CLASSNAME : '',
          className
        ),
      },
      <>
        <Typography
          variant="sm"
          weight={600}
          className={classNames(children ? '' : 'text-secondary', 'block truncate')}
        >
          {children}
        </Typography>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </span>
      </>
    )
  }
)
