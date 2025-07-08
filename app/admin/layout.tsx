import { AdminLayout } from '../../components/Admin/AdminLayout';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AdminLayout>{children}</AdminLayout>;
}
