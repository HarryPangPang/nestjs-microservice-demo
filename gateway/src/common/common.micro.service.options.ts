import { join } from 'path'
import { Transport, ClientOptions } from '@nestjs/microservices'

export const CommonMicroServiceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `127.0.0.1:8084`,
    package: 'common',
    protoPath: join(__dirname, '../proto/common.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true
    }
  }
}
