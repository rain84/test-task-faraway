import type { Item } from './crumb.component'

type DelimiterProps = {
  i: number
  items: Item[]
  className: string
}

export const Delimiter = ({ i, items, className }: DelimiterProps) => {
  if (i === items.length - 1) return null
  return <span className={className}>/</span>
}
