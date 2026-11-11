#!/usr/bin/env bash
# Netlify "ignore" command (netlify.toml [build] ignore). Exit 0 skips this build; any other exit builds it.
#
# Why: on Netlify's free plan each production deploy costs 15 of the team's 300 monthly credits, shared with the
# main website (www), and the credits ran out on 11 Nov 2026. A merge that only changes repo notes or GitHub settings changes
# nothing a visitor sees, so it should not spend a deploy.
#
# It skips ONLY a production build where every file changed since the last production build sits in a path that
# never reaches the built site (SKIP_PATHS_RE). Everything else builds, and any doubt builds:
#   - deploy previews and branch deploys (free anyway, and they prove each PR builds);
#   - a rebuild of the same commit (Netlify "Trigger deploy", a build hook);
#   - any empty commit in the range (an empty commit is always a deliberate rebuild);
#   - no last-build ref, an unknown ref, or any git error.
# A skipped build leaves production exactly as it was, the same as not pushing at all. Proof:
# tests/netlify_ignore_check.sh.
set -u

SKIP_PATHS_RE='^(CLAUDE\.md|README\.md|\.gitignore)$|^(\.github|tests)/'

build() { echo "netlify-ignore: BUILD ($1)"; exit 1; }
skip() { echo "netlify-ignore: SKIP ($1)"; exit 0; }

[ "${CONTEXT:-}" = "production" ] || build "context '${CONTEXT:-unset}' always builds"
cached="${CACHED_COMMIT_REF:-}"
head="${COMMIT_REF:-}"
{ [ -n "$cached" ] && [ -n "$head" ]; } || build "no last-build ref to compare with"
[ "$cached" != "$head" ] || build "same commit rebuilt on purpose"

commits=$(git rev-list --no-merges "$cached..$head" 2>/dev/null) || build "git cannot read $cached..$head"
for c in $commits; do
  files=$(git diff-tree --no-commit-id --name-only -r "$c" 2>/dev/null) || build "git cannot read commit $c"
  [ -n "$files" ] || build "empty commit $c is a deliberate rebuild"
done

changed=$(git diff --name-only "$cached" "$head" 2>/dev/null) || build "git cannot compare $cached and $head"
[ -n "$changed" ] || build "no file changes found"
site=$(printf '%s\n' "$changed" | grep -Ev "$SKIP_PATHS_RE" || true)
[ -z "$site" ] || build "site files changed: $(printf '%s\n' "$site" | head -5 | tr '\n' ' ')"
skip "only non-site files changed: $(printf '%s\n' "$changed" | head -5 | tr '\n' ' ')"
