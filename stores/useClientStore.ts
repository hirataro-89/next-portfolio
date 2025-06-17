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
  addClient: (client: Omit<Client, 'id'>) => void;
  getClientById: (id: number) => Client | undefined;
};

export const useClientStore = create<ClientStore>((set, get) => ({
  clients: [
    {
      id: 1,
      companyName: '株式会社サンプル',
      contactName: '山田 太郎',
      email: 'sample@example.com',
      createdAt: '2025-06-15',
    },
  ],
  addClient: (client) =>
    set((state) => ({
      clients: [
        ...state.clients,
        {
          ...client,
          id: Date.now(),
        },
      ],
    })),
  getClientById: (id) => {
    const { clients } = get();
    return clients.find((client) => client.id === id);
  },
}));
