import Link from 'next/link';
import { Button, Container, Stack, Text, Title } from '@mantine/core';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <Container size="md" py={120}>
      <Stack align="center" gap="xl">
        <Title order={1} ta="center" fw={800} c="dark" className={styles.title}>
          請求書管理を、
          <br />
          もっとシンプルに
        </Title>

        <Text size="xl" ta="center" c="dimmed" maw={600}>
          Invoicerは請求書の作成から入金管理まで、
          <br />
          面倒な作業をすべて自動化する請求書管理システムです
        </Text>

        <Button component={Link} href="/admin/dashboard" size="xl" variant="filled">
          無料で試してみる
        </Button>
      </Stack>
    </Container>
  );
};
