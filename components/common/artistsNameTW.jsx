import { Box } from "@mui/material";
import Link from "next/link";

export default function ArtistsNameTW({ artists }) {
  // console.log(artists);
  return (
    <>
      {artists.map((a, index) => (
        <Box component="span" key={index}>
          {index === artists.length - 1 ? (
            <Link href={`/artists/${a.artists_id.id}`} passHref>
              <Box mr={0.5} component="span" key={index} className="tw_font">
                {a.artists_id.name_tw}
              </Box>
            </Link>
          ) : (
            <Link href={`/artists/${a.artists_id.id}`} passHref>
              <Box mr={0.5} component="span" key={index} className="tw_font">
                {a.artists_id.name_tw} /
              </Box>
            </Link>
          )}
        </Box>
      ))}
    </>
  );
}
