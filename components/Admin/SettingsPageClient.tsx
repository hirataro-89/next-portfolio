'use client';

import { Button, Checkbox, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

type SettingsForm = {
  companyName: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  emailNotifications: boolean;
};

export const SettingsPageClient = () => {
  const form = useForm<SettingsForm>({
    initialValues: {
      companyName: '',
      contactName: '',
      email: '',
      phoneNumber: '',
      emailNotifications: true,
    },
    validate: {
      companyName: (value) => (!value ? '会社名は必須です' : null),
      email: (value) => {
        if (!value) {
          return 'メールアドレスは必須です';
        }
        if (!/^\S+@\S+$/.test(value)) {
          return '正しいメールアドレスを入力してください';
        }
        return null;
      },
    },
  });

  const handleSubmit = (values: SettingsForm) => {
    // TODO: 実際の保存処理を実装
    // eslint-disable-next-line no-console
    console.log('設定データ:', values);
  };

  return (
    <Stack gap="lg">
      <Title order={2}>設定</Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="会社名"
            placeholder="株式会社サンプル"
            required
            {...form.getInputProps('companyName')}
          />

          <TextInput
            label="担当者名"
            placeholder="田中 太郎"
            {...form.getInputProps('contactName')}
          />

          <TextInput
            label="メールアドレス"
            placeholder="example@company.com"
            type="email"
            required
            {...form.getInputProps('email')}
          />

          <TextInput
            label="電話番号"
            placeholder="03-1234-5678"
            {...form.getInputProps('phoneNumber')}
          />

          <Checkbox
            label="入金通知メールを受け取る"
            {...form.getInputProps('emailNotifications', { type: 'checkbox' })}
          />

          <Button type="submit" size="md" style={{ alignSelf: 'flex-start' }}>
            保存する
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
