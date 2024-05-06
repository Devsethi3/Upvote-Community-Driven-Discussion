import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter } from './core'

// Export routes
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
})
