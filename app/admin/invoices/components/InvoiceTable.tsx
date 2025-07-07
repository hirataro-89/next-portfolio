import { Select, Table } from '@mantine/core';
import {
  Invoice,
  INVOICE_STATUS,
  InvoiceStatus,
  useInvoiceStore,
} from '../../../stores/invoiceStore';

// セレクトボックスの選択肢
const STATUS_OPTIONS = [
  { value: INVOICE_STATUS.PENDING, label: INVOICE_STATUS.PENDING },
  { value: INVOICE_STATUS.PAID, label: INVOICE_STATUS.PAID },
  { value: INVOICE_STATUS.OVERDUE, label: INVOICE_STATUS.OVERDUE },
  { value: INVOICE_STATUS.CANCELLED, label: INVOICE_STATUS.CANCELLED },
];

type Props = {
  invoices: Invoice[];
};

export const InvoiceTable = ({ invoices }: Props) => {
  const updateInvoiceStatus = useInvoiceStore((state) => state.updateInvoiceStatus);

  // 通貨をフォーマットする関数
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(amount);
  };

  // ステータス変更時の処理
  const handleStatusChange = (invoiceId: number, newStatus: string) => {
    updateInvoiceStatus(invoiceId, newStatus as InvoiceStatus);
  };

  // テーブルの行を生成する関数
  const rows = invoices.map((invoice) => (
    <Table.Tr key={invoice.id}>
      <Table.Td>{invoice.date}</Table.Td>
      <Table.Td>{invoice.client}</Table.Td>
      <Table.Td>{formatCurrency(invoice.amount)}</Table.Td>
      <Table.Td>
        <Select
          value={invoice.status}
          data={STATUS_OPTIONS}
          onChange={(value) => value && handleStatusChange(invoice.id, value)}
          size="xs"
          w={120}
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>請求日</Table.Th>
          <Table.Th>顧客名</Table.Th>
          <Table.Th>金額</Table.Th>
          <Table.Th>ステータス</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
