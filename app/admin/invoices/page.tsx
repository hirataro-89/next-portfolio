'use client';

import { useRouter } from 'next/navigation';
import { Stack } from '@mantine/core';
import { useInvoiceStore } from '../../stores/invoiceStore';
import { InvoiceHeader } from './components/InvoiceHeader';
import { InvoiceTable } from './components/InvoiceTable';

export default function InvoicesPage() {
  const router = useRouter();
  const invoices = useInvoiceStore((state) => state.invoices);

  const handleNewInvoice = () => {
    router.push('/admin/invoices/new');
  };

  return (
    <Stack gap="md">
      <InvoiceHeader onNewInvoice={handleNewInvoice} />
      <InvoiceTable invoices={invoices} />
    </Stack>
  );
}
