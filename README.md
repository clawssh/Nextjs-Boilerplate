# 🐾 Claw Boiler Plate

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, and shadcn/ui components. Built for developers who want to focus on building features instead of setting up infrastructure.

![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🚀 Core Technologies
- **Next.js 15.3.1** with App Router for improved routing and layouts
- **TypeScript 5.0** for type-safe development
- **React 19.0** with latest features and optimizations
- **Tailwind CSS 4.0** for utility-first styling

### 🎨 UI & Design
- **shadcn/ui** components for beautiful, accessible UI
- **Lucide React** icons for consistent iconography
- **Framer Motion** for smooth animations
- **Dark theme** with custom color scheme (`#0c0c0c` background, `#121212` containers)
- **Responsive design** that works on all devices

### 🔐 Authentication & Security
- **OWASP Top 10** security compliance
- Built-in protection against common vulnerabilities
- CSRF protection utilities
- Form validation with Zod and React Hook Form

### 🛠️ Developer Experience
- **ESLint** configuration for code quality
- **Prettier** for code formatting
- **TypeScript** strict mode enabled
- **Hot reload** for fast development
- **Bundle analyzer** for optimization insights

### 📁 Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── (dashboard)/       # Protected dashboard pages
│   │   └── dashboard/     # Main dashboard
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── utils/                # Helper utilities
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/clawssh/Nextjs-Boilerplate.git
   cd Nextjs-Boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |
| `npm run analyze` | Analyze bundle size |

## 🎨 Customization

### Color Scheme
The boilerplate uses a custom dark theme:
- **Background**: `#0c0c0c` (very dark)
- **Containers**: `#121212` (slightly lighter dark)
- **Accent**: `#2563EB` (blue)

### Adding New Pages
1. Create a new file in the `src/app/` directory
2. Follow the App Router conventions
3. Use the provided layout components for consistency

### Adding New Components
1. Create components in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind CSS
The project uses Tailwind CSS 4.0 with custom configuration. Modify `tailwind.config.ts` to customize your design system.

### TypeScript
TypeScript is configured with strict mode. Update `tsconfig.json` if you need to modify the configuration.

## 📦 Dependencies

### Core Dependencies
- **next**: 15.3.1 - React framework
- **react**: 19.0 - UI library
- **typescript**: 5.0 - Type safety
- **tailwindcss**: 4.0 - CSS framework

### UI Dependencies
- **@radix-ui/react-*** - Accessible UI primitives
- **lucide-react**: 0.507.0 - Icon library
- **framer-motion**: 12.9.4 - Animation library
- **sonner**: 2.0.3 - Toast notifications

### Form & Validation
- **react-hook-form**: 7.56.2 - Form handling
- **zod**: 3.24.3 - Schema validation
- **@hookform/resolvers**: 5.0.1 - Form validation resolvers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Reach out to the community

---

**Ready to build something amazing?** 🚀

Start with this production-ready boilerplate and focus on building your features instead of setting up infrastructure.
