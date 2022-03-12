import { Table } from 'ui'
import { useNavigate } from 'react-router-dom'
import fakeData from 'fake_data.json'

const rows = fakeData.data as unknown as Record<string, string>[]
const columns = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
]
export const People = () => {
  const getKey = ({ name, birth_year }: Record<string, string>) =>
    name + birth_year

  const navigate = useNavigate()
  const onClick = (data: unknown, index: number) => {
    navigate((+index + 1).toString())
  }

  const selectItems = ['5', '10', '20', '50', '100']

  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
        People
      </h1>
      <br />
      <main className="flex flex-row justify-center">
        <Table
          className="w-full"
          caption="Star Wars"
          columns={columns}
          rows={rows}
          selectItems={selectItems}
          getKey={getKey}
          onClick={onClick}
        />
      </main>
    </section>
  )
}
