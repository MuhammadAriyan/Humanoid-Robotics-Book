import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'sm' | 'md' | 'lg' | 'xl' | 'contrast';
  interactive?: boolean;
  hover?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  tabIndex?: number;
  role?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className,
  variant = 'md',
  interactive = false,
  hover = true,
  loading = false,
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-expanded': ariaExpanded,
  tabIndex = 0,
  role = 'div',
  ...props
}) => {
  const cardClasses = clsx(
    styles.glassmorphismCard,
    styles[`glassmorphismCard--${variant}`],
    {
      [styles['glassmorphismCard--interactive']]: interactive && !disabled,
      [styles['glassmorphismCard--hover']]: hover && !disabled,
      [styles['glassmorphismCard--loading']]: loading,
      [styles['glassmorphismCard--disabled']]: disabled,
    },
    className
  );

  const handleInteraction = (event: React.MouseEvent | React.FocusEvent) => {
    if (disabled) return;

    switch (event.type) {
      case 'click':
        onClick?.();
        break;
      case 'mouseenter':
        onMouseEnter?.();
        break;
      case 'mouseleave':
        onMouseLeave?.();
        break;
      case 'focus':
        onFocus?.();
        break;
      case 'blur':
        onBlur?.();
        break;
    }
  };

  const interactiveProps = interactive ? {
    onClick: handleInteraction,
    onMouseEnter: handleInteraction,
    onMouseLeave: handleInteraction,
    onFocus: handleInteraction,
    onBlur: handleInteraction,
    tabIndex: disabled ? -1 : tabIndex,
    role: role === 'div' && interactive ? 'button' : role,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-disabled': disabled,
  } : {
    role,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
  };

  return (
    <div
      className={cardClasses}
      {...interactiveProps}
      {...props}
    >
      {loading && (
        <div className={styles.glassmorphismCard__loadingOverlay}>
          <div className={styles.glassmorphismCard__loadingSpinner} />
        </div>
      )}
      <div className={styles.glassmorphismCard__content}>
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;