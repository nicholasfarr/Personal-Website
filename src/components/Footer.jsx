export default function Footer() {
    return (
      <footer className="py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Nick Farr. All rights reserved.
        </div>
      </footer>
    );
  }