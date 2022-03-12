import { Table } from 'ui'
import fakeData from 'fake_data.json'

const data = fakeData.data[0] as unknown as Record<string, string>
const parameters = [
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
]
const columns = ['parameter', 'description']
const rows = parameters.map((parameter) => ({
  parameter,
  description: data[parameter],
}))
const getKey = ({ parameter }: Record<string, string>) => parameter

export const Info = () => {
  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
        {data.name}
      </h1>
      <br />
      <main className="flex flex-row justify-center">
        <Table
          className="w-1/2"
          columns={columns}
          rows={rows}
          getKey={getKey}
        />
      </main>
    </section>
  )
}
