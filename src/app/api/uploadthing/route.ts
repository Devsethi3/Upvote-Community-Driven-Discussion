import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter } from './core'

// Export routes for Next App
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
})
