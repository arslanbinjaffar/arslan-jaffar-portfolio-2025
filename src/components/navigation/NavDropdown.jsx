import React, { memo } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_GROUPS, getGroupItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import { useNavActive } from "./useNavActive";

function NavDropdown({ groupKey }) {
  const { t } = useTranslation("common");
  const { isGroupActive } = useNavActive();
  const group = NAV_GROUPS[groupKey];
  const items = getGroupItems(groupKey);
  const active = isGroupActive(groupKey);

  if (!group) return null;

  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger
        className={cn(
          "group inline-flex items-center gap-1 px-2.5 py-2 text-sm font-medium rounded-lg transition-colors",
          "hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "data-[state=open]:text-accent",
          active ? "text-accent" : "text-text-primary"
        )}
      >
        {t(group.labelKey)}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute start-0 top-full pt-2 z-50">
        <ul
          className="list-none m-0 p-2 min-w-[13rem] rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl"
          role="list"
        >
          {items.map((item) => (
            <li key={item.key}>
              <NavigationMenu.Link asChild>
                <NavLink item={item} variant="dropdown-item" showExternalIcon />
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function NavDropdownMenu({ children, className }) {
  return (
    <NavigationMenu.Root className={cn("relative", className)}>
      <NavigationMenu.List className="flex items-center gap-0.5 list-none m-0 p-0 flex-wrap justify-center">
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export { NavDropdown, NavDropdownMenu };
export default memo(NavDropdown);
