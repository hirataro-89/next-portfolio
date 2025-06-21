import { InvoiceDetailPageClient } from '../../../../components/Admin/InvoiceDetailPageClient';

type Props = {
  params: {
    id: string;
  };
};

export default function InvoiceDetailPage({ params }: Props) {
  return <InvoiceDetailPageClient params={params} />;
}
