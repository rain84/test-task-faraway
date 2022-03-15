export type HeaderProps = {
  colSpan?: {
    right?: number
    caption?: number
  }
  children?: {
    right: React.ReactElement
  }
}

type Props = {
  caption?: string
  columns: string[]
} & HeaderProps

export const THead = ({ caption, columns, colSpan, children }: Props) => {
  colSpan ??= {}
  colSpan.caption ??= columns.length + 1

  if (colSpan?.right) colSpan.caption -= colSpan.right

  const have = {
    right: colSpan?.right !== undefined && children?.right !== undefined,
  }

  return (
    <thead className="text-left border-b bg-amber-100 text-slate-500">
      <tr>
        <th className="p-2 text-center" colSpan={colSpan?.caption}>
          {caption}
        </th>

        {have.right && <th colSpan={colSpan?.right}>{children?.right}</th>}
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
