import { Outlet } from '@remix-run/react';

export default function NotesIdRoute() {
  return (
    <div className="container mb-48 mt-36 border-4">
      <h5 className="text-h1">Bijay id</h5>
      <Outlet />
    </div>
  );
}
