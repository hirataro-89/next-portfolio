'use client';

import { Badge, Table } from '@mantine/core';
import { Invoice } from '../../../stores/invoiceStore';

type Props = {
  invoices: Invoice[];
};

export const InvoiceTable = ({ invoices }: Props) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(amount);
  };

  const getStatusBadge = (status: Invoice['status']) => {
    return (
      <Badge color={status === '入金済み' ? 'green' : 'orange'} variant="filled">
        {status}
      </Badge>
    );
  };

  const rows = invoices.map((invoice) => (
    <Table.Tr key={invoice.id}>
      <Table.Td>{invoice.date}</Table.Td>
      <Table.Td>{invoice.client}</Table.Td>
      <Table.Td>{formatCurrency(invoice.amount)}</Table.Td>
      <Table.Td>{getStatusBadge(invoice.status)}</Table.Td>
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
