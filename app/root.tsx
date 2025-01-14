import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import stylesheet from './styles/tailwind.css?url';
import { LinksFunction } from '@remix-run/node';
import './styles/global.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesheet },
    cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
  ].filter((link) => link !== null);
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
