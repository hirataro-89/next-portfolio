import { create } from 'zustand';

export type Invoice = {
  id: number;
  date: string;
  client: string;
  amount: number;
  status: '未入金' | '入金済み';
};

type InvoiceStore = {
  invoices: Invoice[];
  addInvoice: (invoice: Omit<Invoice, 'id'>) => void;
};

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: [
    {
      id: 1,
      date: '2024-01-15',
      client: '株式会社サンプル',
      amount: 150000,
      status: '入金済み',
    },
    {
      id: 2,
      date: '2024-01-20',
      client: 'テスト企業',
      amount: 75000,
      status: '未入金',
    },
    {
      id: 3,
      date: '2024-01-25',
      client: '株式会社デモ',
      amount: 200000,
      status: '入金済み',
    },
    {
      id: 4,
      date: '2024-02-01',
      client: '有限会社サンプル',
      amount: 120000,
      status: '未入金',
    },
    {
      id: 5,
      date: '2024-02-05',
      client: '株式会社テストケース',
      amount: 95000,
      status: '未入金',
    },
  ],
  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [
        ...state.invoices,
        {
          ...invoice,
          id: Date.now(),
        },
      ],
    })),
}));
