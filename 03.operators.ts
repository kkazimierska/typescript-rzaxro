import {Employee} from './types'

var Configuration = {
  API: "http://host/path/to/api",
  token: "jw3t-4w4j-5t04-5jt0-445t-fe98",
  locale: "en-us",
  language: "en",
  currency: "USD",
  modules: ["admin", "orders", "stock"]
}

// 🚀 EXERCISE: extract the config type from existing object
type Config = typeof Configuration

type EmployeeId = Employee['id']

