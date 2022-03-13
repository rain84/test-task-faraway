type Props = { index: number; current: number }

const className = {
  highlight:
    'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
  default:
    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
}
export const Page = ({ index, current }: Props) => (
  <span
    data-index={index}
    aria-current="page"
    className={`${index === current ? className.highlight : className.default}`}
  >
    {index}
  </span>
)
