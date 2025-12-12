import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

export function SEO({ title, description, keywords }: SEOProps) {
    const defaultKeywords = "energy management, smart meter, IoT, solar energy, Africa, power monitoring, Rana54";
    const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={finalKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
