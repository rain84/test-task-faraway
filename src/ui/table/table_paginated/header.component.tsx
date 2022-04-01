import { Select, SelectProps } from 'ui'

type Props = {
  select: SelectProps
}

export const HeaderRight = ({ select }: Props) => (
  <div className="flex items-center justify-end p-2">
    <span>Items per page: </span>
    <Select className="ml-1 w-fit" {...select} />
  </div>
)
