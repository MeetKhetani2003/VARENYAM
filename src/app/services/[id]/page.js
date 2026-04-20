import React from "react";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceContent from "./ServiceContent";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.longDesc.substring(0, 160),
    openGraph: {
      title: `${service.title} | Varenyam Neurocare`,
      description: service.longDesc.substring(0, 160),
      images: [{ url: "/logo.png" }],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return notFound();
  }

  return <ServiceContent service={service} />;
}
