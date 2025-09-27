# 💕 Stuard.eu - Live Video Dating Platform

A modern, responsive live video dating platform built with React, Vite, and Tailwind CSS. This production-ready application demonstrates modern web development best practices with a complete authentication system, responsive design, and engaging user experience.

![Stuard.eu](https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Stuard.eu+💕)

## ✨ Features

### 🔐 Authentication System
- **Email/Password Authentication** with real-time validation
- **Google OAuth Integration** (mock implementation with realistic UI)
- **Forgot Password** functionality with email simulation
- **Remember Me** option with persistent sessions
- **Protected Routes** with automatic redirects
- **Session Management** using localStorage with error handling

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach (320px to 4K+)
- **Rainbow Theme** - Vibrant, game-appropriate color scheme
- **Glass Morphism** effects and smooth animations
- **Micro-interactions** and hover effects throughout
- **Loading States** and skeleton screens
- **Toast Notifications** for user feedback
- **Accessibility** compliant (WCAG guidelines)

### 🏗️ Architecture & Code Quality
- **Component-Based Architecture** with reusable UI components
- **Context API** for state management
- **Custom Hooks** for logic reuse
- **Error Boundaries** for graceful error handling
- **PropTypes** for type checking
- **JSDoc Comments** for comprehensive documentation
- **Modern React Patterns** (functional components, hooks)

### 🎯 Game Features (Foundation)
- **User Dashboard** with personalized stats
- **Mock Database** with realistic user data structure
- **Achievement System** ready for implementation
- **Leaderboard** functionality
- **User Profiles** with customizable avatars
- **Game Statistics** tracking

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd twister-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be available in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Button.jsx          # Customizable button component
│   ├── Input.jsx           # Form input with validation
│   ├── Card.jsx            # Container component with variants
│   ├── Toast.jsx           # Notification component
│   ├── LoadingSpinner.jsx  # Loading indicator
│   ├── ErrorBoundary.jsx   # Error handling wrapper
│   ├── ProtectedRoute.jsx  # Route protection
│   └── ToastContainer.jsx  # Toast notification manager
├── context/                # React Context providers
│   ├── AuthContext.jsx     # Authentication state management
│   └── ToastContext.jsx    # Toast notification system
├── hooks/                  # Custom React hooks
│   ├── useAuth.js          # Authentication hook
│   ├── useForm.js          # Form state management
│   └── useLocalStorage.js  # localStorage wrapper
├── pages/                  # Page components
│   ├── LandingPage.jsx     # Home/marketing page
│   ├── LoginPage.jsx       # User authentication
│   ├── SignupPage.jsx      # User registration
│   ├── ForgotPasswordPage.jsx # Password reset
│   └── DashboardPage.jsx   # User dashboard
├── utils/                  # Utility functions
│   ├── mockDatabase.js     # Mock database implementation
│   └── validation.js       # Form validation utilities
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
```css
/* Twister Colors */
--twister-red: #FF6B6B
--twister-blue: #4ECDC4
--twister-yellow: #FFE66D
--twister-green: #95E1D3
--twister-purple: #A8E6CF
--twister-orange: #FFB74D
```

### Component Variants
- **Buttons**: primary, secondary, outline, ghost, danger, success
- **Cards**: default, elevated, flat, outlined, gradient
- **Inputs**: text, email, password with validation states
- **Toast**: success, error, warning, info

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Application
VITE_APP_NAME="Twister Game"
VITE_APP_VERSION="1.0.0"

# API Configuration (for future backend integration)
VITE_API_URL="http://localhost:3001"

# Google OAuth (for production)
VITE_GOOGLE_CLIENT_ID="your-google-client-id"

# Feature Flags
VITE_ENABLE_GOOGLE_AUTH="true"
VITE_ENABLE_TOURNAMENTS="false"
VITE_ENABLE_MULTIPLAYER="false"
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- **Custom Colors**: Twister-themed color palette
- **Custom Animations**: bounce-slow, pulse-slow, wiggle, float, rainbow
- **Custom Fonts**: Comic Neue for body, Fredoka One for display
- **Extended Spacing**: 8px grid system
- **Custom Components**: Utility classes for common patterns

## 🧪 Testing

### Demo Accounts
Use these credentials to test the authentication system:

```
Email: demo@twister.com
Password: demo123

Email: test@twister.com  
Password: test123
```

### Google OAuth Testing
The Google OAuth button provides a realistic UI flow with mock authentication.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains all static files
# Upload to your preferred hosting service
```

## 🔮 Future Enhancements

### Planned Features
- [ ] **Real-time Multiplayer** using WebSockets
- [ ] **Tournament System** with brackets and prizes
- [ ] **Power-ups and Special Abilities**
- [ ] **Team Mode** for cooperative play
- [ ] **Custom Game Modes** and rule variations
- [ ] **Social Features** (friends, chat, sharing)
- [ ] **Mobile App** using React Native
- [ ] **AI Opponents** for single-player mode

### Technical Improvements
- [ ] **TypeScript Migration** for better type safety
- [ ] **Unit Testing** with Jest and React Testing Library
- [ ] **E2E Testing** with Playwright or Cypress
- [ ] **Performance Monitoring** with Web Vitals
- [ ] **PWA Features** for offline play
- [ ] **Internationalization** (i18n) support

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and patterns
- Add JSDoc comments for new functions
- Ensure responsive design for all new components
- Test on multiple devices and browsers
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **Lucide React** for the beautiful icons
- **Google Fonts** for the typography

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Open an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas

---

**Built with ❤️ for game lovers everywhere** 🎮

*This project serves as a foundation for a complete Twister game application and demonstrates modern React development practices suitable for production use.*