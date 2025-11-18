import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';

export function AppLayout() {
  return (
    <ErrorBoundary>
      <main>
        <Outlet />
      </main>
    </ErrorBoundary>
  );
}
