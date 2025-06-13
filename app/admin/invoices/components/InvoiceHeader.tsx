'use client';

import { Button, Group, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

type Props = {
  onNewInvoice?: () => void;
};

export const InvoiceHeader = ({ onNewInvoice }: Props) => {
  return (
    <Group justify="space-between" align="center">
      <Title order={2}>請求書一覧</Title>
      <Button
        leftSection={<IconPlus size={16} />}
        variant="filled"
        onClick={onNewInvoice}
      >
        新規作成
      </Button>
    </Group>
  );
}