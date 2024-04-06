import { Outlet } from '@remix-run/react';

export default function Notes() {
  return (
    <div className="container mb-48 mt-36 border-4">
      <h4 className="text-h1">Notes</h4>
      <Outlet />
    </div>
  );
}
