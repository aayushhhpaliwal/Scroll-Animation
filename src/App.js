import React, { useRef } from "react";
import "./styles.css";
import Screen1 from "./Screen1";
import { Box } from "./box";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Services from "./Services";

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

const Container = ({ children }) => {
  const ref = useRef();

  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <SnapParent
        ref={ref}
        style={{
          position: "absolute"
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

function ScrollSample() {
  return (
    <Container>
      <Box >
      <Screen1 /></Box>
      <Box ><Screen2/></Box>
      <Box> <Screen3 /></Box>
      <Box></Box>
    </Container>
  );
}

export default function App() {
  return (
    <div>
      <ScrollSample />
    </div>
  );
}
