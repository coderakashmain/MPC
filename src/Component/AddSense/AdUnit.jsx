import React, { useEffect, useRef } from 'react';

/**
 * Universal AdSense Ad Unit Component
 * Loads once, renders anywhere. No duplicate script loading.
 * 
 * Props:
 *   adSlot       - (required) The ad slot ID
 *   adFormat     - 'auto' | 'fluid' | 'horizontal' | 'autorelaxed' (default: 'auto')
 *   adLayout     - optional layout e.g. 'in-article'
 *   adLayoutKey  - optional layout key for in-feed ads
 *   fullWidth    - (default: true) data-full-width-responsive
 *   style        - optional extra styles for the <ins> element
 */

const AD_CLIENT = 'ca-pub-9796833231647897';

const AdUnit = ({ adSlot, adFormat = 'auto', adLayout, adLayoutKey, fullWidth = true, style = {} }) => {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    // Only push ads in production
    if (process.env.NODE_ENV !== 'production') return;
    if (pushed.current) return;

    const timer = setTimeout(() => {
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
          pushed.current = true;
        }
      } catch (e) {
        console.error('AdSense push error:', e);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const insStyle = {
    display: 'block',
    width: '100%',
    minWidth: '250px',
    background: 'transparent',
    textAlign: 'center',
    ...style,
  };

  const insProps = {
    className: 'adsbygoogle',
    style: insStyle,
    'data-ad-client': AD_CLIENT,
    'data-ad-slot': adSlot,
  };

  if (adFormat) insProps['data-ad-format'] = adFormat;
  if (adLayout) insProps['data-ad-layout'] = adLayout;
  if (adLayoutKey) insProps['data-ad-layout-key'] = adLayoutKey;
  if (fullWidth) insProps['data-full-width-responsive'] = 'true';

  return (
    <div
      ref={adRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'var(--newbackcolor)',
      }}
    >
      <ins {...insProps}></ins>
    </div>
  );
};

// ─── Pre-configured ad components (drop-in replacements) ───

export const HomeAdd1 = () => (
  <AdUnit adSlot="7860403674" adFormat="fluid" adLayoutKey="-f9+4w+7x-eg+3a" />
);

export const LongWidthAds = () => (
  <AdUnit adSlot="4571350183" adFormat="autorelaxed" />
);

export const Horizontalads = () => (
  <AdUnit adSlot="5568441934" adFormat="horizontal" />
);

export const AritcleAds = () => (
  <AdUnit adSlot="9011527763" adFormat="fluid" adLayout="in-article" fullWidth={false} />
);

export const Verticalads = () => (
  <AdUnit adSlot="4582663326" adFormat="auto" style={{ minWidth: '160px', height: '100%' }} />
);

export const SectionHorizontalads = () => (
  <AdUnit adSlot="4000372064" adFormat="auto" />
);

export const Adsabovenote = () => (
  <AdUnit adSlot="7991394440" adFormat="auto" />
);

export const Adsbetwnotes = () => (
  <AdUnit adSlot="9120643284" adFormat="fluid" adLayoutKey="-fb+5w+4e-db+86" fullWidth={false} />
);

export const Morenoteabove = () => (
  <AdUnit adSlot="6534271728" adFormat="fluid" adLayout="in-article" fullWidth={false} />
);

export const Pdfads = () => (
  <AdUnit adSlot="4376610732" adFormat="auto" />
);

export const PdfArticleads = () => (
  <AdUnit adSlot="9011527763" adFormat="fluid" adLayout="in-article" fullWidth={false} />
);

export default AdUnit;
