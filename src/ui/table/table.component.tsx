import React, { useCallback } from 'react'

import { THead } from './thead.component'
import { TBody } from './tbody.component'

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

  const onClickTBody = useCallback(
    (e) => {
      const { index } = e.target.closest('[data-index]')?.dataset
      if (!index) return

      onClick?.(rows[index], index)
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
        onChange={selectOnChange}
        selectItems={selectItems}
      />

      <TBody
        rows={rows}
        columns={columns}
        onClick={onClickTBody}
        getKey={getKey}
      />
    </table>
  )
}
