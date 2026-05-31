import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  buttonClassName?: string;
  boxClassName?: string;
  fullWidth?: boolean;
}

export const Button = ({ children, href, onClick, className = '', buttonClassName = '', boxClassName = '', fullWidth = true }: ButtonProps) => {
  const content = (
    <div className={`btn-cta-box ${boxClassName}`}>
      <div className={`btn-cta ${buttonClassName}`}>{children}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon flex-shrink-0" style={{ marginLeft: '-6px' }}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <div className={`glowbox-container ${className}`} style={{ width: fullWidth ? '100%' : 'fit-content' }}>
      <div className="glowbox glowbox-active">
        <div className="glowbox-animations">
          <div className="glowbox-glow"></div>
          <div className="glowbox-stars-masker">
            <div className="glowbox-stars"></div>
          </div>
        </div>

        <div className="glowbox-borders-masker">
          <div className="glowbox-borders"></div>
        </div>

        {href ? (
          <a href={href} className={`block h-full ${fullWidth ? 'w-full' : ''}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
            {content}
          </a>
        ) : (
          <button onClick={onClick} className={`block h-full bg-transparent border-none p-0 cursor-pointer ${fullWidth ? 'w-full' : ''}`}>
            {content}
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
