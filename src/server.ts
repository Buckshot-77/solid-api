import { app } from './app'

import { env } from './env'

const port = env.PORT

app.listen(
  {
    host: '0.0.0.0',
    port,
  },
  () => {
    console.log(`Http Server running on port ${port}`)
  },
)
