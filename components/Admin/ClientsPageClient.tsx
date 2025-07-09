'use client';

import { Stack, Table, Title } from '@mantine/core';
import { useClientStore } from '../../app/stores/clientStore';

export const ClientsPageClient = () => {
  const clients = useClientStore((state) => state.clients);

  const rows = clients.map((client) => (
    <Table.Tr key={client.id}>
      <Table.Td>{client.companyName}</Table.Td>
      <Table.Td>{client.contactName}</Table.Td>
      <Table.Td>{client.email}</Table.Td>
      <Table.Td>{client.createdAt}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="lg">
      <Title order={2}>顧客一覧</Title>

      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>顧客名</Table.Th>
              <Table.Th>担当者名</Table.Th>
              <Table.Th>メールアドレス</Table.Th>
              <Table.Th>登録日</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  );
};
