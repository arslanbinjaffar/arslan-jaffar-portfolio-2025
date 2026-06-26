# Requires: GitHub CLI (gh) authenticated via `gh auth login`
# Run from repo root: .\scripts\setup-github-branch-protection.ps1

$ErrorActionPreference = "Stop"
$Repo = "arslanbinjaffar/arslan-jaffar-portfolio-2025"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "GitHub CLI (gh) is required. Install: winget install GitHub.cli"
}

gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Error "Run 'gh auth login' first."
}

$protection = @{
  required_pull_request_reviews = @{
    dismiss_stale_reviews = $true
    required_approving_review_count = 0
  }
  enforce_admins = $false
  required_linear_history = $false
  allow_force_pushes = $false
  allow_deletions = $false
} | ConvertTo-Json -Depth 5 -Compress

foreach ($branch in @("main", "staging")) {
  Write-Host "Protecting branch: $branch"
  $protection | gh api --method PUT -H "Accept: application/vnd.github+json" "/repos/$Repo/branches/$branch/protection" --input -
  if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to protect branch: $branch"
  }
}

Write-Host "Done. main and staging now require pull requests before merging."
