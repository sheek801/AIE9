#!/bin/bash
# show-action-items.sh
# Displays prioritized action items based on missing dependencies

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Only show if there are warnings or failures
if [ "${CHECKS_WARNINGS:-0}" -eq 0 ] && [ "${CHECKS_FAILED:-0}" -eq 0 ]; then
    exit 0
fi

echo ""
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                                               ║${NC}"
echo -e "${BLUE}║                    📝 PRIORITIZED ACTION ITEMS 📝                            ║${NC}"
echo -e "${BLUE}║                                                                               ║${NC}"
echo -e "${BLUE}║               (Based on missing or warned items, in order)                    ║${NC}"
echo -e "${BLUE}║                                                                               ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Track if any action items are found
CRITICAL_ITEMS_FOUND=false
HIGH_ITEMS_FOUND=false
MEDIUM_ITEMS_FOUND=false

# CRITICAL PRIORITY (Must Have)
echo -e "${RED}🔴 CRITICAL PRIORITY${NC} - Required to run the project:"
echo ""

# Check Python
if [ "${PYTHON_FOUND:-false}" = "false" ]; then
    CRITICAL_ITEMS_FOUND=true
    echo -e "  ${RED}1.${NC} Install Python 3.12"
    echo -e "     ${BLUE}💡 Hint:${NC} Use pyenv for version management"
    echo -e "     ${BLUE}📝 Quick:${NC} pyenv install 3.12 && pyenv global 3.12"
    echo ""
fi

# Check pip
if ! check_command "pip3" && ! check_command "pip"; then
    CRITICAL_ITEMS_FOUND=true
    echo -e "  ${RED}2.${NC} Install pip (Python package manager)"
    echo -e "     ${BLUE}💡 Hint:${NC} Usually comes with Python"
    echo -e "     ${BLUE}📝 Quick:${NC} python3 -m ensurepip --upgrade"
    echo ""
fi

# Check Git
if ! check_command "git"; then
    CRITICAL_ITEMS_FOUND=true
    echo -e "  ${RED}3.${NC} Install Git"
    echo -e "     ${BLUE}💡 Hint:${NC} Version control system"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo -e "     ${BLUE}📝 Quick:${NC} brew install git"
    else
        echo -e "     ${BLUE}📝 Quick:${NC} Download from https://git-scm.com/downloads"
    fi
    echo ""
fi

# Check Git configuration
if check_command "git"; then
    if ! git config --global user.name >/dev/null 2>&1 || ! git config --global user.email >/dev/null 2>&1; then
        CRITICAL_ITEMS_FOUND=true
        echo -e "  ${RED}4.${NC} Configure Git user details"
        echo -e "     ${BLUE}💡 Hint:${NC} Needed for commits"
        echo -e "     ${BLUE}📝 Quick:${NC} git config --global user.name 'Your Name'"
        echo -e "     ${BLUE}📝 Quick:${NC} git config --global user.email 'you@email.com'"
        echo ""
    fi
fi

# Check OpenAI API Key
if [ -z "${OPENAI_API_KEY:-}" ] && ! grep -q "OPENAI_API_KEY" .env 2>/dev/null; then
    CRITICAL_ITEMS_FOUND=true
    echo -e "  ${RED}5.${NC} Set up OpenAI API Key"
    echo -e "     ${BLUE}💡 Hint:${NC} Required for GPT models"
    echo -e "     ${BLUE}📝 Quick:${NC} Get from https://platform.openai.com/api-keys"
    echo -e "     ${BLUE}📝 Then:${NC} echo 'OPENAI_API_KEY=sk-...' >> .env"
    echo ""
fi

if [ "$CRITICAL_ITEMS_FOUND" = false ]; then
    echo -e "  ${GREEN}✅ All critical requirements met!${NC}"
    echo ""
fi

# HIGH PRIORITY (Should Have)
echo -e "${YELLOW}🟡 HIGH PRIORITY${NC} - Important for development:"
echo ""

# Check uv
if ! check_command "uv"; then
    HIGH_ITEMS_FOUND=true
    echo -e "  ${YELLOW}1.${NC} Install uv (fast Python package manager)"
    echo -e "     ${BLUE}💡 Hint:${NC} 10-100x faster than pip"
    echo -e "     ${BLUE}📝 Quick:${NC} curl -LsSf https://astral.sh/uv/install.sh | sh"
    echo ""
fi

