import React, { memo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import * as Collapsible from "@radix-ui/react-collapsible";
import { NAV_GROUPS, getGroupItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import { useNavActive } from "./useNavActive";

function MobileNavGroup({ groupKey, defaultOpen = false, onNavigate }) {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(defaultOpen);
  const { isGroupActive } = useNavActive();
  const group = NAV_GROUPS[groupKey];
  const items = getGroupItems(groupKey);

  if (!group) return null;

  const active = isGroupActive(groupKey);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger
        className={cn(
          "flex w-full items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors",
          "hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          active ? "text-accent" : "text-text-primary"
        )}
        aria-expanded={open}
      >
        {t(group.labelKey)}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
        <ul className="list-none m-0 p-0 ps-2 pb-1 space-y-0.5">
          {items.map((item) => (
            <li key={item.key}>
              <NavLink item={item} variant="mobile" onClick={onNavigate} />
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export default memo(MobileNavGroup);
