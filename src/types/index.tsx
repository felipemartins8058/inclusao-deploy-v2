
declare global {
  interface Window {
    VLibras: any;
  }
  interface HTMLAttributes<T>{
    // extends React's HTMLAttributes
    vw?: any;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    vw?: any;
  }
}

export {  };