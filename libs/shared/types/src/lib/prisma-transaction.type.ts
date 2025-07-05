import { PrismaClient } from '@prisma/client';

export type TPrismaTransaction = Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
> & { queues?: any[] };
