import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode; // a Special prop to pass HTML divs
    onClose: () => void;
}

function Alert({ children, onClose }: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  )
}

export default Alert