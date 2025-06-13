'use client';

import { Stack } from '@mantine/core';
import { InvoiceHeader } from './components/InvoiceHeader';
import { InvoiceTable } from './components/InvoiceTable';
import { mockInvoices } from './components/mockData';

export default function InvoicesPage() {
  const handleNewInvoice = () => {
    console.log('新規請求書作成');
  };

  return (
    <Stack gap="md">
      <InvoiceHeader onNewInvoice={handleNewInvoice} />
      <InvoiceTable invoices={mockInvoices} />
    </Stack>
  );
}