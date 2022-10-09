import React, { FC } from 'react'

import { classNames } from '../index'
import { Typography } from '../typography'

interface FormControl {
  label?: string
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

export const FormControl: FC<FormControl> = ({ className, label, children, disabled = false }) => {
  return (
    <div
      aria-disabled={disabled}
      className={classNames(className, disabled ? 'opacity-40 pointer-events-none' : '', 'flex flex-col justify-end gap-2')}
    >
      <Typography variant="base" weight={600} className="text-typo-primary">
        {label}
      </Typography>
      {children}
    </div>
  )
}
