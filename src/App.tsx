import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Resume = lazy(() => import('./pages/Resume'));
const IsometricHolds = lazy(() => import('./pages/IsometricHolds'));
const IsometricHoldsPrivacy = lazy(() => import('./pages/IsometricHoldsPrivacy'));
const IsometricHoldsTerms = lazy(() => import('./pages/IsometricHoldsTerms'));
const AutoCar = lazy(() => import('./pages/AutoCar'));
const AutoCarPrivacy = lazy(() => import('./pages/AutoCarPrivacy'));
const AutoCarTerms = lazy(() => import('./pages/AutoCarTerms'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-400">
      <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-700 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/isometric-holds" element={<IsometricHolds />} />
        <Route path="/isometric-holds/privacy" element={<IsometricHoldsPrivacy />} />
        <Route path="/isometric-holds/privacy-policy" element={<IsometricHoldsPrivacy />} />
        <Route path="/isometric-holds/terms" element={<IsometricHoldsTerms />} />
        <Route path="/isometric-holds/terms-of-use" element={<IsometricHoldsTerms />} />
        <Route path="/auto-car" element={<AutoCar />} />
        <Route path="/auto-car/privacy" element={<AutoCarPrivacy />} />
        <Route path="/auto-car/privacy-policy" element={<AutoCarPrivacy />} />
        <Route path="/auto-car/terms" element={<AutoCarTerms />} />
        <Route path="/auto-car/terms-of-use" element={<AutoCarTerms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

