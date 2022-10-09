import React, { FC } from 'react'

import { Typography } from '../typography'
import { FormControl } from './FormControl'

interface FormSection {
  children: React.ReactElement<typeof FormControl> | React.ReactElement<typeof FormControl>[] | undefined | null | false
}

export const FormSection: FC<FormSection> = ({children }) => {
  return (
    <div className="grid grid-cols-3 gap-x-10 py-2">
      <div className="col-span-3 space-y-6 py-4">{children}</div>
    </div>
  )
}
