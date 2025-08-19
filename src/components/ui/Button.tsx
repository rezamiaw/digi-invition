import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'px-8 py-3 rounded-[25px] font-semibold transition-colors duration-300 shadow-lg transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-[#8B5A52] hover:bg-[#7A4F47] text-[#F5F5DC] border-2 border-[#F5F5DC]',
    secondary: 'bg-[#8B5A52] hover:bg-[#7A4F47] text-[#F5F5DC]',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};
