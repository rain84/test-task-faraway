import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

export const Button = ({
  selected,
  className,
}: {
  selected: string
  className?: string
}) => (
  <Listbox.Button
    className={`${className} input-decoration pl-3 pr-10 text-left`}
  >
    <span className="block ml-3 truncate">{selected}</span>
    <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
      <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
    </span>
  </Listbox.Button>
)
