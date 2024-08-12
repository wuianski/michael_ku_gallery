import { Box } from "@mui/material";

export default function ArtistsNameTW({ artists }) {
  return (
    <>
      {artists.map((a, index) => (
        <Box component="span" key={index}>
          {index === artists.length - 1 ? (
            <Box mr={0.5} component="span" key={index}>
              {a.artists_id.name_tw}
            </Box>
          ) : (
            <Box mr={0.5} component="span" key={index}>
              {a.artists_id.name_tw} /
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}
