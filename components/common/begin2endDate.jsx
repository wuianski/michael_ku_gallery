import { Box } from "@mui/material";

export default function Begin2endDate({ begin, end }) {
  return (
    <Box sx={{ fontSize: 12, color: "#666" }}>
      {new Date(begin).toLocaleDateString()} -
      {new Date(end).toLocaleDateString()}
    </Box>
  );
}
