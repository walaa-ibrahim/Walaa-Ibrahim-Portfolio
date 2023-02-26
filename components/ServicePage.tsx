import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FirstLetter, MainText, SkillSection } from "./common/mainStyles";
import Link from "next/link";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { theme } from "@src/theme";
import axios from "axios";
const ServicePage = () => {
  const [skills, setSkills] = useState([{ src: "", title: "" }]);
  const [experiences, setExperiences] = useState([]);
  const getSkills = async () => {
    const res = await axios.get("/api/skills");
    const data = res.data.skillsData;
    setSkills(data);
  };
  const getExperiences=async () => {
    const res = await axios.get("/api/experience");
    const data = res.data.experienceData;
    setExperiences(data)
  }
  useEffect(() => {
    getSkills();
    getExperiences()
  }, []);
  return (
    <>
      <MainText
        variant="h3"
        sx={{
          margin: "110px 0 80px",
          [theme.breakpoints.down("md")]: {
            margin: "0 0 40px",
            fontSize: "1.8rem",
          },
        }}
      >
        <FirstLetter>S</FirstLetter>kills &nbsp;<FirstLetter>E</FirstLetter>
        xperiences
      </MainText>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          margin: "0 auto 35px",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <>
          {skills.map((el) => (
            <SkillSection key={el.title}>
              <Image
                src={el.src}
                alt={el.title}
                width={50}
                height={0}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </SkillSection>
          ))}
        </>
      </Stack>
      <VerticalTimeline lineColor={theme.palette.primary.main}>
        {experiences.map((experience, indx) => (
          <VerticalTimelineElement
            key={indx}
            className="vertical-timeline-element--work"
            style={{ margin: "2em 0" }}
            date={experience.date}
            iconStyle={{
              background: theme.palette.success.main,
              color:
                experience.experDes === "school"
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
            }}
            icon={
              experience.experDes === "school" ? <SchoolIcon /> : <WorkIcon />
            }
          >
            <h4 className="vertical-timeline-element-title">
              {experience.name}{" "}
              {experience.experDes === "work"
                ? "at"
                : experience.experDes === "freelane"
                ? "as Freelancer"
                : "in"}
              &nbsp;
              {experience.hasLink && (
                <Link href={experience.link}>{experience.linkName}</Link>
              )}
            </h4>
            <p>{experience.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};
export default ServicePage;
