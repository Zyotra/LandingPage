# Zyotra - Landing Page

<div align="center">
  <img src="public/zyotra-logo.svg" alt="Zyotra Logo" width="120" height="120" />
  <h1>Zyotra</h1>
  <p><strong>Next-Generation VPS Deployment Platform</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 📖 Overview

**Zyotra** is a modern, high-performance frontend application for a cloud infrastructure platform. It enables users to deploy, manage, and scale Virtual Private Servers (VPS) with ease. The application features a sleek, dark-themed UI designed for developers and enterprises, emphasizing performance, scalability, and user experience.

This project is built with **React 19**, **TypeScript**, and **Tailwind CSS 4**, utilizing **Vite** for lightning-fast development and building.

## ✨ Features

### 🚀 Platform Capabilities
- **VPS Instances**: Browse and deploy high-performance NVMe-powered virtual servers.
- **Auto Scaling**: Configure intelligent scaling policies to handle traffic spikes.
- **Load Balancing**: Global Layer 4 and Layer 7 load balancing solutions.
- **Real-time Monitoring**: Visual dashboards for CPU, Memory, and Network metrics.

### 🎨 UI/UX Design
- **Modern Dark Theme**: Professional aesthetic with `#1a1a22` background and `#e4b2b3` accent color.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
- **Interactive Elements**:
  - Animated Hero section with workflow visualization.
  - Glassmorphism effects and smooth transitions.
  - Custom SVG icons and illustrations.

### 🛠 Core Components
- **Global Contact Modal**: Accessible from anywhere via Context API (`ContactContext`).
- **Floating Chat Widget**: Always-on support access with a pulsing notification indicator.
- **Dynamic Navigation**: Responsive navbar with dropdowns and mobile drawer.

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Linting**: ESLint with TypeScript support

## 📂 Project Structure

```
Zyotra-Frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable UI components
│   │   ├── ChatButton.tsx
│   │   ├── ContactModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── context/         # React Context definitions
│   │   └── ContactContext.tsx
│   ├── pages/           # Page components (Routes)
│   │   ├── VpsInstances.tsx
│   │   ├── Monitoring.tsx
│   │   ├── AutoScaling.tsx
│   │   └── ...
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zyotra/Zyotra-Frontend.git
   cd Zyotra-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🤝 Contributing

We welcome contributions from the open-source community! Here's how you can help:

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally.
3. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes** and commit them with descriptive messages.
5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** to the `main` branch of the original repository.

### Code Style
- Please ensure your code follows the existing style conventions.
- Run `npm run lint` to check for any linting errors before submitting.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Have questions or need support?

- **Email**: support@zyotra.com
- **Twitter**: [@Zyotra](https://twitter.com/Zyotra)
- **GitHub**: [Zyotra](https://github.com/Zyotra)

---

<div align="center">
  <sub>Built with ❤️ by the Zyotra Team</sub>
</div>
