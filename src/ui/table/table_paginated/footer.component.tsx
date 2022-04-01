import { Pagination } from 'ui'

type Props = {
  pages: { count: number; current: number; rowsOnPage: number }
  onClick: (current: number) => void
}

export const Footer = ({ pages, onClick }: Props) => {
  const min = 1 + pages.rowsOnPage * (pages.current - 1)
  const max = pages.rowsOnPage + pages.rowsOnPage * (pages.current - 1)

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 ">
      <div className="flex items-center justify-between flex-1 cursor-pointer">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{min}</span> to
          <span className="font-medium"> {max} </span>
          {pages.count > 1 && (
            <>
              of <span className="font-medium">{pages.count}</span> pages
            </>
          )}
        </p>
        <Pagination {...pages} onClick={onClick} />
      </div>
    </div>
  )
}
