import { Metadata } from 'next';

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  author?: string;
  twitterHandle?: string;
};

export function constructMetadata({
  title = 'Claw Boiler Plate',
  description = 'A modern Next.js boilerplate with Tailwind CSS, TypeScript, and shadcn/ui',
  keywords = ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Boilerplate'],
  image = '/og-image.png',
  author = 'Claw Boiler Plate',
  twitterHandle = '@clawboilerplate',
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: 'Claw Boiler Plate',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://your-website.com',
      title,
      description,
      siteName: 'Claw Boiler Plate',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    metadataBase: new URL('https://your-website.com'),
  };
} 