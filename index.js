import readlineSync from "readline-sync";
import { getResponse } from "./utils/fallback.js";

let currentModel = "groq";

console.log("===== AI CHAT SYSTEM =====");
console.log("Commands:");
console.log("/groq");
console.log("/gemini");
console.log("/help");
console.log("/clear");
console.log("/exit");
console.log("==========================");

while (true) {
  const input = readlineSync.question(
    "\nYou: "
  );

  if (!input.trim()) {
    console.log("Please enter a message.");
    continue;
  }

  if (input === "/exit") {
    console.log("Goodbye!");
    process.exit(0);
  }

  if (input === "/groq") {
    currentModel = "groq";
    console.log("Using Groq Model");
    continue;
  }

  if (input === "/gemini") {
    currentModel = "gemini";
    console.log("Using Gemini Model");
    continue;
  }

  if (input === "/help") {
    console.log(`
Commands:
/groq
/gemini
/clear
/help
/exit
`);
    continue;
  }

  if (input === "/clear") {
    console.clear();
    continue;
  }

try {
  console.log("\nAI:");
  await getResponse(input, currentModel);
} catch (error) {
  console.log("Both models are currently unavailable.");
}
}