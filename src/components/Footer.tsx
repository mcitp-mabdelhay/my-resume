import { useEffect, useState } from 'react';
import { Linkedin, Twitter, Github, Share2 } from 'lucide-react';

export default function Footer() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      action: 'Share on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Check out this portfolio!")}`,
      action: 'Share on Twitter'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com', // GitHub doesn't have a direct share URL, linking to GitHub generally
      action: 'Visit GitHub'
    }
  ];

  return (
    <footer className="snap-end py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <Share2 size={16} /> Share Portfolio
          </span>
          <div className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex gap-5">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                title={link.action}
              >
                <link.icon size={20} />
                <span className="sr-only">{link.action}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Mohammed Abdelhay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
