import type { HeaderProps } from './thead.component'
import type { FooterProps } from './tfoot.component'

export type Row<T = string> = Record<string, T>
export type GetKey = (item: Row) => string

export interface ITable {
  (props: {
    className?: string
    caption?: string
    rows: Row[]
    columns: string[]

    onClick?: (row: Row, index: number) => void
    getKey?: GetKey

    children?: {
      header?: HeaderProps
      footer?: FooterProps
    }
  }): React.ReactElement
}
