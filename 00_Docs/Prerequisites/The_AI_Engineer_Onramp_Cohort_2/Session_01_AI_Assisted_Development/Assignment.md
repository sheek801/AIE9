# 🤝 Assignment: AI-Assisted Development Workflow
We'll be demoing this assignment during class, and you're encouraged to test it out at home using your own use cases.

## 📚 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Create GitHub Repository 🐙](#step-1-create-github-repository-)
- [Step 2: Generate Frontend with v0 🎨](#step-2-generate-frontend-with-v0-)
- [Step 3: Clone Repository and Download v0 App in Cursor 📥](#step-3-clone-repository-and-download-v0-app-in-cursor-)
- [Step 4: Deploy to Vercel 🌐](#step-4-deploy-to-vercel-)
- [Step 5: Set Up Cursor Rules 📝](#step-5-set-up-cursor-rules-)
- [Step 6: Make Changes Using Cursor Agents 🤖](#step-6-make-changes-using-cursor-agents-)
- [Step 7: Follow GitFlow - Create Feature Branch 🌿](#step-7-follow-gitflow---create-feature-branch-)
- [Step 8: Review and Merge Changes 🔀](#step-8-review-and-merge-changes-)
- [Step 9: Redeploy to Vercel 🚀](#step-9-redeploy-to-vercel-)
- [🏗️ Activity #1: Complete Development Workflow](#️-activity-1-complete-development-workflow)
- [🏗️ Activity #2: Advanced Backend Integration with LLM](#️-activity-2-advanced-backend-integration-with-llm)
- [🎓 Tips for Success](#-tips-for-success)

---

## Overview

In this assignment, you'll learn the complete workflow of AI-assisted development from start to finish:

1. **Create a GitHub repository** - Set up version control from the beginning
2. **Generate frontend with v0** - Use AI to create your application
3. **Clone and download in Cursor** - Use Git Clone in Cursor, then download v0 app directly into your repo
4. **Deploy to Vercel** - Get your app live on the web
5. **Use Cursor Agents** - Make improvements using AI assistance
6. **Follow GitFlow** - Create branches and merge only when satisfied
7. **Redeploy** - See your changes go live automatically

By the end, you'll have mastered a professional development workflow that combines AI tools with industry best practices for version control and deployment.

---

## Prerequisites

Before we begin, make sure you have:
- [Cursor](https://cursor.sh/) installed
- A [GitHub](http://github.com/) account
- A [Vercel](https://vercel.com/) account (free tier works great!)
- Node.js installed on your computer (Mac: `brew install node`, Windows: `sudo apt install nodejs npm`)
- Git installed and configured

---


## 🏗️ Activity #1: Complete Development Workflow

Now it's time to put everything into practice! Complete the full workflow with at least one feature improvement.

### Your Mission:

1. **Create a GitHub repository** ✅
2. **Generate a frontend with v0** ✅
3. **Set up in Cursor and push to GitHub** ✅
4. **Deploy to Vercel** ✅
5. **Make at least one improvement using Cursor Agents:**
   - Add a new feature
   - Improve styling
   - Add animations
   - Fix a bug
   - Improve responsiveness
   - Add dark mode
   - Optimize performance

6. **Follow GitFlow:**
   - Create a feature branch
   - Make commits with proper messages
   - Review your changes
   - Merge only when satisfied
   - Clean up branches

7. **Verify redeployment on Vercel** ✅

### Requirements:

✅ Complete all 9 steps  
✅ Create at least one feature branch  
✅ Make meaningful commits with clear messages  
✅ Review changes before merging  
✅ Merge using best practices (`--no-ff`)  
✅ Clean up branches after merging  
✅ Verify automatic deployment on Vercel  
✅ Your live site shows the new changes  

### Suggested Features to Add:

1. **Dark Mode Toggle** 🌙
   - Create branch: `feature/dark-mode`
   - Add toggle button
   - Implement theme switching

2. **Animation Enhancements** ✨
   - Create branch: `feature/animations`
   - Add smooth transitions
   - Implement hover effects

3. **Responsive Design** 📱
   - Create branch: `feature/responsive`
   - Improve mobile layout
   - Add breakpoints

4. **New Component** 🧩
   - Create branch: `feature/new-component`
   - Add footer, header, or new section
   - Examples: testimonials, contact form, data visualization

5. **Performance Optimization** ⚡
   - Create branch: `feature/performance`
   - Optimize images
   - Implement lazy loading

---
Now let's go through each step in detail. Follow along to complete your workflow!

## Step 1: Create GitHub Repository 🐙

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `my-ai-app`)
5. Choose **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license (we'll add these later)
7. Click **"Create repository"**
8. **Copy the SSH URL** (click the green "Code" button and select SSH, then copy the URL)
   - It should look like: `git@github.com:yourusername/yourrepo.git`
   - You'll need this SSH link in Step 3!

**Why start with GitHub?** Setting up version control first ensures you can track all changes from the very beginning and makes deployment seamless.

---

## Step 2: Generate Frontend with v0 🎨

### 2.1 Brainstorm Your Idea 💡

First, decide what kind of app you want to build. You have two options:

**Option A: Use v0 for brainstorming**
- Go to [v0.dev](https://v0.dev)
- Use the chat to explore ideas and get suggestions

**Option B: Use ChatGPT (Recommended)**
- Ask ChatGPT to help you brainstorm app ideas
- Get feedback on your concept
- Refine your idea until you're happy with it

### 2.2 Get Your Design Resources 🎨

Gather design inspiration and components:

**a) Pick a Template Style:**
- Visit [Canva Templates](https://www.canva.com/templates/)
- Find a design style you like
- Note the colors, layout, and overall aesthetic

**b) Choose Component Styles:**
- Go to [shadcn/ui Components](https://ui.shadcn.com/docs/components/)
- Browse the component library
- Pick components that match your app's needs (buttons, cards, forms, etc.)

**c) Select a Color Scheme:**
- Visit [Coolors](https://coolors.co/)
- Generate or browse color palettes
- Pick colors that match your app's mood and purpose

### 2.3 Create Your v0 Prompt 🎬

Combine everything into a detailed prompt for v0:

1. Describe your app idea
2. Reference the template style you chose
3. Mention the shadcn/ui components you want to use
4. Include your color scheme
5. Add any specific features or requirements

**Example prompt structure:**
```
Create me an app: [Your App Name]

[Description of your app concept]

Use the design style similar to: [Canva template reference]
For components, use shadcn/ui with: [component names]
Color scheme: [your colors from Coolors]
```

### 2.4 Generate Your App

1. Go to [v0.dev](https://v0.dev)
2. Paste your prompt in the chat
3. Wait for v0 to generate your frontend
4. Review the generated code
5. Iterate if needed - ask for changes or refinements

---

## Step 3: Clone Repository and Download v0 App in Cursor 📥

### 3.1 Clone Your GitHub Repository in Cursor

1. Open Cursor IDE
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette
3. Type **"Git: Clone"** and select it
4. Paste your SSH repository URL (from Step 1)
5. Choose a location to clone the repository
6. Cursor will open a **new window** with your cloned repository

**You now have your GitHub repository open in Cursor!**

### 3.2 Download Your App from v0

1. In v0, after generating your app, click **"Download"**
2. Copy the **npx command** (it should look like: `npx create-v0-app@latest`)
3. In Cursor's terminal (in the cloned repository window), run the npx command from v0:
   ```bash
   npx create-v0-app@latest
   ```
   *(Paste the exact command from v0)*

4. Follow the prompts if any appear
5. This will create your app folder with all the code in your repository

### 3.3 Install Dependencies

1. In Cursor's terminal, navigate to your app directory:
   ```bash
   cd app  # or the folder name v0 created
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   
   **If you encounter errors:**
   ```bash
   npm install --legacy-peer-deps
   ```

### 3.4 Test Locally

1. Run your app:
   ```bash
   npm run dev
   ```
2. Look for a local URL (usually `http://localhost:3000`) in the terminal
3. Open the URL in your browser
4. Verify your app is working correctly!

**If port 3000 is in use:**
```bash
kill -9 $(lsof -ti tcp:3000)
```

### 3.5 Generate README with Cursor 🤖

Let Cursor help you create documentation:

1. In Cursor, ask: *"Create a README.md file explaining how to launch this app"*
2. Cursor will analyze your project structure
3. It will generate a README with setup and launch instructions
4. Review and customize as needed

### 3.6 Commit and Push to GitHub

Since you cloned the repository, it's already connected to GitHub! Now commit your v0 app:

1. In Cursor's terminal, make sure you're in the repository root (not the app folder)
2. Add all files:
   ```bash
   git add .
   ```

3. Create your first commit:
   ```bash
   git commit -m "Initial commit: v0 generated frontend"
   ```

4. Push your code:
   ```bash
   git push -u origin main
   ```

5. Go to your GitHub repository and verify all files are there! 🎉

---

## Step 4: Deploy to Vercel 🌐

Now let's get your app live on the web!

1. Go to terminal inside of your frontend folder and type in `vercel --prod`

**Your app is now live and accessible to the world!** 🎉

---

## Step 5 (Optional): Set Up Cursor Rules 📝

Before making changes, let's set up Cursor rules to ensure consistent development practices.

### 5.1 Add Personal Cursor Rules (Coding Styles)

Set up coding style rules to improve collaboration:

1. Create a new file: `cursor_rules.md`
2. Add coding standards:

```markdown
# Cursor Rules

## Code Structure
- Use functional components with TypeScript
- Keep components small and focused
- One component per file

## Naming Conventions
- Components: PascalCase (e.g., `ButtonComponent`)
- Functions: camelCase (e.g., `handleClick`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)

## Import Organization
- React imports first
- Third-party libraries next
- Local imports last
- Use absolute imports with @ alias

## File Organization
- Components in `/components` folder
- Utilities in `/lib` or `/utils` folder
- Types in `/types` folder
```

3. Save the file

**Why this matters:** These rules help Cursor understand your coding preferences and maintain consistency across your project, making collaboration smoother.

---

## Step 6: Make Changes Using Cursor Agents 🤖

Now it's time to improve your app using Cursor's AI capabilities!

### 6.1 Plan Your Changes

Think about what you'd like to improve:
- Add a new feature
- Improve styling
- Fix a bug
- Add animations
- Improve responsiveness
- Add dark mode
- Optimize performance

### 6.2 Use Cursor Agents to Make Changes

1. Open the **Cursor Agents** window in Cursor:
   - Click on the Cursor Agents icon in the sidebar, or
   - Use the keyboard shortcut to open the Agents panel

2. In the Cursor Agents window, describe what you want:
   - *"Add a dark mode toggle button to the header"*
   - *"Improve the mobile responsiveness of the main component"*
   - *"Add smooth animations to the buttons"*
   - *"Create a new footer component with social links"*

3. Cursor Agents will generate code following your cursor rules
4. Review the generated code and accept the changes
5. Test the changes locally:
   ```bash
   npm run dev
   ```
6. Make sure everything works as expected!

**Important:** Don't commit yet! We'll use GitFlow in the next step.

---

## Step 7: Follow GitFlow - Create Feature Branch 🌿

Now we'll follow GitFlow best practices by creating a feature branch for your changes.

### 7.1 Create a Feature Branch

1. Make sure you're on `main` and it's up to date:
   ```bash
   git switch main
   git pull origin main
   ```

2. Create a new feature branch:
   ```bash
   git switch -c feature/your-feature-name
   ```
   
   **Examples:**
   - `feature/dark-mode-toggle`
   - `feature/improve-styling`
   - `feature/add-animations`
   - `feature/responsive-design`

3. Push the branch to GitHub:
   ```bash
   git push -u origin feature/your-feature-name
   ```

### 7.2 Commit Your Changes

1. Stage your changes:
   ```bash
   git add .
   ```

2. Commit with a meaningful message following your GitFlow rules:
   ```bash
   git commit -m "feat: add dark mode toggle"
   ```
   *(Use appropriate type: feat, fix, style, etc.)*

3. Push to your feature branch:
   ```bash
   git push origin feature/your-feature-name
   ```

### 7.3 Review Your Changes

1. Go to your GitHub repository
2. Click on the **"branches"** dropdown
3. Select your feature branch
4. Review the changes:
   - Check the files changed
   - Review the diff view
   - Make sure everything looks good

**This is your chance to review before merging!**

---

## Step 8: Review and Merge Changes 🔀

Only merge when you're happy with your changes!

### 8.1 Test Your Changes Locally

Before merging, make sure:
- ✅ Your app runs without errors
- ✅ The new feature works as expected
- ✅ No console errors
- ✅ Code follows your cursor rules

### 8.2 Merge Feature Branch on GitHub

1. Go to your GitHub repository in your web browser

2. You should see a banner saying "feature/your-feature-name had recent pushes" with a **"Compare & pull request"** button - click it
   
   Or manually:
   - Click on the **"Pull requests"** tab
   - Click **"New pull request"**
   - Select your feature branch to merge into `main`
   - Click **"Create pull request"**

3. Review your changes:
   - Check the **"Files changed"** tab to see all modifications
   - Review the diff to ensure everything looks correct
   - Add a title and description for your pull request

4. Merge the pull request:
   - Click **"Merge pull request"**
   - Choose **"Create a merge commit"** (this preserves branch history, similar to `--no-ff`)
   - Click **"Confirm merge"**

5. Update your local repository:
   ```bash
   git switch main
   git pull origin main
   ```

### 8.3 Clean Up Branch on GitHub

After merging the pull request on GitHub:

1. Delete the branch on GitHub:
   - After merging, GitHub will show a message: "Branch merged. You can delete this branch."
   - Click **"Delete branch"** to remove the feature branch from GitHub

2. Delete your local branch (optional):
   ```bash
   git branch -d feature/your-feature-name
   ```

**Best Practices Demonstrated:**
- Meaningful commit messages
- Merging only when satisfied
- Pulling latest changes before merging
- Cleaning up after merge

---

## Step 9: Redeploy to Vercel 🚀

Vercel automatically detects changes to your `main` branch!

1. Go to your Vercel dashboard
2. Vercel will automatically detect the new commits on `main`
3. A new deployment will be triggered automatically
4. Wait for the deployment to complete (usually 1-2 minutes)
5. Visit your live site - you'll see your new changes! 🎉

**This demonstrates:**
- How changes flow from development → GitHub → Vercel
- Automatic deployments on merge to main
- The complete CI/CD workflow

---

## 🏗️ Activity #2: Advanced Backend Integration with LLM

Now it's time to take your app to the next level! This activity challenges you to create a Python backend with LLM integration, then use v0 to generate a frontend that connects to it, demonstrating how AI can power both frontend and backend development.

### Your Mission:

Create a Python backend server (app.py) with LLM integration, add it to a GitHub repository, use v0 to generate a frontend for it, and run both locally.

### Step-by-Step Guide:

#### 1. Create GitHub Repository and Add Backend 🐙

1. Create a new repository on GitHub:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it (e.g., `my-llm-app`)
   - **DO NOT** initialize with README, .gitignore, or license
   - Copy the SSH URL

2. In Cursor, clone the repository:
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type **"Git: Clone"** and select it
   - Paste your SSH repository URL
   - Choose a location to clone

3. Copy the backend file `app.py` to your repository root:
   - In Cursor, navigate to the `Advanced_assignment` folder in this course repository
   - Copy the `app.py` file from `./Advanced_assignment/app.py`
   - Paste it into the root of your cloned repository
   - The `app.py` file contains a FastAPI backend with a sentiment analysis endpoint
   - **Security Note**: If you add API keys or secrets, create a `.env` file. This is already included in [.gitignore](/.gitignore#L138) to prevent committing sensitive data.

4. Test the backend locally following the steps in `./Advanced_assignment/README_backend.md`:
   - Install dependencies:
     ```bash
     uv sync
     ```
     This command automatically creates a virtual environment and populates it with all necessary libraries defined in `pyproject.toml`.
   - Run the backend server:
     ```bash
     uv run uvicorn app:app --reload
     ```
   - The API will be available at `http://localhost:8000`
   - Test the endpoint using the interactive docs at `http://localhost:8000/docs` or with curl:
     ```bash
     curl -X POST "http://localhost:8000/sentiment" \
          -H "Content-Type: application/json" \
          -d '{"text": "I love this product!"}'
     ```
   - Verify it returns `{"sentiment": "positive"}` and the backend is working correctly

5. Commit and push your backend:
   ```bash
   git add .
   git commit -m "feat: add Python backend with sentiment analysis"
   git push origin main
   ```

#### 3. Generate Frontend with v0 🎨

1. Go to [v0.dev](https://v0.dev)

2. Upload your `app.py` file:
   - Click on the upload/attach button in v0
   - Select your `app.py` file
   - The file will be attached to the conversation

3. Ask v0 to create a frontend:
   - Prompt: *"Create a frontend React.js app that connects to this backend API. The backend has a `/sentiment` endpoint that takes a text payload and returns sentiment analysis. Create a beautiful UI with a text input and display the sentiment result."*

4. Review the generated frontend code in v0

5. Once satisfied, click **"Download"** and copy the **npx command**

#### 4. Download Frontend in Your Repository 📥

1. In Cursor, make sure you're in your cloned repository root

2. Run the npx command from v0 in the terminal:
   ```bash
   npx create-v0-app@latest frontend
   ```
   *(Use the exact command from v0, but specify "frontend" as the folder name)*

3. This will create a `frontend` folder with all the frontend code

#### 5. Set Up and Run Frontend 🏃

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   **If you encounter errors:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. Test the frontend locally:
   ```bash
   npm run dev
   ```
   
   The frontend should run on `http://localhost:3000`

#### 6. Connect Frontend to Backend 🔗

1. In Cursor, update the frontend to connect to your backend:
   - Ask Cursor: *"Update the frontend API calls to connect to the backend running on http://localhost:8000"*
   - Cursor will help you update the API endpoint URLs
   - **Note:** If you encounter CORS errors, ask Cursor to add CORS middleware to your `app.py` file to allow requests from `http://localhost:3000`

2. Verify the connection:
   - Check that API calls point to `http://localhost:8000`
   - Ensure the request format matches your backend endpoint

#### 7. Run Both Backend and Frontend 🚀

1. **Terminal 1 - Backend:**
   ```bash
   # In the repository root
   uvicorn app:app --reload --port 8000
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   # In the frontend directory
   cd frontend
   npm run dev
   ```

3. Test the full integration:
   - Open `http://localhost:3000` in your browser
   - Use the frontend to send requests to your backend
   - Verify the LLM/sentiment analysis works correctly
   - Check that responses appear in the frontend UI

#### 8. Commit and Push Changes 💾

1. Stage your changes:
   ```bash
   git add .
   ```

2. Commit with a meaningful message:
   ```bash
   git commit -m "feat: add frontend generated by v0 and connect to backend"
   ```

3. Push to your repository:
   ```bash
   git push origin main
   ```

4. Go to your GitHub repository and verify all files are there! 🎉



### Requirements:

✅ Create a GitHub repository for the project  
✅ Create a Python backend (app.py) with LLM integration  
✅ Test backend locally with uvicorn  
✅ Use v0 to generate frontend by uploading app.py  
✅ Download frontend using npx command in the repository (name it "frontend")  
✅ Install frontend dependencies with npm install  
✅ Run both backend and frontend locally in separate terminals  
✅ Connect frontend to backend API   
✅ Make meaningful commits with clear messages  
✅ Push all code to GitHub  




## 🎓 Tips for Success

- **Take your time** with each step - don't rush!
- **Test locally** before pushing to GitHub
- **Review your changes** on GitHub before merging
- **Use meaningful commit messages** following your GitFlow rules
- **Only merge when satisfied** - you can always make more commits on a feature branch
- **Experiment** with different features and designs
- **Ask questions** if you get stuck
- **Save your work** frequently (git commits!)
- **Use branches** for every feature - it's a best practice!
- **Have fun** - this is your chance to be creative!

---

## 🛠️ Troubleshooting

### npm install errors

If you encounter an `npm install` error:

1. Install with legacy peer deps:
   ```bash
   npm install --legacy-peer-deps
   ```
2. Uninstall `vaul` (problematic peer dependency in some templates):
   ```bash
   npm uninstall vaul
   ```
3. Commit the resulting dependency updates:
   ```bash
   git add package.json package-lock.json
   git commit -m "fix: resolve dependency conflicts"
   git push
   ```

### Port 3000 in use

If port 3000 is in use:
```bash
kill -9 $(lsof -ti tcp:3000)
```

### Merge conflicts

If you encounter merge conflicts:
1. Don't panic!
2. Cursor can help resolve conflicts
3. Review the conflicted files
4. Choose which changes to keep
5. Test after resolving
6. Commit the resolution

---
