import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Typography,
  Stack,
  Box,
  Chip,
} from "@mui/material";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "../assets/css/style.css";

const Posts = ({ data }) => {
  return (
    <>
      <Accordion sx={{ m: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`${data.id} - ${data.title}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ m: 2 }}>{data.body}</Typography>
          <div className="tags">
            <Box sx={{ mr: "3rem" }}>
              <Stack spacing={2} direction="row">
                <Badge
                  badgeContent={data.tags.length}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <SellOutlinedIcon sx={{ color: "gray" }} />
                </Badge>
                <Badge
                  badgeContent={data.reactions}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <ThumbUpOffAltIcon sx={{ color: "gray" }} />
                </Badge>
              </Stack>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Typography>Tags :-</Typography>
              {data.tags.map((tag, i) => (
                <Chip key={i} label={tag} variant="outlined" />
              ))}
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Posts;
