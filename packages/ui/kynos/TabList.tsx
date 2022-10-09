import { Tab as HeadlessTab } from '@headlessui/react'
import classNames from 'classnames'
import { FC, forwardRef } from 'react'

import { ExtractProps } from '../types'

export type TabListProps = ExtractProps<typeof HeadlessTab.List>

export const TabList: FC<TabListProps> = forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeadlessTab.List
        {...props}
        ref={ref}
        className={classNames(
          'rounded-xl overflow-hidden grid grid-flow-col',
          className
        )}
      >
        {children}
      </HeadlessTab.List>
    )
  }
)
