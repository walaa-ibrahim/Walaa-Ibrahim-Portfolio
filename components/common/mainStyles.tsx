import { ListItem, styled, Typography,Box } from "@mui/material";
import { theme } from "@src/theme";
import Link from "next/link";
export const ListNav = styled(ListItem)(({}) => ({
  background: theme.palette.secondary.light,
  borderRadius: "20px",
  margin: "20px 0",
  padding: "12px 16px",
  display: "flex",
  justifyContent: "center",
  textTransform: "uppercase",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
export const MainSection = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
export const MainText = styled(Typography)<{}>(({}) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
   fontSize:"2.2rem"
  },
}));
export const FirstLetter = styled("span")(() => ({
  color:theme.palette.primary.main,
}));
export const SkillSection = styled(Box)(() => ({
  width: "80px",
  height: "80px",
  background: theme.palette.success.main,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px",
  transform: "none",
  transition:".6s ease-out",
  "&:hover": { transform: "scale(0.9)" },
}));
export const ProjectSection = styled(Box)(() => ({
  width: "100%",
  height: "200px",
  margin: "auto",
  border: `5px solid ${theme.palette.success.main}`,
  borderRadius: "5px",
  background: "white",
  boxShadow: "0 .5rem 1rem rgba(33,50,94,.1)",
  position: "relative",
  "&:hover": {
    "& .imgSection": {
      width: "75%",
      height: "75%",
      [theme.breakpoints.down("md")]: {
        width: "85%",
        height: "85%",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
}));
export const ProjectImages = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: ".6s ease-in-out",
  zIndex: 1,
}));
export const LinksSection = styled(Box)(() => ({
  position: "absolute",
  top: "5px",
  right: "10px",
}));
export const ProjectLinks = styled(Link)(() => ({
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  borderRadius: "5px",
  margin: "5px 0",
}));
export const ProjectImgContainer = styled(Box)(() => ({
  position: "relative",
  width: "70%",
  height: "300px",
  margin: "auto",
  border: `4px solid ${theme.palette.success.main}`,
  borderRadius: "5px",
  boxShadow: "0 1rem 1.5rem rgba(33,50,94,.1)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const IconSection = styled(Box)(() => ({
  color: theme.palette.primary.main,
  paddingTop: "10px",
}));