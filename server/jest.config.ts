import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
