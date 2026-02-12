export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-[73px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
