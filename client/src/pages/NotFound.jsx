import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-400 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
          >
            <FaHome className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
