'use client';

import { IconFileText, IconTrendingUp, IconWallet } from '@tabler/icons-react';
import { Card, Container, Grid, Stack, Text, ThemeIcon, Title } from '@mantine/core';

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: IconFileText,
    title: '請求書作成',
    description: 'テンプレートを使って美しい請求書を数分で作成。PDF出力や自動送信も対応。',
  },
  {
    icon: IconWallet,
    title: '入金管理',
    description: '入金状況を一元管理。未入金の請求書を自動で追跡し、督促メールも自動送信。',
  },
  {
    icon: IconTrendingUp,
    title: '売上レポート',
    description: '月次・年次の売上レポートを自動生成。グラフで売上推移を分かりやすく表示。',
  },
];

export const Features = () => {
  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        <Title order={2} ta="center" size="2rem" fw={700}>
          すべての機能がここに
        </Title>

        <Grid gutter="xl">
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="md" h="100%">
                <Stack align="center" gap="md" ta="center">
                  <ThemeIcon size={60} radius="xl" variant="light">
                    <feature.icon size={30} />
                  </ThemeIcon>

                  <Title order={3} size="1.25rem" fw={600}>
                    {feature.title}
                  </Title>

                  <Text c="dimmed" size="sm">
                    {feature.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};
