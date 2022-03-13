import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

type Props = { type: 'left' | 'right'; index: number }

const icon = {
  left: <ChevronLeftIcon className="w-5 h-5" />,
  right: <ChevronRightIcon className="w-5 h-5" />,
}
const style = { left: 'rounded-l-md', right: 'rounded-r-md' }

export const Arrow = ({ type, index }: Props) => (
  <span
    data-index={index}
    className={`${style[type]} inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50`}
  >
    {icon[type]}
  </span>
)
