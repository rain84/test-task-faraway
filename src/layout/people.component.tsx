import { Table } from 'ui'
import fakeData from 'fake_data.json'

const rows = fakeData.data.slice(0, 5)
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
  const getKey = ({ name, birth_year }: Partial<Record<string, any>>): any =>
    name + birth_year

  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
        People
      </h1>
      <br />
      <main className="flex flex-row justify-center">
        <Table
          caption="Star Wars"
          columns={columns}
          rows={rows}
          getKey={getKey}
        />
      </main>
    </section>
  )
}
