import { create } from 'zustand';

// 請求書のステータスを定義する定数
export const INVOICE_STATUS = {
  PENDING: '未入金',
  PAID: '入金済み',
  OVERDUE: '督促中',
  CANCELLED: 'キャンセル',
} as const;

// 請求書のステータス型
export type InvoiceStatus = (typeof INVOICE_STATUS)[keyof typeof INVOICE_STATUS];

// 請求書のデータ型
export type Invoice = {
  id: number;
  date: string;
  client: string;
  amount: number;
  status: InvoiceStatus;
};

// 新規請求書作成用の型（IDなし）
export type NewInvoiceData = Omit<Invoice, 'id'>;

// IDを生成するユーティリティ関数
const generateInvoiceId = (): number => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

// ストアの型定義
type InvoiceStore = {
  invoices: Invoice[];
  addInvoice: (invoice: NewInvoiceData) => void;
  updateInvoiceStatus: (id: number, status: InvoiceStatus) => void;
  deleteInvoice: (id: number) => void;
  getInvoiceById: (id: number) => Invoice | undefined;
};

export const useInvoiceStore = create<InvoiceStore>((set, get) => ({
  invoices: [
    {
      id: 1,
      date: '2024-01-15',
      client: '株式会社サンプル',
      amount: 150000,
      status: INVOICE_STATUS.PAID,
    },
    {
      id: 2,
      date: '2024-01-20',
      client: 'テスト企業',
      amount: 75000,
      status: INVOICE_STATUS.PENDING,
    },
    {
      id: 3,
      date: '2024-01-25',
      client: '株式会社デモ',
      amount: 200000,
      status: INVOICE_STATUS.PAID,
    },
    {
      id: 4,
      date: '2024-02-01',
      client: '有限会社サンプル',
      amount: 120000,
      status: INVOICE_STATUS.PENDING,
    },
    {
      id: 5,
      date: '2024-02-05',
      client: '株式会社テストケース',
      amount: 95000,
      status: INVOICE_STATUS.PENDING,
    },
  ],
  // 新しい請求書を追加する機能
  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [
        ...state.invoices,
        {
          ...invoice,
          id: generateInvoiceId(),
        },
      ],
    })),
  // 請求書のステータスを更新する機能
  updateInvoiceStatus: (id, status) =>
    set((state) => ({
      invoices: state.invoices.map((invoice) =>
        invoice.id === id ? { ...invoice, status } : invoice
      ),
    })),
  // 請求書を削除する機能
  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),
  // IDで請求書を取得する機能
  getInvoiceById: (id) => {
    return get().invoices.find((invoice) => invoice.id === id);
  },
}));
