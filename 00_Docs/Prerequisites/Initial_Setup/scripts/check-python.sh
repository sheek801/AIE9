#!/bin/bash
# check-python.sh
# Checks Python installation, pip, uv, and virtual environment capability

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Function to check Python version
check_python_version() {
    local python_cmd="$1"
    if check_command "$python_cmd"; then
        local version
        version=$($python_cmd --version 2>&1 | awk '{print $2}')
        # Extract major and minor version
        local major minor
        major=$(echo "$version" | cut -d. -f1)
        minor=$(echo "$version" | cut -d. -f2)

        # Use numeric comparison with proper error handling
        if [ "$major" -eq 3 ] 2>/dev/null && [ "$minor" -ge 8 ] 2>/dev/null; then
            if [ "$major" -eq 3 ] 2>/dev/null && [ "$minor" -eq 12 ] 2>/dev/null; then
                print_success "Python 3.12 is installed ($version)"
                return 0
            else
                print_warning "Python $version is installed (3.12 recommended, but >=3.8 acceptable)"
                return 0
            fi
        else
            print_error "Python $version is installed (requires Python >=3.8)"
            return 1
        fi
    else
        print_error "$python_cmd is not installed"
        return 1
    fi
}

print_section "🐍 Python Environment"
print_info "Checking Python installation..."
PYTHON_FOUND=false

# Check python3.12 first (recommended)
if check_command "python3.12"; then
    if check_python_version "python3.12"; then
        PYTHON_FOUND=true
    fi
fi

# Check python3 if python3.12 not found
if [ "$PYTHON_FOUND" = false ]; then
    if check_command "python3"; then
        if check_python_version "python3"; then
            PYTHON_FOUND=true
        fi
    fi
fi

# Check python if python3 not found
if [ "$PYTHON_FOUND" = false ]; then
    if check_command "python"; then
        if check_python_version "python"; then
            PYTHON_FOUND=true
        fi
    fi
fi

if [ "$PYTHON_FOUND" = false ]; then
    print_error "Python 3.8+ is not installed"
    print_info "  Install from: https://www.python.org/downloads/"
    print_info "  Or use pyenv: https://github.com/pyenv/pyenv"
fi
echo ""

# Export PYTHON_FOUND for use by other scripts
export PYTHON_FOUND

# Check pip
print_info "Checking pip..."
if check_command "pip3"; then
    pip_version=$(get_version "pip3")
    print_success "pip3 is installed ($pip_version)"
elif check_command "pip"; then
    pip_version=$(get_version "pip")
    print_success "pip is installed ($pip_version)"
else
    print_error "pip is not installed"
    print_info "  Install pip: python3 -m ensurepip --upgrade"
fi
echo ""

# Check wget (utility tool)
print_info "Checking wget utility..."
if check_command "wget"; then
    wget_version=$(get_version "wget")
    print_success "wget is installed ($wget_version)"
else
    print_warning "wget is not installed (optional utility tool)"
    if [[ "$OSTYPE" == "darwin"* ]] && check_command "brew"; then
        print_info "  Install with: brew install wget"
    else
        print_info "  Install from: https://www.gnu.org/software/wget/"
    fi
fi
echo ""

# Check uv (package manager)
print_info "Checking uv (⚡ fast Python package manager)..."
if check_command "uv"; then
    uv_version=$(get_version "uv")
    print_success "uv is installed ($uv_version)"
else
    print_warning "uv is not installed (recommended for package management)"
    print_info "  Install from: https://docs.astral.sh/uv/"
    print_info "  Quick install: curl -LsSf https://astral.sh/uv/install.sh | sh"
fi
echo ""

# Check Virtual environment capability
print_info "Checking Python virtual environment capability..."
if check_command "python3.12"; then
    if python3.12 -m venv --help >/dev/null 2>&1; then
        print_success "python3.12 can create virtual environments"
    else
        print_error "python3.12 venv module not available"
    fi
elif check_command "python3"; then
    if python3 -m venv --help >/dev/null 2>&1; then
        print_success "python3 can create virtual environments"
    else
        print_error "python3 venv module not available"
    fi
else
    print_warning "Cannot check venv capability (Python not found)"
fi
echo ""
