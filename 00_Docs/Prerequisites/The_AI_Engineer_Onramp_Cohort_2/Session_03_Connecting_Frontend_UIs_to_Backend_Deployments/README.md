<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading">Session 3: Connecting Frontend UIS To Backend Deployments</h1>

⏺️ Recording     | 🖼️ Slides        | 👨‍💻 Repo         |
|:-----------------|:-----------------|:-----------------|
| [Recording!](https://us02web.zoom.us/rec/share/LUaI1ZfiHiS8CKPdkiLdV3P7nC28VdfdgQevT8QSQZ1nxhrBQ5OZMdiRTcxkdcdG.XuT4aDzDRCfgJ42M) (Ys&0R.s3) | [Slides](https://www.canva.com/design/DAG6SJk52Ac/h9ESc8SDgV9ARGtHs70sHQ/edit?utm_content=DAG6SJk52Ac&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) | You are here! |

---

<details>
<summary><strong>📋 Prerequisites</strong></summary>

- Python 3.10+
- Cursor IDE
- GitHub account
- Vercel account
- uv (Python package manager)
- OPENAI_API_KEY (set as an environment variable in Vercel)
- Optional: Vercel CLI (only if deploying from terminal):
  ```bash
  npm install -g vercel
  ```


In today's code, we also use several new tools and frameworks:
- [OpenAI API](https://platform.openai.com/docs/guides/text)
- [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [v0.dev](https://v0.dev/)
- [HTML](https://www.w3schools.com/html/)

Note: You are **not expected or required** to know these yet; this list is simply here for reference and exploration.

</details>

---

<details>
<summary><strong>🏗️ Build</strong></summary>

In this session, you'll build an end-to-end LLM application with both frontend and backend, starting from the AIE-challenge repository. You'll create a complete application, test it locally, and deploy both components to Vercel.

</details>

<details>
<summary><strong>🚢 Ship</strong></summary>

The deployed end-to-end LLM application with both frontend and backend on Vercel!

Our deployed applications are here: 

## 🌐 Live Demo

You can test the complete application here:

**Basic Applications:**
- **Backend**: [https://backend-wish-list.vercel.app/](https://backend-wish-list.vercel.app/)
- **Frontend**: [https://frontend-wish-list-eta.vercel.app/](https://frontend-wish-list-eta.vercel.app/)

### Deliverables

- A short Loom of either:
  - Your deployed end-to-end application showcasing all features
  - A walkthrough of your complete development workflow from setup to deployment
  - Your advanced module enhancements

</details>

<details>
<summary><strong>🚀 Share</strong></summary>

Make a social media post about your final application!

### Deliverables

- Make a post on any social media platform about what you built!

Here's a template to get you started:

```
🚀 Exciting News! 🚀

I am thrilled to announce that I have just built and deployed a complete end-to-end LLM application using AI-powered development tools! 🎉🤖

🔍 Three Key Takeaways:

1️⃣ Coding agents can help build complete full-stack applications from scratch

2️⃣ End-to-end development workflows enable seamless integration between frontend and backend

3️⃣ Modern deployment platforms like Vercel make it easy to ship production-ready applications

Let's continue pushing the boundaries of what's possible in the world of AI-assisted development. Here's to many more innovations! 🚀

Check out my app: [Your Vercel URL]

Shout out to @AIMakerspace !

#WebDevelopment #AI #FullStack #React #NextJS #FastAPI #Vercel #Innovation #TechMilestone

Feel free to reach out if you're curious or would like to collaborate on similar projects! 🤝🔥
```

</details>


# 🤝 Assignment: Finalize AIE-Challenge — Build Your End-to-End Application

## 📚 Table of Contents

- [Overview](#overview)
- [Step 1: Create Repository and Set Up AIE-Challenge](#step-1-create-empty-repository-and-set-up-aie-challenge)
- [Step 2: Test Backend Locally](#step-2-test-backend-locally)
- [Step 3: Deploy Backend to Vercel](#step-3-deploy-backend-to-vercel)
- [Step 4: Create Frontend with v0](#step-4-create-frontend-with-v0)
- [Step 5: Test Frontend Locally](#step-5-test-frontend-locally)
- [Step 6: Deploy Frontend to Vercel](#step-6-deploy-frontend-to-vercel)
- [Step 7: Connect Frontend to Backend](#step-7-connect-frontend-to-backend)
- [Step 8: Test End-to-End Application](#step-8-test-end-to-end-application)
- [🏗️ Activity: Your Full-Stack Wish List App](#activity-your-full-stack-wish-list-app)
- [🎓 Tips for Success](#tips-for-success)

---

<details>
<summary><strong>📖 Overview</strong></summary>

In this assignment, you will finalize the AIE-challenge by creating a complete end-to-end application deployed on Vercel. You'll:

1. **Set up your repository** with the AIE-challenge codebase
2. **Test the backend locally** to ensure it works correctly
3. **Deploy the backend to Vercel**
4. **Create a frontend using v0** with backend awareness
5. **Test the frontend locally** before deployment
6. **Deploy the frontend to Vercel**
7. **Connect the frontend to your deployed backend**
8. **Test the complete end-to-end application**

</details>

---

# Step 1: Create Empty Repository and Set Up AIE-Challenge

## 1.1 Create an Empty GitHub Repository

1. Go to GitHub and create a new repository (e.g., `aie-challenge-wishlist`)

<details>
<summary><strong>1.2 Clone Your Empty Repository</strong></summary>

```bash
# Clone your empty repository
git clone git@github.com:YOUR_USERNAME/aie-challenge-wishlist.git

# Navigate into the repository
cd aie-challenge-wishlist
```

</details>

<details>
<summary><strong>1.3 Copy Backend Files to Your Repository</strong></summary>

1. Navigate to the `./app/backend-wish-list` directory in this repository
2. Copy all the files and folders from `./app/backend-wish-list`
3. Paste them into your cloned repository (the `aie-challenge-wishlist` directory)
4. Add, commit, and push the files:

```bash
# Add all the copied files
git add .

# Commit the files
git commit -m "Add backend wish list files"

# Push to your GitHub repository
git push origin main
```

</details>

You should now have the AIE-challenge codebase in your repository, including:
- `backend-wish-list/` - FastAPI backend

---

# Step 2: Test Backend Locally

<details>
<summary><strong>2.1 Navigate to Backend Directory</strong></summary>

```bash
cd backend-wish-list
```

</details>

<details>
<summary><strong>2.2 Set Up Python Environment using uv (recommended)</strong></summary>

```bash
# Initialize and sync dependencies
uv sync
```

</details>

<details>
<summary><strong>2.3 Set OpenAI API Key</strong></summary>

1. Navigate to the `backend-wish-list` directory (if you're not already there)
2. Find the `.env.example` file
3. Rename it to `.env`:
   ```bash
   mv .env.example .env
   ```
4. Open the `.env` file and replace `"your api key"` with your actual OpenAI API key:
   ```
   OPENAI_API_KEY="sk-your-actual-api-key-here"
   ```

</details>

<details>
<summary><strong>2.4 Start the Backend Server</strong></summary>

```bash
# Using uv
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```

</details>

## 2.5 Test the Backend

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
     "message": "Hello, Wish List App!"
   }
   ```
5. Click the **"Execute"** button

You should receive a JSON response with an AI-generated reply. If everything works, you're ready to deploy!

</details>

---

# Step 3: Deploy Backend to Vercel

<details>
<summary><strong>3.1 Commit and Push Your Changes</strong></summary>

```bash
# Make sure you're in the repository root
cd ..  # If you're in the backend directory

# Add all changes
git add .

# Commit your changes
git commit -m "Add backend configuration and test locally"

# Push to your repository
git push origin main
```

</details>

<details>
<summary><strong>3.2 Deploy to Vercel</strong></summary>

### Using Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Navigate to backend directory
cd backend-wish-list

# Deploy to Vercel
vercel --prod
```

Follow the prompts:
- Link to existing project or create new one
- Set project name (e.g., `aie-challenge-backend`)
- Confirm deployment settings

</details>

<details>
<summary><strong>3.3 Verify Backend Deployment</strong></summary>

Once deployed, go to your backend and check there is no error.

Save your backend URL - you'll need it for the frontend!

</details>

---

# Step 4: Create Frontend with v0

<details>
<summary><strong>4.1 Prepare Your Backend Information</strong></summary>

Before going to v0, make sure you have:
- Your deployed backend URL (e.g., `https://your-backend.vercel.app`)

</details>

<details>
<summary><strong>4.2 Generate Frontend in v0</strong></summary>

1. Go to [v0.dev](https://v0.dev)
2. Use this prompt (replace with your actual backend URL):

<details>
<summary><strong>📝 Click to expand v0 prompt</strong></summary>

```
Build a "Santa's Magical Wish List" app with the following specifications:

Design & Layout:

Dark brown background (#3d2817) with animated falling snowflakes (white dots, various sizes, continuous falling animation).

Add the attached Santa image in a circular gold frame at the top (rock-on hand gestures, sunglasses).

Parchment scroll design with wavy edges, beige/cream background (#f5ebe0), and golden borders.

Title: "Santa's Magical Wish List" in green serif font with subtitle "Write your wishes upon the enchanted scroll" in italic brown.

Features:

Christmas Spirit Meter:

Progress bar showing 0-100 percent that fills as wishes are added.

Display decorative sparkle elements inside the filled portion.

Theme Unlocking System:

Four themes: Classic (tree), Snow (snowflake), Aurora (aurora), Gingerbread (cookie).

Classic is unlocked by default.

Snow unlocks at 20 percent, Aurora at 60 percent, Gingerbread at 100 percent.

Show clear locked and unlocked states.

Wish List Section:

Input field with placeholder "Type your Christmas wish here..." and a plus button.

Display a numbered list of submitted wishes.

Each wish shows "Santa's verdict:" followed by NICE (green badge) or NAUGHTY (red badge with fire symbol).

Include a "Complete My List" button at the bottom.

Santa Chat Window:

Large chat interface below the wish input.

This chat will connect to the backend (index.py).

Scrollable message area with user messages on the right (blue) and Santa messages on the left (red/brown).

Text input with a send button.

Loading state when Santa is typing.
```

</details>

3. Upload your backend code (`api/index.py`) to give v0 context about your API
4. Upload the Santa image
5. Generate and refine the frontend until you're happy with it

</details>

<details>
<summary><strong>4.3 Get the Frontend Code</strong></summary>

1. In v0, go to the top right corner
2. Click the three dots menu (...)
3. Copy the link that starts with `npx ...`
4. Open your terminal and navigate to your repository root
5. Paste the copied command 
6. Name the v0 app as `frontend-wish-list`

This will create the frontend folder with all the generated code in your repository.

<details>
<summary><strong>4.4 Create the images directory and copy the Santa image</strong></summary>

```bash
# Make sure you're in your repository root
# Create the images directory in your new frontend folder
mkdir -p frontend-wish-list/public/images

# Navigate to the Session_03 folder (where you found ./app/backend-wish-list in step 1.3)
# and copy the cool_santa.png file to your repository's frontend folder
# Adjust the paths below to match your directory structure:
cp <Session_03_path>/app/frontend-wish-list/public/images/cool_santa.png ./frontend-wish-list/public/images/

# For example, if Session_03 is a sibling directory:
# cp ../Session_03_End_to_End_LLM_Application_Development_with_Coding_Agents/app/frontend-wish-list/public/images/cool_santa.png ./frontend-wish-list/public/images/
```

</details>

</details>

---

# Step 5: Test Frontend Locally

<details>
<summary><strong>5.1 Navigate to Frontend Directory</strong></summary>

```bash
cd frontend-wish-list/frontend-wish-list
```

</details>

<details>
<summary><strong>5.2 Install Dependencies</strong></summary>

```bash
npm install
```

</details>

<details>
<summary><strong>5.3 Configure Backend URL</strong></summary>

Create a `.env.local` file:

```bash
# For local development, point to your local backend
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:8000" > .env.local
```

</details>

<details>
<summary><strong>5.4 Start the Frontend Development Server</strong></summary>

```bash
npm run dev
```

</details>

<details>
<summary><strong>5.5 Test the Frontend</strong></summary>

1. Open http://localhost:3000 in your browser
2. Make sure your **backend is running** on port 8000 (from Step 2)
3. Test the chat interface:
   - Send a message
   - Verify you receive an AI response
   - Check that the UI displays correctly
   - Test error handling (stop the backend and try sending a message)

If everything works locally, you're ready to deploy!

</details>

---

# Step 6: Deploy Frontend to Vercel

<details>
<summary><strong>6.1 Update Environment Variable for Production</strong></summary>

Before deploying, update your `.env.local` or create a production config:

```bash
# Update .env.local to use your deployed backend
echo "NEXT_PUBLIC_BACKEND_URL=https://YOUR_BACKEND_URL.vercel.app" > .env.local
```

Or you can set this in Vercel's dashboard after deployment.

</details>

<details>
<summary><strong>6.2 Commit and Push Frontend Changes</strong></summary>

```bash
# From repository root
git add .
git commit -m "Add v0-generated frontend"
git push origin main
```

</details>

<details>
<summary><strong>6.3 Deploy Frontend to Vercel, Using Vercel CLI</strong></summary>

```bash
# Navigate to frontend directory
cd frontend-wish-list/frontend-wish-list

# Deploy to Vercel
vercel --prod
```

</details>

<details>
<summary><strong>6.4 Verify Frontend Deployment</strong></summary>

Visit your deployed frontend URL and verify it loads correctly.

</details>

---

# Step 7: Connect Frontend to Backend

<details>
<summary><strong>7.1 Verify Backend URL in Frontend</strong></summary>

Make sure your frontend is configured to use your deployed backend:

1. Check Vercel environment variables for your frontend project
2. Ensure `NEXT_PUBLIC_BACKEND_URL` is set to your deployed backend URL
3. If you need to update it, go to Vercel Dashboard → Your Frontend Project → Settings → Environment Variables

</details>

<details>
<summary><strong>7.2 Update Frontend Code (if needed)</strong></summary>

If the frontend code doesn't automatically use the environment variable, you may need to update the API call. Ask Cursor AI agents to help:

<details>
<summary><strong>💬 Click to see Cursor AI prompt</strong></summary>

```
Help me connect my frontend to my backend. The backend URL should be read from 
NEXT_PUBLIC_BACKEND_URL environment variable. The endpoint is POST /api/chat 
with body {"message": "text"}.
```

</details>

</details>

<details>
<summary><strong>7.3 Redeploy Frontend (if changes were made)</strong></summary>

```bash
# If you made code changes
git add .
git commit -m "Connect frontend to deployed backend"
git push origin main

# Vercel will automatically redeploy, or you can trigger manually
```

</details>

---

# Step 8: Test End-to-End Application

<details>
<summary><strong>8.1 Test the Complete Application</strong></summary>

1. Visit your deployed frontend URL
2. Test the chat interface:
   - Send various messages
   - Verify AI responses are received
   - Check that the UI updates correctly
   - Test on mobile if possible

</details>

<details>
<summary><strong>8.2 Verify Both Services Are Working</strong></summary>

- **Backend**: Test directly at `https://YOUR_BACKEND_URL.vercel.app/api/chat`
- **Frontend**: Test the full user experience at `https://YOUR_FRONTEND_URL.vercel.app`

</details>

<details>
<summary><strong>8.3 Create README Documentation</strong></summary>

Ask Cursor AI agents to create a comprehensive README:

<details>
<summary><strong>💬 Click to see Cursor AI prompt</strong></summary>

```
Create a README.md file for this project with:
- Project description
- Prerequisites
- Local setup instructions for both backend and frontend
- Deployment instructions
- API documentation
- Troubleshooting tips
```

</details>

</details>

---

# 🏗️ Activity: Your Full-Stack Wish List App

<details>
<summary><strong>✅ Required Tasks</strong></summary>

- ✅ Set up repository with AIE-challenge codebase
- ✅ Test backend locally
- ✅ Deploy backend to Vercel
- ✅ Create frontend with v0
- ✅ Test frontend locally
- ✅ Deploy frontend to Vercel
- ✅ Connect frontend to backend
- ✅ Test end-to-end application


<details>
<summary><strong>🎯 Advanced Assignment: Multi-Persona Chat with CV Context</strong></summary>

Enhance your Wish List App with advanced features that allow users to chat with different personas and provide context about themselves through a CV upload.

### Features to Implement

1. **Three Chat Personas**
   - **St. Nicholas** (default) - The jolly, wise Santa character
   - **Angel** - A kind, encouraging persona
   - **Devil** - A mischievous, playful persona
   
2. **PDF CV Upload**
   - Allow users to upload their CV in PDF format
   - Extract text from the PDF
   - Include CV content in the system prompt so the persona knows about the user

### Implementation Steps

#### Step 1: Update Backend to Support Multiple Personas

<details>
<summary><strong>💬 Click to see Cursor AI prompt for backend updates</strong></summary>

```
Update my FastAPI backend to support multiple chat personas. I need:
1. An endpoint that accepts a "character" parameter (options: "nicholas", "angel", "devil")
2. Each persona should have a unique system prompt that defines their personality
3. The endpoint should be POST /api/chat with body: {"message": "text", "character": "nicholas|angel|devil"}
4. Reference the Session 02 codebase for persona system prompts if available
```

</details>

#### Step 2: Add PDF Upload Endpoint

<details>
<summary><strong>💬 Click to see Cursor AI prompt for PDF upload</strong></summary>

```
Add PDF upload functionality to my FastAPI backend:
1. Create a POST endpoint /api/upload-cv that accepts a PDF file
2. Extract text from the uploaded PDF using a library like PyPDF2 or pdfplumber
3. Store the extracted text (you can use session storage or return it to frontend)
4. Include the CV text in the system prompt when chatting with personas
5. Reference Session 02 codebase for PDF upload implementation if available
```

</details>

#### Step 3: Update Frontend with Persona Selector

<details>
<summary><strong>💬 Click to see Cursor AI prompt for persona selector</strong></summary>

```
Update my Next.js frontend to:
1. Add a persona selector (dropdown or buttons) with three options: St. Nicholas, Angel, Devil
2. Update the chat API call to include the selected character parameter
3. Display the selected persona's name/icon in the chat interface
4. Style it to match the existing Christmas theme
```

</details>

#### Step 4: Add PDF Upload UI

<details>
<summary><strong>💬 Click to see Cursor AI prompt for PDF upload UI</strong></summary>

```
Add a PDF upload button to my Next.js frontend:
1. Create a file input that accepts only PDF files
2. Add an upload button near the chat interface
3. Show upload progress and success/error messages
4. Call the /api/upload-cv endpoint when a file is selected
5. Store the CV content for use in subsequent chat messages
6. Reference Session 02 codebase for PDF upload UI implementation if available
```

</details>

#### Step 5: Integrate CV Context into Chat

<details>
<summary><strong>💬 Click to see Cursor AI prompt for CV integration</strong></summary>

```
Update the chat functionality to include CV context:
1. When a CV is uploaded, include its text in the system prompt
2. Modify the chat API call to send CV context along with the message
3. Ensure the persona responses are personalized based on the user's CV
4. Handle cases where no CV is uploaded (chat should still work)
```

</details>

### Technical Requirements

**Backend:**
- Install PDF processing library: `pip install PyPDF2` or `pip install pdfplumber`
- Update FastAPI endpoint to handle file uploads
- Extract text from PDF and include in system prompt

**Frontend:**
- Add file input component for PDF upload
- Implement file upload with progress indication
- Add persona selector UI component
- Update API calls to include character and CV context

### Testing Checklist

- [ ] Can select different personas and see personality differences in responses
- [ ] Can upload a PDF CV successfully
- [ ] Chat responses reference information from the uploaded CV
- [ ] Chat works without CV upload (graceful degradation)
- [ ] Error handling for invalid file types or upload failures
- [ ] UI matches the existing Christmas theme

### Reference

These features were implemented in **Session 02**. Review that codebase for:
- Persona system prompts and character definitions
- PDF upload and text extraction implementation
- File upload UI components

### Getting Help

If you need assistance:
1. Ask Cursor AI agents with specific prompts (see above)
2. Reference Session 02 codebase for implementation examples
3. Test each feature independently before integrating
4. Check browser console and backend logs for errors

</details>

---

<details>
<summary><strong>🎓 Tips for Success</strong></summary>

- **Use Cursor AI agents** throughout the process - they can help with git commands, code fixes, and configuration
- **Test locally first** - Always verify everything works locally before deploying
- **Check environment variables** - Make sure `OPENAI_API_KEY` and `NEXT_PUBLIC_BACKEND_URL` are set correctly in Vercel
- **Give v0 clear instructions** - Include your backend URL, endpoint details, and JSON format in your prompt
- **Keep your code organized** - Use proper folder structure and commit frequently
- **Read error messages carefully** - Vercel deployment logs and browser console will help you debug issues
- **Test CORS** - If you see CORS errors, check that your backend allows the frontend origin

</details>

---

<details>
<summary><strong>🐛 Troubleshooting & Debugging Tips</strong></summary>

### Common Issues and Solutions

#### 1. React Version Mismatch Warnings

**Problem:** You see npm warnings like:
```
npm warn Could not resolve dependency:
npm warn peer react@"^19.2.1" from react-dom@19.2.1
npm warn node_modules/react-dom
npm warn   react@"19.2.0" from the root project
```

**Cause:** Your `package.json` has `react@19.2.0` but `react-dom@19.2.1` requires `react@^19.2.1`. This version mismatch can cause peer dependency warnings and potential runtime issues.

**Solution:**
1. Open your `package.json` file in the frontend directory
2. Update both React and React DOM to the same version (preferably the latest matching version):
   ```json
   "react": "19.2.1",
   "react-dom": "19.2.1",
   ```
3. Run `npm install` to update the dependencies
4. The warnings should disappear after the installation completes

**Why this happens:** When v0 generates a frontend, it may use slightly different versions of React packages. Always ensure `react` and `react-dom` versions match exactly to avoid peer dependency conflicts.

#### 2. Environment Variables Not Working

**Problem:** Frontend can't connect to backend, or API calls fail.

**Solution:**
- Check that `.env.local` exists in your frontend root directory
- Verify the variable name starts with `NEXT_PUBLIC_` for client-side access
- Restart your dev server after changing environment variables
- In Vercel, ensure environment variables are set in the project settings (not just locally)

#### 3. CORS Errors

**Problem:** Browser console shows CORS errors when frontend tries to call backend.

**Solution:**
- Verify your backend has CORS middleware configured (should already be in the template)
- Check that `allow_origins=["*"]` is set in your FastAPI CORS middleware
- Ensure your frontend URL is allowed in production (or use `["*"]` for development)

#### 4. Backend Not Starting

**Problem:** `uvicorn` command fails or backend doesn't respond.

**Solution:**
- Check that you're in the correct directory (`backend-wish-list`)
- Verify your `.env` file exists and contains a valid `OPENAI_API_KEY`
- Ensure Python dependencies are installed: `uv sync` or `pip install -r requirements.txt`
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

#### 7. Images Not Loading

**Problem:** Santa image or other assets don't display.

**Solution:**
- Verify images are in `public/images/` directory
- Check file paths in your code match the actual file locations
- Ensure image file names match exactly (case-sensitive)
- For Next.js, use `/images/filename.png` (leading slash, no `public` in path)

### General Debugging Workflow

1. **Read the error message carefully** - Most errors contain helpful information
2. **Check the browser console** - Frontend errors appear here
3. **Check terminal output** - Backend errors appear in your terminal or Vercel logs
4. **Test components individually** - Test backend separately, then frontend, then together
5. **Use Cursor AI agents** - Ask for help with specific error messages
6. **Check versions** - Ensure all package versions are compatible
7. **Clear caches** - Try `rm -rf node_modules package-lock.json && npm install` for frontend issues

### Getting Help

If you're stuck:
- Copy the exact error message and ask Cursor AI agents for help
- Check Vercel deployment logs for detailed error information
- Verify each step was completed correctly by reviewing the instructions
- Test locally before deploying to catch issues early

</details>

---

## 🎉 Congratulations!

Once you've completed all steps, you'll have a fully functional end-to-end LLM application deployed on Vercel! Your Wish List App is ready to help users manage their wish lists and interact with St. Nicholas.
