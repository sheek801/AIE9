# ⌨️ LLM APIs - The “System” Role

To leverage LLMs in our applications as developers, we must understand how to request information and receive responses from them. This is true for LLMs as well as any API we might be building applications with.

LLMs are different because we need to give them natural language inputs in the form of instructions, which we also call prompts. 

In other words, we have to communicate via API like a computer (highly structured and syntactic input and output), **but we also have to talk to them like a human**.

As ***users of LLM applications*** like ChatGPT, we “talk” to LLMs using a simple pattern (or input-output schema):

- Input: Text message
- Output: Text message

As ***developers of LLM applications*** like ChatGPT, we “talk” to LLMs using a more flexible simple pattern (or I-O schema):

- Input: List of text messages
- Output: Single text message

The input list of text messages must each contain a role. There are three types of roles:

1. `System`, also sometimes called `Developer`
    
    **System-level instructions are always prioritized ahead of all other messages**.
    
    This is the key point. This is why [Rules](https://cursor.com/docs/context/rules) like Gitflow best practices given to coding agents are effective in keeping our application development on track.
    
2. `User`, also sometimes called `Human`: user int
    
    User messages represent exactly what do as *users of LLM applications* when providing inputs. Effectively, we can act as a user.
    
3. `Assistant`, also sometimes called `AI` 
    
    Assistant, or AI messages, are responses directly from the LLM. Similarly, we can also act as the AI and provide preferred responses to given user inputs. We might call this one-shot or few-shot prompting. 
    

### **Thinking Questions**

- What is one lesson you've learned from this?
- What is one [lesson that you have not yet learned](https://www.loom.com/share/b34e4bd657f74892ac9a01f774113b4d)?
