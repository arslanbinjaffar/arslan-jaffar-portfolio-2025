import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { FaCodeBranch, FaStar, FaUsers } from "react-icons/fa";

const GITHUB_USERNAME =
  import.meta.env.VITE_GITHUB_USERNAME || "arslanbinjaffar";
const CACHE_KEY = "github_stats_cache";
const CACHE_TTL = 15 * 60 * 1000;

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    /* ignore */
  }
}

function StatCard({ icon: Icon, label, value, loading }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 text-center backdrop-blur-sm min-w-[120px]">
      <Icon className="text-accent text-xl mx-auto mb-2" />
      <div className="text-2xl font-bold text-text-primary">
        {loading ? "—" : value}
      </div>
      <div className="text-xs text-text-secondary mt-1">{label}</div>
    </div>
  );
}

function GitHubStats() {
  const { t } = useTranslation("about");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setStats(cached);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          axios.get(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { headers: { Accept: "application/vnd.github+json" } }
          ),
        ]);

        if (cancelled) return;

        const totalStars = reposRes.data.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );

        const data = {
          followers: userRes.data.followers,
          repos: userRes.data.public_repos,
          stars: totalStars,
        };

        writeCache(data);
        setStats(data);
        setFailed(false);
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed && !stats) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <StatCard
        icon={FaUsers}
        label={t("githubStats.followers")}
        value={stats?.followers?.toLocaleString()}
        loading={loading}
      />
      <StatCard
        icon={FaCodeBranch}
        label={t("githubStats.repos")}
        value={stats?.repos?.toLocaleString()}
        loading={loading}
      />
      <StatCard
        icon={FaStar}
        label={t("githubStats.stars")}
        value={stats?.stars?.toLocaleString()}
        loading={loading}
      />
    </div>
  );
}

export default GitHubStats;
