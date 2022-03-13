import type { Row, GetKey } from './table.component'

type Props = {
  columns: string[]
  rows: Row<string>[]
  onClick: React.MouseEventHandler
  getKey: GetKey | undefined
}

export const TBody = ({ rows, columns, onClick, getKey }: Props) => (
  <tbody onClick={onClick} className="bg-white cursor-pointer">
    {rows.map((row, i) => (
      <tr
        key={(getKey as NonNullable<GetKey>)(row)}
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
)
