import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}
// nextjs13 hot reloading can bunch cause prisma client instances to be created giving us a warning in terminal  
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production")
  globalThis.prisma = client

export default client
