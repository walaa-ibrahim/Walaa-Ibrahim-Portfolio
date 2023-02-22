import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { theme } from "@src/theme";
import Image from "next/image";
import { ProjectImgContainer } from "./common/mainStyles";
import Link from "next/link";
type projectPageProps = {
  projectId: string | string[];
  data: {
    id: string;
    src: string;
    link: string;
    github: string;
    name: string;
    desc: string;
    techSkill: string[];
    isFullLink: boolean;
  }[];
};
const ProjectPage = ({ data, projectId }: projectPageProps) => {
  const getProject = data.find((project) => {
    if (project.id === projectId) {
      return project;
    }
  });
  return (
    <Stack
      direction={"column"}
      sx={{
        [theme.breakpoints.up("md")]: {
          pt: "100px",
        },
      }}
    >
      <ProjectImgContainer>
        {getProject?.isFullLink ? (
          <Link href={getProject?.link} >
            {" "}
            <Image
              src={getProject?.src}
              alt={getProject?.name}
              layout="fill"
              objectFit="cover"
            />
          </Link>
        ) : (
          <Image
            src={getProject?.src}
            alt={getProject?.name}
            layout="fill"
            objectFit="cover"
          />
        )}
      </ProjectImgContainer>

      <Box sx={{ textAlign: "center", my: "20px" }}>
        <Typography variant="h5">{getProject?.name}</Typography>
        <Typography my="20px">{getProject?.desc}</Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Used Technologies are :
        </Typography>
        <ul style={{ margin: "10px auto", width: "fit-content" }}>
          {getProject?.techSkill.map((el) => (
            <li key={el} style={{ padding: "3px 0" }}>
              {el}
            </li>
          ))}
        </ul>
      </Box>
    </Stack>
  );
};
export default ProjectPage;
