#!/bin/bash
# check-env-files.sh
# Checks for .env files and verifies they're in .gitignore

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

print_section "🔒 Environment Files Security"

# Check if we're in a git repo
print_info "Checking for .env files in repository..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository"
    exit 1
fi

# Get repo root
REPO_ROOT=$(git rev-parse --show-toplevel)
cd "$REPO_ROOT" || exit 1

# Find all .env files (including .env.*, but excluding directories)
ENV_FILES=()
while IFS= read -r line; do
    ENV_FILES+=("$line")
done < <(find . -type f -name ".env*" ! -path "*/\.*/*" ! -name ".envrc" 2>/dev/null)

# Check if .gitignore exists
if [ ! -f ".gitignore" ]; then
    print_warning "No .gitignore file found"
    print_info "  Create .gitignore: touch .gitignore"
    GITIGNORE_EXISTS=false
else
    GITIGNORE_EXISTS=true
fi

# If no .env files found
if [ ${#ENV_FILES[@]} -eq 0 ]; then
    print_success "No .env files found in repository"
    echo ""
    exit 0
fi

# Process each .env file found
print_info "Found ${#ENV_FILES[@]} .env file(s) - checking .gitignore status..."
echo ""

for env_file in "${ENV_FILES[@]}"; do
    # Remove leading ./
    clean_path="${env_file#./}"

    # Check if this file is ignored by git
    if git check-ignore -q "$clean_path"; then
        print_success ".env file '${clean_path}' is properly ignored"
    else
        print_error ".env file '${clean_path}' is NOT ignored - SECURITY RISK!"
        print_info "  Add to .gitignore: echo '${clean_path}' >> .gitignore"
    fi
done
echo ""
