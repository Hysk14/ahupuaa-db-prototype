// api/src/services/plot/plots.js
import { db } from 'src/lib/db'

export const getAllPlots = () => {
  return db.plot.findMany({
    include: {
      Patch: {
        include: {
          Sensor: {
            include: { Metric: true },
          },
          soilComposition: true,
        },
      },
    },
  })
}
