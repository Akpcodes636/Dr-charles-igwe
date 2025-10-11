"use client";

import React from "react";
import { ImSpinner3 } from "react-icons/im";

export default function Loader() {
  return (
    <div>
      <ImSpinner3
        size={40}
        className="animate-spin"
        color="black"
      />
    </div>
  );
}
