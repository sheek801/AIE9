<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading">Session 4: Building Complex End-to-End LLM Applications</h1>

⏺️ Recording     | 🖼️ Slides        | 👨‍💻 Repo         |
|:-----------------|:-----------------|:-----------------|
| [Recording!](https://us02web.zoom.us/rec/share/0XHmXdmnULUwBUsRGaDeHYP6yZcuzZZADyd42X3Nrbxi73X8dUYuC4YSvBHRVxBC.8g8j2q03cpENfEnb) (y^X2R#Qx) | [Slides](https://www.canva.com/design/DAG6SMVEUDw/xmV9dQcJlpCNr-tYpL5hZw/edit?utm_content=DAG6SMVEUDw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) | You are here! |

---

## Application deployment check list

1. create backend first using jupyter notebook or just testing a simple app.py script and  check your backend runs locally
2. create frontend, when creating v0 make sure to indicate that the frontend will connect to backend via env.local
3. replace in env.local NEXT_PUBLIC_BACKEND_URL with the http://localhost:8000, test frontend runs locally
4. deploy backend to vercel or render, and add environment variable OPENAI_API_KEY= your-openai-api-key
5. replace in your local frontend in .env.local NEXT_PUBLIC_BACKEND_URL=your-vercel-url (or your-render-url) and test frontend locally
6. deploy also frontend to vercel and add environment variable with NEXT_PUBLIC_BACKEND_URL=your-vercel-url (or your-render-url)

---

<details>
<summary><strong>📋 Prerequisites</strong></summary>

- Python 3.10+
- Cursor IDE
- GitHub account
- Vercel account (for frontend deployment)
- Render account (optional, for backend deployment alternative)
- uv (Python package manager)
- OPENAI_API_KEY (set as an environment variable in Vercel or Render)
- Optional: Vercel CLI (only if deploying from terminal):
  ```bash
  npm install -g vercel
  ```

In today's code, we also use several tools and frameworks:
- [OpenAI API](https://platform.openai.com/docs/guides/text)
- [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [HTML](https://www.w3schools.com/html/)

</details>

---

<details>
<summary><strong>🏗️ Build</strong></summary>

In this final session, you'll work with an advanced end-to-end LLM application that demonstrates real-world deployment challenges. You'll learn how to deploy both frontend and backend components to Vercel (or Render for backend), test the deployment, and understand what can break in production environments.

This is a hands-on session focused on deployment and troubleshooting - no assignments, just practical experience with shipping applications to production!

</details>

---

<details>
<summary><strong>🌐 Live Demo</strong></summary>

The application is deployed and available for testing:

- **Frontend**: [https://frontend-wish-list-break.vercel.app](https://frontend-wish-list-break.vercel.app)
- **Backend**: [https://backend-wish-list-break.vercel.app](https://backend-wish-list-break.vercel.app)
- **Backend API Documentation**: [https://backend-wish-list-break.vercel.app/docs](https://backend-wish-list-break.vercel.app/docs)
- **Backend (Render)**: [https://backend-wish-list-render.onrender.com](https://backend-wish-list-render.onrender.com) - Link to Vercel deployment connected to GitHub repository: [https://github.com/katgaw/backend-wish-list-render](https://github.com/katgaw/backend-wish-list-render)


You can test the complete application at the frontend URL, or explore the backend API directly using the API documentation link.

</details>

---

## 📚 Table of Contents

- [Overview](#overview)
- [Step 1: Set Up the Application](#step-1-set-up-the-application)
- [Step 2: Test Backend Locally](#step-2-test-backend-locally)
- [Step 3: Deploy Backend to Vercel](#step-3-deploy-backend-to-vercel)
- [Step 3 Alternative: Deploy Backend to Render](#step-3-alternative-deploy-backend-to-render)
- [Step 4: Test Frontend Locally](#step-4-test-frontend-locally)
- [Step 5: Deploy Frontend to Vercel](#step-5-deploy-frontend-to-vercel)
- [Step 6: Connect Frontend to Backend](#step-6-connect-frontend-to-backend)
- [Step 7: Test End-to-End Application](#step-7-test-end-to-end-application)
- [🎓 Tips for Success](#tips-for-success)
- [🐛 Troubleshooting & Debugging Tips](#troubleshooting--debugging-tips)

---

<details>
<summary><strong>📖 Overview</strong></summary>

In this session, you'll work with a complete end-to-end LLM application that includes:

1. **Backend** (`backend-wish-list-break/`) - FastAPI application with:
   - Chat endpoint with St. Nicholas persona
   - Image upload endpoint for PNG images
   - Vision API integration for analyzing photos

2. **Frontend** (`frontend-wish-list-break/`) - Next.js application with:
   - Santa's Magical Wish List interface
   - Chat interface with St. Nicholas
   - Image upload functionality
   - Christmas-themed UI

You'll learn to:
- Deploy FastAPI backends to Vercel or Render
- Deploy Next.js frontends to Vercel
- Configure environment variables
- Connect frontend to backend
- Debug common deployment issues
- Understand what breaks in production and why

</details>

---

# Step 1: Set Up the Application

<details>
<summary><strong>1.1 Navigate to the Application Directory</strong></summary>

The application is already set up in this repository. Navigate to the backend directory:

```bash
cd app/backend-wish-list-break
```

</details>

<details>
<summary><strong>1.2 Set Up Python Environment using uv</strong></summary>

```bash
# Initialize and sync dependencies
uv sync
```

</details>

<details>
<summary><strong>1.3 Set OpenAI API Key</strong></summary>

1. Navigate to the `backend-wish-list-break` directory (if you're not already there)
2. Create a `.env` file:
   ```bash
   touch .env
   ```
3. Open the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY="sk-your-actual-api-key-here"
   ```

</details>

---

# Step 2: Test Backend Locally

<details>
<summary><strong>2.1 Start the Backend Server</strong></summary>

```bash
# Make sure you're in the backend-wish-list-break directory
cd app/backend-wish-list-break

# Using uv
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```

</details>

## 2.2 Test the Backend

Open your browser and visit:
- **Health check**: http://localhost:8000
- **API documentation**: http://localhost:8000/docs

<details>
<summary><strong>Test the chat endpoint using the interactive documentation</strong></summary>

1. In the API documentation page (http://localhost:8000/docs), find the `/api/chat` endpoint
2. Click on it to expand the endpoint details
3. Click the **"Try it out"** button
4. In the request body, enter a test message, for example:
   ```json
   {
     "message": "Hello, Santa! How can I survive Christmas?"
   }
   ```
5. Click the **"Execute"** button

You should receive a JSON response with an AI-generated reply from St. Nicholas. If everything works, you're ready to deploy!

</details>

---

# Step 3: Deploy Backend to Vercel

<details>
<summary><strong>3.1 Verify Backend Structure</strong></summary>

Make sure your `backend-wish-list-break` directory contains:
- `api/index.py` - Your FastAPI application
- `vercel.json` - Vercel configuration
- `requirements.txt` or `pyproject.toml` - Dependencies

</details>

<details>
<summary><strong>3.2 Deploy to Vercel Using CLI</strong></summary>

```bash
# Make sure you're in the backend directory
cd app/backend-wish-list-break

# Install Vercel CLI if you haven't already
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

Follow the prompts:
- Link to existing project or create new one
- Set project name (e.g., `backend-wish-list-break`)
- Confirm deployment settings

</details>

<details>
<summary><strong>3.3 Set Environment Variables in Vercel</strong></summary>

After deployment:

1. Go to your Vercel Dashboard
2. Select your backend project
3. Go to **Settings** → **Environment Variables**
4. Add `OPENAI_API_KEY` with your actual API key value
5. Make sure it's set for **Production**, **Preview**, and **Development** environments
6. Redeploy if necessary

</details>

<details>
<summary><strong>3.4 Verify Backend Deployment</strong></summary>

Once deployed, visit your backend URL:
- **Health check**: `https://YOUR_BACKEND_URL.vercel.app/`
- **API documentation**: `https://YOUR_BACKEND_URL.vercel.app/docs`

Save your backend URL - you'll need it for the frontend!

</details>

---

# Step 3 Alternative: Deploy Backend to Render

<details>
<summary><strong>3A.1 Push Backend to GitHub</strong></summary>

Before deploying to Render, make sure your backend code is pushed to a GitHub repository:

1. Create a new repository on GitHub:
   - Go to [https://github.com/new](https://github.com/new)
   - Enter a repository name (e.g., `backend-wish-list-break`)
   - Choose public or private
   - Click **"Create repository"**

2. Clone the repository locally using SSH:
   ```bash
   git clone git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

3. Copy the backend app files to the cloned repository:
   ```bash
   cp -r ../app/backend-wish-list-break/* .
   ```

4. Add and commit your code:
   ```bash
   git add .
   git commit -m 'adding files'
   ```

5. Push to GitHub:
   ```bash
   git push origin main
   ```

</details>

<details>
<summary><strong>3A.2 Create Web Service on Render</strong></summary>

1. Go to [https://dashboard.render.com/](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Under **"Connect account"**, select **"GitHub"** (or connect your GitHub account if not already connected)
4. Click **"Configure account"** and authorize Render to access your GitHub repositories
5. Select the repository containing your backend code
6. Click **"Connect"**

</details>

<details>
<summary><strong>3A.3 Configure Web Service Settings</strong></summary>

Configure your web service with the following settings:

- **Name**: Choose a name for your service (e.g., `backend-wish-list-break`)
- **Region**: Select the region closest to you
- **Branch**: Select `main` (or your default branch)
- **Root Directory**: Leave empty or set to the path if your backend is in a subdirectory
- **Runtime**: Select `Python 3`
- **Build Command**: Leave empty (Render will auto-detect)
- **Start Command**: 
  ```
  uvicorn api.index:app --host 0.0.0.0 --port $PORT
  ```
- **Plan**: Select **"Free"** (or choose a paid plan if you prefer)

</details>

<details>
<summary><strong>3A.4 Add Environment Variables</strong></summary>

1. Scroll down to the **"Environment Variables"** section
2. Click **"Add Environment Variable"**
3. Add the following:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (e.g., `sk-your-actual-api-key-here`)
4. Click **"Create Web Service"**

Render will automatically start building and deploying your backend.

</details>

<details>
<summary><strong>3A.5 Verify Backend Deployment on Render</strong></summary>

Once deployment is complete:

1. Render will provide you with a URL (e.g., `https://your-service-name.onrender.com`)
2. Visit your backend URL:
   - **Health check**: `https://YOUR_SERVICE_NAME.onrender.com/`
   - **API documentation**: `https://YOUR_SERVICE_NAME.onrender.com/docs`
3. Save your Render backend URL - you'll need it for the frontend!

**Note**: Free tier services on Render may spin down after inactivity. The first request after inactivity may take longer to respond.

</details>

---

# Step 4: Test Frontend Locally

<details>
<summary><strong>4.1 Navigate to Frontend Directory</strong></summary>

```bash
cd app/frontend-wish-list-break
```

</details>

<details>
<summary><strong>4.2 Install Dependencies</strong></summary>

```bash
npm install
```

</details>

<details>
<summary><strong>4.3 Configure Backend URL for Local Development</strong></summary>

Create a `.env.local` file:

```bash
# For local development, point to your local backend
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:8000" > .env.local
```

</details>

<details>
<summary><strong>4.4 Start the Frontend Development Server</strong></summary>

```bash
npm run dev
```

</details>

<details>
<summary><strong>4.5 Test the Frontend</strong></summary>

1. Open http://localhost:3000 in your browser
2. Make sure your **backend is running** on port 8000 (from Step 2)
3. Test the features:
   - Send a chat message to St. Nicholas
   - Upload a PNG image
   - Verify you receive AI responses
   - Check that the UI displays correctly
   - Test error handling (stop the backend and try sending a message)

If everything works locally, you're ready to deploy!

</details>

---

# Step 5: Deploy Frontend to Vercel

<details>
<summary><strong>5.1 Update Environment Variable for Production</strong></summary>

Before deploying, you'll need to set the backend URL in Vercel. You can do this either:

**Option 1: Set in Vercel Dashboard (Recommended)**
- After deployment, go to Vercel Dashboard → Your Frontend Project → Settings → Environment Variables
- Add `NEXT_PUBLIC_BACKEND_URL` with your deployed backend URL:
  - If using Vercel backend: `https://your-backend.vercel.app`
  - If using Render backend: `https://your-service-name.onrender.com`

**Option 2: Update .env.local before deployment**
```bash
# Update .env.local to use your deployed backend
# For Vercel backend:
echo "NEXT_PUBLIC_BACKEND_URL=https://YOUR_BACKEND_URL.vercel.app" > .env.local

# OR for Render backend:
echo "NEXT_PUBLIC_BACKEND_URL=https://YOUR_SERVICE_NAME.onrender.com" > .env.local
```

</details>

<details>
<summary><strong>5.2 Deploy Frontend to Vercel Using CLI</strong></summary>

```bash
# Navigate to frontend directory
cd app/frontend-wish-list-break

# Deploy to Vercel
vercel --prod
```

Follow the prompts:
- Link to existing project or create new one
- Set project name (e.g., `frontend-wish-list-break`)
- Confirm deployment settings

</details>

<details>
<summary><strong>5.3 Set Environment Variables in Vercel</strong></summary>

After deployment:

1. Go to your Vercel Dashboard
2. Select your frontend project
3. Go to **Settings** → **Environment Variables**
4. Add `NEXT_PUBLIC_BACKEND_URL` with your deployed backend URL:
   - If using Vercel backend: `https://your-backend.vercel.app`
   - If using Render backend: `https://your-service-name.onrender.com`
5. Make sure it's set for **Production**, **Preview**, and **Development** environments
6. Redeploy if necessary (Vercel will automatically redeploy when you add environment variables)

</details>

<details>
<summary><strong>5.4 Verify Frontend Deployment</strong></summary>

Visit your deployed frontend URL and verify it loads correctly. You may see errors initially if the backend URL isn't configured yet - that's expected!

</details>

---

# Step 6: Connect Frontend to Backend

<details>
<summary><strong>6.1 Verify Backend URL Configuration</strong></summary>

Make sure your frontend is configured to use your deployed backend:

1. Check Vercel environment variables for your frontend project
2. Ensure `NEXT_PUBLIC_BACKEND_URL` is set to your deployed backend URL (without trailing slash)
3. If you need to update it:
   - Go to Vercel Dashboard → Your Frontend Project → Settings → Environment Variables
   - Update `NEXT_PUBLIC_BACKEND_URL` to your backend URL
   - Redeploy the frontend

</details>


<details>
<summary><strong>6.2 Test the Connection</strong></summary>

1. Visit your deployed frontend URL
2. Try sending a chat message
3. Check the browser console (F12) for any errors
4. Verify the request is going to the correct backend URL

</details>

---

# Step 7: Test End-to-End Application

<details>
<summary><strong>7.1 Test the Complete Application</strong></summary>

1. Visit your deployed frontend URL
2. Test all features:
   - **Chat Interface**: Send various messages to St. Nicholas
   - **Image Upload**: Upload a PNG image and ask Santa about it
   - **Wish List**: Add wishes and see Santa's verdicts
   - Verify AI responses are received
   - Check that the UI updates correctly
   - Test on mobile if possible

</details>

<details>
<summary><strong>7.2 Verify Both Services Are Working</strong></summary>

- **Backend**: Test directly at `https://YOUR_BACKEND_URL.vercel.app/api/chat`
- **Frontend**: Test the full user experience at `https://YOUR_FRONTEND_URL.vercel.app`

Both should be working independently and together!

</details>

<details>
<summary><strong>7.3 Common Issues to Watch For</strong></summary>

When testing, pay attention to:

- **CORS errors** - Backend not allowing frontend origin
- **404 errors** - Wrong endpoint paths or backend URL
- **500 errors** - Missing environment variables or API key issues
- **Timeout errors** - Backend taking too long to respond
- **Image upload failures** - File size limits or format issues
- **Environment variable issues** - Variables not set correctly in Vercel

These are the kinds of issues that break in production! Understanding them helps you debug real applications.

</details>

---

<details>
<summary><strong>🎓 Tips for Success</strong></summary>

- **Test locally first** - Always verify everything works locally before deploying
- **Check environment variables** - Make sure `OPENAI_API_KEY` and `NEXT_PUBLIC_BACKEND_URL` are set correctly in Vercel
- **Read error messages carefully** - Vercel deployment logs and browser console will help you debug issues
- **Test CORS** - If you see CORS errors, check that your backend allows the frontend origin
- **Use Cursor AI agents** - They can help with debugging deployment issues
- **Check Vercel logs** - Function logs show what's happening on the backend
- **Verify file paths** - Make sure image paths and API routes match exactly

</details>

---

<details>
<summary><strong>🐛 Troubleshooting & Debugging Tips</strong></summary>

### Common Issues and Solutions

#### 1. React Version Mismatch Warnings

**Problem:** You see npm warnings about React version mismatches.

**Solution:**
1. Open your `package.json` file in the frontend directory
2. Update both React and React DOM to the same version:
   ```json
   "react": "19.2.1",
   "react-dom": "19.2.1",
   ```
3. Run `npm install` to update the dependencies

#### 2. Environment Variables Not Working

**Problem:** Frontend can't connect to backend, or API calls fail.

**Solution:**
- Check that `.env.local` exists in your frontend root directory (for local development)
- Verify the variable name starts with `NEXT_PUBLIC_` for client-side access
- Restart your dev server after changing environment variables
- In Vercel, ensure environment variables are set in the project settings
- Make sure variables are set for the correct environment (Production/Preview/Development)

#### 3. CORS Errors

**Problem:** Browser console shows CORS errors when frontend tries to call backend.

**Solution:**
- Verify your backend has CORS middleware configured
- Check that `allow_origins=["*"]` is set in your FastAPI CORS middleware
- Ensure your frontend URL is allowed in production (or use `["*"]` for development)
- Check that the backend is actually running and accessible

#### 4. Backend Not Starting

**Problem:** `uvicorn` command fails or backend doesn't respond.

**Solution:**
- Check that you're in the correct directory (`backend-wish-list-break`)
- Verify your `.env` file exists and contains a valid `OPENAI_API_KEY`
- Ensure Python dependencies are installed: `uv sync`
- Check if port 8000 is already in use: `lsof -i :8000` (macOS/Linux) or change the port

#### 5. Frontend Build Fails on Vercel

**Problem:** Vercel deployment fails during build step.

**Solution:**
- Check Vercel build logs for specific error messages
- Verify `package.json` has all required dependencies
- Ensure Node.js version is compatible (check Vercel settings)
- Look for TypeScript errors or missing imports in the build logs
- Try building locally first: `npm run build` to catch errors early

#### 6. API Calls Return 404 or 500 Errors

**Problem:** Frontend makes requests but gets error responses.

**Solution:**
- Verify the backend URL is correct in your environment variables
- Test the backend endpoint directly using curl or Postman
- Check backend logs (Vercel function logs) for error details
- Ensure the endpoint path matches exactly (`/api/chat` not `/api/chat/`)
- Verify request body format matches what the backend expects
- Check that `OPENAI_API_KEY` is set in Vercel backend environment variables

#### 7. Images Not Loading

**Problem:** Santa image or other assets don't display.

**Solution:**
- Verify images are in `public/images/` directory
- Check file paths in your code match the actual file locations
- Ensure image file names match exactly (case-sensitive)
- For Next.js, use `/images/filename.png` (leading slash, no `public` in path)

#### 8. Image Upload Fails

**Problem:** PNG image upload returns an error.

**Solution:**
- Verify the image is actually a PNG file (check file type)
- Check file size limits (Vercel has limits on request body size)
- Ensure the backend endpoint accepts `image/png` content type
- Check backend logs for specific error messages
- Verify the FormData is being sent correctly from the frontend

#### 9. Environment Variables Not Available in Production

**Problem:** Variables work locally but not in Vercel.

**Solution:**
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add the variables there (don't rely on `.env.local` for production)
- Make sure variables are set for the correct environment (Production/Preview/Development)
- Redeploy after adding environment variables
- For Next.js, remember that only variables starting with `NEXT_PUBLIC_` are available client-side

### General Debugging Workflow

1. **Read the error message carefully** - Most errors contain helpful information
2. **Check the browser console** - Frontend errors appear here
3. **Check terminal output** - Backend errors appear in your terminal or Vercel logs
4. **Check Vercel function logs** - Backend errors in production appear in Vercel dashboard
5. **Test components individually** - Test backend separately, then frontend, then together
6. **Use Cursor AI agents** - Ask for help with specific error messages
7. **Check versions** - Ensure all package versions are compatible
8. **Clear caches** - Try `rm -rf node_modules package-lock.json && npm install` for frontend issues

### Getting Help

If you're stuck:
- Copy the exact error message and ask Cursor AI agents for help
- Check Vercel deployment logs for detailed error information
- Check Vercel function logs for backend errors
- Verify each step was completed correctly by reviewing the instructions
- Test locally before deploying to catch issues early

</details>

---

<details>
<summary><strong>📈 Scaling Your Application</strong></summary>

As your application grows, you'll need to consider different deployment strategies based on your requirements. Here's a guide to scaling from POC to production:

### POC Level (Proof of Concept)
**Sufficient for:** Learning, demos, and initial testing

- **Vercel** is great for getting started quickly
- If Vercel breaks or you need more complex features:
  - You may need more complicated libraries
  - You may need to run async functions
  - You may need dedicated servers
  - **Use Render** as an alternative for more flexibility

### MVP Level (Minimum Viable Product)
**Sufficient for:** Early customers, beta testing, and small-scale production

- **Render** is good all the way to MVP level
- **Privacy requirements**: If your client requires privacy compliance:
  - Use **Azure endpoints** for secure, compliant deployments
- **Database needs**: When you need to start building a database:
  - Deploy to **Azure** or **AWS** for managed database services
- **Fine-tuned models**: When you need custom models:
  - Save fine-tuned models to **Azure**
- **Embedding models**: For custom embeddings:
  - Save fine-tuned embedding models to **Hugging Face (HF)**

### Production Level
**Required for:** Enterprise clients, high-traffic applications, and mission-critical systems

- Deploy the entire application to your **client-chosen cloud provider**:
  - **Azure** - Good for enterprise clients, Microsoft ecosystem integration
  - **AWS** - Industry standard, extensive services, global infrastructure
- Consider:
  - Load balancing
  - Auto-scaling
  - Database replication
  - CDN for static assets
  - Monitoring and logging
  - Security compliance (SOC 2, HIPAA, etc.)
  - Disaster recovery and backup strategies

### Key Takeaways

- **Start simple**: Use Vercel or Render for POC/MVP
- **Scale when needed**: Move to Azure/AWS when you hit limitations or client requirements
- **Plan ahead**: Consider your client's requirements early (privacy, compliance, scale)
- **Cost optimization**: Free tiers are great for learning, but production requires proper infrastructure investment

</details>

---

## 🎉 Congratulations!

You've successfully deployed a complete end-to-end LLM application to Vercel! You've learned:

- How to deploy FastAPI backends to Vercel
- How to deploy Next.js frontends to Vercel
- How to configure environment variables
- How to connect frontend to backend
- Common deployment issues and how to debug them
- What breaks in production and why

This hands-on experience with deployment and troubleshooting will help you ship real applications in the future!
