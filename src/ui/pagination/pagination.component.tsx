import { useEffect, useRef, useState, useMemo } from 'react'
import cn from 'classnames'

import { createArray, getParentDatasetProp } from 'utils'
import { Arrow } from './arrow.component'
import { Page } from './page.component'

const MAX_LENGTH = 5

type Props = {
  count: number
  current?: number
  onClick?: (i: number) => void
}

export const Pagination = ({
  count,
  current: current_ = 1,
  onClick,
}: Props) => {
  const [current, setCurrent] = useState(current_)
  const cb = useRef<React.MouseEventHandler>((e) => {
    const index = getParentDatasetProp(e, 'index')
    if (!index) return

    setCurrent(+index)
    onClick?.(+index)
  }).current

  useEffect(() => setCurrent(current_), [current_])

  const length = count < MAX_LENGTH ? count : MAX_LENGTH
  const half_length = Math.ceil(length / 2)
  const isDisabled = count < 2

  //  close to the beginning
  let min = 1
  //  close to the end
  if (current > count - half_length) min = count - length + 1
  // somewhere in the middle
  else if (current >= min + half_length) min = current - half_length + 1

  const indexes = useMemo(
    () => createArray(min, min + length - 1),
    [min, length]
  )
  const navClasses = cn('inline-flex -space-x-px rounded-md shadow-sm', {
    disabled: isDisabled,
    'pointer-events-none': isDisabled,
  })

  return (
    <nav onClick={cb} className={navClasses} aria-label="Pagination">
      <Arrow type="left" index={1} />

      {indexes.map((i) => (
        <Page index={i} key={i} current={current} />
      ))}

      <Arrow type="right" index={count} />
    </nav>
  )
}
