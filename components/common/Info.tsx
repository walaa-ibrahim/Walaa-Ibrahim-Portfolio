import { Stack, useMediaQuery, Typography, useTheme } from "@mui/material";
import React from 'react'
import { FirstLetter } from "./mainStyles";
type InfoProps = {
  mobileOpen:boolean
}
const Info = ({ mobileOpen }: InfoProps) => {
  const theme = useTheme();
 const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack pt={"100px"} pb={mobileOpen ? "0" : "30px"} textAlign={"center"}>
      <Typography variant={"h4"} sx={{ color: theme.palette.primary.light }}>
        <FirstLetter>Walaa </FirstLetter>
        Ibrahim
      </Typography>
      <Typography mt="10px" sx={{ color: theme.palette.primary.light }}>
        Front End Developer React.js
      </Typography>
    </Stack>
  );
};
export default Info
