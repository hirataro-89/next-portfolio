'use client';

import { AppShell, Burger, Group, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDashboard, IconFileText, IconSettings, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: IconDashboard },
    { href: '/admin/invoices', label: 'Invoices', icon: IconFileText },
    { href: '/admin/clients', label: 'Clients', icon: IconUsers },
    { href: '/admin/settings', label: 'Settings', icon: IconSettings },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="xl" fw={600}>
            Invoicer
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            component={Link}
            href={link.href}
            label={link.label}
            leftSection={<link.icon size="1rem" stroke={1.5} />}
            active={pathname === link.href}
            variant="filled"
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main bg="white">
        {children}
      </AppShell.Main>
    </AppShell>
  );
}