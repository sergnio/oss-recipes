import { NavLink } from "remix";
import { allRecipesRoute, newRecipesRoute } from "~/routes/allRoutes";
import { CSSProperties, FC } from "react";
import StyledLi from "~/components/StyledLi/StyledLi";

const routes: { name: string; route: string }[] = [
  { name: "All Recipes", route: allRecipesRoute },
  { name: "New Recipe", route: newRecipesRoute },
];

export default () => {
  const commonStyles: CSSProperties = {
    padding: "1em",
  };

  const activeStyle: CSSProperties = {
    textDecoration: "underline",
    color: "purple",
    ...commonStyles,
  };

  const inactiveStyle: CSSProperties = {
    textDecoration: "none",
    ...commonStyles,
  };

  return (
    <nav>
      <ul>
        <StyledLi>
          {routes.map((r) => (
            <NavLink
              to={r.route}
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              {r.name}
            </NavLink>
          ))}
        </StyledLi>
      </ul>
    </nav>
  );
};
