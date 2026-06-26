# Optional: set Vercel env vars explicitly (vite.config.js already auto-detects staging).
# Requires: Vercel CLI authenticated via `npx vercel login`
# Run from repo root: .\scripts\setup-vercel-staging-env.ps1

$ErrorActionPreference = "Stop"

$ProductionUrl = "https://arslan-jaffar-portfolio-2025.vercel.app"
$StagingUrl = "https://arslan-jaffar-portfolio-2025-git-staging-arslanbinjaffar.vercel.app"

Write-Host "Linking project (if needed)..."
npx vercel@latest link --yes 2>&1 | Out-Null

Write-Host "Setting production VITE_SITE_URL..."
"Y" | npx vercel@latest env add VITE_SITE_URL production --force 2>&1
# Note: vercel env add is interactive; prefer Vercel Dashboard:
Write-Host ""
Write-Host "Vercel Dashboard (Settings -> Environment Variables):"
Write-Host "  Production | VITE_SITE_URL = $ProductionUrl"
Write-Host "  Preview (branch: staging) | VITE_SITE_URL = $StagingUrl"
Write-Host "  Preview (branch: staging) | VITE_NOINDEX = true"
Write-Host ""
Write-Host "Stable staging URL: $StagingUrl"
Write-Host "Production branch should remain: main"
