import Link from 'next/link';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';

import '@/styles/utility.css';

export const CTA: React.FC = () => {
  return (
    <Box className="u-full-width-wrap">
      <Box bg="blue" w="100vw" pos="relative" left="50%" right="50%" ml="-50vw" mr="-50vw">
        <Container size="md" py={100}>
          <Stack align="center" gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={700} c="white">
              今すぐInvoicerを始めませんか？
            </Title>
            <Text size="lg" ta="center" c="white" opacity={0.9}>
              30日間の無料トライアルで、すべての機能をお試しいただけます
            </Text>
            <Button
              component={Link}
              size="xl"
              variant="white"
              c="blue"
              fw={600}
              href="/admin/dashboard"
            >
              今すぐ始める
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
