import React from "react";
import {
  FirstLetter,
  IconSection,
  MainText,
  ProjectSection,
} from "./common/mainStyles";
import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { theme } from "@src/theme";

export const ContactPage = () => {
  return (
    <>
      <MainText variant="h3" mb="35px">
        <FirstLetter>C</FirstLetter>ontact Me
      </MainText>
      <Grid
        container
        item
        sx={{
          [theme.breakpoints.up("md")]: {
            px: "50px",
          },
        }}
      >
        <Grid xs={12} md={4} textAlign="center" px="10px" my="7px">
          <ProjectSection>
            <IconSection>
              <HomeOutlinedIcon sx={{ fontSize: "2rem" }} />
            </IconSection>
            <Typography variant="h4" py="10px">
              Address
            </Typography>
            <Typography>Banha-Qalubia</Typography>
          </ProjectSection>
        </Grid>
        <Grid xs={12} md={4} textAlign="center" px="10px" my="7px">
          <ProjectSection>
            <IconSection>
              <LocalPhoneOutlinedIcon sx={{ fontSize: "2rem" }} />
            </IconSection>
            <Typography variant="h4" py="10px">
              Phone
            </Typography>
            <Typography>01092784271</Typography>
          </ProjectSection>
        </Grid>
        <Grid xs={12} md={4} textAlign="center" px="10px" mt="10px" mb="35px">
          <ProjectSection>
            <IconSection>
              <ComputerOutlinedIcon sx={{ fontSize: "2rem" }} />
            </IconSection>
            <Typography variant="h4" py="10px">
              Social Media
            </Typography>
            <Box sx={{}}>
              <Link
                href="mailto:walaaellaban010@gmail.com"
                target="_blank"
                style={{
                  marginLeft: "15px",
                  color: theme.palette.secondary.main,
                }}
              >
                <EmailOutlinedIcon />{" "}
              </Link>
              <Link
                href="https://www.linkedin.com/in/walaa-ibrahim-4463b91b6/ "
                target="_blank"
                style={{
                  marginLeft: "15px",
                  color: theme.palette.secondary.main,
                }}
              >
                <LinkedInIcon />
              </Link>
              <Link
                href={"https://github.com/walaa-ibrahim"}
                target="_blank"
                style={{
                  marginLeft: "15px",
                  color: theme.palette.secondary.main,
                }}
              >
                <GitHubIcon />
              </Link>
            </Box>
          </ProjectSection>
        </Grid>
      </Grid>
    </>
  );
};
