import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { navigations } from "./NavigationList";
import SidebarAccordion from "./SidebarAccordion";
import {
  ListLabel,
  BadgeValue,
  StyledText,
  BulletIcon,
  NavWrapper,
  ExternalLink,
  NavItemButton,
  SidebarWrapper,
  ChevronLeftIcon,
  ListIconWrapper,
} from "./LayoutStyledComponents";
import { useDispatch } from "react-redux";
import LayoutDrawer from "./LayoutDrawer";
import { FlexBetween } from "@/components/flex-box";
import Scrollbar from "./Scrollbar";
const TOP_HEADER_AREA = 70;

// -----------------------------------------------------------------------------
type DashboardSidebarProps = {
  sidebarCompact: any;
  showMobileSideBar: any;
  setSidebarCompact: () => void;
  setShowMobileSideBar: () => void;
};
// -----------------------------------------------------------------------------

const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact,
  } = props;

  const router = useRouter();
  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  // side hover when side bar is compacted
  const COMPACT = sidebarCompact && !onHover ? 1 : 0;
  // handle active current page
  const activeRoute = (path: string) => (router.pathname === path ? 1 : 0);
  const handleLogout = () => {};

  // handle navigate to another route and close sidebar drawer in mobile device
  const handleNavigation = (path: string) => {
    router.push(path);
    setShowMobileSideBar();
  };

  // const renderLevels = (data) => {
  //   return data.map((item, index) => {
  //     // console.log("item", item);
  //     if (item.children) {
  //       console.log("inside if");
  //       return (
  //         <SidebarAccordion key={index} item={item} sidebarCompact={COMPACT}>
  //           {renderLevels(item.children)}
  //         </SidebarAccordion>
  //       );
  //     } else {
  //       console.log("inside else");

  //       return (
  //         <NavItemButton
  //           key={index}
  //           className="navItem"
  //           active={activeRoute(item.path)}
  //           onClick={() => handleNavigation(item.path)}
  //         >
  //           {item?.icon ? (
  //             <ListIconWrapper>
  //               <item.icon />
  //             </ListIconWrapper>
  //           ) : (
  //             <BulletIcon active={activeRoute(item.path)} />
  //           )}

  //           <StyledText compact={COMPACT}>{item.name}</StyledText>

  //           {item.badge && (
  //             <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
  //           )}
  //         </NavItemButton>
  //       );
  //     }
  //   });
  // };

  const content = (
    <Scrollbar
      autoHide
      clickOnTrack={false}
      sx={{
        overflowX: "hidden",
        maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
      }}
    >
      <NavWrapper compact={sidebarCompact}>
        {/* {renderLevels(navigations)} */}
        <List>
          <ListItem>
            <ListItemText
              primary="General"
              primaryTypographyProps={{
                color: "black",
                fontSize: 15,
                fontWeight: 600,
              }}
            />
          </ListItem>
          <List disablePadding>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/Home.svg" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Project Overview" />
            </ListItem>
          </List>
          <ListItem>
            <ListItemText
              primary="Survey"
              primaryTypographyProps={{
                color: "black",
                fontSize: 15,
                fontWeight: 600,
              }}
            />
          </ListItem>
          <List disablePadding>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/Two-user.svg" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Team" />
            </ListItem>
            <ListItem
              sx={{
                pl: 4,
                cursor: "pointer",
                backgroundColor: "#e7effc",
                borderRadius: 3,
              }}
            >
              <ListItemIcon>
                <img src="/assets/Location.png" alt="icon" />
              </ListItemIcon>
              <ListItemText
                primary="Map"
                primaryTypographyProps={{
                  color: "black",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              />
            </ListItem>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/Note.png" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Form" />
            </ListItem>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/Mask.png" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Logs" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Data"
                primaryTypographyProps={{
                  color: "black",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              />
            </ListItem>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/Sort.png" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Responses" />
            </ListItem>
            <ListItem sx={{ pl: 4, cursor: "pointer" }}>
              <ListItemIcon>
                <img src="/assets/mask-group.png" alt="icon" />
              </ListItemIcon>
              <ListItemText primary="Insights" />
            </ListItem>
          </List>
        </List>
      </NavWrapper>
    </Scrollbar>
  );

  if (downLg) {
    return (
      <LayoutDrawer
        open={showMobileSideBar ? true : false}
        onClose={setShowMobileSideBar}
      >
        <Box p={2} maxHeight={TOP_HEADER_AREA}>
          <Image
            alt="Logo"
            width={105}
            height={50}
            src="/assets/logo.svg"
            style={{ marginLeft: 8 }}
          />
        </Box>

        {content}
      </LayoutDrawer>
    );
  }

  return (
    <SidebarWrapper
      compact={sidebarCompact ? 1 : 0}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween
        p={4}
        mt={3}
        maxHeight={TOP_HEADER_AREA}
        justifyContent={COMPACT ? "center" : "space-between"}
      >
        <img
          src={COMPACT ? "/assets/logo.svg" : "/assets/logo.svg"}
          style={{
            borderRadius: 0,
            // width: "auto",
            marginLeft: COMPACT ? 0 : 2,
            width: "186px",
            height: "63px",
            fontWeight: 700,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        />

        <ChevronLeftIcon
          color="disabled"
          compact={COMPACT}
          onClick={setSidebarCompact}
          sidebarcompact={sidebarCompact ? 1 : 0}
        />
      </FlexBetween>

      {content}
    </SidebarWrapper>
  );
};

export default DashboardSidebar;
