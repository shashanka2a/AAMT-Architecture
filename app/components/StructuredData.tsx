export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    "name": "AAMT Architecture",
    "description": "Premier Miami architecture firm specializing in modern residential, commercial, and urban design with 20+ years of experience.",
    "url": "https://aamtarchitecture.com",
    "logo": "https://aamtarchitecture.com/logo.png",
    "image": "https://aamtarchitecture.com/portfolio/portfolio-001.jpg",
    "telephone": "(305) 927-5330",
    "email": "info@aamtStudio.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "201 SE 2nd Ave",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33131",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City", 
        "name": "Fort Lauderdale",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "West Palm Beach", 
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "serviceType": [
      "Residential Architecture",
      "Commercial Architecture", 
      "Urban Planning",
      "Interior Design",
      "Project Management",
      "Sustainable Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Architectural Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Architecture",
            "description": "Custom home design and residential building architecture"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Architecture",
            "description": "Office buildings, retail spaces, and commercial development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Urban Planning",
            "description": "Community development and urban design solutions"
          }
        }
      ]
    },
    "foundingDate": "2004",
    "numberOfEmployees": "10-50",
    "award": [
      "Miami AIA Design Excellence Award",
      "South Florida Sustainable Design Award"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/aamt-architecture",
      "https://www.facebook.com/aamtarchitecture",
      "https://www.instagram.com/aamtarchitecture"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
