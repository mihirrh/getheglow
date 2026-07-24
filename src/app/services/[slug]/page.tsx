import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { ServicePageClient } from "@/components/services/ServicePageClient";
import { BUSINESS } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${BUSINESS.url}/services/${slug}`,
    },
    alternates: { canonical: `${BUSINESS.url}/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <div>Service not found</div>;
  return <ServicePageClient service={service} />;
}
