#!/bin/bash
# check-ides.sh
# Checks for Cursor IDE, VS Code, and Cursor CLI

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

print_section "📝 Development Environments"

# Check Cursor IDE
print_info "Checking Cursor IDE..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    if [ -d "/Applications/Cursor.app" ]; then
        print_success "Cursor IDE is installed"
    else
        print_warning "Cursor IDE is not installed (optional but recommended)"
        print_info "  Install from: https://cursor.com/download"
    fi
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if check_command "cursor" || [ -f "/usr/bin/cursor" ] || [ -f "/usr/local/bin/cursor" ]; then
        print_success "Cursor IDE is installed"
    else
        print_warning "Cursor IDE is not installed (optional but recommended)"
        print_info "  Install from: https://cursor.com/download"
    fi
else
    print_info "Cursor IDE check skipped (OS not supported for automatic detection)"
fi
echo ""

# Check VS Code
print_info "Checking VS Code..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    if [ -d "/Applications/Visual Studio Code.app" ] || [ -d "/Applications/Code.app" ]; then
        print_success "VS Code is installed"
    else
        print_warning "VS Code is not installed (optional, alternative to Cursor)"
        print_info "  Install from: https://code.visualstudio.com/"
    fi
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if check_command "code" || [ -f "/usr/bin/code" ] || [ -f "/usr/local/bin/code" ]; then
        print_success "VS Code is installed"
    else
        print_warning "VS Code is not installed (optional, alternative to Cursor)"
        print_info "  Install from: https://code.visualstudio.com/"
    fi
else
    print_info "VS Code check skipped (OS not supported for automatic detection)"
fi
echo ""

# Check Cursor CLI
print_info "Checking Cursor CLI..."
if check_command "cursor-cli"; then
    print_success "Cursor CLI is available"
elif check_command "cursor" && [ -d "/Applications/Cursor.app" ]; then
    # On macOS, cursor command might exist but not be CLI
    print_warning "Cursor IDE found but CLI may not be configured"
    print_info "  Install CLI: https://cursor.com/docs/cli/overview"
else
    print_warning "Cursor CLI is not installed (optional but recommended)"
    print_info "  Install from: https://cursor.com/docs/cli/overview"
fi
echo ""
