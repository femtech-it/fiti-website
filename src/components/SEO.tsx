import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO } from '../utils/seo-config';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    noindex?: boolean;
    structuredData?: object | object[];
}

const SEO = ({
    title,
    description,
    keywords,
    ogImage,
    canonical,
    noindex = false,
    structuredData
}: SEOProps) => {
    const siteTitle = title || DEFAULT_SEO.defaultTitle;
    const siteDescription = description || DEFAULT_SEO.defaultDescription;
    const siteKeywords = keywords || DEFAULT_SEO.defaultKeywords;
    const siteImage = ogImage ? `${DEFAULT_SEO.siteUrl}${ogImage}` : `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.defaultOgImage}`;
    const canonicalUrl = canonical || DEFAULT_SEO.siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots Meta Tag */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
            <meta property="og:locale" content="en_NG" />

            {DEFAULT_SEO.facebookAppId && (
                <meta property="fb:app_id" content={DEFAULT_SEO.facebookAppId} />
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
            {DEFAULT_SEO.twitterHandle && (
                <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
            )}

            {/* Additional Meta Tags */}
            <meta name="author" content={DEFAULT_SEO.organizationName} />
            <meta name="language" content="English" />
            <meta name="geo.region" content="NG" />
            <meta name="geo.placename" content="Nigeria" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
