import { ReactElement } from "react";

import { I18nProviderClient } from "@/locales/client";
type localType = "en" | "fa" | "ar";

export default async function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: localType }>;
  children: ReactElement;
}) {
  const { locale } = await params;
  console.info(locale);
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
