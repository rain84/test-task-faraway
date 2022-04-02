import { useState, useMemo } from 'react'

import { SelectProps } from 'ui'
import { HeaderRight, Footer } from '.'
import { Table, THead, TFoot } from '..'
import type { TableProps, Row } from '../type'

type Props = {
  onClick?: (row: Row, index: number) => void
} & TableProps

const COLSPAN_RIGHT = 2
const ROWS_ON_PAGE = 10
const INITIAL_PAGE = 1

export const TablePaginated = ({ rows, columns, ...rest }: Props) => {
  const [rowsOnPage, setRowsOnPage] = useState(ROWS_ON_PAGE)
  const select: SelectProps = {
    items: [5, 10, 20, 50, 100],
    initialVal: rowsOnPage,
    onChange: (nextRowsOnPage: string) => {
      setRowsOnPage((rowsOnPage) => {
        setCurrentPage((curr) => {
          const numberingFrom = (curr - 1) * rowsOnPage
          const next = Math.ceil((numberingFrom + 1) / +nextRowsOnPage)
          return next
        })

        return +nextRowsOnPage
      })
    },
  }

  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const pages = useMemo(
    () => ({
      count: Math.ceil(rows.length / rowsOnPage),
      current: currentPage,
      rowsOnPage,
    }),
    [currentPage, rows.length, rowsOnPage]
  )

  const numberingFrom = (currentPage - 1) * rowsOnPage
  const rows_ = useMemo(
    () => rows.slice(numberingFrom, numberingFrom + rowsOnPage),
    [numberingFrom, rows, rowsOnPage]
  )

  return (
    <Table
      {...rest}
      columns={columns}
      rows={rows_}
      numberingFrom={numberingFrom}
      head={
        <THead
          columns={columns}
          colSpanRight={COLSPAN_RIGHT}
          headerRight={<HeaderRight select={select} />}
        />
      }
      footer={
        <TFoot colSpan={columns.length + COLSPAN_RIGHT}>
          <Footer pages={pages} onClick={setCurrentPage} />
        </TFoot>
      }
    />
  )
}
