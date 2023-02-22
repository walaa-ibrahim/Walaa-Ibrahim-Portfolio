import { experienceData } from "@data/experienceData";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  experienceData: {
    name: string;
    link?: string;
    linkName?: string;
    date: string;
    desc: string;
    hasLink: boolean;
    experDes:string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ experienceData });
}
