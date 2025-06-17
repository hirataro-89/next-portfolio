'use client';

import { useRouter } from 'next/navigation';
import { Button, Container, NumberInput, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useInvoiceStore } from '../../../stores/invoiceStore';

type InvoiceForm = {
  client: string;
  amount: number;
};

export default function NewInvoicePage() {
  const router = useRouter();
  const addInvoice = useInvoiceStore((state) => state.addInvoice);

  const form = useForm<InvoiceForm>({
    initialValues: {
      client: '',
      amount: 0,
    },
    validate: {
      client: (value) => (!value ? '顧客名は必須です' : null),
      amount: (value) => {
        if (!value || value <= 0) {
          return '金額は1円以上を入力してください';
        }
        return null;
      },
    },
  });

  const handleSubmit = (values: InvoiceForm) => {
    addInvoice({
      date: new Date().toISOString().slice(0, 10),
      client: values.client,
      amount: values.amount,
      status: '未入金',
    });

    form.reset();
    router.push('/admin/invoices');
  };

  return (
    <Container size="md" py="md">
      <Stack gap="lg">
        <Title order={2}>新規請求書作成</Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="顧客名"
              placeholder="株式会社サンプル"
              required
              {...form.getInputProps('client')}
            />

            <NumberInput
              label="金額"
              placeholder="100000"
              min={1}
              required
              thousandSeparator=","
              suffix="円"
              {...form.getInputProps('amount')}
            />

            <Button type="submit" size="md" style={{ alignSelf: 'flex-start' }}>
              請求書を作成
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
