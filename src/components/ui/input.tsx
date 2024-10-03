import * as React from "react"
import {  MdEmail, MdPerson, MdLock } from 'react-icons/md';
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    iconName?: 'email' | 'person' | 'lock';
  }
// eslint-disable-next-line
  const getIconComponent = (iconName: any): React.ReactNode => {
    switch (iconName) {
      case 'email':
        return <MdEmail size={18} />;
      case 'person':
        return <MdPerson size={20} />;
      case 'lock':
        return <MdLock size={18} />;
      default:
        return null;
    }
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconName, ...props }, ref) => {

    const selectedIcon = getIconComponent(iconName);
    return (
    <>
        {selectedIcon && (
          <div style={{ position: 'absolute', marginLeft: '10px', marginTop: '18px', color: '#666' }}>
            {selectedIcon}
          </div>
        )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-gold-1000 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-1000 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </>
    )
  }
)
Input.displayName = "Input"

export { Input }