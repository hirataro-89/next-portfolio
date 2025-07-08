'use client';

import { Badge, Card, Container, Group, Stack, Text, Title } from '@mantine/core';
import { useInvoiceStore } from '../../app/stores/invoiceStore';

type Props = {
  params: {
    id: string;
  };
};

export const InvoiceDetailPageClient = ({ params }: Props) => {
  const invoices = useInvoiceStore((state) => state.invoices);
  const invoiceId = parseInt(params.id, 10);
  const invoice = invoices.find((inv) => inv.id === invoiceId);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge color={status === '入金済み' ? 'green' : 'orange'} variant="filled">
        {status}
      </Badge>
    );
  };

  if (!invoice) {
    return (
      <Container size="md" py="md">
        <Card shadow="sm" padding="lg" radius="md">
          <Title order={2} ta="center" c="dimmed">
            データが見つかりません
          </Title>
          <Text ta="center" mt="md" c="dimmed">
            指定された請求書が存在しません。
          </Text>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="md" py="md">
      <Stack gap="lg">
        <Title order={2}>請求書詳細</Title>

        <Card shadow="sm" padding="xl" radius="md">
          <Stack gap="md">
            <Group justify="space-between" align="flex-start">
              <Text size="lg" fw={600}>
                請求書 #{invoice.id}
              </Text>
              {getStatusBadge(invoice.status)}
            </Group>

            <Stack gap="sm">
              <Group>
                <Text fw={500} w={100}>
                  請求日:
                </Text>
                <Text>{invoice.date}</Text>
              </Group>

              <Group>
                <Text fw={500} w={100}>
                  顧客名:
                </Text>
                <Text>{invoice.client}</Text>
              </Group>

              <Group>
                <Text fw={500} w={100}>
                  金額:
                </Text>
                <Text size="lg" fw={600} c="blue">
                  {formatCurrency(invoice.amount)}
                </Text>
              </Group>

              <Group>
                <Text fw={500} w={100}>
                  ステータス:
                </Text>
                {getStatusBadge(invoice.status)}
              </Group>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
