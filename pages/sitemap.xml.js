const EXTERNAL_DATA_URL = 'https://michaelkugallery.com';

function generateSiteMap(artists, exhibitions, publications, news) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
        <url>
            <loc>https://michaelkugallery.com</loc>
        </url>
        <url>
            <loc>https://michaelkugallery.com/about</loc>
        </url>
        ${artists
            .map(({ id }) => {
                return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/artists/${id}`}</loc>
                    </url>
                `;
            })
            .join('')
        }
        ${exhibitions
            .map(({ id }) => {
                return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/exhibitions/${id}`}</loc>
                    </url>
                `;
            })
            .join('')
        }
        ${publications
            .map(({ id }) => {
                return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/publications/${id}`}</loc>
                    </url>
                `;
            })
            .join('')
        }
        ${news
            .map(({ id }) => {
                return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/news/${id}`}</loc>
                    </url>
                `;
            })
            .join('')
        }
        
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const artists = await request.json();
    const exhibitions = await request.json();
    const publications = await request.json();
    const news = await request.json();
    // console.log(artists);

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(artists, exhibitions, publications, news);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;