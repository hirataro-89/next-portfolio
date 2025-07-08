import { InvoiceDetailPageClient } from '../../../../components/Admin/InvoiceDetailPageClient';

export default async function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <InvoiceDetailPageClient params={resolvedParams} />;
}
