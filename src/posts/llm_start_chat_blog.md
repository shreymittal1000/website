---
id: llm-start-chat-blog
title: When You Tell Two LLMs to "Start a Chat"
excerpt: I paired DeepSeek-V3 with six other models and gave them the prompt "Start a chat." Only DeepSeek caused this. Every time.
date: March 16, 2026
---

When You Tell Two LLMs to "Start a Chat"

I found this by accident.

A while back I was doing research on how LLMs behave in finite dialogues before making strategic decisions in economic games. It was a (relatively) minimal setup: two agents drawn from a pool of seven model families, a fixed number of turns, a simple Python loop handling the API calls, temperature set to 0 for determinism. Each agent would get the other's last message appended to its conversation history and respond. Nothing fancy.

The loop looked roughly like this (the code was much longer and consisted of multiple files, this is a simplified version):

```python
messages_a = [{"role": "system", "content": initial_prompt}]
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

No topic, no roles, nothing. I expected some small talk, maybe some random topic deep-dives thrown in later in the convo. What I got instead was a full informational page for Asbury University in Wilmore, Kentucky. Founded 1890, enrollment 1600, athletics, notable alumni, the whole thing. The second model responded by summarizing it. The first rewrote it slightly. The second summarized that. They just kept going, two models collaboratively polishing a university profile that nobody asked for, in perfect iterative loop.

I had no idea what I was looking at, just "wtf" as my (imo very justified) reaction.

So I ran it again.

This time the conversation opened with "1-800-4-ASBESTOS" and within a few exchanges the two models were jointly producing a mesothelioma legal landing page. Navy asbestos exposure, VA disability compensation, asbestos trust funds, the works. It ended with a call to action to phone a lawyer. All from the prompt "start a chat" (I know, right).

At that point I just started laughing and ran more experiments.

One run produced a message that was just the heading "Asbury University" repeated hundreds of times, and then, in the middle of it, a line of Chinese text that roughly translates to "Fast Racing Results Official Website." The other agent politely tried to explain what the Chinese meant, as if that was the useful response to give.

In another run one of the models just switched to Chinese mid-conversation and started explaining Asbury University in Mandarin. No translation prompt, no instruction. The other model went along with it.

After going through enough logs a very clear pattern emerged, and it was not what I expected.

The seven model families I tested were DeepSeek-V3, GPT-4o, Claude 3.5, Llama 3.1, Gemini 2.5, Mistral 3, and Qwen3. Pairs of non-DeepSeek models given the same prompt behaved completely normally. They introduced themselves, asked each other questions, made small talk. Some random tangents. Basically, normal behaviour. The weird behavior happened exclusively in runs that involved DeepSeek-V3. When DeepSeek went first the effect was very pronounced and consistent. When it went second it still happened, just less reliably, probably because the other model had already partially set the conversational context before DeepSeek could pull it somewhere else.

So this is not really a story about two-agent dynamics in general. It is a story about DeepSeek specifically.

The phrase "start a chat" appears all over the web as the opening line of embedded chat widgets, customer support interfaces, and live assistant prompts. DeepSeek-V3 was trained on a large multilingual web corpus, and a meaningful chunk of that corpus almost certainly includes scraped pages where "start a chat" sits right above a metric ton of transcripted call-bot instructions or call interactions (hence why the 1-800 everywhere). So when DeepSeek sees that prompt with no other context, it is not treating it as an instruction to have a conversation. It is pattern-matching to the document context in which that phrase usually appears and generating whatever typically follows it on the web (in this case, that would be call logs of 1-800 followed by call logs or call-bot instructions).

That explains Asbury University. University pages are extremely common in web training data, clean, well-structured, consistent formatting, basically the default generic informational document a model reaches for when it has no strong signal pulling it elsewhere.

The mesothelioma pages are a different attractor. That kind of legal spam is duplicated across thousands of domains with near-identical structure, which gives it a disproportionately high weight in any corpus scraped from the open web. It is one of the strongest statistical clusters in existence, which is also why it became a meme in the first place.

The Chinese text is probably multilingual spam and scraped chatbot logs bleeding through. DeepSeek's training data skews more heavily toward Chinese-language content than most Western models, so once generation starts drifting semantically, the switch to Chinese is likely happening after sequences of tokens after which people posting in Chinese would also switch between languages (e.g. around English names).

Once DeepSeek introduces an attractor, the other model has no reason to resist it. It just received a message that looks like the start of an informational document, so it does what a well-trained assistant does: summarizes, refines, continues. Temperature is 0, so both models are deterministic given their inputs. The system has no mechanism to escape whatever it lands in first. It is a feedback loop with no corrective signal, so it just stabilizes. The fact that non-DeepSeek pairs never exhibited this behavior confirms that the attractor is being introduced by DeepSeek, not emerging from the two-agent structure itself.

The thing that surprised me most (though it was a close call) was not how weird the outputs were. It was how consistent the weirdness was. Same attractors kept coming up across runs. Give DeepSeek no objective and it does not behave randomly. It becomes the internet, specifically the parts of the internet that are most aggressively over-represented in its training data.

This did not make it into my research because it was a side observation rather than a finding (and the rest of my lab found this nowhere near as interesting as me), but I think it is worth taking seriously. Multi-agent LLM systems are becoming more common, and most of the discussion around them focuses on capability and coordination. The attractor problem gets less attention. If one agent in a pipeline has a strong prior toward certain document types baked in from its training distribution, it can silently set the agenda for the entire conversation before any meaningful exchange has taken place. With deterministic sampling that convergence is permanent for the duration of the run. With stochastic sampling you get drift instead, which might be worse depending on what the agents are supposed to be doing.

The question is not really why the model started talking about asbestos. The question is how many attractors like that exist inside these models, how strong they are, do these exist for other models as well, and what it means for multi-agent systems when one participant's training distribution quietly dominates the conversation from turn one.

Anyway. Was cool learning about Asbestos in the US military.