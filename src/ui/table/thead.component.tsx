import React, { ReactElement } from 'react'

export type HeaderProps = {
  colSpanRight?: number
  headerRight?: ReactElement
}

type Props = {
  caption?: string
  columns: string[]
} & HeaderProps

export const THead = ({
  caption,
  columns,
  colSpanRight,
  headerRight,
}: Props) => {
  const colSpan = {
    right: colSpanRight,
    caption: columns.length + 1 - (colSpanRight ?? 0),
  }

  const have = {
    right:
      colSpan?.right !== undefined &&
      React.isValidElement(headerRight) !== undefined,
  }

  return (
    <thead className="text-left border-b bg-amber-100 text-slate-500">
      <tr>
        <th className="p-2 text-center" colSpan={colSpan?.caption}>
          {caption}
        </th>

        {have.right && <th colSpan={colSpan?.right}>{headerRight}</th>}
      </tr>

      <tr className="font-medium capitalize">
        <th className="p-2">№</th>

        {columns.map((column) => (
          <th className="p-2" key={column}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}
