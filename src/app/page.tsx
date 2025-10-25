export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello World! 👋 - Vercel Fixed!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Welcome to Stark X - Your Next.js Application
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              🚀 Project Status
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Next.js 14 with TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Tailwind CSS for styling</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700 dark:text-gray-300">GitHub repository connected</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Ready for Vercel deployment</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-500 dark:text-gray-400">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
