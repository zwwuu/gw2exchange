import "~/styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Cabin } from "next/font/google";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

import Layout from "~/components/Layout/Layout";
import ThemeProvider from "~/components/ThemeProvider/ThemeProvider";
import seo from "~/lib/seo";

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <style global jsx>{`
        :root {
          --font-cabin: ${cabin.style.fontFamily};
        }
      `}</style>
      <GoogleAnalytics trackPageViews />
      <Script
        src={`//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${process.env.NEXT_PUBLIC_AMAZON_ADS_ID}`}
        async
      />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  event(metric.name, {
    event_category: metric.label === "web-vital" ? "Web Vitals" : "custom metric",
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value), // values must be integers
    event_label: metric.id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}
