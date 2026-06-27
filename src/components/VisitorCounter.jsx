import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";

const VISITOR_ID_KEY = "portfolio_visitor_id";
const VISITOR_RECORDED_KEY = "portfolio_visitor_recorded";

function getVisitorId() {
  let id = sessionStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

function VisitorCounter({ className }) {
  const { t } = useTranslation("common");
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const visitorId = getVisitorId();
        const recorded = sessionStorage.getItem(VISITOR_RECORDED_KEY);

        if (!recorded) {
          const postRes = await fetch("/api/visitor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ visitorId }),
          });
          if (postRes.ok) {
            sessionStorage.setItem(VISITOR_RECORDED_KEY, "1");
          }
        }

        const getRes = await fetch("/api/visitor");
        if (!getRes.ok) return;
        const data = await getRes.json();
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
        }
      } catch {
        /* hide silently when API unavailable */
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className={`inline-flex items-center gap-2 text-sm text-text-secondary ${className || ""}`}>
      <FaEye className="text-accent shrink-0" aria-hidden="true" />
      <span>
        {t("visitorCounter.label", { count: count.toLocaleString() })}
      </span>
    </p>
  );
}

export default VisitorCounter;
