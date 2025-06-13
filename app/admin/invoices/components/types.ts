export type Invoice = {
  id: string;
  date: string;
  clientName: string;
  amount: number;
  status: '未入金' | '入金済み';
};