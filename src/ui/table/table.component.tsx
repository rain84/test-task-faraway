import { useCallback } from 'react'

import { getParentDatasetProp } from 'utils'
import type { ITable } from './type'
import { THead } from './thead.component'
import { TBody } from './tbody.component'
import { TFoot } from './tfoot.component'

export const Table: ITable = ({
  className,
  caption,
  rows,
  columns,
  children,

  onClick,
  getKey,
}) => {
  getKey ??= (row) => row.id

  const cb = useCallback(
    (e) => {
      const index = getParentDatasetProp(e, 'index')
      if (!index) return

      onClick?.(rows[+index], +index)
    },
    [rows, onClick]
  )

  const { header, footer } = children ?? { header: {}, footer: {} }

  return (
    <table className={`${className} text-sm border-collapse table-auto`}>
      <THead columns={columns} caption={caption} colSpan={header?.colSpan}>
        {header?.children}
      </THead>

      <TBody rows={rows} columns={columns} onClick={cb} getKey={getKey} />

      <TFoot colSpan={columns.length + 1}>{footer?.children}</TFoot>
    </table>
  )
}
