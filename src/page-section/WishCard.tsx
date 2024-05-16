import { FC } from "react";
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

const WishCard: FC = () => {
  return (
    <Card
      sx={{
        p: 3,
        width: "400px",
        height: "84vh",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="medium"
            color="info"
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBox />}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <img
              src="/assets/Rectangle.png"
              alt=""
              style={{ marginRight: 8 }}
            />
            <Typography
              // variant="body1"
              fontSize={15}
              color="black"
              fontWeight={600}
            >
              Survey Area
            </Typography>
            <img src="/assets/dots.png" alt="" style={{ marginLeft: 50 }} />
          </Box>
        }
        sx={{ my: 1 }}
      />
      {/* Checkbox for survey area 2 */}
      <FormControlLabel
        control={
          <Checkbox
            size="medium"
            color="info"
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBox />}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <img src="/assets/rec.png" alt="" style={{ marginRight: 8 }} />
            <Typography
              variant="body1"
              fontSize={15}
              color="black"
              fontWeight={600}
            >
              Survey Area
            </Typography>
            <img src="/assets/dots.png" alt="" style={{ marginLeft: 50 }} />
          </Box>
        }
        sx={{ my: 1 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            size="medium"
            color="info"
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBox />}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <div
              style={{
                width: "28px",
                height: "28px",
                border: "0.7px solid gray",
                borderRadius: "50%",
                backgroundColor: "#d07fe4",
                marginRight: "10px", // Adjust spacing as needed
              }}
            />
            <Typography
              variant="body1"
              fontSize={15}
              color="black"
              fontWeight={600}
            >
              Survey Area
            </Typography>
            <img src="/assets/dots.png" alt="" style={{ marginLeft: 50 }} />
          </Box>
        }
        sx={{ my: 1 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="medium"
            color="info"
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBox />}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <img src="/assets/Polygon.png" alt="" style={{ marginRight: 8 }} />
            <Typography
              variant="body1"
              fontSize={15}
              color="black"
              fontWeight={600}
            >
              Survey Area
            </Typography>
            <img src="/assets/dots.png" alt="" style={{ marginLeft: 53 }} />
          </Box>
        }
        sx={{ my: 1 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="medium"
            color="info"
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBox />}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <img src="/assets/Star.png" alt="" style={{ marginRight: 8 }} />
            <Typography
              variant="body1"
              fontSize={15}
              color="black"
              fontWeight={600}
            >
              Survey Area
            </Typography>
            <img src="/assets/dots.png" alt="" style={{ marginLeft: 50 }} />
          </Box>
        }
        sx={{ my: 1 }}
      />
    </Card>
  );
};

export default WishCard;
