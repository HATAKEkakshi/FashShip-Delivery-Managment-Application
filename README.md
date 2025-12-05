# FastShip Frontend

A modern delivery management application built with Next.js, featuring glassmorphism design and comprehensive shipment tracking capabilities for sellers and delivery partners.

## Features

### 🚀 Core Functionality
- **Dual User Types**: Separate interfaces for sellers and delivery partners
- **Shipment Management**: Create, track, and update shipment status
- **Real-time Dashboard**: Live statistics and shipment overview
- **Authentication System**: Secure login/signup for both user types
- **Offline Support**: localStorage fallback when API is unavailable

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Modern glass-effect cards and components
- **Gradient Backgrounds**: Blue theme for sellers, purple for partners
- **Responsive Layout**: Mobile-first design approach
- **Interactive Components**: Smooth animations and transitions

### 🔧 Technical Features
- **API Integration**: Full FastAPI backend connectivity
- **Error Handling**: Comprehensive error management with fallbacks
- **Data Persistence**: Dual-strategy data storage (API + localStorage)
- **Type Safety**: TypeScript throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **UI Components**: Radix UI primitives
- **HTTP Client**: Axios with interceptors
- **Language**: TypeScript
- **Icons**: Lucide React

## Project Structure

```
fastship-frontend/
├── app/
│   ├── globals.css              # Global styles and Tailwind config
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── seller/
│   │   ├── login/page.tsx       # Seller authentication
│   │   ├── signup/page.tsx
│   │   └── dashboard/page.tsx   # Seller dashboard
│   └── partner/
│       ├── login/page.tsx       # Partner authentication
│       ├── signup/page.tsx
│       └── dashboard/page.tsx   # Partner dashboard
├── lib/
│   └── api.ts                   # API client and endpoints
├── components/ui/               # Reusable UI components
└── package.json                 # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- FastAPI backend running (optional - app works with localStorage fallback)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fastship-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## API Configuration

The application connects to a FastAPI backend. Update the base URL in `lib/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8000'; // Update as needed
```

### Required Backend Endpoints
- `POST /sellers/register` - Seller registration
- `POST /sellers/login` - Seller authentication
- `POST /partners/register` - Partner registration  
- `POST /partners/login` - Partner authentication
- `POST /shipments/` - Create shipment
- `GET /shipments/by-user/{user_id}` - Get user shipments
- `GET /shipments/assigned/{partner_id}` - Get assigned shipments
- `PUT /shipments/{shipment_id}/status` - Update shipment status

## Usage

### For Sellers
1. **Register/Login** at `/seller/login`
2. **Access Dashboard** to view shipment statistics
3. **Create Shipments** with recipient details and delivery partner assignment
4. **Track Status** of all created shipments

### For Delivery Partners
1. **Register/Login** at `/partner/login`  
2. **View Assigned Shipments** in dashboard
3. **Update Status** (picked up, in transit, delivered)
4. **Monitor Performance** with delivery statistics

## Data Management Strategy

The application uses a dual-strategy approach for data persistence:

1. **Primary**: API calls to FastAPI backend
2. **Fallback**: localStorage for offline functionality

This ensures the application remains functional even when the backend is unavailable.

## Shipment Schema

```typescript
interface Shipment {
  id: string;
  client_email_id: string;
  client_contact_phone: string;
  pickup_address: string;
  delivery_address: string;
  assigned_partner_id: string;
  status: 'pending' | 'picked_up' | 'in_transit' | 'delivered';
  created_at: string;
  seller_id: string;
}
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS classes with custom utilities
- **API**: Centralized in `lib/api.ts` with error handling
- **State**: React hooks for local state management

## Design System

### Colors
- **Sellers**: Blue gradient theme (`from-blue-600 to-purple-600`)
- **Partners**: Purple gradient theme (`from-purple-600 to-pink-600`)
- **Glass Effects**: Semi-transparent backgrounds with backdrop blur

### Components
- **Cards**: Glassmorphism effect with rounded corners
- **Buttons**: Gradient backgrounds with hover effects  
- **Forms**: Clean inputs with proper validation
- **Navigation**: Consistent header across all pages

## Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Check if FastAPI backend is running
   - Verify API_BASE_URL in `lib/api.ts`
   - Application will fallback to localStorage

2. **Shipments Not Appearing**
   - Data persists in localStorage as fallback
   - Check browser console for API errors
   - Refresh page to reload from localStorage

3. **Authentication Issues**
   - Clear localStorage: `localStorage.clear()`
   - Check network tab for API response errors
   - Verify backend authentication endpoints

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.