'use client';

import Link from 'next/link';
import { IconEye } from '@tabler/icons-react';
import { Box, Button, Container, Grid, Image, Stack, Text, Title } from '@mantine/core';

import '@/styles/utility.css';

export const DemoSection: React.FC = () => {
  return (
    <Box className="u-full-width-wrap">
      <Box bg="gray.0" w="100vw" pos="relative" left="50%" right="50%" ml="-50vw" mr="-50vw">
        <Container size="lg" py={100}>
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Title order={2} size="2rem" fw={700}>
                  管理画面のデモ体験
                </Title>
                <Text size="lg" c="dimmed">
                  実際の管理画面をご覧いただけます。ログイン不要で、すべての機能をお試しいただけます。
                </Text>
                <Stack gap="md">
                  <Text size="md" fw={500}>
                    ✓ 請求書の作成・編集
                  </Text>
                  <Text size="md" fw={500}>
                    ✓ 顧客情報の管理
                  </Text>
                  <Text size="md" fw={500}>
                    ✓ 入金ステータスの確認
                  </Text>
                  <Text size="md" fw={500}>
                    ✓ 売上レポートの閲覧
                  </Text>
                </Stack>
                <Button
                  component={Link}
                  size="md"
                  variant="filled"
                  leftSection={<IconEye size={20} />}
                  href="/admin/dashboard"
                >
                  デモを見る
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="管理画面のデモ"
                radius="md"
                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
