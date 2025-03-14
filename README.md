# Personal Website

A modern personal website built with React and Flask.

## Project Structure

```
.
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions and hooks
│   │   ├── routes.tsx    # Centralized routing configuration
│   │   └── App.tsx       # Main application component
│   └── public/           # Static assets
│
├── backend/               # Flask backend
│   └── app.py            # Main Flask application
│
├── venv/                 # Python virtual environment
├── requirements.txt      # Python dependencies
└── README.md            # Project documentation
```

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Radix UI & shadcn/ui for components
- React Router for routing
- TanStack Query for state management

### Backend
- Flask 3.0.0
- Flask-CORS for cross-origin requests
- Python virtual environment

## Setup

### Backend Setup
1. Create and activate virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Unix/macOS
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start the backend server:
```bash
cd backend
python app.py  # Runs on http://localhost:5001
```

### Frontend Setup
1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start development server:
```bash
npm run dev  # Runs on http://localhost:5175
```

## Development
- Frontend development server runs on port 5175
- Backend API runs on port 5001 (changed from 5000 to avoid conflict with macOS AirPlay)
- All API routes are prefixed with `/api`
- Frontend routes are managed in `src/routes.tsx`
