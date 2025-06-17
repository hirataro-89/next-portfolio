import { create } from 'zustand';

export type Client = {
  id: number;
  companyName: string;
  contactName: string;
  email: string;
  createdAt: string;
};

type ClientStore = {
  clients: Client[];
};

export const useClientStore = create<ClientStore>(() => ({
  clients: [
    {
      id: 1,
      companyName: '株式会社サンプル',
      contactName: '田中 太郎',
      email: 'tanaka@sample.co.jp',
      createdAt: '2024-01-10',
    },
    {
      id: 2,
      companyName: 'テスト企業',
      contactName: '佐藤 花子',
      email: 'sato@test-corp.jp',
      createdAt: '2024-01-15',
    },
    {
      id: 3,
      companyName: '株式会社デモ',
      contactName: '鈴木 次郎',
      email: 'suzuki@demo.com',
      createdAt: '2024-01-20',
    },
    {
      id: 4,
      companyName: '有限会社サンプル',
      contactName: '高橋 美咲',
      email: 'takahashi@sample-ltd.jp',
      createdAt: '2024-02-01',
    },
    {
      id: 5,
      companyName: '株式会社テストケース',
      contactName: '山田 健一',
      email: 'yamada@testcase.co.jp',
      createdAt: '2024-02-05',
    },
  ],
}));
