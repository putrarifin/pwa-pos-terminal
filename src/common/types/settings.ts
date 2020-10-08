export enum SettingsCurrencyPosition {
  Left = 1,
  Right = 2,
}

export type Settings = {
  logo: string;
  logoUrl: string;
  name: string;
  useTables: boolean;
  useKitchen: boolean;
  usePromotions: boolean;
  useFiscalization: boolean;
  isAllowPrintCheck: boolean;
  useFastPay: boolean;
  wifiName: string;
  wifiPass: string;
  tipAmount: number;
  predictions: string[];
  printReceiptNumber: boolean;
  printAddress: boolean;
  printPrediction: boolean;
  printReceiptDuplicate: boolean;
  printCheckDuplicate: boolean;
  printSumWeightOnReceipt: boolean;
  printReceipt: boolean;
  printReceiptByDefault: boolean;
  printWifi: boolean;
  printReceiptComment: boolean;
  lang: 'default' | string;
  timezone: string;
  currency: string;
  currencyPosition: SettingsCurrencyPosition,
  paymentMethods: PaymentMethod[];
};

export type PaymentMethod = {
  paymentMethodId: number;
  title: string;
  icon: string;
  color: string;
  isActive: boolean;
};
