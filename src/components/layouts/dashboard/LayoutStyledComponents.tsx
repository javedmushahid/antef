import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { alpha, Box, ButtonBase, styled, Typography } from "@mui/material";

// ===============================================================
type Active = { active: any };
type Compact = { compact: any };
type CollapseCompact = { collapsed: number; compact: any };
type ChevronLeftProps = { sidebarcompact: any; compact: any };
// ===============================================================

const SidebarWrapper = styled(Box)<Compact>(({ theme, compact }) => ({
  height: "100vh",
  borderRight: "1px solid #DFE5EA",
  position: "fixed",
  width: compact ? 86 : 280,
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  color: theme.palette.common.black,
  backgroundColor: "white",
  "&:hover": compact && { width: 280 },
}));

const NavWrapper = styled(Box)<Compact>({
  height: "100%",
  paddingLeft: 16,
  paddingRight: 16,
});

const NavItemButton = styled(ButtonBase)<Active>(({ theme, active }) => ({
  height: 44,
  width: "100%",
  borderRadius: 8,
  marginBottom: 4,
  padding: "0 12px 0 16px",
  justifyContent: "flex-start",
  transition: "all 0.15s ease",
  ...(active && {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.grey[800], 0.6),
    "& .MuiSvgIcon-root .secondary": {
      color: theme.palette.info.main,
      opacity: 1,
    },
  }),
}));

const ListLabel = styled(Typography)<Compact>(({ compact }) => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "20px",
  marginLeft: "15px",
  marginBottom: "10px",
  textTransform: "uppercase",
  transition: "all 0.15s ease",
  ...(compact && { opacity: 0, width: 0 }),
}));

const ListIconWrapper = styled(Box)(({ theme }) => ({
  width: 22,
  height: 22,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginRight: "0.8rem",
  justifyContent: "center",
  "& svg": {
    width: "100%",
    height: "100%",
    color: theme.palette.text.disabled,
  },
}));

const ExternalLink = styled("a")({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
});

const StyledText = styled(Typography)<Compact>(({ compact }) => ({
  whiteSpace: "nowrap",
  // paddingLeft: "0.8rem",
  transition: "all 0.15s ease",
  ...(compact && { opacity: 0, width: 0 }),
}));

const BulletIcon = styled("div")<Active>(({ theme, active }) => ({
  width: 3,
  height: 3,
  marginLeft: "10px",
  overflow: "hidden",
  borderRadius: "50%",
  marginRight: "1.3rem",
  background: active ? theme.palette.info.main : theme.palette.common.white,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
}));

const BadgeValue = styled(Box)<Compact>(({ compact }) => ({
  padding: "1px 8px",
  overflow: "hidden",
  borderRadius: "300px",
  display: compact ? "none" : "unset",
}));

const ChevronLeftIcon = styled(ChevronLeft)<ChevronLeftProps>(
  ({ compact, sidebarcompact }) => ({
    color: "rgba(255, 255, 255, .6)",
    cursor: "pointer",
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: "50%",
    transition: "all 0.3s",
    display: compact ? "none" : "block",
    transform: sidebarcompact ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": {
      background: "rgba(255, 255, 255, .05)",
      color: "rgba(255, 255, 255, 1)",
    },
  })
);

const ChevronRightIcon = styled(ChevronRight)<CollapseCompact>(
  ({ collapsed, compact, theme: { direction } }) => ({
    fontSize: 18,
    color: "white",
    transform: collapsed ? "0deg" : "rotate(90deg)",
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    ...(compact && { display: "none", width: 0 }),
    ...(collapsed && direction === "rtl" && { transform: "rotate(180deg)" }),
  })
);

export {
  ListLabel,
  NavWrapper,
  StyledText,
  BulletIcon,
  BadgeValue,
  ExternalLink,
  NavItemButton,
  SidebarWrapper,
  ListIconWrapper,
  ChevronLeftIcon,
  ChevronRightIcon,
};
