import React, { memo } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NAV_TOP_LEVEL } from "@/config/navigation";
import NavLink from "./NavLink";
import { NavDropdown, NavDropdownMenu } from "./NavDropdown";
import NavActions from "./NavActions";

function DesktopNav() {
  return (
    <div className="flex flex-1 items-center min-w-0 ms-4">
      <NavDropdownMenu className="flex-1 flex justify-center min-w-0">
        {NAV_TOP_LEVEL.map((entry) => {
          if (entry.type === "dropdown") {
            return <NavDropdown key={entry.group} groupKey={entry.group} />;
          }

          return (
            <NavigationMenu.Item key={entry.key}>
              <NavigationMenu.Link asChild>
                <NavLink item={entry} className="whitespace-nowrap" />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavDropdownMenu>

      <div className="flex items-center gap-2 shrink-0 ms-4">
        <NavActions showHireMe />
      </div>
    </div>
  );
}

export default memo(DesktopNav);
