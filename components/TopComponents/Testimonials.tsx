'use client';

import { Avatar, Box, Card, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';

type Testimonial = {
  name: string;
  company: string;
  comment: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: '田中 太郎',
    company: '株式会社ABC',
    comment:
      'Invoicerを導入してから、請求書作成の時間が半分以下になりました。入金管理も自動化されて、業務効率が大幅に改善されました。',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: '佐藤 花子',
    company: 'デザインスタジオXYZ',
    comment:
      'フリーランスとして活動していますが、Invoicerのおかげで請求書管理のストレスが完全になくなりました。売上レポートも分かりやすくて重宝しています。',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b75be8d2?w=150&h=150&fit=crop&crop=face',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Box className="u-full-width-wrap">
      <Box bg="gray.0" w="100vw" pos="relative" left="50%" right="50%" ml="-50vw" mr="-50vw">
        <Container size="lg" py={80}>
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={700}>
              お客様の声
            </Title>
            <Grid gutter="xl">
              {testimonials.map((testimonial, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                  <Card shadow="sm" padding="xl" radius="md" bg="white" h="100%">
                    <Stack gap="md">
                      <Text size="md" style={{ lineHeight: 1.6 }}>
                        "{testimonial.comment}"
                      </Text>
                      <Group>
                        <Avatar src={testimonial.avatar} size="md" radius="xl" />
                        <Box>
                          <Text fw={600} size="sm">
                            {testimonial.name}
                          </Text>
                          <Text c="dimmed" size="xs">
                            {testimonial.company}
                          </Text>
                        </Box>
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
