import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice  = (price: number) => {
  const formatter  = new Intl.NumberFormat('en-us', {
    style:"currency",
    currency: "USD",
  })
  return formatter.format(price)
}


export function constructMetadata ({
  title  = "CaseCobra - custom hight quality phone cases",
  description = 'Create custom higg-quality phone cases in seconds',
  image = "/thumbnail.png",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string
  icons?: string
} = {}): Metadata {
  return  {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator:'@dheerajgoswami'
    },
    icons,
    metadataBase: new URL("https://casecobra-ochre-nine.vercel.app/")
  }

}