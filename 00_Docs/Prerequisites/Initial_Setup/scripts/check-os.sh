#!/bin/bash
# check-os.sh
# Checks shell environment, operating system, Homebrew, and Xcode Command Line Tools

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Check Shell
print_section "🔧 Shell Environment"
print_info "Checking shell environment..."
if [ -n "${ZSH_VERSION:-}" ]; then
    print_success "Using zsh shell (version: $ZSH_VERSION)"
elif [ -n "${BASH_VERSION:-}" ]; then
    print_success "Using bash shell (version: $BASH_VERSION)"
else
    print_warning "Unknown shell - script may not work correctly"
fi
echo ""

# Check Operating System
print_section "💻 Operating System"
print_info "Checking operating system..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    print_success "macOS detected"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    print_success "Linux detected"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    print_warning "Windows detected (using Git Bash/Cygwin)"
    print_info "  Consider using WSL2 for better compatibility: https://ubuntu.com/desktop/wsl"

    # Check for WSL2
    print_info "Checking WSL2 (🐧 Windows Subsystem for Linux)..."
    if command -v wsl >/dev/null 2>&1; then
        wsl_version=$(wsl --version 2>/dev/null || echo "WSL installed")
        print_success "WSL is available ($wsl_version)"
    else
        print_warning "WSL is not installed (recommended for Windows development)"
        print_info "  Install with: wsl --install"
    fi
    echo ""

    # Check for Windows Terminal
    print_info "Checking Windows Terminal (🪟 terminal application)..."
    if [ -d "/mnt/c/Users/$USER/AppData/Local/Microsoft/WindowsApps/wt.exe" ] || command -v wt >/dev/null 2>&1; then
        print_success "Windows Terminal appears to be installed"
    else
        print_warning "Windows Terminal is not detected (optional but recommended)"
        print_info "  Install from: https://aka.ms/terminal"
    fi
    echo ""
else
    print_warning "Unknown OS: $OSTYPE"
fi
echo ""

# Check Homebrew (macOS package manager)
if [[ "$OSTYPE" == "darwin"* ]]; then
    print_info "Checking Homebrew (🍺 macOS package manager)..."
    if check_command "brew"; then
        brew_version=$(get_version "brew")
        print_success "Homebrew is installed ($brew_version)"
    else
        print_warning "Homebrew is not installed (recommended for macOS development)"
        print_info "  Install from: https://brew.sh/"
        print_info "  Install command: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    fi
    echo ""
fi

# Check Xcode Command Line Tools (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    print_info "Checking Xcode Command Line Tools..."
    if xcode-select -p >/dev/null 2>&1; then
        print_success "Xcode Command Line Tools are installed"
    else
        print_warning "Xcode Command Line Tools are not installed (required for macOS development)"
        print_info "  Install with: xcode-select --install"
    fi
    echo ""
fi
