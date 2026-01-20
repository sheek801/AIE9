#!/bin/bash
# check-optional.sh
# Checks optional tools: Jupyter, Docker, CLI

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

print_section "🔧 Optional Tools"

# Check Jupyter
print_info "Checking Jupyter (📓 notebook environment)..."
if check_command "jupyter"; then
    jupyter_version=$(get_version "jupyter")
    print_success "Jupyter is installed ($jupyter_version)"
else
    print_warning "Jupyter is not installed (will be installed via pip/uv)"
    print_info "  Install with: pip install jupyter ipykernel"
    print_info "  Or use: uv pip install jupyter ipykernel"
fi
echo ""

# Check Docker Desktop
print_info "Checking Docker Desktop (🐳 containerization)..."
if check_command "docker"; then
    docker_version=$(get_version "docker")
    print_success "Docker is installed ($docker_version)"

    # Check if Docker daemon is running
    if docker info >/dev/null 2>&1; then
        print_success "Docker daemon is running"
    else
        print_warning "Docker is installed but daemon is not running"
        print_info "  Start Docker Desktop application"
    fi
else
    print_warning "Docker is not installed (optional, used for containerization)"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        print_info "  Install from: https://desktop.docker.com/mac/main/arm64/Docker.dmg"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        print_info "  Install from: https://docs.docker.com/desktop/install/ubuntu/"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        print_info "  Install from: https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe"
    else
        print_info "  Install from: https://www.docker.com/products/docker-desktop/"
    fi
fi
echo ""
