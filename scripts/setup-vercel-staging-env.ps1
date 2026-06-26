# Documents Vercel env vars for dev / staging / production.
# vite.config.js auto-detects environment; set these in Vercel Dashboard for explicit overrides.
# Requires: Vercel CLI authenticated via `npx vercel login`
# Run from repo root: .\scripts\setup-vercel-staging-env.ps1

$ErrorActionPreference = "Stop"

$ProductionUrl = "https://arslan-jaffar-portfolio.vercel.app"
$StagingUrl = "https://arslan-jaffar-portfolio-git-staging-arslanbinjaffar.vercel.app"
$LocalUrl = "http://localhost:3000"

Write-Host "Linking project (if needed)..."
npx vercel@latest link --yes 2>&1 | Out-Null

Write-Host ""
Write-Host "Vercel Dashboard (Settings -> Environment Variables):"
Write-Host ""
Write-Host "  Production (branch: main)"
Write-Host "    VITE_SITE_URL = $ProductionUrl"
Write-Host "    VITE_NOINDEX  = false (or leave unset)"
Write-Host ""
Write-Host "  Preview (branch: staging only)"
Write-Host "    VITE_SITE_URL = $StagingUrl"
Write-Host "    VITE_NOINDEX  = true"
Write-Host ""
Write-Host "  Development (vercel dev)"
Write-Host "    VITE_SITE_URL = $LocalUrl"
Write-Host "    VITE_NOINDEX  = true"
Write-Host ""
Write-Host "Local dev: copy .env.example dev section to .env.local"
Write-Host "Production branch: main | Staging branch: staging"
Write-Host "vercel.json limits deployments to main + staging only."
