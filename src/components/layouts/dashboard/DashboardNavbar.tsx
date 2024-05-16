import { FC } from "react";
import {
  Box,
  Button,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";

import AccountPopover from "./popovers/AccountPopover";
import { FlexBox, FlexRowCenter } from "@/components/flex-box";

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));

const StyledToolBar = styled(Toolbar)({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
});

const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
}));

const CustomButton = styled(Button)(({ theme }) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 300,
  padding: "0 20px",
  borderRadius: "8px",
  color: "#065AD8",
  backgroundColor: "#e7effc",
  [theme.breakpoints.down("xs")]: { display: "none" },
}));

// ===================================================================
type DashboardNavbarProps = {
  handleDrawerToggle: () => void;
};
// ===================================================================

const DashboardNavbar: FC<DashboardNavbarProps> = ({ handleDrawerToggle }) => {
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          <Typography variant="h6" ml={2} color={"black"}>
            Kenny Eliason
          </Typography>

          <CustomButton
          // onClick={() => router.push("/")}
          >
            Your plan expires in 20 days
          </CustomButton>
          <Box flexGrow={1} />
          <FlexBox alignItems="center" gap={2}>
            {/* <StyledInputBase
              placeholder="Search anything..."
              startAdornment={<Search sx={{ color: "grey.500", mr: 1 }} />}
            /> */}
            <Button color="info" variant="contained" size="medium">
              Recharge
            </Button>
            <AccountPopover />
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
};
export default DashboardNavbar;
