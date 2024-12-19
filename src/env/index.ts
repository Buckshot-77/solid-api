import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'prod', 'test']).default('dev'),
  PORT: z.number({ coerce: true }),
})

const parsedEnv = envSchema.safeParse(process.env)

if (parsedEnv.error) {
  console.error('There were errors parsing the env', parsedEnv.error.format())

  throw new Error('There was a problem parsing the env')
}

const envData = parsedEnv.data

export { envData as env }
