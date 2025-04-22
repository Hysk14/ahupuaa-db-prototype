import fs from 'fs'

import { db } from 'api/src/lib/db'
import { parse } from 'csv-parse/sync'

export default async function seed() {
  console.log('🌧️ Seeding database with rainy weather data...')

  const csvData = fs.readFileSync('api/db/rainy-data.csv', 'utf-8')

  const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
  })

  const plot = await db.plot.create({
    data: { name: 'Waianae' },
  })

  const patch = await db.patch.create({
    data: {
      name: 'Lo‘i A',
      plotId: plot.id,
    },
  })

  const sensor = await db.sensor.create({
    data: {
      name: 'Rain Sensor',
      patchId: patch.id,
    },
  })

  for (const record of records) {
    await db.metric.create({
      data: {
        type: record.type,
        value: parseFloat(record.value),
        recordedAt: new Date(record.recordedAt),
        sensorId: sensor.id,
      },
    })
  }

  console.log('✅ Rainy weather data seeded successfully!')
}
