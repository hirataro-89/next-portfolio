'use client';

import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/admin/dashboard');
  };

  return (
    <Container size="md" py={120}>
      <Stack align="center" gap="xl">
        <Title order={1} ta="center" size="3.5rem" fw={800} c="dark">
          請求書管理を、
          <br />
          もっとシンプルに
        </Title>
        
        <Text size="xl" ta="center" c="dimmed" maw={600}>
          Invoicerは請求書の作成から入金管理まで、
          <br />
          面倒な作業をすべて自動化する請求書管理システムです
        </Text>
        
        <Button 
          size="xl" 
          variant="filled"
          onClick={handleGetStarted}
        >
          無料で試してみる
        </Button>
      </Stack>
    </Container>
  );
};