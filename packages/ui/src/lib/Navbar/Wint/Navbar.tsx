export interface NavbarProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  
  export const Navbar = (props: NavbarProps) => {
    const classNames = [props.className].filter(Boolean).join(" ");
    return <nav className={classNames}>
      {/* Logo */}
  
      
      {/* Nav links */}
  
      {props.children}</nav>;
  };
  