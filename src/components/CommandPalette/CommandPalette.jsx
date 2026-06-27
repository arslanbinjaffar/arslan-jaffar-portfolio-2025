import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaArrowUp,
  FaCopy,
  FaFolderOpen,
  FaMoon,
  FaSearch,
  FaSun,
} from "react-icons/fa";
import { ThemeContext } from "@/App";
import { contactConfig } from "@/config/site";
import { useLocale } from "@/context/LocaleContext";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useProjects } from "@/hooks/useProjects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { flattenNavItems, getNavLabelKey } from "@/config/navigation";

function CommandPalette() {
  const { t } = useTranslation("common");
  const { localizePath } = useLocale();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { projects, backendProjects } = useProjects();
  const { copy } = useCopyToClipboard();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const allProjects = useMemo(
    () => [...projects, ...backendProjects],
    [projects, backendProjects]
  );

  const commands = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (text) => !q || text.toLowerCase().includes(q);

    const nav = flattenNavItems()
      .filter((item) => match(t(getNavLabelKey(item))))
      .map((item) => ({
        id: `nav-${item.key}`,
        group: t("commandPalette.groups.navigate"),
        label: t(getNavLabelKey(item)),
        icon: FaFolderOpen,
        run: () => {
          if (item.external || item.href) {
            window.open(item.href, "_blank", "noopener,noreferrer");
            return;
          }
          const path = item.hash
            ? `${localizePath(item.to || "/")}#${item.hash}`
            : localizePath(item.to);
          navigate(path);
        },
      }));

    const projectCmds = allProjects
      .filter((p) => match(p.title) || match(p.description || ""))
      .map((p) => ({
        id: `project-${p.title}`,
        group: t("commandPalette.groups.projects"),
        label: p.title,
        icon: FaSearch,
        run: () => {
          const params = new URLSearchParams({ q: p.title });
          navigate(`${localizePath("/project")}?${params.toString()}`);
        },
      }));

    const actions = [
      {
        id: "copy-email",
        group: t("commandPalette.groups.actions"),
        label: t("commandPalette.actions.copyEmail"),
        icon: FaCopy,
        hidden: !match(t("commandPalette.actions.copyEmail")) && !match(contactConfig.email),
        run: () => copy(contactConfig.email),
      },
      {
        id: "toggle-theme",
        group: t("commandPalette.groups.actions"),
        label:
          theme === "dark"
            ? t("commandPalette.actions.lightMode")
            : t("commandPalette.actions.darkMode"),
        icon: theme === "dark" ? FaSun : FaMoon,
        hidden:
          !match(t("commandPalette.actions.lightMode")) &&
          !match(t("commandPalette.actions.darkMode")),
        run: toggleTheme,
      },
      {
        id: "scroll-top",
        group: t("commandPalette.groups.actions"),
        label: t("commandPalette.actions.scrollTop"),
        icon: FaArrowUp,
        hidden: !match(t("commandPalette.actions.scrollTop")),
        run: () => {
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth",
          });
        },
      },
    ].filter((a) => !a.hidden);

    return [...nav, ...projectCmds, ...actions];
  }, [query, t, allProjects, navigate, localizePath, copy, theme, toggleTheme]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  const runCommand = useCallback(
    (cmd) => {
      cmd.run();
      setOpen(false);
    },
    []
  );

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, commands.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && commands[activeIndex]) {
      e.preventDefault();
      runCommand(commands[activeIndex]);
    }
  };

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const grouped = useMemo(() => {
    const map = new Map();
    commands.forEach((cmd) => {
      if (!map.has(cmd.group)) map.set(cmd.group, []);
      map.get(cmd.group).push(cmd);
    });
    return map;
  }, [commands]);

  let flatIndex = -1;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden" showCloseButton>
        <DialogHeader className="sr-only">
          <DialogTitle>{t("commandPalette.title")}</DialogTitle>
          <DialogDescription>{t("commandPalette.placeholder")}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <FaSearch className="text-text-secondary shrink-0" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder={t("commandPalette.placeholder")}
            className="border-0 shadow-none focus-visible:ring-0 px-0 h-auto text-base"
            aria-controls="command-palette-list"
            aria-activedescendant={
              commands[activeIndex] ? `cmd-${commands[activeIndex].id}` : undefined
            }
          />
          <kbd className="hidden sm:inline text-xs text-text-secondary border border-border rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>
        <div
          id="command-palette-list"
          ref={listRef}
          className="max-h-72 overflow-y-auto p-2"
          role="listbox"
        >
          {commands.length === 0 ? (
            <p className="text-sm text-text-secondary text-center py-6">
              {t("commandPalette.noResults")}
            </p>
          ) : (
            [...grouped.entries()].map(([group, items]) => (
              <div key={group} className="mb-2">
                <p className="text-xs font-medium text-text-secondary px-2 py-1 uppercase tracking-wide">
                  {group}
                </p>
                {items.map((cmd) => {
                  flatIndex += 1;
                  const idx = flatIndex;
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      id={`cmd-${cmd.id}`}
                      type="button"
                      data-index={idx}
                      role="option"
                      aria-selected={activeIndex === idx}
                      onClick={() => runCommand(cmd)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={cn(
                        "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-start transition-colors",
                        activeIndex === idx
                          ? "bg-accent/15 text-accent"
                          : "text-text-primary hover:bg-bg-secondary"
                      )}
                    >
                      <Icon className="shrink-0 text-text-secondary" />
                      <span className="truncate">{cmd.label}</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className="border-t border-border px-4 py-2 text-xs text-text-secondary flex items-center gap-3">
          <span>↑↓ {t("commandPalette.navigate")}</span>
          <span>↵ {t("commandPalette.select")}</span>
          <span className="ms-auto hidden sm:inline">
            <kbd className="border border-border rounded px-1">Ctrl</kbd>+
            <kbd className="border border-border rounded px-1">K</kbd>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommandPalette;
