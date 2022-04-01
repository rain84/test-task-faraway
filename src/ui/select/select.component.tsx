import { Fragment, useState, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { Button } from './button.component'
import { Option } from './option.component'

export type SelectProps = {
  className?: string
  items: Array<string | number>
  initialVal: string | number
  onChange(value: string | number): void
}

export const Select = ({
  className,
  items,
  initialVal,
  onChange,
}: SelectProps) => {
  className ??= ''

  const [selected, setSelected] = useState(initialVal)
  const selectOnChange = useRef((val: string) => {
    setSelected(val)
    onChange(val)
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
              className={`${className} z-20 absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
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
