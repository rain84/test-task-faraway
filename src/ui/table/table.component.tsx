import React, { useCallback } from 'react'

import { Pagination } from 'ui'
import { getParentDatasetProp } from 'utils'
import { THead } from './thead.component'
import { TBody } from './tbody.component'
import { TFoot } from './tfoot.component'

export type Row<T = string> = Record<string, T>
export type GetKey = (item: Row) => string

interface ITable {
  (props: {
    className?: string
    caption?: string
    rows: Row[]
    columns: string[]
    selectItems?: Array<string | number>
    onClick?: (row: Row, index: number) => void
    getKey?: GetKey
  }): React.ReactElement
}

export const Table: ITable = ({
  className,
  caption,
  rows,
  columns,
  selectItems,
  onClick,
  getKey,
}) => {
  getKey ??= (row: Row) => row.id
  const colSpan = columns.length + 1

  const onClickTBody = useCallback(
    (e) => {
      const index = getParentDatasetProp(e, 'index')
      if (!index) return

      onClick?.(rows[+index], +index)
    },
    [rows, onClick]
  )

  //  columns.length + №-column
  const selectOnChange = (value: number) => console.log(value)

  return (
    <table className={`${className} text-sm border-collapse table-auto`}>
      <THead
        columns={columns}
        caption={caption}
        colSpan={colSpan}
        onChange={selectOnChange}
        selectItems={selectItems}
      />

      <TBody
        rows={rows}
        columns={columns}
        onClick={onClickTBody}
        getKey={getKey}
      />

      <TFoot colSpan={colSpan}>
        <Pagination onClick={(i) => console.log('i', i)} />
      </TFoot>
    </table>
  )
}
