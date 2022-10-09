import { Listbox, Transition } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { FC, forwardRef, Fragment, ReactNode, useState } from 'react'

import { ExtractProps } from '../types'

export type SelectOptionProps = ExtractProps<typeof Listbox.Option> & {
  children?: ReactNode
}

export const SelectOption: FC<SelectOptionProps> = forwardRef(({ className, children, ...props }, ref) => {
  const [hover, setHover] = useState(false)

  return (
    <Listbox.Option
      ref={ref}
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={({ active }: { active: boolean }) =>
        classNames(
          active ? 'text-white bg-accent' : 'text-high-emphesis',
          'flex gap-2 px-4 items-center font-medium text-sm cursor-pointer select-none relative py-2 border border-secondary border-opacity-[0.15] whitespace-nowrap',
          className
        )
      }
    >
      {children}
      <Transition
        as={Fragment}
        show={hover}
        enter="ease-in-out duration-300"
        enterFrom="translate-x-[10px] opacity-0"
        enterTo="translate-x-[-10px] opacity-100"
        leave="ease-in-out duration-300"
        leaveFrom="translate-x-[-10px] opacity-100"
        leaveTo="translate-x-[10px] opacity-0"
        unmount={false}
      >
        <div className="absolute right-0 top-0 bottom-0 flex justify-center items-center">
          <div className="bg-white text-blue rounded-full p-1">
            <ArrowRightIcon width={10} height={10} />
          </div>
        </div>
      </Transition>
    </Listbox.Option>
  )
})

