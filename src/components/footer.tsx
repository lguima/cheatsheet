import React from 'react';

const Footer = (props: any) => (
    <div className="container px-6 mx-auto mt-16">
        <div className="flex flex-col items-center border-t border-gray-200">
            <div className="py-6 text-center sm:w-2/3">
                <p className="text-sm text-gray-600">© {(new Date().getFullYear())} by <a href="https://github.com/tailwindcomponents" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tailwind Components</a></p>
            </div>
        </div>
    </div>
);

export default Footer;
