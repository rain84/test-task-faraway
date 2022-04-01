import { ReactElement } from 'react'

export type Row = Record<string, string>
export type GetKey = (item: Row) => string

export type TableProps = {
  className?: string
  caption?: string
  columns: string[]
  rows: Row[]
  numberingFrom?: number

  head?: ReactElement
  body?: ReactElement
  footer?: ReactElement

  onClick?: (row: Row, index: number) => void
  getKey?: GetKey
}
