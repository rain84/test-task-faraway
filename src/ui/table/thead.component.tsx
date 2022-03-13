import { Select } from 'ui'

type Props = {
  caption?: string
  columns: string[]
  colSpan: number
  selectItems?: Array<string | number>
  onChange: (value: number) => void
}

export const THead = ({
  caption,
  columns,
  colSpan,
  selectItems,
  onChange,
}: Props) => {
  const cSpan = { select: 2, caption: colSpan }

  if (selectItems) cSpan.caption -= cSpan.select

  return (
    <thead className="text-left border-b bg-amber-100 text-slate-500">
      <tr>
        <th className="p-2 text-center" colSpan={cSpan.caption}>
          {caption}
        </th>

        {selectItems && (
          <th colSpan={cSpan.select}>
            <div className="flex items-center justify-end p-2">
              <span>Items: </span>
              <Select
                className="ml-2 w-fit"
                items={selectItems}
                init="2"
                onChange={onChange}
              />
            </div>
          </th>
        )}
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
