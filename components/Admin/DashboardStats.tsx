'use client';

import { IconCurrencyYen, IconFileText, IconTrendingUp, IconUsers } from '@tabler/icons-react';
import { Card, Grid, Group, Progress, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useClientStore } from '../../app/stores/clientStore';
import { useInvoiceStore } from '../../app/stores/invoiceStore';

export const DashboardStats = () => {
  const invoices = useInvoiceStore((state) => state.invoices);
  const clients = useClientStore((state) => state.clients);

  // 統計情報を計算
  const totalInvoices = invoices.length;
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidInvoices = invoices.filter((invoice) => invoice.status === '入金済み');
  const unpaidInvoices = invoices.filter((invoice) => invoice.status === '未入金');
  const paidAmount = paidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const unpaidAmount = unpaidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const totalClients = clients.length;

  // 入金率を計算
  const paymentRate = totalAmount > 0 ? (paidAmount / totalAmount) * 100 : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(amount);
  };

  const statCards = [
    {
      title: '総請求額',
      value: formatCurrency(totalAmount),
      icon: IconCurrencyYen,
      color: 'blue',
    },
    {
      title: '請求書数',
      value: totalInvoices.toString(),
      icon: IconFileText,
      color: 'green',
    },
    {
      title: '顧客数',
      value: totalClients.toString(),
      icon: IconUsers,
      color: 'purple',
    },
    {
      title: '入金率',
      value: `${paymentRate.toFixed(1)}%`,
      icon: IconTrendingUp,
      color: 'orange',
    },
  ];

  return (
    <Stack gap="xl">
      <Title order={2}>ダッシュボード</Title>

      {/* 統計カード */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
        {statCards.map((stat) => (
          <Card key={stat.title} shadow="sm" padding="lg" radius="md">
            <Group justify="space-between" align="flex-start">
              <div>
                <Text size="sm" c="dimmed" fw={500}>
                  {stat.title}
                </Text>
                <Text size="xl" fw={700} mt="xs">
                  {stat.value}
                </Text>
              </div>
              <stat.icon size={24} color={`var(--mantine-color-${stat.color}-6)`} />
            </Group>
          </Card>
        ))}
      </SimpleGrid>

      {/* 詳細統計 */}
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md">
            <Stack gap="md">
              <Title order={4}>入金状況</Title>
              <div>
                <Group justify="space-between" mb="xs">
                  <Text size="sm">入金済み</Text>
                  <Text size="sm" c="green">
                    {formatCurrency(paidAmount)}
                  </Text>
                </Group>
                <Progress value={paymentRate} color="green" size="lg" />
              </div>
              <Group justify="space-between">
                <Text size="sm" c="dimmed">
                  未入金: {formatCurrency(unpaidAmount)}
                </Text>
                <Text size="sm" c="dimmed">
                  {paidInvoices.length} / {totalInvoices} 件
                </Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md">
            <Stack gap="md">
              <Title order={4}>今月の概要</Title>
              <Stack gap="xs">
                <Group justify="space-between">
                  <Text size="sm">新規請求書</Text>
                  <Text size="sm" fw={500}>
                    {totalInvoices} 件
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm">新規顧客</Text>
                  <Text size="sm" fw={500}>
                    {totalClients} 件
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm">平均請求額</Text>
                  <Text size="sm" fw={500}>
                    {totalInvoices > 0 ? formatCurrency(totalAmount / totalInvoices) : '¥0'}
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
