import { Listbox } from '@headlessui/react'
import classNames from 'classnames'
import { FC, forwardRef } from 'react'

import { ExtractProps } from '../types'

export type SelectOptionsProps = ExtractProps<typeof Listbox.Options>

export const SelectOptions: FC<SelectOptionsProps> = forwardRef(({ className, ...props }, ref) => {
  return (
    <Listbox.Options
      ref={ref}
      className={classNames(
        className,
        'absolute z-[100] w-full mt-2 bg-input text-secondary overflow-auto hide-scrollbar max-h-60 rounded-xl focus:outline-none'
      )}
      {...props}
    />
  )
})
