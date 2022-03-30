import { useCallback } from 'react'

import { getParentDatasetProp } from 'utils'
import { THead } from './thead.component'
import { TBody } from './tbody.component'
import type { TableProps } from './type'

export const Table = ({
  className,
  caption,
  rows,
  columns,

  head,
  body,
  footer,

  onClick,
  getKey,
}: TableProps) => {
  const cb = useCallback(
    (e) => {
      const index = getParentDatasetProp(e, 'index')
      if (!index) return

      onClick?.(rows[+index], +index)
    },
    [rows, onClick]
  )

  return (
    <table className={`${className} text-sm border-collapse table-auto`}>
      {head ?? <THead columns={columns} caption={caption} />}
      {body ?? (
        <TBody rows={rows} columns={columns} onClick={cb} getKey={getKey} />
      )}
      {footer}
    </table>
  )
}
