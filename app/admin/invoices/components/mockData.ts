import { Invoice } from './types';

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    date: '2024-01-15',
    clientName: '株式会社サンプル',
    amount: 150000,
    status: '入金済み',
  },
  {
    id: '2',
    date: '2024-01-20',
    clientName: 'テスト企業',
    amount: 75000,
    status: '未入金',
  },
  {
    id: '3',
    date: '2024-01-25',
    clientName: '株式会社デモ',
    amount: 200000,
    status: '入金済み',
  },
  {
    id: '4',
    date: '2024-02-01',
    clientName: '有限会社サンプル',
    amount: 120000,
    status: '未入金',
  },
  {
    id: '5',
    date: '2024-02-05',
    clientName: '株式会社テストケース',
    amount: 95000,
    status: '未入金',
  },
];