# Check IDE
IDE_FOUND=false
if [[ "$OSTYPE" == "darwin"* ]]; then
    [ -d "/Applications/Cursor.app" ] || [ -d "/Applications/Visual Studio Code.app" ] || [ -d "/Applications/Code.app" ] && IDE_FOUND=true
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    (check_command "cursor" || check_command "code") && IDE_FOUND=true
fi
if [ "$IDE_FOUND" = false ]; then
    HIGH_ITEMS_FOUND=true
    echo -e "  ${YELLOW}2.${NC} Install Cursor IDE or VS Code"
    echo -e "     ${BLUE}💡 Hint:${NC} AI-powered development environment"
    echo -e "     ${BLUE}📝 Quick:${NC} Download from https://cursor.com/download"
    echo ""
fi

# Check .env file
if ! check_file ".env"; then
    HIGH_ITEMS_FOUND=true
    echo -e "  ${YELLOW}3.${NC} Create .env file for API keys"
    echo -e "     ${BLUE}💡 Hint:${NC} Keeps secrets secure"
    echo -e "     ${BLUE}📝 Quick:${NC} touch .env"
    echo ""
fi

# Check SSH keys
if [ ! -d "$HOME/.ssh" ] || [ "$(find "$HOME/.ssh" -name "id_*.pub" 2>/dev/null | wc -l | tr -d ' ')" -eq 0 ]; then
    HIGH_ITEMS_FOUND=true
    echo -e "  ${YELLOW}4.${NC} Set up SSH keys for GitHub"
    echo -e "     ${BLUE}💡 Hint:${NC} Password-free git operations"
    echo -e "     ${BLUE}📝 Quick:${NC} ssh-keygen -t ed25519 -C 'you@email.com'"
    echo -e "     ${BLUE}📝 Then:${NC} Add to GitHub: https://github.com/settings/keys"
    echo ""
fi

if [ "$HIGH_ITEMS_FOUND" = false ]; then
    echo -e "  ${GREEN}✅ All high priority items complete!${NC}"
    echo ""
fi

# MEDIUM PRIORITY (Could Have)
echo -e "${BLUE}🔵 MEDIUM PRIORITY${NC} - Optional enhancements:"
echo ""

# Check Claude API Key
if [ -z "${ANTHROPIC_API_KEY:-}" ] && ! grep -q "ANTHROPIC_API_KEY" .env 2>/dev/null; then
    MEDIUM_ITEMS_FOUND=true
    echo -e "  ${BLUE}1.${NC} Claude API Key (optional)"
    echo -e "     ${BLUE}📝 Quick:${NC} https://console.anthropic.com/dashboard"
    echo ""
fi

# Check Jupyter
if ! check_command "jupyter"; then
    MEDIUM_ITEMS_FOUND=true
    echo -e "  ${BLUE}2.${NC} Jupyter (installed during setup)"
    echo -e "     ${BLUE}📝 Quick:${NC} uv pip install jupyter ipykernel"
    echo ""
fi

# Check Docker
if ! check_command "docker"; then
    MEDIUM_ITEMS_FOUND=true
    echo -e "  ${BLUE}3.${NC} Docker Desktop (containerization)"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo -e "     ${BLUE}📝 Quick:${NC} brew install --cask docker"
    fi
    echo ""
fi

if [ "$MEDIUM_ITEMS_FOUND" = false ]; then
    echo -e "  ${GREEN}✅ All optional items complete!${NC}"
    echo ""
fi

# macOS specific
if [[ "$OSTYPE" == "darwin"* ]]; then
    MACOS_ITEMS_FOUND=false

    if ! check_command "brew" || ! xcode-select -p >/dev/null 2>&1; then
        echo -e "${BLUE}🍎 macOS SPECIFIC${NC}:"
        echo ""

        if ! check_command "brew"; then
            MACOS_ITEMS_FOUND=true
            echo -e "  ${BLUE}1.${NC} Homebrew package manager"
            echo -e "     ${BLUE}💡 Hint:${NC} Simplifies tool installation"
            echo -e "     ${BLUE}📝 Quick:${NC} /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
            echo ""
        fi

        if ! xcode-select -p >/dev/null 2>&1; then
            MACOS_ITEMS_FOUND=true
            echo -e "  ${BLUE}2.${NC} Xcode Command Line Tools"
            echo -e "     ${BLUE}💡 Hint:${NC} Compilers for Python packages"
            echo -e "     ${BLUE}📝 Quick:${NC} xcode-select --install"
            echo ""
        fi
    fi
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}📚 Next Steps:${NC}"
echo -e "  1. Address CRITICAL items first (${RED}🔴${NC})"
echo -e "  2. Then HIGH priority items (${YELLOW}🟡${NC})"
echo -e "  3. Optional: MEDIUM priority items (${BLUE}🔵${NC})"
echo -e "  4. Run this script again to verify: ${BLUE}./setup-checker.sh${NC}"
echo -e "  5. Follow SETUP_VENV.md for virtual environment setup"
echo ""
