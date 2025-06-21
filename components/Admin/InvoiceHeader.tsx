'use client';

import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Title } from '@mantine/core';

type Props = {
  onNewInvoice?: () => void;
};

export const InvoiceHeader = ({ onNewInvoice }: Props) => {
  return (
    <Group justify="space-between" align="center">
      <Title order={2}>請求書一覧</Title>
      <Button leftSection={<IconPlus size={16} />} variant="filled" onClick={onNewInvoice}>
        新規作成
      </Button>
    </Group>
  );
};
