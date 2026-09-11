import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';

const searchIndex = [
  { title: 'Idle Lands', category: 'Project', href: '#projects' },
  { title: 'Labor Camps', category: 'Project', href: '#projects' },
  { title: 'Acumen', category: 'Project', href: '#projects' },
  { title: 'AVL Fleet Management', category: 'Project', href: '#projects' },
  { title: 'Python', category: 'Skill', href: '#about' },
  { title: 'C# / .Net Core', category: 'Skill', href: '#about' },
  { title: 'JavaScript / VueJS / Angular', category: 'Skill', href: '#about' },
  { title: 'SQL Server', category: 'Skill', href: '#about' },
  { title: 'Docker', category: 'Skill', href: '#about' },
  { title: 'Azure / GCP / AWS', category: 'Skill', href: '#about' },
  { title: 'Deep Learning & NLP', category: 'Skill', href: '#about' },
  { title: 'Senior Solutions Architect', category: 'Experience', href: '#experience' },
  { title: 'Data Scientist', category: 'Experience', href: '#experience' },
  { title: 'National Housing Company (NHC)', category: 'Experience', href: '#experience' },
  { title: 'Future Face', category: 'Experience', href: '#experience' },
  { title: 'Arabia Inform', category: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const filteredResults = searchQuery.length > 0
    ? searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      }
      
      // Escape to close search or mobile menu
      if (e.key === 'Escape') {
        searchInputRef.current?.blur();
        setIsSearchFocused(false);
        setSearchQuery('');
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8 rounded-lg shadow-sm group-hover:opacity-80 transition-opacity dark:invert" />
            <span className="flex-shrink-0 font-semibold text-xl tracking-tighter text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              M. Abdelhay
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Desktop Search */}
            <div className="relative ml-4" ref={searchContainerRef}>
              <div className={`flex items-center bg-gray-50 dark:bg-gray-900 rounded-full px-3 py-1.5 border transition-all ${isSearchFocused ? 'border-gray-300 dark:border-gray-700 ring-2 ring-gray-100 dark:ring-gray-800 w-64' : 'border-transparent dark:border-transparent w-56'}`}>
                <Search size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                <input 
                  type="text" 
                  ref={searchInputRef}
                  placeholder="Search..." 
                  className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
                {!isSearchFocused && !searchQuery && (
                  <div className="hidden lg:flex items-center space-x-1">
                    <kbd className="font-sans text-[10px] font-medium text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5">⌘</kbd>
                    <kbd className="font-sans text-[10px] font-medium text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5">K</kbd>
                  </div>
                )}
              </div>
              
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden z-50">
                   {filteredResults.length > 0 ? (
                     <ul className="py-2">
                       {filteredResults.map((result, idx) => (
                         <li key={idx}>
                           <a href={result.href} onClick={handleResultClick} className="block px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                             <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{result.title}</div>
                             <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{result.category}</div>
                           </a>
                         </li>
                       ))}
                     </ul>
                   ) : (
                     <div className="px-4 py-6 text-sm text-gray-500 dark:text-gray-400 text-center">No results found for "{searchQuery}"</div>
                   )}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-4 pt-2 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {/* Mobile Search */}
          <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-xl px-3 py-2 border border-gray-100 dark:border-gray-800 focus-within:border-gray-300 dark:focus-within:border-gray-700 transition-colors">
              <Search size={18} className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search projects or skills..." 
                className="bg-transparent border-none outline-none text-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <div className="mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                {filteredResults.length > 0 ? (
                  <ul className="py-1">
                    {filteredResults.map((result, idx) => (
                      <li key={idx}>
                        <a href={result.href} onClick={handleResultClick} className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-50 dark:border-gray-800 last:border-0">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{result.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{result.category}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400 text-center">No results found</div>
                )}
              </div>
            )}
          </div>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
