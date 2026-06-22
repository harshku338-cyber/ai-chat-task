import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function askGroq(prompt) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    stream: true,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  let finalResponse = "";

  for await (const chunk of response) {
    const delta = chunk.choices[0]?.delta?.content;

    if (delta) {
      process.stdout.write(delta);
      finalResponse += delta;
    }
  }

  console.log("\n");

  return finalResponse;
}