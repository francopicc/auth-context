# Auth Context for Supabase

![Supabase Logo](https://miro.medium.com/v2/resize:fit:1400/1*pnSzmFJRCJztS7tkSJXYuQ.jpeg)

A simple and reusable React context for managing authentication with Supabase. This package provides an easy way to manage the user's session and authentication state in your React app.

## Features

- Provides a React context (`AuthContext`) to manage the Supabase session and user.
- Custom hook `useAuth()` to access session and user data easily.
- Supports dynamic Supabase URL and anon key configuration.
- Works seamlessly with React functional components.

## Installation

To install the package, run:

```bash
npm install auth-context-supabase
```
or
```bash
yarn add auth-context-supabase
```

## Usage

Wrap your application with the `AuthProvider` and pass your Supabase URL and anon key.

```tsx
import { AuthProvider } from "auth-context-supabase";

function App() {
  return (
    <AuthProvider supabaseUrl="YOUR_SUPABASE_URL" supabaseAnonKey="YOUR_SUPABASE_ANON_KEY">
      <YourApp />
    </AuthProvider>
  );
}
```

Use the ```useAuth``` hook to access the session, user, and loading state in any component.

```tsx
import { useAuth } from "auth-context-supabase";

function UserProfile() {
  const { session, user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!session) return <div>Please log in</div>;

  return (
    <div>
      <h1>Hello, {user?.email}</h1>
    </div>
  );
}
```

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
