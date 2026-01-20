#### GitFlow Best Practices

Copy the following GitFlow commands into a `.gitflow_rules` file in your Cursor project root. This serves as a quick reference for professional Git workflows:

#### 🏗️ Setup `main` and `develop`

**Clone your repository:**
```bash
# Clone your repository and navigate into it
git clone git@github.com:yourname/yourrepo.git   # Clones the repository using SSH
cd yourrepo                                      # Changes directory to your new repo
```

**Create the `develop` branch:**
```bash
git checkout -b develop
git push -u origin develop
```

#### 📦 Prepare a Release

**Create a release branch from `develop`:**
```bash
git checkout develop
git pull origin develop
git checkout -b release/1.2.0
git push -u origin release/1.2.0
```

**Only bug fixes and version updates:**
```bash
git add .
git commit -m "Fix login validation bug"
git push
```

#### 🚢 Release to Production

**Merge the release branch into `main`:**
```bash
git checkout main
git pull origin main
git merge --no-ff release/1.2.0
git push origin main
```

**Tag the release:**
```bash
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0
```

#### 🔄 Merge Release Back into `develop`

**Keep bug fixes in sync:**
```bash
git checkout develop
git pull origin develop
git merge --no-ff release/1.2.0
git push origin develop
```

**Clean up:**
```bash
git branch -d release/1.2.0
git push origin --delete release/1.2.0
```