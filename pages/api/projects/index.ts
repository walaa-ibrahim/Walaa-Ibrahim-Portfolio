import { ProjectData } from "@data/ProjectData";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ProjectData: {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const query = req.query;
  const { page, limit } = query;
  res.status(200).json({ ProjectData })
}
