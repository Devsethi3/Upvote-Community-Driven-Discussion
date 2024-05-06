import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter } from './core'

// Export 
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
})
