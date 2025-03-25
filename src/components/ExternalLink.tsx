import { JSX } from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className = '' }: ExternalLinkProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
} 