import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProgressX(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          color: "#FF7E86",
          width: "100px!important",
          height: "100px!important",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          fontSize="24px"
          fontWeight={700}
          fontFamily={"DM Sans"}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Progress({ value }) {
  const [progress, setProgress] = React.useState(value);
  return <ProgressX value={progress} />;
}
