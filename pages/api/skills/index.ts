import type { NextApiRequest, NextApiResponse } from "next";
import { skillsData } from "@data/skillsData";

type Data = {
  skillsData: {
    src: string;
    title: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ skillsData });
}
