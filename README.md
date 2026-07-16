# 🌐 Live Location Tracker & Weather Dashboard

An advanced, real-time geolocation telemetry and weather monitoring application built with **Node.js**, **Express**, **Socket.io**, and **Leaflet.js**. This application enables peer-to-peer live tracking over memory-only WebSocket connections with zero persistent data footprints, ensuring absolute transparency, privacy, and speed.

---

## ✨ Features

- 🛰️ **Real-Time Tracking**: Broadcast GPS coordinates, heading, speed, and accuracy over secure WebSocket channels.
- 🌦️ **Contextual Weather**: Live-updating meteorological indicators based on the tracked device's immediate coordinates.
- 🛡️ **Privacy & Transparency Protocol**: Built-in explicit consent modals detailing the ephemeral nature of telemetry handling (Zero Persistent Storage standard).
- 🗺️ **Interactive Maps**: Beautiful dark-themed tracking canvas using Leaflet.js and responsive vector layers.
- 🌌 **High-Tech Aesthetic**: Immersive responsive frontend built with Bulma, customized dark styles, and custom canvas-based particle dynamics.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Socket.io (WebSocket Engine)
- **Frontend**: HTML5, Bulma CSS, JavaScript (ES6+), Leaflet.js (Mapping), FontAwesome (Iconography)
- **Hosting / Servers**: Native Node server support, optimized for Cloud Run, Heroku, or Vercel Serverless.

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/live-location-tracker.git
cd live-location-tracker
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
The server will boot up and bind to your local development port. Open `http://localhost:3000` to access the main interface.

---

## ☁️ Deployment Guide

This repository contains a full-stack Node.js server. Below are detailed instructions to deploy it across popular hosting platforms.

### Option A: Deploy to Vercel (Using Serverless WebSockets / Polling Fallbacks)

Since Vercel is a serverless platform, traditional long-lived stateful WebSockets (like default Socket.io) are closed once serverless function execution ends. For a hassle-free Vercel deployment:

1. **Configure Socket.io to Fallback to HTTP Long-Polling**:
   - Vercel functions scale down, so client connections can dynamically synchronize states via fallback polling protocols natively integrated within `socket.io-client`.
2. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
3. **Deploy**:
   Run the following command at your project root and follow the interactive prompts:
   ```bash
   vercel
   ```
4. **Environment Configuration**:
   Define any required variables via your Vercel Project Dashboard (Settings > Environment Variables).

---

### Option B: Deploy to Render / Heroku / Railway (Recommended for State-Heavy WebSockets)

For continuous, stateful, live WebSocket rooms with standard HTTP transport layers:

#### **Render Deployment**:
1. Sign up on [Render](https://render.com/).
2. Create a new **Web Service** and link your GitHub repository.
3. Configure the following build settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Set the `PORT` environment variable to `3000` or let Render detect it automatically.

---

## 🛡️ Privacy Standards & Telemetry Security

This application prioritizes physical security and data minimisation. All location tracking is designed under these principles:

1. **Zero Persistent Storage**: Coordinate telemetry is processed entirely in volatile memory and piped dynamically to authorized sockets. No logs, coordinate arrays, or histories are written to any database.
2. **Foreground Restrictions**: Tracking broadcasts function strictly in active user-granted foreground tabs.
3. **Instant Deactivation**: Severing the socket (closing the tab) immediately garbage collects all telemetry routes.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
