import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

import { classNames } from 'utils'

export const Option = ({ item }: { item: string }) => (
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
