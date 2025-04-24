// api/src/services/plot/plots.js
import { db } from 'src/lib/db'

export const getAllPlots = () => {
  return db.plot.findMany({
    include: {
      patches: {
        include: {
          sensors: {
            include: { metrics: true },
          },
          soilComposition: true,
        },
      },
    },
  })
}
