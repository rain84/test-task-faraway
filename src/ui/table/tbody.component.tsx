import type { Row, GetKey } from './type'

type Props = {
  columns: string[]
  rows: Row[]
  numberingFrom?: number
  onClick: React.MouseEventHandler
  getKey?: GetKey
}

const _getKey: GetKey = (row) => {
  if (!row.id) throw new Error('Row must have an id')
  return row.id
}

export const TBody = ({
  rows,
  columns,
  onClick,
  numberingFrom = 0,
  getKey = _getKey,
}: Props) => (
  <tbody onClick={onClick} className="bg-white cursor-pointer">
    {rows.map((row, i) => (
      <tr
        key={(getKey as NonNullable<GetKey>)(row)}
        data-index={i}
        className="border-b last:border-b-0 border-slate-100 text-slate-500 hover:bg-slate-200"
      >
        <td className="py-0 pl-4 pr-4">{i + numberingFrom + 1}</td>
        {columns.map((column) => (
          <td className="py-0 pl-4 pr-4" key={column}>
            {row[column]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)
