/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const items = ['5', '10', '20', '50', '100']

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const Select = ({ className }: { className?: string }) => {
  className ??= ''
  const [selected, setSelected] = useState(items[2])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className={`${className} relative mt-10`}>
          <Button selected={selected} className={className} />

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
                <Option item={item} key={item} />
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

const Button = ({
  selected,
  className,
}: {
  selected: string
  className?: string
}) => (
  <Listbox.Button
    className={`${className} relative py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
  >
    <span className="block ml-3 truncate">{selected}</span>
    <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
      <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
    </span>
  </Listbox.Button>
)

const Option = ({ item }: { item: string }) => (
  <Listbox.Option
    key={item}
    className={({ active }) =>
      classNames(
        active ? 'text-white bg-indigo-600' : 'text-gray-900',
        'cursor-default select-none relative py-2 pl-3 pr-9'
      )
    }
    value={item}
  >
    {({ selected, active }) => (
      <>
        <div className="flex items-center">
          <span
            className={classNames(
              selected ? 'font-semibold' : 'font-normal',
              'ml-3 block truncate'
            )}
          >
            {item}
          </span>
        </div>

        {selected && (
          <span
            className={classNames(
              active ? 'text-white' : 'text-indigo-600',
              'absolute inset-y-0 right-0 flex items-center pr-4'
            )}
          >
            <CheckIcon className="w-5 h-5" aria-hidden="true" />
          </span>
        )}
      </>
    )}
  </Listbox.Option>
)
