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
  onClick: onClickTBody,
  getKey,
}) => {
  getKey ??= (row: Row) => row.id
  const colSpan = columns.length + 1

  const onClick = {
    tBody: useCallback(
      (e) => {
        const index = getParentDatasetProp(e, 'index')
        if (!index) return

        onClickTBody?.(rows[+index], +index)
      },
      [rows, onClickTBody]
    ),

    pagination: (i: number) => console.log('pagination', i),
  }

  //  columns.length + №-column
  const selectOnChange = (value: number) => console.log(value)

  const [min, max, total] = [1, 7, 23]
  const pages = {
    amount: 20,
    current: 3,
  }

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
        onClick={onClick.tBody}
        getKey={getKey}
      />

      <TFoot colSpan={colSpan}>
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 ">
          <div className="flex items-center justify-between flex-1 cursor-pointer">
            <Label min={min} max={max} total={total} />
            {pages && (
              <Pagination
                amount={20}
                current={3}
                onClick={onClick.pagination}
              />
            )}
          </div>
        </div>
      </TFoot>
    </table>
  )
}

type LabelProps = { min: number; max: number; total: number }
const Label = ({ min, max, total }: LabelProps) => (
  <p className="text-sm text-gray-700">
    Showing <span className="font-medium">{min}</span> to{' '}
    <span className="font-medium">{max}</span> of{' '}
    <span className="font-medium">{total}</span> results
  </p>
)
