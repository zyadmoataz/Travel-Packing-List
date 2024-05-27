//There are two types of exports:
//1-Named Export > We will create an export called logo, then we have to import with exactly that name into other file.

import { HiBriefcase } from "react-icons/hi2";

//2-Default Export > Usually used in React, We can use any name we want when we import it as its default export.
export default function Logo() {
  return (
    <h1>
      <span>
        <HiBriefcase />
      </span>
      <span> Trip Planner</span>
    </h1>
  );
}
