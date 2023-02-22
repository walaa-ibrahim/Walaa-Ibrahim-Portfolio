import React from 'react'
import { Box } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from 'next/link';
import Image from 'next/image';
const SocialLinks = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "60px" }}>
      <Link
        href="https://www.linkedin.com/in/walaa-ibrahim-4463b91b6/ "
        target="_blank"
        style={{ marginRight: "15px" }}
      >
        {/* <LinkedInIcon sx={{ color: "#0a66c2", background: "#fff" }} /> */}
        <Box>
          <Image
            src="/linkedin.jpg"
            alt={"linkidin-logo"}
            width="32"
            height="30"
            style={{
              borderRadius: "5px",
            }}
          />
        </Box>
      </Link>
      <Link
        href={"https://github.com/walaa-ibrahim"}
        target="_blank"
        style={{ marginRight: "15px" }}
      >
        {/* <GitHubIcon /> */}
        <Box
          sx={{
            width: "32px",
            height: "30px",
            background: "#fcf2e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Image
            src="/github.webp"
            alt={"github-logo"}
            width="25"
            height="25"
          />
        </Box>
      </Link>
      <Link
        href="https://drive.google.com/file/d/12pXpq4KpDUl_HXCXXN_uO3kUm1eV3Lem/view?usp=sharing "
        target="_blank"
      >
        {/* <LinkedInIcon sx={{ color: "#0a66c2", background: "#fff" }} /> */}
        <Box>
          <Image
            src="/pdf.png"
            alt={"cv-logo"}
            width="32"
            height="30"
            style={{
              borderRadius: "5px",
            }}
          />
        </Box>
      </Link>
    </Box>
  );
}
export default SocialLinks;
