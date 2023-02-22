import React, { FC, ReactNode } from "react";
import { Grid, Stack,  useMediaQuery ,Box} from "@mui/material";
import LeftNavbar from "@/components/common/LeftNavbar";
import Info from "@/components/common/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SocialLinks from "@/components/common/socialLinks";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@src/theme";
import { Container } from "@mui/system";
type DefaultLayoutProps = {
  children: ReactNode;
  isMain?: boolean;
  isAuto?: boolean;
  hasTop?: boolean;
};

const DefaultLayout: FC<DefaultLayoutProps> = (props: DefaultLayoutProps) => {
  const {
    children,
    isMain,
    isAuto,
    hasTop
  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          minWidth: "32px",
          top: "1rem",
          right: "1rem",
          zIndex: 10000,
          background: theme.palette.primary.main,
          color: theme.palette.primary.light,
          width: "32px",
          height: "29px",
          display: !matches ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2px",
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
          },
        }}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
      <Grid item container>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            background: theme.palette.secondary.main,
            color: theme.palette.primary.light,
            position: !matches && "relative",
            left: mobileOpen ? 0 : "-120%",
            transition: ".5s ease-out",
            zIndex: 999,
            height: isAuto ? "auto" : "100vh",
          }}
        >
          <Box>
            <Info mobileOpen={mobileOpen} />
            <Container
              sx={{
                paddingTop: !mobileOpen ? "20px" : "33px",
              }}
            >
              <LeftNavbar />
              <SocialLinks />
            </Container>
          </Box>
        </Grid>
        <Grid
          item
          md={9}
          xs={12}
          sx={{
            [theme.breakpoints.down("md")]: {
              position: "absolute",
              top: !hasTop ? "15%" : "0",
              width: "100%",
              display: !mobileOpen ? "block" : "none",
            },
          }}
        >
          <Stack
            sx={{
              height: "100vh",
              overflow: "auto",
              display: isMain && "flex",
              justifyContent: isMain && "center",
              alignItems: isMain && "center",
              [theme.breakpoints.down("md")]: {
                height: hasTop ? "100vh" : "100%",
                mx: "16px",
              },
            }}
          >
            {children}
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default DefaultLayout;
