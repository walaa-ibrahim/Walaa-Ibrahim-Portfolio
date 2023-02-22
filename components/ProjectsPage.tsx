import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress, Pagination } from "@mui/material";
import {
  FirstLetter,
  LinksSection,
  MainText,
  ProjectImages,
  ProjectLinks,
  ProjectSection,
} from "./common/mainStyles";
import axios from "axios";
import { theme } from "@src/theme";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
export const ProjectsPage = () => {
  const [ProjectData, setProjectData] = useState([]);
  let [limit, setLimit] = useState(6);
    let [skip, setSkip] = useState(0);
const [totalPages,setTotalPages]=useState(0)
   const [isLoading, setIsLoading] = useState(false);
   const [pagination, setPagination] = useState({
     count: 0,
     from: 0,
     to: limit,
   });
          console.log("from", skip);

  const getProjects = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `/api/projects`
    );
    setTotalPages(res.data.ProjectData.length);
    const data = res.data.ProjectData;
    setProjectData(data);
            setIsLoading(false);

  };
  const paginationHandeler = (e) => {
    setIsLoading(true);
    const from = (e.target.innerText - 1) * limit;
    const to = (e.target.innerText - 1) * limit + limit;

    setPagination({ ...pagination, from: from, to: to });
    setSkip((skip += limit));


  };
  useEffect(() => {

    getProjects()

  },[skip])
  return (
    <>
      <MainText
        variant="h3"
        sx={{
          margin: "100px 0 80px",
          [theme.breakpoints.down("md")]: {
            margin: "0 0 40px",
            fontSize: "1.8rem",
          },
        }}
      >
        <FirstLetter>P</FirstLetter>rojects
      </MainText>
      <Grid
        item
        container
        sx={{
          [theme.breakpoints.up("md")]: {
            padding: "0 50px",
          },
        }}
      >
        {ProjectData?.map((project) => (
          <>
            <Grid
              xs={12}
              md={4}
              textAlign="center"
              mb="35px"
              sx={{
                [theme.breakpoints.up("md")]: {
                  px: "10px",
                },
              }}
            >
              <ProjectSection>
                <ProjectImages className="imgSection">
                  <Image
                    src={project.src}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                </ProjectImages>
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    left: "10px",
                  }}
                >
                  {project.name}
                </Typography>
                <LinksSection>
                  <ProjectLinks href={`projects/${project.id}`}>
                    <ArrowOutwardIcon />
                  </ProjectLinks>
                  <ProjectLinks
                    href={project.link}
                    target="_blank"
                    sx={{
                      pointerEvents: !project.isFullLink && "none",
                      opacity: !project.isFullLink && 0.4,
                    }}
                  >
                    <LinkIcon sx={{ transform: " rotate(137deg)" }} />
                  </ProjectLinks>
                  <ProjectLinks
                    href={project.github}
                    target="_blank"
                    sx={{
                      pointerEvents: !project.isFullLink && "none",
                      opacity: !project.isFullLink && 0.4,
                    }}
                  >
                    <GitHubIcon />
                  </ProjectLinks>
                </LinksSection>
              </ProjectSection>
            </Grid>
          </>
        ))}

        {isLoading && <CircularProgress sx={{ margin: "auto" }} />}
      </Grid>
      {/* <Pagination
        onChange={paginationHandeler}
        count={Math.ceil(totalPages / limit)}
        shape="rounded"
        size="small"
        sx={{
          margin: "auto",
          ".MuiPaginationItem-page": {
            color: theme.palette.text.secondary,
            borderRadius: "50%",
            minWidth: "30px",
            height: "30px",
            lineHeight: "30px",
            mx: "6px",
            mb: "25px",
          },
          ".MuiPaginationItem-sizeSmall": {
            fontSize: "17px",
          },
          ".Mui-selected": {
            color: theme.palette.primary.main,
          },
          ".MuiPaginationItem-previousNext": {
            borderRadius: "50%",
            minWidth: "30px",
            height: "30px",
            lineHeight: "30px",
            mx: "6px",
            mb: "25px",
          },
          ".MuiPaginationItem-icon": {
            color: theme.palette.text.secondary,
          },
        }}
      /> */}
    </>
  );
};
