import { Fragment, useState, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { Button } from './button.component'
import { Option } from './option.component'

type Props = {
  className?: string
  items: Array<string | number>
  init: string | number
  onChange(value: number): void
}

export const Select = ({ className, items, init, onChange }: Props) => {
  className ??= ''

  const [selected, setSelected] = useState(items[+init])
  const selectOnChange = useRef((val: string) => {
    setSelected(val)
    onChange(+val)
  }).current

  return (
    <Listbox value={selected} onChange={selectOnChange}>
      {({ open }) => (
        <div className={`${className} relative`}>
          <Button selected={selected.toString()} className={className} />

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`${className} absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {items.map((item) => (
                <Option item={item.toString()} key={item} />
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
