import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import ServiceClient from './ServiceClient';

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServiceDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug];

    if (!service) {
        notFound();
    }

    return <ServiceClient service={service} />;
}
