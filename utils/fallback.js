import { aiGroq } from "../services/groq.js";
import { aiGemini } from "../services/gemini.js";

export async function getResponse(
  prompt,
  currentModel
) {
  try {
    if (currentModel === "groq") {
      return await aiGroq(prompt);
    }

    return await aiGemini(prompt);
  } catch (error) {
    console.log("\nPrimary Model Failed To Run.");

    if (currentModel === "groq") {
      console.log("Switching to Gemini...\n");
      return await aiGemini(prompt);
    }

    console.log("Switching to Groq...\n");
    return await aiGroq(prompt);
  }
}
