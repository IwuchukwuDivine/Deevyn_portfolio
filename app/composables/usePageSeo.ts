interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export default function usePageSeo(opts: PageSeoOptions) {
  const url = `${SITE_URL}${opts.path}`;
  const image = `${SITE_URL}${opts.ogImage ?? "/og.png"}`;
  const fullTitle = `${opts.title} · Iwuchukwu Divine`;

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: fullTitle,
    ogDescription: opts.description,
    ogUrl: url,
    ogType: "website",
    ogImage: image,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: opts.description,
    twitterImage: image,
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
  });
}
