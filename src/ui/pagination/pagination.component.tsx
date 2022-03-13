import { useRef, useState } from 'react'

import { createArray, getParentDatasetProp } from 'utils'
import { Arrow } from './arrow.component'
import { Page } from './page.component'

const MAX_LENGTH = 5

type Props = {
  amount: number
  current?: number
  onClick?: (i: number) => void
}

export const Pagination = ({ amount, onClick, ...props }: Props) => {
  const [current, setCurrent] = useState(props.current ?? 1)
  const cb = useRef<React.MouseEventHandler>((e) => {
    const index = getParentDatasetProp(e, 'index')
    if (!index) return

    setCurrent(+index)
    onClick?.(+index)
  }).current

  const length = amount < MAX_LENGTH ? amount : MAX_LENGTH
  const half_length = Math.ceil(length / 2)

  //  close to the beginning
  let min = 1
  //  close to the end
  if (current > amount - half_length) min = amount - length + 1
  // somewhere in the middle
  else if (current >= min + half_length) min = current - half_length + 1

  return (
    <nav
      onClick={cb}
      className="inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <Arrow type="left" index={1} />

      {createArray(min, min + length - 1).map((i) => (
        <Page index={i} key={i} current={current} />
      ))}

      <Arrow type="right" index={amount} />
    </nav>
  )
}
