import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import docWithClipboard from "../../../images/DocWithClipboard.png";
import rocketData from "../../../lotties/rocket.json";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative"
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16
  },
  rocket: {
    position: "absolute",
    left: 147,
    top: 73,
    transform: "rotate(-12.5deg)"
  }
}));

export const DocImage = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={classes.container}>
      <img
        src={docWithClipboard}
        alt="doc-with-clipboard"
        className={classes.image}
      />
      <div className={classes.rocket}>
        <Lottie options={defaultOptions} height={75} width={55} />
      </div>
    </div>
  );
};
