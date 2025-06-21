'use client';

import { useRouter } from 'next/navigation';
import { Stack } from '@mantine/core';
import { InvoiceTable } from '../../app/admin/invoices/components/InvoiceTable';
import { useInvoiceStore } from '../../app/stores/invoiceStore';
import { InvoiceHeader } from './InvoiceHeader';

export const InvoicesPageClient = () => {
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
};
