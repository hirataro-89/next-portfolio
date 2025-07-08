'use client';

import { useRouter } from 'next/navigation';
import { Badge, Button, Card, Container, Grid, List, Stack, Text, Title } from '@mantine/core';
import styles from './PricingTable.module.css';

const pricingPlans = [
  {
    name: 'フリープラン',
    price: '¥0',
    period: '月額',
    description: '個人事業主や小規模事業者向け',
    features: ['請求書作成 5件/月まで', '基本的なテンプレート', 'PDF出力', 'メールサポート'],
    buttonText: '無料で始める',
    buttonVariant: 'outline' as const,
    popular: false,
  },
  {
    name: 'ビジネスプラン',
    price: '¥2,980',
    period: '月額',
    description: '成長企業向けの充実機能',
    features: [
      '請求書作成 無制限',
      'カスタムテンプレート',
      '自動リマインダー',
      'ダッシュボード分析',
      '優先サポート',
    ],
    buttonText: '14日間無料トライアル',
    buttonVariant: 'filled' as const,
    popular: true,
  },
  {
    name: 'エンタープライズ',
    price: 'お問い合わせ',
    period: '',
    description: '大企業向けカスタマイズ対応',
    features: ['すべての機能', 'API連携', '専用サポート', 'カスタム開発', 'セキュリティ監査'],
    buttonText: 'お問い合わせ',
    buttonVariant: 'outline' as const,
    popular: false,
  },
];

export const PricingTable = () => {
  const router = useRouter();

  const handlePlanSelect = (planName: string) => {
    if (planName === 'フリープラン' || planName === 'ビジネスプラン') {
      router.push('/admin/dashboard');
    } else {
      // エンタープライズプランの場合はお問い合わせページへ
      window.open('mailto:contact@example.com', '_blank');
    }
  };

  return (
    <Container size="lg" py={80}>
      <Stack align="center" gap="xl" mb={60}>
        <Title order={1} ta="center" size="2.5rem" fw={700}>
          シンプルで透明性のある料金プラン
        </Title>
        <Text size="lg" ta="center" c="dimmed" maw={600}>
          あなたのビジネスに最適なプランをお選びください。 いつでもプランの変更が可能です。
        </Text>
      </Stack>

      <Grid>
        {pricingPlans.map((plan) => (
          <Grid.Col key={plan.name} span={{ base: 12, md: 4 }}>
            <Card
              shadow="sm"
              padding="xl"
              radius="md"
              withBorder
              h="100%"
              className={plan.popular ? styles.popularCard : styles.regularCard}
            >
              {plan.popular && (
                <Badge color="blue" variant="filled" size="sm" className={styles.popularBadge}>
                  おすすめ
                </Badge>
              )}

              <Stack gap="md" className={styles.planContent}>
                <div>
                  <Title order={3}>{plan.name}</Title>
                  <Text size="sm" c="dimmed">
                    {plan.description}
                  </Text>
                </div>

                <div>
                  <Text className={styles.planPrice}>{plan.price}</Text>
                  {plan.period && (
                    <Text size="sm" c="dimmed">
                      {plan.period}
                    </Text>
                  )}
                </div>

                <List spacing="xs" size="sm" className={styles.featureList}>
                  {plan.features.map((feature, index) => (
                    <List.Item key={index}>{feature}</List.Item>
                  ))}
                </List>

                <Button
                  variant={plan.buttonVariant}
                  size="md"
                  fullWidth
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Stack align="center" gap="md" mt={60}>
        <Text size="sm" c="dimmed" ta="center">
          すべてのプランに30日間の返金保証が付いています
        </Text>
        <Text size="sm" c="dimmed" ta="center">
          ご質問がございましたら、お気軽にお問い合わせください
        </Text>
      </Stack>
    </Container>
  );
};
