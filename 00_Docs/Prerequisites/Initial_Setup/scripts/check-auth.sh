#!/bin/bash
# check-auth.sh
# Checks SSH keys and API keys (OpenAI, Claude, GitHub)

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

print_section "🔐 Authentication & API Keys"

# Check SSH keys for GitHub
print_info "Checking SSH keys for GitHub..."
if [ -d "$HOME/.ssh" ]; then
    ssh_keys=$(find "$HOME/.ssh" -name "id_*.pub" 2>/dev/null | wc -l | tr -d ' ' || echo "0")
    if [ "${ssh_keys:-0}" -gt 0 ]; then
        print_success "SSH keys found ($ssh_keys public key(s))"

        # Check if SSH key is added to ssh-agent
        if ssh-add -l >/dev/null 2>&1; then
            print_success "SSH keys are loaded in ssh-agent"
        else
            print_warning "SSH keys exist but may not be loaded in ssh-agent"
            print_info "  Add key: ssh-add ~/.ssh/id_rsa (or your key file)"
        fi

        # Test GitHub SSH connection (with timeout)
        if command -v gtimeout >/dev/null 2>&1; then
            SSH_TEST_CMD="gtimeout 3 ssh -T git@github.com 2>&1"
        elif command -v timeout >/dev/null 2>&1; then
            SSH_TEST_CMD="timeout 3 ssh -T git@github.com 2>&1"
        else
            SSH_TEST_CMD="ssh -o ConnectTimeout=3 -T git@github.com 2>&1"
        fi

        if eval "$SSH_TEST_CMD" | grep -q "successfully authenticated"; then
            print_success "GitHub SSH connection is working"
        else
            print_warning "GitHub SSH connection test failed or timed out"
            print_info "  Add SSH key to GitHub: https://github.com/settings/keys"
        fi
    else
        print_warning "No SSH keys found in ~/.ssh"
        print_info "  Generate SSH key: ssh-keygen -t ed25519 -C 'your_email@example.com'"
        print_info "  Add to GitHub: https://github.com/settings/keys"
    fi
else
    print_warning "~/.ssh directory not found"
    print_info "  Generate SSH key: ssh-keygen -t ed25519 -C 'your_email@example.com'"
fi
echo ""

# Check OpenAI API Key
print_info "Checking OpenAI API Key (🤖 GPT models)..."
if [ -n "${OPENAI_API_KEY:-}" ]; then
    key_length=${#OPENAI_API_KEY}
    if [ "$key_length" -gt 20 ]; then
        print_success "OPENAI_API_KEY environment variable is set (length: $key_length chars)"
    else
        print_warning "OPENAI_API_KEY is set but seems too short (may be invalid)"
    fi
else
    print_warning "OPENAI_API_KEY environment variable is not set"
    print_info "  Get API key from: https://platform.openai.com/api-keys"
    print_info "  Set it: export OPENAI_API_KEY='your-key-here'"
    print_info "  Or add to .env file: echo 'OPENAI_API_KEY=your-key-here' > .env"
fi
echo ""

# Check Claude API Key
print_info "Checking Claude API Key (🧠 Anthropic models)..."
if [ -n "${ANTHROPIC_API_KEY:-}" ]; then
    key_length=${#ANTHROPIC_API_KEY}
    if [ "$key_length" -gt 20 ]; then
        print_success "ANTHROPIC_API_KEY environment variable is set (length: $key_length chars)"
    else
        print_warning "ANTHROPIC_API_KEY is set but seems too short (may be invalid)"
    fi
else
    print_warning "ANTHROPIC_API_KEY environment variable is not set (optional)"
    print_info "  Get API key from: https://console.anthropic.com/dashboard"
    print_info "  Set it: export ANTHROPIC_API_KEY='your-key-here'"
    print_info "  Or add to .env file: echo 'ANTHROPIC_API_KEY=your-key-here' >> .env"
fi
echo ""

# Check GitHub Access Token
print_info "Checking GitHub Access Token (🔑 alternative to SSH)..."
if [ -n "${GITHUB_TOKEN:-}" ]; then
    token_length=${#GITHUB_TOKEN}
    if [ "$token_length" -gt 20 ]; then
        print_success "GITHUB_TOKEN environment variable is set (length: $token_length chars)"
    else
        print_warning "GITHUB_TOKEN is set but seems too short (may be invalid)"
    fi
else
    print_warning "GITHUB_TOKEN environment variable is not set (optional, alternative to SSH)"
    print_info "  Get token from: https://github.com/settings/tokens"
    print_info "  Set it: export GITHUB_TOKEN='your-token-here'"
    print_info "  Or add to .env file: echo 'GITHUB_TOKEN=your-token-here' >> .env"
fi
echo ""

# Check .env file
print_info "Checking .env file..."
if check_file ".env"; then
    print_success ".env file exists"

    # Check for various API keys in .env file
    env_keys_found=0
    if grep -q "OPENAI_API_KEY" .env 2>/dev/null; then
        print_success ".env file contains OPENAI_API_KEY"
        env_keys_found=$((env_keys_found + 1))
    fi
    if grep -q "ANTHROPIC_API_KEY" .env 2>/dev/null; then
        print_success ".env file contains ANTHROPIC_API_KEY"
        env_keys_found=$((env_keys_found + 1))
    fi
    if grep -q "GITHUB_TOKEN" .env 2>/dev/null; then
        print_success ".env file contains GITHUB_TOKEN"
        env_keys_found=$((env_keys_found + 1))
    fi

    if [ "$env_keys_found" -eq 0 ]; then
        print_warning ".env file exists but doesn't contain common API keys"
        print_info "  Add keys to .env file as needed"
    fi
else
    print_warning ".env file not found (optional if using environment variables)"
    print_info "  Create .env file: touch .env"
    print_info "  Add API keys: echo 'OPENAI_API_KEY=your-key-here' >> .env"
fi
echo ""
