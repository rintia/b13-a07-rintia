import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold text-primary">404</h1>

          <h2 className="mt-4 text-3xl font-bold">
            Oops! Page Not Found
          </h2>

          <p className="py-6 text-base-content/70">
            The page you are looking for might have been removed,
            renamed, or is temporarily unavailable.
          </p>

          <Link href="/">
            <button className="btn btn-primary">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}