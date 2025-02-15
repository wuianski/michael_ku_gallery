//pages/sitemap.xml.js
/* Fetch Data */
import fetchData from "@/lib/api";

const EXTERNAL_DATA_URL = 'https://michaelkugallery.com';

function generateSiteMap(artists, exhibitions, publications) {
    // console.log(artists);
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url>
            <loc>https://michaelkugallery.com</loc>
        </url>
        <url>
            <loc>https://michaelkugallery.com/about</loc>
        </url>
        ${artists.data.artists.map(({ name_tw }) => {
        return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/artists/${name_tw}`}</loc>
            </url>
        `;
    }).join('')}

        ${exhibitions.data.exhibitions.map(({ id }) => {
        return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/exhibitions/${id}`}</loc>
            </url>
         `;
    }).join('')}

     ${publications.data.publications.map(({ id }) => {
        return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/publications/${id}`}</loc>
            </url>
         `;
    }).join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const artists = await fetchData(
        `
          query  {
              artists (filter:{isSign:{_eq:true}, status:{_eq:"published"} }){
                id,
                name_tw,
                name_en,
              }
          }
          `,
        {
            variables: {},
        }
    );
    const exhibitions = await fetchData(
        `
          query  {
              exhibitions (filter:{status:{_eq:"published"} }){
                id,
                title_tw,
                title_en,
              }
          }
          `,
        {
            variables: {},
        }
    );
    const publications = await fetchData(
        `
          query  {
              publications (filter:{status:{_eq:"published"} }){
                id,
                title_tw,
                title_en,
              }
          }
          `,
        {
            variables: {},
        }
    );

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(artists, exhibitions, publications);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;