import React from 'react'

export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ')

export const createArray = (min: number, max: number) =>
  Array.from({ length: max - min + 1 })
    .fill(0)
    .map((_, i) => i + min)

export const getParentDatasetProp = (e: React.SyntheticEvent, prop: string) => {
  if (
    !(e.target instanceof HTMLElement || e.target instanceof SVGGraphicsElement)
  )
    return

  const parent = e.target.closest(`[data-${prop}]`)

  return (parent as HTMLElement)?.dataset?.[prop]
}
