import { Delimiter } from './delimiter.component'
import { Crumb } from './crumb.component'
import type { Item } from './crumb.component'

export type Props = {
  items?: Item[]
}
export const Breadcrumbs = ({ items }: Props) => (
  <ul className="flex text-slate-500">
    {items?.map((props, i) => (
      <li key={props.name}>
        <Crumb className="capitalize" {...props} />
        <Delimiter i={i} items={items} className="mx-2" />
      </li>
    ))}
  </ul>
)
