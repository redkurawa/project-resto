# Project Resto

A modern, responsive food ordering web application built with React, TypeScript, and Vite. This application provides users with an intuitive interface to browse restaurants, view menus, and manage their food orders.

## 📋 Description

Project Resto is a comprehensive food delivery platform that offers:

- **Restaurant Discovery**: Browse through various restaurants with detailed information
- **Menu Management**: View detailed menus with pricing and descriptions
- **User Authentication**: Secure login system for personalized experiences
- **Shopping Cart**: Add/remove items and manage orders before checkout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Redux** - State management
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API requests

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-aware linting

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/redkurawa/project-resto.git
   cd project-resto
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```
   VITE_BASE_API_URL=https://foody-api-xi.vercel.app/api/
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📦 Building for Production

To build the application for production:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

### Feature Page

A standalone feature page is available at `/feature` on Vercel. This page includes:

- Stone theme shadcn design
- Interactive buttons linked to the main app
- Responsive layout with hero, features grid, and footer

Access: `https://your-project.vercel.app/feature`

### Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify's deployment dashboard, or connect your GitHub repository.

### GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Configure your repository settings to serve from the `dist` folder.

## 🎮 Usage

### User Authentication

1. Navigate to the login page
2. Enter your credentials
3. Access personalized features like order history and saved items

### Browsing Restaurants

1. View the homepage to see available restaurants
2. Use navigation filters to find specific cuisines or categories
3. Click on a restaurant to view its details and menu

### Managing Orders

1. Browse restaurant menus
2. Add items to your cart
3. View and modify your cart
4. Proceed to checkout (when available)

### Navigation

The application features a comprehensive navigation system with:

- Restaurant categories (All, Best Seller, Delivery, etc.)
- User profile dropdown
- Shopping cart access

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── pages/          # Page components
│   │   ├── home2.tsx   # Homepage
│   │   ├── login2.tsx  # Login page
│   │   ├── detail2.tsx # Restaurant detail page
│   │   └── cart.tsx    # Shopping cart
│   └── ui/             # UI component library
├── services/           # API services and utilities
├── redux/             # State management
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🔧 Configuration

### Environment Variables

- `VITE_BASE_API_URL`: The base URL for the API endpoints

### Build Configuration

- **TypeScript**: Configured in `tsconfig.json` and `tsconfig.app.json`
- **Vite**: Build settings in `vite.config.ts`
- **Tailwind**: Configuration in `tailwind.config.ts`
- **ESLint**: Linting rules in `eslint.config.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- State management with Redux Toolkit
- API integration with Axios

## 📞 Support

For support, email support@projectresto.com or create an issue on the GitHub repository.

---

**Project Resto** - Making food ordering simple and enjoyable! 🍔🍕🍣
