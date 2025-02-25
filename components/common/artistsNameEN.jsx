import { Box } from "@mui/material";
import Link from "next/link";

export default function ArtistsNameEN({ artists }) {
  return (
    <>
      {artists.map((a, index) => (
        <Box component="span" key={index}>
          {index === artists.length - 1 ? (
            <Link href={`/artists/${a.artists_id.name_tw}`} passHref>
              <Box mr={0.5} component="span" key={index} className="en_font">
                {a.artists_id.name_en}
              </Box>
            </Link>
          ) : (
            <Link href={`/artists/${a.artists_id.name_tw}`} passHref>
              <Box mr={0.5} component="span" key={index} className="en_font">
                {a.artists_id.name_en} /
              </Box>
            </Link>
          )}
        </Box>
      ))}
    </>
  );
}
