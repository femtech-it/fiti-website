import { DEFAULT_SEO } from './seo-config';

export interface Course {
  name: string;
  description: string;
  provider: string;
  url?: string;
}

// Organization Schema - Use on homepage and about page
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": DEFAULT_SEO.organizationName, 
  "alternateName": "FITI",
  "url": DEFAULT_SEO.siteUrl,
  "logo": `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.organizationLogo}`,
  "description": DEFAULT_SEO.defaultDescription,
  "email": DEFAULT_SEO.contactEmail,
  "telephone": DEFAULT_SEO.contactPhone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": DEFAULT_SEO.address.streetAddress,
    "addressLocality": DEFAULT_SEO.address.addressLocality,
    "addressRegion": DEFAULT_SEO.address.addressRegion,
    "postalCode": DEFAULT_SEO.address.postalCode,
    "addressCountry": DEFAULT_SEO.address.addressCountry
  },
  "sameAs": [
    // Add your social media URLs here
    // "https://www.facebook.com/FITI",
    // "https://twitter.com/FITI_Nigeria",
    // "https://www.linkedin.com/company/fiti",
    // "https://www.instagram.com/fiti_nigeria"
  ],
  "foundingDate": "2012",
  "founders": [
    {
      "@type": "Organization",
      "name": "FEMTECH Information Technology Limited"
    }
  ]
});

// LocalBusiness Schema - Use on contact page
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": DEFAULT_SEO.organizationName,
  "image": `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.organizationLogo}`,
  "url": DEFAULT_SEO.siteUrl,
  "telephone": DEFAULT_SEO.contactPhone,
  "email": DEFAULT_SEO.contactEmail,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": DEFAULT_SEO.address.streetAddress,
    "addressLocality": DEFAULT_SEO.address.addressLocality,
    "addressRegion": DEFAULT_SEO.address.addressRegion,
    "postalCode": DEFAULT_SEO.address.postalCode,
    "addressCountry": DEFAULT_SEO.address.addressCountry
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
});

// Course Schema - Use on courses page and individual course pages
export const getCourseSchema = (course: Course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": course.provider || DEFAULT_SEO.organizationName,
    "url": DEFAULT_SEO.siteUrl
  },
  "url": course.url || DEFAULT_SEO.siteUrl,
  "educationalCredentialAwarded": "Certificate of Completion"
});

// Multiple Courses Schema - Use on courses listing page
export const getCoursesListSchema = (courses: Course[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": courses.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": getCourseSchema(course)
  }))
});

// BreadcrumbList Schema - Use on all pages except homepage
export const getBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${DEFAULT_SEO.siteUrl}${crumb.url}`
  }))
});

// WebSite Schema - Use on homepage
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": DEFAULT_SEO.siteName,
  "url": DEFAULT_SEO.siteUrl,
  "description": DEFAULT_SEO.defaultDescription,
  "publisher": {
    "@type": "Organization",
    "name": DEFAULT_SEO.organizationName
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${DEFAULT_SEO.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

// Helper function to generate JSON-LD script tag content
export const generateStructuredData = (schema: object | object[]) => {
  return JSON.stringify(Array.isArray(schema) ? schema : [schema]);
};
