import fs from 'fs'
import yaml from 'js-yaml'

interface Config {
  cors_origin: string
  port: number
}

const config: Config = yaml.safeLoad(
  fs.readFileSync('data/config.yml', 'utf8')
) as Config

export default config
