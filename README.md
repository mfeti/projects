# Projects Dashboard

A modern React dashboard application built with TypeScript, Vite, and Tailwind CSS. Features a responsive design with sidebar navigation and data tables.

## 🚀 Features

- **Modern React 19** with TypeScript for type safety
- **Tailwind CSS 4** for styling and responsive design
- **Component-based architecture** with reusable UI components
- **Dashboard layout** with sidebar navigation and data tables
- **React Icons** for consistent iconography
- **ESLint** configuration for code quality
- **Vite** for fast development and building

## 📦 Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** React Icons
- **Build Tool:** Vite
- **Linting:** ESLint with TypeScript support
- **Development:** Hot Module Replacement (HMR)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dashbord.tsx      # Main dashboard layout
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── Table.tsx         # Data table component
├── constants/
│   └── data.ts           # Application data constants
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
├── index.css             # Global styles
└── vite-env.d.ts         # Vite environment types
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd projects
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🚦 Available Scripts

- **Development server:**
  ```bash
  npm run dev
  ```
  Starts the development server with HMR at `http://localhost:5173`

- **Build for production:**
  ```bash
  npm run build
  ```
  Creates an optimized production build

- **Preview production build:**
  ```bash
  npm run preview
  ```
  Preview the production build locally

- **Lint code:**
  ```bash
  npm run lint
  ```
  Run ESLint to check code quality

## 🎨 Components

### Dashboard
The main layout component that combines the sidebar and table components into a responsive dashboard interface.

### Sidebar
Navigation component providing easy access to different sections of the application.

### Table
Data display component for presenting information in a structured table format.

## 🔧 Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Make changes** to the code and see them reflected immediately thanks to HMR

## 📝 Code Quality

This project uses ESLint with TypeScript support for maintaining code quality. The configuration includes:

- TypeScript-specific rules
- React hooks rules
- React refresh rules
- Modern JavaScript/ES6+ support

## 🚀 Deployment

To deploy this application:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.
