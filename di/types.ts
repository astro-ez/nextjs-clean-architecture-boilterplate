import { ICrashReporterService } from "../src/application/services/crash-reporter.service.interface";
import { IInstrumentationService } from "../src/application/services/instrumentation.service.interface";
import { ITransactionManagerService } from "../src/application/services/transaction-manager.service.interface";


export const DI_SYMBOLS = {
  // Services
  ITransactionManagerService: Symbol.for('ITransactionManagerService'),
  IInstrumentationService: Symbol.for('IInstrumentationService'),
  ICrashReporterService: Symbol.for('ICrashReporterService'),

  // Repositories

  // Use Cases

  // Controllers
};

export interface DI_RETURN_TYPES {
  // Services
  ITransactionManagerService: ITransactionManagerService,
  IInstrumentationService: IInstrumentationService,
  ICrashReporterService: ICrashReporterService,

  // Repositories

  // Use Cases

  // Controllers
}
