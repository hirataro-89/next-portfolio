import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Link href="/admin">Admin</Link>
      <Link href="/about">About</Link>
      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/pricing">Pricing</Link>
      <Link href="/admin/clients">Clients</Link>
      <Link href="/admin/invoices">Invoices</Link>
      <Link href="/admin/settings">Settings</Link>
    </>
  );
}
