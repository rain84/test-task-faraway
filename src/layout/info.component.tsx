import { Table } from 'ui'
import fakeData from 'fake_data.json'

const data = fakeData.data[0] as unknown as Record<string, string>
const fields = [
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
]

export const Info = () => {
  const rows = fields.map((field) => ({
    parameter: field,
    description: data[field],
  }))

  const getKey = ({ info }: Record<string, string>) => info
  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
        {data.name}
      </h1>
      <br />
      <main className="flex flex-row justify-center">
        <Table
          className="w-1/2"
          columns={['parameter', 'description']}
          rows={rows}
          getKey={getKey}
        />
      </main>
    </section>
  )
}
