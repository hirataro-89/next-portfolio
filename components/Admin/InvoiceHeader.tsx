'use client';

import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Title } from '@mantine/core';

type Props = {
  onNewInvoice?: () => void;
};

export const InvoiceHeader = ({ onNewInvoice }: Props) => {
  return (
    <Group justify="space-between" align="center" wrap="nowrap">
      <Title order={2} style={{ flexShrink: 0 }}>
        請求書一覧
      </Title>
      <Button
        leftSection={<IconPlus size={16} />}
        variant="filled"
        onClick={onNewInvoice}
        size="sm"
        style={{ flexShrink: 0 }}
      >
        新規作成
      </Button>
    </Group>
  );
};
