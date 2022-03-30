import React from 'react'

export type FooterProps = {
  children: React.ReactElement
}

type Props = {
  colSpan?: number
  selectItems?: Array<string | number>
} & FooterProps

export const TFoot = ({ colSpan = 1, children }: Props) => (
  <tfoot>
    <tr>
      <td className="py-4" colSpan={colSpan}>
        {children}
      </td>
    </tr>
  </tfoot>
)
