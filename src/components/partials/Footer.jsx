import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2025 Formula 1 World Championship Limited</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-red-500">
              Terms
            </a>
            <a href="#" className="hover:text-red-500">
              Privacy
            </a>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
