import Link from "next/link";

const menuItems = [
  { 
    href: '/', 
    text: 'Home'
  },
  { 
    href: '/',
    text: 'Cemitério'
  },
  { 
    href: '/',
     text: 'Crematório',
     target: '_blank'
  },
  { 
    href: '/',
    text: 'Planos Funerários', 
    target: '_blank'
  },
  { 
    href: '/contato', 
    text: 'Contato'
  },
];

export function Menu() {
  return (
    <nav className="hidden sm:flex sm:container sm:w-full sm:justify-around text-xs pt-4 text-slate-600 uppercase">      
      {menuItems.map((item, index) => (
        <Link 
          key={index} 
          href={item.href} 
          target={item.target}
          className="hover:text-gold-1000 hover:font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="relative">
            {item.text}
          </span>
        </Link>
      ))}
    </nav>
  )
}