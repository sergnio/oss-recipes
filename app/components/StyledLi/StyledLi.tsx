import { FC } from "react";

const StyledLi: FC = ({ children }) => (
  <li style={{ listStyle: "none", color: "unset" }}>{children}</li>
);

export default StyledLi;
