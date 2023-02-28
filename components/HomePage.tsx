import { Typography, Button, useTheme } from "@mui/material";
import { Stack } from '@mui/system';
import React from 'react';
import { saveAs } from "file-saver";
import { FirstLetter, } from "./common/mainStyles"
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
const HomePage = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        margin: "0 30px",
        [theme.breakpoints.up("sm")]: {
          width: "600px",
          margin: "auto",
        },
      }}
    >
      <FirstLetter>Hi There...</FirstLetter>
      <Typography
        variant="h3"
        sx={{
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.6rem",
            lineHeight: 2,
          },
        }}
      >
        Iam
        <FirstLetter> Walaa Ibrahim</FirstLetter>
      </Typography>
      <Typography>
        I am a Front-end web developer (React.js) with +1 year of experience.
        designing and developing websites to be easy to use, optimizing web
        design for smartphones, balancing functional design with esthetic design
        and keeping my skills updated and learning Modern technologies to make
        the website more interactive with users.
      </Typography>
      <Button
        sx={{
          width: "145px",
          background: "#e38528 !important",
          color: "#fcf2e8",
          marginTop: "15px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "25px",
          },
        }}
        onClick={() =>
          saveAs(
            "https://drive.google.com/file/d/1-kxjNN_Uqf7CS_JA2Fgy9R40jN5TjJg1/view?usp=sharing"
          )
        }
      >
        <DownloadSharpIcon sx={{ marginRight: "7px" }} />
        Resume
      </Button>
    </Stack>
  );
}
export default HomePage;
