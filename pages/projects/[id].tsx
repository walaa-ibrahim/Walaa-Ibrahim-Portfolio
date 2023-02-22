import React, { useEffect, useState } from "react";

import ProjectPage from "@/components/ProjectPage";
import DefaultLayout from "@/layout/DefaultLayout";
import { useRouter } from "next/router";
import axios from "axios";


const Project = () => {
  const router = useRouter();
  const ProjectId = router?.query?.id;
  const [ProjectData, setProjectData] =
    useState([{
        id: "",
        src: "",
        link: "",
        github: "",
      name: "",
      desc: "",
    techSkill:  [""]
      }]);
  const getProjects = async () => {
    const res = await axios.get("/api/projects");
    const data = res.data.ProjectData;
    setProjectData(data);
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <DefaultLayout>
     <ProjectPage projectId={ProjectId} data={ProjectData} />
    </DefaultLayout>
  );
};
export default Project;
