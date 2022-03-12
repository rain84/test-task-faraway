import { useLocation } from 'react-router-dom'
import type { Props } from './breadcrumbs.component'

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
