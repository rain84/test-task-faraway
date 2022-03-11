import React, { useCallback } from 'react'

type Row<T = string> = Record<string, T>
type TGetKey = (item: Row) => string

interface ITable {
  (props: {
    className?: string
    caption?: string
    rows: Row[]
    columns: string[]
    onClick?: (row: Row, index: number) => void
    getKey?: TGetKey
  }): React.ReactElement
}

export const Table: ITable = ({
  className,
  caption,
  rows,
  columns,
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

  return (
    <table className={`${className} text-sm border-collapse table-auto`}>
      <thead className="text-left border-b bg-amber-100 text-slate-500">
        {caption && (
          <tr>
            <th className="p-2 text-center" colSpan={columns.length + 1}>
              {caption}
            </th>
          </tr>
        )}
        <tr className="font-medium capitalize">
          <th className="p-2">№</th>
          {columns.map((column) => (
            <th className="p-2" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody onClick={onClickTBody} className="bg-white cursor-pointer">
        {rows.map((row, i) => (
          <tr
            key={(getKey as NonNullable<TGetKey>)(row)}
            data-index={i}
            className="border-b border-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <td className="py-0 pl-4 pr-4">{i + 1}</td>
            {columns.map((column) => (
              <td className="py-0 pl-4 pr-4" key={column}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
