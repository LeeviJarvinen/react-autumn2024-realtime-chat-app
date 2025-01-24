import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer bg-indigo-700 px-6 py-4 text-indigo-100">
        <div className="flex w-full items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="grid-flow-col items-center">
            <p>©2024 <Link className="link link-hover font-medium" to="/">CHAT.TY</Link></p>
          </aside>
          <div className="flex gap-4 h-5">
            <Link href="#" className="link" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </Link>
          </div>
        </div>
      </footer>
    );
  };

export default Footer