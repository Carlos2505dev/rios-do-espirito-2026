import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  buttonClassName?: string;
  boxClassName?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({ 
  children, 
  href, 
  onClick, 
  className = '', 
  buttonClassName = '', 
  boxClassName = '', 
  fullWidth = true,
  disabled = false,
  loading = false
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const content = (
    <div 
      className={`btn-cta-box ${boxClassName} transition-all duration-200 ease-out`}
      style={{
        transform: isPressed ? 'scale(0.95)' : isHovered ? 'scale(1.02)' : 'scale(1)',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div className={`btn-cta ${buttonClassName}`}>{children}</div>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="arrow-icon flex-shrink-0 transition-all duration-300 ease-out" 
        style={{ 
          marginLeft: '-6px',
          transform: isHovered ? 'translateX(4px)' : 'translateX(0px)',
          opacity: loading ? 0.5 : 1,
        }}
      >
        <path 
          d="M5 12H19M19 12L13 6M19 12L13 18" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );

  const wrapperClassNames = `glowbox-container ${className} transition-all duration-200 ${
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  }`;

  const glowboxClassNames = `glowbox glowbox-active transition-all duration-300 ${
    isHovered && !disabled ? 'glowbox-hover' : ''
  } ${
    isFocused && !disabled ? 'glowbox-focus' : ''
  }`;

  const elementProps = {
    className: `block h-full ${fullWidth ? 'w-full' : ''} transition-all duration-200`,
    onMouseEnter: () => !disabled && setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    onMouseDown: !disabled ? handleMouseDown : undefined,
    onMouseUp: !disabled ? handleMouseUp : undefined,
    onFocus: () => !disabled && setIsFocused(true),
    onBlur: () => setIsFocused(false),
    style: {
      outline: 'none',
    }
  };

  return (
    <div className={wrapperClassNames} style={{ width: fullWidth ? '100%' : 'fit-content' }}>
      <div className={glowboxClassNames}>
        <div className="glowbox-animations">
          <div className="glowbox-glow"></div>
          <div className="glowbox-stars-masker">
            <div className="glowbox-stars"></div>
          </div>
        </div>

        <div className="glowbox-borders-masker">
          <div className="glowbox-borders"></div>
        </div>

        {href && !loading ? (
          <a 
            href={disabled ? undefined : href} 
            {...elementProps}
            target={href.startsWith('http') ? '_blank' : undefined} 
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              ...elementProps.style,
              pointerEvents: disabled ? 'none' : 'auto',
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
          >
            {content}
          </a>
        ) : (
          <button 
            onClick={!disabled && !loading ? onClick : undefined} 
            {...elementProps}
            disabled={disabled || loading}
            type="button"
            style={{
              ...elementProps.style,
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: disabled || loading ? 'not-allowed' : 'pointer',
              pointerEvents: disabled || loading ? 'none' : 'auto',
            }}
            aria-busy={loading}
            aria-disabled={disabled}
          >
            {content}
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
