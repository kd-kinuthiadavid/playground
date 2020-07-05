import React from "react";
import { ProgressLoader, LoaderCircle } from "./styles";

const Loader = () => {
  return (
    <ProgressLoader>
      <LoaderCircle />
      <LoaderCircle />
      <LoaderCircle />
    </ProgressLoader>
  );
};

export default Loader;
