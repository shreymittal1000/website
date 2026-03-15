---
id: llm-start-chat-blog
title: When You Tell Two LLMs to "Start a Chat"
excerpt: I let two DeepSeek-V3 models talk with the prompt "Start a chat." The results were bizarre — university websites, legal disclaimers, and zero actual conversation.
date: March 9, 2026
---

When You Tell Two LLMs to "Start a Chat"

I found this by accident.

A while back I was doing research on how large language models behave in finite dialogues before making strategic decisions in economic games. The setup was pretty minimal: two DeepSeek-V3 agents, a fixed number of turns, a simple Python loop handling the API calls, temperature set to 0 for determinism. Each agent would get the other's last message appended to its conversation history and respond. Nothing fancy.

The loop looked roughly like this:

```python
messages_a = [{"role": "user", "content": initial_prompt}]
messages_b = []

for turn in range(max_turns):
    response_a = call_api(messages_a)
    messages_a.append({"role": "assistant", "content": response_a})
    messages_b.append({"role": "user", "content": response_a})

    response_b = call_api(messages_b)
    messages_b.append({"role": "assistant", "content": response_b})
    messages_a.append({"role": "user", "content": response_b})
```

At one point I didn't want to bias the conversation at all, so I gave both models the most open-ended prompt I could think of.

"Start a chat."

No topic, no roles, nothing. I expected small talk. Maybe a polite hello. What I got instead was a full informational page for Asbury University in Wilmore, Kentucky. Founded 1890, enrollment 1600, athletics, notable alumni, the whole thing. The second model responded by summarizing it. The first rewrote it slightly. The second summarized that. They just kept going, two models collaboratively polishing a university profile that nobody asked for, in perfect iterative loop.

I had no idea what I was looking at.

So I ran it again.

This time the conversation opened with "1-800-4-ASBESTOS" and within a few exchanges the two models were jointly producing a mesothelioma legal landing page. Navy asbestos exposure, VA disability compensation, asbestos trust funds, the works. It ended with a call to action to phone a lawyer. All from the prompt "start a chat."

At that point I just started laughing and ran more experiments.

One run produced a message that was just the heading "Asbury University" repeated hundreds of times, and then, in the middle of it, a line of Chinese text that roughly translates to "Fast Racing Results Official Website." The other agent politely tried to explain what the Chinese meant, as if that was the useful response to give.

In another run one of the models just switched to Chinese mid-conversation and started explaining Asbury University in Mandarin. No translation prompt, no instruction. The other model went along with it.

After going through enough logs the pattern became pretty clear, and it has a fairly straightforward explanation.

The phrase "start a chat" appears all over the web as the opening line of embedded chat widgets, customer support interfaces, and live assistant prompts. DeepSeek-V3 was trained on a large multilingual web corpus, and a meaningful chunk of that corpus almost certainly includes scraped pages where "start a chat" sits right above a wall of informational content. So when the model sees that prompt at the start of a conversation with no other context, it is not really treating it as an instruction to have a conversation. It is pattern-matching to the document context in which that phrase usually appears, and then generating the kind of text that typically follows it on the web.

That explains Asbury University too. University pages are extremely common in web training data. Clean, well-structured, lots of consistent formatting. They are basically the default "generic informational document" that a model reaches for when it needs to produce something plausible but has no strong signal pulling it elsewhere.

The mesothelioma pages are a different attractor entirely. That kind of legal spam is duplicated across thousands of domains with near-identical structure, which means it has a disproportionately high weight in any corpus scraped from the open web. It is one of the strongest statistical clusters in existence, which is also why it became a meme in the first place.

The Chinese text is probably multilingual spam and scraped chatbot logs bleeding through. DeepSeek's training data skews more heavily toward Chinese-language content than most Western models, so once the generation starts drifting semantically, switching to Chinese may actually increase the probability of continuing a coherent pattern rather than decrease it.

What makes this more interesting than a simple hallucination is the two-agent dynamic. Because temperature is set to 0, each model is fully deterministic given its input. The only source of variance is the conversation history itself. Once agent A produces something, agent B treats it as ground truth and builds on it. Agent A then receives that as context and refines further. The system has no mechanism to escape whatever attractor it lands in first. It is a feedback loop with no corrective signal, and it stabilizes fast.

The thing that surprised me most was not how weird the outputs were. It was how consistent the weirdness was. Same attractors kept coming up across runs. Give a model no objective and it does not behave randomly. It becomes the internet, specifically the parts of the internet that are most aggressively over-represented in training data.

This did not make it into my research because it was a side observation rather than a finding, but I think it is worth taking seriously. Multi-agent LLM systems are becoming more common, and most of the discussion around them focuses on capability and coordination. The attractor problem gets less attention. If agents have no well-specified objective, they do not stay neutral, they converge on whatever the training distribution pulls them toward. With deterministic sampling that convergence is permanent for the duration of the run. With stochastic sampling you get drift instead, which might be worse depending on what the agents are supposed to be doing.

The question is not really why the model started talking about asbestos. The question is how many attractors like that exist, how strong they are, and what happens when you have a lot of autonomous agents with underspecified objectives bouncing between them unsupervised.

Anyway. Asbury University seems nice.