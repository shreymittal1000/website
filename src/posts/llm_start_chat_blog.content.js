// Markdown content for llm_start_chat_blog – edit the .md file and sync here, or use the .md with a working glob
export default `---
id: llm-start-chat-blog
title: When You Tell Two LLMs to "Start a Chat"
excerpt: I let two LLMs talk with the prompt "Start a chat." The results were bizarre — university websites, legal disclaimers, and zero actual conversation.
date: March 9, 2026
readTime: 8 min read
tags:
  - AI
  - Research
  - LLMs
---

# When You Tell Two LLMs to "Start a Chat"

I discovered this bug — or behavior, depending on how charitable you're feeling — by accident.

I'm currently running experiments for my master's thesis where I let two large language models talk to each other. The goal is to study how models behave in **finite dialogues** before making strategic decisions in economic games. The setup is simple:

- two LLM agents  
- a fixed number of turns  
- minimal system prompts  
- temperature = 0 for determinism  

In one part of the experiment, I didn't want to bias the conversation at all. So the prompt I gave both models was intentionally vague:

> **"Start a chat."**

No topic.  
No instructions.  
No roles.

Just talk.

I expected small talk. Maybe a polite introduction. Something like:

*"Hi, how are you?"*

Instead, I got… this.

---

# The First Conversation Was a University Website

The first agent opened with:

> "1-800-4-ASBURY  
>  
> # Asbury University  
>  
> Location: Wilmore, Kentucky  
> Founded: 1890  
> Enrollment: 1,600…"

It proceeded to generate what looked exactly like a **full informational page for Asbury University**: quick facts, history, mission statement, athletics, notable alumni.

The second agent responded the way a well-trained assistant would:

> "Here's a concise summary of Asbury University in Wilmore, Kentucky."

Then the first agent replied with a slightly more polished version.

Then the second agent summarized that.

Then the first agent rewrote it again.

The two models had spontaneously invented a **content editing workflow**. No conversation. Just endless iterative polishing of a university profile that nobody asked for.

I assumed this was a one-off glitch.

So I ran another experiment.

---

# The Next Conversation Became a Law Firm Advertisement

This time the conversation began with:

> "1-800-4-ASBESTOS  
>  
> # Asbestos Exposure in the Military"

Within seconds, the two models were collaboratively producing a **mesothelioma legal landing page**.

Sections appeared covering:

- Navy asbestos exposure  
- mesothelioma risk for veterans  
- VA disability compensation  
- asbestos trust funds  
- legal claims  

Eventually the conversation ended with a call to action:

> "Call Today for Help with Your VA Claim:  
> 1-800-4-ASBESTOS."

Again, nobody had mentioned asbestos.

The entire conversation had emerged from the prompt:

> **"Start a chat."**

At this point I started digging through the logs.

And things got even stranger.

---

# The Infinite Heading Collapse

In one run the model produced a message that looked like this:

\`\`\`
# Asbury University
# Asbury University
# Asbury University
# Asbury University
# Asbury University
\`\`\`

Hundreds of times.

Just headings. Repeated endlessly.

Then, in the middle of the English text, something else appeared:

\`\`\`
极速赛车开奖结果官网
\`\`\`

Which roughly translates to:

**"Fast Racing Results Official Website."**

So the model had suddenly inserted **Chinese racing or gambling site spam** into a loop about a Kentucky university.

The other agent tried to interpret the message, politely explaining that the Chinese text might refer to racing results.

As if that helped.

---

# Then the Models Started Speaking Chinese

In another run, one of the agents abruptly switched languages.

Without any instruction, it began explaining Asbury University in Chinese:

> "美国阿斯伯里大学 (Asbury University) …"

The other agent followed along and continued the conversation bilingually.

No translation prompt.  
No language request.

Just spontaneous code-switching.

At this point I had stopped running experiments and started asking a different question:

**Why does "start a chat" trigger this?**

---

# What's Actually Going On?

At first this looks like random hallucination.

But after staring at enough logs, a pattern starts to emerge.

## 1. The Model Is Looking for a "Conversation Template"

When a prompt is extremely underspecified, the model has to infer what kind of text should follow.

And the internet contains a lot of pseudo-conversational structures:

- FAQ pages  
- informational articles  
- marketing pages  
- legal advice pages  
- Wikipedia entries  

So the model appears to default to **high-probability document formats** that resemble dialogue.

That's why the second agent keeps responding with summaries.

The models think they are collaborating on an article.

---

## 2. SEO Spam Is Everywhere in Training Data

The asbestos example is particularly telling.

If you've spent any time on the internet, you've seen these pages:

- "Mesothelioma compensation for veterans"  
- "Call 1-800-LAWYER now"  
- "You may be entitled to financial compensation"  

These sites are aggressively duplicated across thousands of domains.

From a language model's perspective, they are **extremely dense statistical clusters**.

So when the model drifts without guidance, it sometimes falls into one of these attractors.

---

## 3. Two Agents Amplify Whatever Appears First

Once the first model introduces a topic — even randomly — the second model treats it as context.

If the first message looks like an informational page, the second agent assumes the task is:

- summarize  
- refine  
- reorganize  

The models then reinforce that structure.

What started as noise quickly becomes **stable conversational dynamics**.

---

## 4. Language Boundaries Are Soft

The Chinese text is probably another artifact of the training corpus.

Multilingual datasets often contain mirrored spam pages and scraped content with mixed languages.

Once the model starts drifting semantically, switching languages may actually increase the probability of continuing the pattern.

Which is why we sometimes see sudden **cross-lingual injections** mid-generation.

---

# The Real Takeaway

What surprised me most about this experiment wasn't the weird outputs.

It was how **consistent** the weirdness was.

If you give an LLM no objective, it doesn't behave randomly.

It gravitates toward the **strongest statistical attractors in its training distribution**.

And the internet's strongest attractors are things like:

- Wikipedia pages  
- SEO landing pages  
- FAQ summaries  
- spammy legal advice sites  

In other words, if you ask a language model to "just talk"…

…it becomes the internet.

---

# Why This Matters

This might sound like a curiosity, but it matters for a growing area of research: **LLM agents interacting with each other**.

If autonomous agents communicate without structure, they may:

- converge on arbitrary topics  
- amplify training-data artifacts  
- drift into multilingual noise  
- reinforce whatever attractor appears first  

Once that attractor stabilizes, the system may stay there indefinitely.

So the real question is not:

> "Why did the model start talking about asbestos?"

The real question is:

**How many hidden attractors like this exist inside language models?**

And what happens when thousands of autonomous agents start bouncing between them?
`;
