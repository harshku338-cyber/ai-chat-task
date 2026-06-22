# Terminal-Based AI Chat System using Groq & Gemini

## Overview

This project is a terminal-based AI chatbot built with Node.js. It supports both Groq and Gemini AI models, allows runtime model switching, and includes an automatic fallback mechanism to ensure uninterrupted responses when one model fails.

## Features

* Terminal-based chatbot interface
* Groq API integration
* Gemini API integration
* Runtime model switching
* Automatic fallback between models
* Error handling
* Environment variable support
* Streaming responses with Groq (Bonus)
* Help command
* Clear terminal command
* Exit command

---

## Project Structure

```text
project/
│
├── services/
│   ├── groq.js
│   └── gemini.js
│
├── utils/
│   └── fallback.js
│
├── index.js
├── .env
├── package.json
└── README.md
```

---

## Technologies Used

* Node.js
* JavaScript (ES Modules)
* Groq SDK
* Google Generative AI SDK
* dotenv
* readline-sync

---

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### Or Install Individually

```bash
npm install groq-sdk
npm install @google/generative-ai
npm install dotenv
npm install readline-sync
```

### 3. Enable ES Modules

```bash
npm pkg set type=module
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key
```

Do not commit your API keys to GitHub.

---

## Running the Application

```bash
node index.js
```

---

## Available Commands

| Command   | Description             |
| --------- | ----------------------- |
| `/groq`   | Switch to Groq model    |
| `/gemini` | Switch to Gemini model  |
| `/help`   | Show available commands |
| `/clear`  | Clear terminal screen   |
| `/exit`   | Exit application        |

---

## Example Usage

```text
===== AI CHAT SYSTEM =====

You: Hello

AI: Hi! How can I help you today?

You: /gemini

Using Gemini Model

You: What is Node.js?

AI: Node.js is a JavaScript runtime environment...
```

---

## How Model Switching Works

The application maintains a variable called `currentModel`.

```javascript
let currentModel = "groq";
```

When the user enters:

```text
/gemini
```

The active model changes to Gemini.

When the user enters:

```text
/groq
```

The active model changes to Groq.

All future requests use the selected model.

---

## Fallback Mechanism

The chatbot automatically switches to the alternative model if the selected model fails.

### Flow

```text
User Query
     ↓
Selected Model
     ↓
API Call
     ↓
Success → Return Response

Failure
     ↓
Switch to Other Model
     ↓
Return Response
```

### Example

```text
Primary Model Failed.
Switching to Gemini...
Response Generated Successfully.
```

This improves reliability and user experience.

---

## Streaming Responses

Groq supports streaming responses.

Instead of waiting for the complete response, tokens are displayed as they are generated.

```javascript
stream: true
```

```javascript
for await (const chunk of response)
```

This provides a more interactive user experience.

---

## Error Handling

The application handles:

* Invalid API keys
* Network failures
* Empty user input
* API downtime
* Model failures
* Unexpected runtime errors

---

## Why Async/Await?

API requests are asynchronous operations.

Using async/await:

* Prevents blocking execution
* Improves readability
* Simplifies error handling
* Makes code easier to maintain

Example:

```javascript
const response = await askGroq(prompt);
```

---

## Learning Outcomes

Through this project, the following concepts were implemented:

* LLM API Integration
* Async JavaScript
* Environment Variables
* Model Switching
* Fallback Architecture
* Error Handling
* Git & GitHub Workflow
* Streaming Responses

---

## Future Improvements

* Chat history memory
* Multi-model response comparison
* Colored terminal output
* Startup model selection menu
* Gemini streaming support
* Conversation export feature

---

## Author

Harsh Kushwaha

Terminal-Based AI Chat System using Groq & Gemini
