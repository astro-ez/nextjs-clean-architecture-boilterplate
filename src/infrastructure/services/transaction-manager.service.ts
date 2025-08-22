import { PrismaClient, Prisma} from '@prisma/client'
import { ITransactionManagerService } from '@/src/application/services/transaction-manager.service.interface';

export type Tx = Prisma.TransactionClient;

export class TransactionManagerService implements ITransactionManagerService {
  constructor(private readonly prisma: PrismaClient) {}

  public startTransaction<T>(
    clb: (tx: Tx) => Promise<T>,
    parent?: Tx
  ): Promise<T> {

    if (parent)
      return clb(parent);

    return this.prisma.$transaction(async (tx: Tx) => {
      return clb(tx);
    });
  }
}
