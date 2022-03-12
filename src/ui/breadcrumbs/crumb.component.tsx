import { Link } from 'react-router-dom'

export type Item = { name: string; path?: string }

type CrumbProps = Item & {
  className: string
}

export const Crumb = ({ name, path, className }: CrumbProps) =>
  path === undefined ? (
    <span className={className}>{name}</span>
  ) : (
    <Link to={path} key={name} className={className}>
      {name}
    </Link>
  )
