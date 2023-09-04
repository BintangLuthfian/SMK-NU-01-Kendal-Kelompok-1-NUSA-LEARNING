import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ID');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === 'ID' ? 'EN' : 'ID';
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => {
            toggleLanguage();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="inline-flex items-center justify-center w-20 h-10 rounded-md bg-white text-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {selectedLanguage}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => {
                toggleLanguage();
                handleLanguageChange('EN');
              }}
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              {selectedLanguage === 'ID' ? 'EN' : 'ID'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
