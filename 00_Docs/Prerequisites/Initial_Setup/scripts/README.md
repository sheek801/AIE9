# Scripts

This folder contains setup verification scripts for the AIEO2 course development environment.

## Setup Checker

The setup checker verifies that your development environment has all the required tools and configurations.

### First Time Setup

Make the setup script executable (one-time only):

```bash
chmod +x scripts/setup-checker.sh
```

### Running the Setup Checker

Run from the root of the repository:

```bash
./scripts/setup-checker.sh
```

All you need to know is about the main or core script above.

### What It Checks

The setup checker verifies:

- Shell environment (bash/zsh)
- Operating system compatibility
- Git installation and configuration
- Python 3.8+ (3.12 recommended)
- Package managers (pip, uv)
- IDEs (Cursor, VS Code)
- Authentication (SSH keys, API keys)
- Development tools (Docker, Jupyter)
- Repository status

### Understanding the Results

- ✅ **Green checks**: Everything is properly configured
- ⚠️ **Yellow warnings**: Optional items or recommendations
- ❌ **Red X marks**: Critical issues that need fixing

Follow the output instructions to fix any ❌ red X marks, then re-run to verify.

## Script Components

The setup checker uses these modular scripts:

- `setup-checker.sh` - Main setup verification script
- `check-auth.sh` - Authentication checks (SSH, API keys)
- `check-dev-tools.sh` - Development tools verification
- `check-env-files.sh` - Environment file checks
- `check-ides.sh` - IDE installation checks
- `check-optional.sh` - Optional dependency checks
- `check-os.sh` - Operating system verification
- `check-python.sh` - Python environment checks
- `show-action-items.sh` - Display prioritized action items

All scripts are designed to be run from the repository root.