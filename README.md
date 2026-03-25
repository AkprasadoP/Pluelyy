# Pluelyy 🚀 (Personal Workspace Edition)

<div align="center">

[![GitHub](https://img.shields.io/badge/Developer-AkprasadoP-black?style=for-the-badge&logo=github)](https://github.com/AkprasadoP)
[![Tauri](https://img.shields.io/badge/Built%20with-Tauri%20%2B%20Rust-orange?style=for-the-badge)](https://tauri.app/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-blue?style=for-the-badge)](https://reactjs.org/)

</div>

> **The Ultimate Local AI Assistant** - A customized, privacy-first AI companion optimized for seamless desktop workflows, interviews, and deep work.

This is a **personal developer fork** of the original Pluely open-source application. In this repository, the application has been optimized for personal development, local testing environments, and offline capabilities without remote dependencies.

## 🌟 What's New in this Custom Build?

This fork has been heavily modified and optimized for streamlined usage:

- **🔓 Local Developer Mode:** The backend has been completely standardized for local-first execution, allowing uninterrupted deployment for testing without requiring external validation tokens.
- **💎 Premium Glassmorphic UI:** Overhauled the dashboard with a stunning deep-frost aesthetic and sleek translucent components for a modern desktop presence.
- **👁️ Groq Vision Integration Fixed:** Surgically repaired the AI payload generator to strictly sanitize chat history, allowing flawless integration with `llama-3.2-90b-vision-preview` to instantly read and solve screenshot contexts without API crashes.
- **🛡️ Maximum Overlay Hooks:** Polished the window behavior settings to ensure the overlay remains seamless across screen shares and recording software.
- **⚡ Native Rust Pipeline Fixes:** Prevented the native Rust API from unnecessarily array-wrapping text payloads, guaranteeing compatibility with the strictest enterprise LLMs.

---

## ⚡ The Ultimate Lightweight AI Companion

<div align="center">

### 🎯 **Just 10MB • Always On Display • One Click Away**

| 🪶 **Ultra Lightweight** | 📺 **Always Visible** | ⚡ **Instant Access** |
| :---: | :---: | :---: |
| **Only ~10MB** total app size | **Translucent overlay** on any window | **One click** to activate AI assistance |
| **Runs entirely locally** on Rust | Always on top, completely native | Screen-share optimized architecture |

</div>

## 🛠️ Features Included

### Optimized Overlay Mode
Operates seamlessly during scenarios requiring discretion. The window is natively bound to system UI layers to avoid interacting with streaming platforms like Zoom, Google Meet, Microsoft Teams, and Slack Huddles. 

### Advanced Screenshot OCR
Capture your screen (or portions of it) with a single click. Thanks to the Groq Vision integration fixes natively built into this repo, you can instantly shoot complex code snippets or questions to the AI and receive answers seamlessly.

### Voice & Audio Capture
Record your microphone or capture direct system sound waves to have the AI transcribe live conversations on the fly using OpenAI Whisper or your customized STT endpoint. 

---

## 📥 Installation

Because this is a completely custom personal build, you will need to compile it locally using Node and Rust. It supports cross-platform compilation (Windows, macOS, Linux).

### Prerequisites
- **Node.js** (v18 or higher)
- **Rust** (latest stable release)

### Quick Start

```bash
# Clone this open-source repository
git clone https://github.com/AkprasadoP/Pluelyy.git
cd Pluelyy

# Install dependencies
npm install

# Start the application in Developer mode
npm run tauri dev
```

### Build for Production

```bash
npm run tauri build
```
This generates the native `.dmg` (Mac) or `.exe` (Windows) installer directly in the `src-tauri/target/release/bundle` directory!

---

**Custom Engineered by [@AkprasadoP](https://github.com/AkprasadoP)**  
*This is an independently modified fork of the original open-source Pluely project designed for maximum automation and efficiency.*
