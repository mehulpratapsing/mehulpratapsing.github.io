// components/social-icons.tsx
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export function SocialIcons() {
  const socialLinks = [
    { href: 'https://github.com/mehulpratapsing', icon: Github },
    { href: 'https://linkedin.com/in/mehul-pratap-singh-3653481a1', icon: Linkedin },
    { href: 'https://medium.com/@mehulpratapsingh', icon: BookOpen },
    { href: 'mailto:mehulpratapsingh@gmail.com', icon: Mail }
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/90 transition-all"
        >
          <link.icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}

