"use client";

import { useState } from "react";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "arg4gg@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        /* The invisible wrapper handles the positioning */
        .cta-wrapper {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 9998;
          pointer-events: none;
        }
        
        /* The button handles the visuals */
        .global-cta-button {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--neutral-alpha-200, rgba(128, 128, 128, 0.15));
          color: inherit;
          padding: 12px 24px;
          border-radius: 9999px;
          box-shadow: 0 0 20px var(--neutral-alpha-200, rgba(0, 0, 0, 0.15));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--neutral-alpha-300, rgba(128, 128, 128, 0.2));
          font-family: inherit;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        
        .global-cta-button:hover {
          transform: scale(1.05);
          background-color: var(--neutral-alpha-300, rgba(128, 128, 128, 0.25));
        }

        /* MOBILE CENTERING WITH MANUAL OVERRIDE */
        @media (max-width: 768px) {
          .cta-wrapper {
            bottom: 80px;
            left: 50%;
            right: auto;
            
            /* 👇 CHANGE THE 0px HERE TO SHIFT IT MANUALLY 👇 */
            transform: translateX(calc(-50% + 4px)); 
            
            width: max-content;
            display: flex;
            justify-content: center;
          }
          .global-cta-button {
            padding: 10px 20px;
          }
        }
        
        .contact-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: var(--neutral-alpha-400, rgba(0, 0, 0, 0.6));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        
        .contact-modal-content {
          background-color: var(--page-background, #0a0a0a);
          border: 1px solid var(--neutral-alpha-200, rgba(128, 128, 128, 0.2));
          padding: 32px;
          border-radius: 20px;
          color: inherit;
          font-family: inherit;
          width: 90%;
          max-width: 420px;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
          position: relative;
        }
        
        @media (max-width: 768px) {
          .contact-modal-content {
            padding: 24px; 
          }
        }
        
        .modal-close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: inherit;
          opacity: 0.5;
          cursor: pointer;
          font-size: 18px;
          transition: opacity 0.2s ease;
        }
        .modal-close-button:hover {
          opacity: 1;
        }
        
        .contact-modal-heading {
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: bold;
        }
        
        .contact-modal-text {
          margin: 0 0 24px 0;
          opacity: 0.7;
          font-size: 15px;
          line-height: 1.5;
        }
        
        .email-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--neutral-alpha-100, rgba(128, 128, 128, 0.1));
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--neutral-alpha-200, rgba(128, 128, 128, 0.2));
        }
        
        .email-text {
          font-family: var(--font-code, monospace);
          font-size: 15px;
          letter-spacing: 0.5px;
        }
        
        .copy-button {
          background-color: ${copied ? 'var(--brand-alpha-200, rgba(34, 197, 94, 0.2))' : 'var(--neutral-alpha-200, rgba(128, 128, 128, 0.1))'};
          border: 1px solid ${copied ? 'var(--brand-solid, rgba(34, 197, 94, 0.4))' : 'var(--neutral-alpha-300, rgba(128, 128, 128, 0.2))'};
          color: ${copied ? 'var(--brand-solid, #4ade80)' : 'inherit'};
          font-family: inherit;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .copy-button:hover {
          background-color: ${copied ? 'var(--brand-alpha-300, rgba(34, 197, 94, 0.3))' : 'var(--neutral-alpha-300, rgba(128, 128, 128, 0.15))'};
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="cta-wrapper">
        <button type="button" onClick={() => setIsOpen(true)} className="global-cta-button">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: "18px", height: "18px" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Let's Build Something!
        </button>
      </div>

      {isOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div className="contact-modal-overlay" onClick={() => setIsOpen(false)}>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button type="button" onClick={() => setIsOpen(false)} className="modal-close-button">
              ✕
            </button>
            
            <h3 className="contact-modal-heading">Get in Touch</h3>
            <p className="contact-modal-text">
              Currently seeking opportunities in systems engineering, low-level architecture, and technical design.
            </p>
            
            <div className="email-container">
              <span className="email-text">{email}</span>
              <button type="button" onClick={handleCopy} className="copy-button">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}