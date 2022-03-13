type Props = {
  colSpan?: number
  selectItems?: Array<string | number>
  children?: React.ReactElement
  onChange?: (value: number) => void
}

export const TFoot = ({ colSpan, selectItems, children, onChange }: Props) => {
  colSpan ??= 1

  return (
    <tfoot>
      <tr>
        <td className="p-4" colSpan={colSpan}>
          {children}
        </td>
      </tr>
    </tfoot>
  )
}
