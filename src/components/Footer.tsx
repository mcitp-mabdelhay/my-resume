export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 text-center transition-colors">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mohammed Abdelhay. All rights reserved.
      </p>
    </footer>
  );
}
