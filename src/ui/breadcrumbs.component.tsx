import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Item = { name: string; path?: string }
type Props = {
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

type CrumbProps = Item & {
  className: string
}

const Crumb = ({ name, path, className }: CrumbProps) =>
  path === undefined ? (
    <span className={className}>{name}</span>
  ) : (
    <Link to={path} key={name} className={className}>
      {name}
    </Link>
  )

type DelimiterProps = {
  i: number
  items: Item[]
  className: string
}

const Delimiter = ({ i, items, className }: DelimiterProps) => {
  if (i === items.length - 1) return null
  return <span className={className}>/</span>
}

type HOCProps = React.FunctionComponent<Props>

export const withURLDataProvider = (Component: HOCProps) => () => {
  const items = useLocation()
    .pathname.split('/')
    .filter(Boolean)
    .map((name, i, arr) => ({
      name,
      path: '/' + arr.slice(0, i + 1).join('/'),
    }))

  return <Component items={items} />
}
