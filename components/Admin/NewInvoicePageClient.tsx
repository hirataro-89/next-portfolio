'use client';

import { useRouter } from 'next/navigation';
import { Button, Container, NumberInput, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { INVOICE_STATUS, useInvoiceStore } from '../../app/stores/invoiceStore';

// バリデーションメッセージの定数
const VALIDATION_MESSAGES = {
  CLIENT_REQUIRED: '顧客名は必須です',
  AMOUNT_REQUIRED: '金額は1円以上を入力してください',
  AMOUNT_POSITIVE: '金額は正の数値で入力してください',
} as const;

// フォームの最小値
const FORM_CONSTRAINTS = {
  MIN_AMOUNT: 1,
  MAX_AMOUNT: 999999999,
} as const;

// フォームデータの型定義
type InvoiceForm = {
  client: string;
  amount: number;
};

export const NewInvoicePageClient = () => {
  const router = useRouter();
  const addInvoice = useInvoiceStore((state) => state.addInvoice);

  // フォームバリデーションの設定
  const form = useForm<InvoiceForm>({
    initialValues: {
      client: '',
      amount: 0,
    },
    validate: {
      client: (value) => (!value?.trim() ? VALIDATION_MESSAGES.CLIENT_REQUIRED : null),
      amount: (value) => {
        if (!value || value <= 0) {
          return VALIDATION_MESSAGES.AMOUNT_REQUIRED;
        }
        if (value > FORM_CONSTRAINTS.MAX_AMOUNT) {
          return `金額は${FORM_CONSTRAINTS.MAX_AMOUNT.toLocaleString()}円以下で入力してください`;
        }
        return null;
      },
    },
  });

  // 現在の日付を取得する関数
  const getCurrentDate = (): string => {
    return new Date().toISOString().slice(0, 10);
  };

  // フォーム送信時の処理
  const handleSubmit = (values: InvoiceForm) => {
    addInvoice({
      date: getCurrentDate(),
      client: values.client.trim(),
      amount: values.amount,
      status: INVOICE_STATUS.PENDING,
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
            {/* 顧客名入力フィールド */}
            <TextInput
              label="顧客名"
              placeholder="株式会社サンプル"
              required
              {...form.getInputProps('client')}
            />

            {/* 金額入力フィールド */}
            <NumberInput
              label="金額"
              placeholder="100000"
              min={FORM_CONSTRAINTS.MIN_AMOUNT}
              max={FORM_CONSTRAINTS.MAX_AMOUNT}
              required
              thousandSeparator=","
              suffix="円"
              {...form.getInputProps('amount')}
            />

            {/* 送信ボタン */}
            <Button type="submit" size="md" style={{ alignSelf: 'flex-start' }}>
              請求書を作成
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};
