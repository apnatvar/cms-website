import React from 'react';
import SideMenu from '@/components/sideMenu';
import IndexOverlay from '@/components/indexOverlay';
import IndexHeroSection from '@/components/indexHero';
import IndexWorkSummarySection from '@/components/indexWorkSummary';
import IndexStatsSection from '@/components/indexStats';
import IndexMapSection from '@/components/indexMapSection';
import IndexTrailerSection from '@/components/indexTrailerSection';
import IndexTestimonialsSection from '@/components/indexTestimonials';
import IndexQuoteImageSection from '@/components/indexQuote';
import IndexGIFSection from '@/components/indexSmallGIF';
import ErrorPage from '@/components/errorPage';
import Footer from '@/components/footer';

import { getPayload } from "payload";
import config from "@/payload.config";

import '@/app/styles/global.css';
import '@/app/styles/index.css';

export default async function IndexPage(){
  const payload = await getPayload({ config });
  const content = await payload.findGlobal({ slug: 'index' });
  if (!content) return <ErrorPage />;

  return (
    <main>
      <SideMenu />
      <IndexOverlay overlayContent={content.overlay}/>
      <IndexHeroSection heroContent={content.hero} />
      <IndexTrailerSection trailerContent={content.trailers}/>
      <IndexMapSection mapContent={content.map}/>
      <IndexGIFSection gifImage={content.gifImage} />
      <IndexWorkSummarySection workSummaryContent={content.workSummary}/>
      <IndexQuoteImageSection quoteImage={content.quoteImage} />
      <IndexTestimonialsSection testimonialsContent={content.testimonials}/>
      <IndexStatsSection statsContent={content.presentStatistic}/>
      <Footer />
    </main>
  );
}

