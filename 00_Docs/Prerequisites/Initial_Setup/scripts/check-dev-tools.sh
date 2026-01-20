#!/bin/bash
# check-dev-tools.sh
# Checks Git installation and configuration

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Check Git
print_section "📦 Version Control & Tools"
print_info "Checking Git..."
if check_command "git"; then
    git_version=$(get_version "git")
    print_success "Git is installed ($git_version)"

    # Check Git configuration
    if git config --global user.name >/dev/null 2>&1 && git config --global user.email >/dev/null 2>&1; then
        print_success "Git is configured (user.name and user.email set)"
    else
        print_warning "Git user.name or user.email not configured"
        print_info "  Run: git config --global user.name 'Your Name'"
        print_info "  Run: git config --global user.email 'your.email@example.com'"
    fi
else
    print_error "Git is not installed"
    print_info "  Install from: https://git-scm.com/downloads"
fi
echo ""

# Check Git repository status
print_info "Checking Git repository status..."
if [ -d ".git" ]; then
    print_success "This is a Git repository"

    # Check if there are remotes configured
    if git remote -v >/dev/null 2>&1; then
        remote_count=$(git remote | wc -l | tr -d ' ' || echo "0")
        if [ "${remote_count:-0}" -gt 0 ]; then
            print_success "Git remotes configured ($remote_count remote(s))"
            git remote -v | while IFS= read -r line; do
                print_info "  $line"
            done || true
        else
            print_warning "No Git remotes configured"
        fi
    fi
else
    print_warning "Not a Git repository (or not in repo root)"
    print_info "  Initialize: git init"
    print_info "  Or clone: git clone <repository-url>"
fi
echo ""
