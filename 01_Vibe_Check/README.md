<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719"
     width="200px"
     height="auto"/>
</p>

<h1 align="center" id="heading">Session 1: Introduction and Vibe Check</h1>

### [Quicklinks](https://github.com/AI-Maker-Space/AIE9/tree/main/00_AIE_Quicklinks)

| 📰 Session Sheet | ⏺️ Recording     | 🖼️ Slides        | 👨‍💻 Repo         | 📝 Homework      | 📁 Feedback       |
|:-----------------|:-----------------|:-----------------|:-----------------|:-----------------|:-----------------|
| [Vibe Check!](../00_Docs/Session_Sheets/01_Vibe_Check.md) |[Recording!](https://drive.google.com/file/d/1Rsmm0Hld3WFHRxhZpEDLN_JREQ43yhwu/view?usp=drive_link) | [Session 1 Slides](https://www.canva.com/design/DAG-EBzN2PQ/gE9-Uma217yych4M7GCjSw/edit?utm_content=DAG-EBzN2PQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) | You are here! | [Session 1 Assignment: Vibe Check](https://forms.gle/NeN59bCLdtXvwzVJ9) | [Feedback 1/13](https://forms.gle/1im4nmYK9cW9MFEk6) |

## 🏗️ How AIM Does Assignments

> 📅 **Assignments will always be released to students as live class begins.** We will never release assignments early.

Each assignment will have a few of the following categories of exercises:

- ❓ **Questions** – these will be questions that you will be expected to gather the answer to! These can appear as general questions, or questions meant to spark a discussion in your breakout rooms!

- 🏗️ **Activities** – these will be work or coding activities meant to reinforce specific concepts or theory components.

- 🚧 **Advanced Builds (optional)** – Take on a challenge! These builds require you to create something with minimal guidance outside of the documentation. Completing an Advanced Build earns full credit in place of doing the base assignment notebook questions/activities.

### Main Assignment

In the following assignment, you are required to take the app that you created for the AIE9 challenge (from [this repository](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge)) and conduct what is known, colloquially, as a "vibe check" on the application.

You will be required to submit a link to your GitHub, as well as screenshots of the completed "vibe checks" through the provided Google Form!

> NOTE: This will require you to make updates to your personal class repository, instructions on that process can be found [here](https://github.com/AI-Maker-Space/AIE9/tree/main/00_Docs/Prerequisites/Initial_Setup)!


#### A Note on Vibe Checking

>"Vibe checking" is an informal term for cursory unstructured and non-comprehensive evaluation of LLM-powered systems. The idea is to loosely evaluate our system to cover significant and crucial functions where failure would be immediately noticeable and severe.
>
>In essence, it's a first look to ensure your system isn't experiencing catastrophic failure.

---

#### 🏗️ Activity #1: General Vibe Checking Evals

Please evaluate your system on the following questions:

1. Explain the concept of object-oriented programming in simple terms to a complete beginner.
    - Aspect Tested: Knowledge Transfer & Persona Consistency.
    - Observation: Successfully bridged a technical concept into a "Teaching/Onboarding" job requirement.
2. Read the following paragraph and provide a concise summary of the key points…
    - Aspect Tested: Information Density & Technical Entity Extraction.
    - Observation: Precisely extracted "AWS Lambda" and "RDS" as missing keywords from the JD.
3. Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.
    - Aspect Tested: Persona Anchoring (The "Stress Test").
    - Observation: Excellent results; the model stayed in its "Recruiter" persona and evaluated the candidate's "Flash Fiction" skills rather than just telling a story.
4. If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?
    - Aspect Tested: Logical Reasoning & Constraint Satisfaction
    - Observation: Correctly solved the math ($3 \times 4$ and $3 \times 3$) while framing it as "Inventory Optimization" logic.
5. Rewrite the following paragraph in a professional, formal tone…
    - Aspect Tested: Style Transfer & Core Utility.
    - Observation: High performance; turned casual language into high-impact, metrics-driven bullet points.

#### ❓Question #1:

Do the answers appear to be correct and useful?
##### ✅ Answer:
Yes. While the answers are unconventional for a general chatbot, they are highly correct and useful for a specialized ATS Optimizer. The system successfully forced every general prompt through the "Expert Technical Recruiter" lens, proving that the System Prompt is robust and the "Vibe" is consistent with a professional career tool.
---

#### 🏗️ Activity #2: Personal Vibe Checking Evals (Your Assistant Can Answer)

Now test your assistant with personal questions it should be able to help with. Try prompts like:

- "Help me think through the pros and cons of [enter decision you're working on making]."
- "What are the pros and cons of [job A] versus [job B] as the next step in my career?"
- "Draft a polite follow-up [email, text message, chat message] to a [enter person details] who hasn't responded."
- "Help me plan a birthday surprise for [person]."
- "What can I cook with [enter ingredients] in fridge."

##### Your Prompts and Results:
1. Prompt: The Career Decision (Pros & Cons): Help me think through the pros and cons: Should I accept a higher-paying role in a legacy bank (using COBOL/Mainframe) or a lower-paying role at a cutting-edge AI Startup (focused on RAG and Agents)?
   - Result: The AI acted as a strategic career coach. It provided a split Match Score (35 for Bank, 60 for Startup) and accurately identified that my Python skills are an immediate bridge to AI engineering, while COBOL would require a total pivot.
   - Vibe Check: ✅ Strong. It gave high-value career advice while maintaining the ATS report format.
2. Prompt: Drafting a Follow-up Email: Draft a polite follow-up email to a recruiter named Sarah. I interviewed 4 days ago for a Senior AI Engineer role and haven't heard back yet. Make it sound professional and hungry for the role.
   - Result: Interestingly, the AI treated the request for a "Follow-up Email" as a "Senior AI Engineer" job description. It gave me a low Match Score (24/100) because my dummy resume lacked PyTorch/MLOps, but the Executive Summary correctly identified that I need "Senior-level ownership signals."
   - Vibe Check: ⚠️ Aligned but Rigid. It prioritized the "Analyzer" persona over the "Drafting" task. It didn't write the email; it told me how to fix my resume to get the email response. 
3. Prompt: Planning a Birthday Surprise: Help me plan a birthday surprise for my manager. He loves Python coding and rock climbing. Give me a creative plan.
   - Result: This was the funniest and most revealing test. The AI gave me a 32/100 score for "Birthday Planning" and suggested I add "Event Coordination" and "Belaying" to my resume to better match the "Manager's Birthday" job description.
   - Vibe Check: ✅ Excellent Persona Anchor. It proved the system is locked into a "Recruiter" mindset, even when faced with highly personal/non-professional tasks.

#### ❓Question #2:

Are the vibes of this assistant's answers aligned with your vibes? Why or why not?
##### ✅ Answer:
The vibes are highly aligned with the project's goals. I built ATS Nexus to be a precision-focused professional tool. The fact that the AI refuses to 'just be a chatbot' and insists on analyzing every prompt as a gap analysis against a resume proves that the System Prompt is well-engineered and resistant to persona-drift. While it feels 'stiff' when asked about birthday parties, that rigidity is exactly what a user wants when they are seeking serious career optimization.
---

#### 🏗️ Activity #3: Personal Vibe Checking Evals (Requires Additional Capabilities)

Now test your assistant with questions that would require capabilities beyond basic chat, such as access to external tools, APIs, or real-time data. Try prompts like:

- "What does my schedule look like tomorrow?"
- "What time should I leave for the airport?"

##### Your Prompts and Results:
1. Prompt: Testing for Live Web Access / Real-Time Data - Based on my 5 years of Python experience, find me 3 'AI Engineer' job postings currently open in New York City that were posted in the last 24 hours
   - Result: The AI provided a generic "AI Engineer" profile analysis instead of actual listings. It correctly identified that an NYC AI Engineer needs PyTorch and MLOps, but it could not fetch real-time data from the web.
   - Observation: The system lacks RAG (Retrieval-Augmented Generation) and web-search tools. It is relying entirely on its pre-trained internal knowledge.
2. Prompt: Testing for Personal Data / System Integration - Check my Google Calendar for next Tuesday. Do I have time for a 1-hour interview at 2:00 PM EST?
   - Result: The AI gave a "Note on Job Description" stating it cannot access the calendar. It then hilariously gave a "50/100" match score for a "calendar-scheduling request," treating my personal question as if it were a poorly written job description.
   - Observation: The system is Stateless and Disconnected. It has no access to external APIs (Google OAuth) and is strictly bound to its "Analyzer" persona.

#### ❓Question #3:

What are some limitations of your application?
##### ✅ Answer:
The Vibe Check process revealed four critical limitations of the current ATS Nexus architecture:

Disconnected from Real-Time Data: The app cannot browse the live job market. It provides career advice based on general patterns rather than current, specific job openings in a user's local city.

Lack of System Integration: It cannot access personal tools (Calendar, Email, LinkedIn). It is an 'optimizer' but not yet an 'agent' capable of taking action on behalf of the user.

Statelessness: Every interaction is independent. The app does not remember the user’s resume from one prompt to the next, requiring a fresh upload for every check.

Persona Over-Optimization: Because the System Prompt is so strongly anchored as a 'Technical Recruiter,' the AI struggles to handle non-recruitment tasks. It attempts to turn every input—even a calendar request—into a 'Gap Analysis,' which demonstrates high persona consistency but limited general utility.
---

This "vibe check" now serves as a baseline, of sorts, to help understand what holes your application has.

### 🚧 Advanced Build (OPTIONAL):

Please make adjustments to your application that you believe will improve the vibe check you completed above, then deploy the changes to your Vercel domain [(see these instructions from your Challenge project)](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge/blob/main/README.md) and redo the above vibe check.

> NOTE: You may reach for improving the model, changing the prompt, or any other method.

#### 🏗️ Activity #1
##### Adjustments Made:
- _describe adjustment(s) here_

##### Results:
1. _Comment here how the change(s) impacted the vibe check of your system_
2.
3.
4.
5.


## Submitting Your Homework
### Main Assignment
Follow these steps to prepare and submit your homework:
1. Pull the latest updates from upstream into the main branch of your AIE9 repo:
    - For your initial repo setup see [Initial_Setup](https://github.com/AI-Maker-Space/AIE9/tree/main/00_Docs/Prerequisites/Initial_Setup)
    - To get the latest updates from AI Makerspace into your own AIE9 repo, run the following commands:
    ```
    git checkout main
    git pull upstream main
    git push origin main
    ```
2. **IMPORTANT:** Start Cursor from the `01_Prototyping_Best_Practices_and_Vibe_Check` folder (you can also use the _File -> Open Folder_ menu option of an existing Cursor window)
3. Edit this `README.md` file (the one in your `AIE9/01_Prototyping_Best_Practices_and_Vibe_Check` folder)
4. Complete all three Activities:
    - **Activity #1:** Evaluate your system using the general vibe checking questions and define the "Aspect Tested" for each
    - **Activity #2:** Test your assistant with personal prompts it should be able to answer
    - **Activity #3:** Test your assistant with prompts requiring additional capabilities
5. Provide answers to all three Questions (`❓Question #1`, `❓Question #2`, `❓Question #3`)
6. Add, commit and push your modified `README.md` to your origin repository's main branch.

When submitting your homework, provide the GitHub URL to your AIE9 repo.

### The Advanced Build:
1. Follow all of the steps (Steps 1 - 6) of the Main Assignment above
2. Document what you changed and the results you saw in the `Adjustments Made:` and `Results:` sections of the Advanced Build
3. Add, commit and push your additional modifications to this `README.md` file to your origin repository.

When submitting your homework, provide the following on the form:
+ The GitHub URL to your AIE9 repo.
+ The public Vercel URL to your updated Challenge project on your AIE9 repo.
