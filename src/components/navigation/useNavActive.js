import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";
import { getGroupItems } from "@/config/navigation";

export function useNavActive() {
  const location = useLocation();
  const { isActivePath } = useLocale();

  const isItemActive = useCallback(
    (item) => {
      if (item.external) return false;

      if (item.hash) {
        const path = item.to || "/";
        return isActivePath(path) && location.hash === `#${item.hash}`;
      }

      if (item.key === "aboutMe") {
        return isActivePath("/about") && location.hash !== "#education";
      }

      if (item.to) {
        return isActivePath(item.to) && !location.hash;
      }

      return false;
    },
    [isActivePath, location.hash]
  );

  const isGroupActive = useCallback(
    (groupKey) => getGroupItems(groupKey).some((item) => isItemActive(item)),
    [isItemActive]
  );

  const isTopLinkActive = useCallback(
    (entry) => {
      if (entry.hash) {
        return isActivePath(entry.to) && location.hash === `#${entry.hash}`;
      }
      return isActivePath(entry.to) && !location.hash;
    },
    [isActivePath, location.hash]
  );

  return { isItemActive, isGroupActive, isTopLinkActive };
}
