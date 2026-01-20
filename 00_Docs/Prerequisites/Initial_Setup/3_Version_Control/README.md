# 🔀 Software Engineering Using Version Control

To use version control effectively, we'll need to understand two key concepts: [local repos vs. remotes](https://git-scm.com/book/ms/v2/Git-Basics-Working-with-Remotes) and how to keep them in sync. We will also need to understand Git commands and all that noise.

For now, though, forget memorizing Git commands. They will come naturally if we can understand the process at a higher level.

**TL;DR**

- General Flow: Upstream → Origin → Your Laptop (**Local**) → Origin
- The `main` branch in your remote repo stays synced with **Upstream** (course materials)
- You do your work on **Local** and push to **Origin** (your remote on GitHub)

## 🏡 The Three Places Your Code Lives

- **Upstream**
    - The *source of truth* you don't directly control (e.g., course materials).
- **Origin**
    - *Your* copy of the repo on GitHub (your remote).
- **Local**
    - The repo on your machine where you actually edit files (e.g., do assignments)

**TL;DR**

- You will only `pull` from **Upstream** (course materials), not `push` back to it.
- You will write code and edit files on **Local**.
- You will `push` to **Origin** (your remote repository).

## 📝 A Note on Branching (For Future Reference)

While we use a simplified workflow for this course (working directly on `main`), professional software development often uses more complex branching strategies:

1. `main`
    - "The current official story."
    - In industry: what's in **production**.
    - *Deployed to users, only stable, released code.*
2. `develop` (professional Gitflow)
    - "The draft of the next chapter."
    - In industry: what's in **staging**.
    - *Where all features get integrated before release*.
3. `feature` **branches**
    - "Write and edit paragraphs before they go into the book."
    - In industry: e.g., `feature/login-page` or `release/1.2.0`

For this course, we keep things simple by working directly on `main`. As you progress in your career, you'll learn when and how to use these more advanced workflows.

### Thinking Questions

- What is one lesson you've learned from this?
- What is one [lesson that you have not yet learned](https://www.loom.com/share/b34e4bd657f74892ac9a01f774113b4d)?
