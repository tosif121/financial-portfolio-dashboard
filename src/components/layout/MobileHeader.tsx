'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Moon, Sun, LogOut, Settings, User, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  LayoutDashboard,
  Wallet,
  Briefcase,
  BadgeCheck,
  BarChart3,
  NotebookText,
  FileBarChart,
  Landmark,
  FileWarning,
  HelpCircle,
} from 'lucide-react';

const NAV_ITEMS = [
  {
    category: '',
    items: [
      { href: '/', icon: <LayoutDashboard />, label: 'Dashboard' },
      { href: '/funds', icon: <Wallet />, label: 'Funds' },
      { href: '/holdings', icon: <Briefcase />, label: 'Holdings' },
    ],
  },
  {
    category: 'Analysis',
    items: [
      { href: '/verified-pnl', icon: <BadgeCheck />, label: 'Verified P&L' },
      { href: '/positions', icon: <BarChart3 />, label: 'Positions' },
      { href: '/journal', icon: <NotebookText />, label: 'Journal' },
    ],
  },
  {
    category: 'Reports',
    items: [
      { href: '/reports', icon: <FileBarChart />, label: 'Reports' },
      { href: '/corporate-actions', icon: <Landmark />, label: 'Corporate Actions' },
      { href: '/tax-pnl', icon: <FileWarning />, label: 'Tax PNL' },
    ],
  },
];

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface MobileHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileHeader({ mobileMenuOpen, setMobileMenuOpen }: MobileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background/90 backdrop-blur-sm shadow-sm z-40 sticky top-0">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground rounded-full p-1.5 hover:bg-accent/80 transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={20} className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-0 overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetClose asChild>
              <h1 className="font-bold text-xl tracking-tight">
                <span className="text-primary">Trade</span>Wise
              </h1>
            </SheetClose>
          </div>

          <nav className="flex flex-col justify-between flex-1 overflow-hidden">
            <div className="space-y-1 p-3 overflow-x-auto">
              {NAV_ITEMS.map((section, i) => (
                <div key={i} className="mb-6">
                  {section.category && (
                    <h3 className="text-xs uppercase font-semibold text-muted-foreground ml-3 mb-2">
                      {section.category}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <MobileNavItem key={item.href} href={item.href} icon={item.icon} label={item.label} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border">
              <MobileNavItem href="/help" icon={<HelpCircle />} label="Help & Support" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center space-x-1">
        <button
          onClick={toggleTheme}
          className="text-muted-foreground hover:text-foreground rounded-full p-1.5 hover:bg-accent/80 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button
          className="text-muted-foreground hover:text-foreground rounded-full p-1.5 hover:bg-accent/80 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 transition-transform hover:scale-110 cursor-pointer ml-1">
              <AvatarImage src="/api/placeholder/32/32" alt="User" />
              <AvatarFallback>TR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mt-2 me-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function MobileNavItem({ href, icon, label }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
        'hover:bg-accent/50 hover:text-accent-foreground hover:shadow-sm hover:translate-x-[1px]',
        isActive ? 'bg-primary/10 text-primary shadow-inner border-l-2 border-primary' : 'text-muted-foreground',
        'group'
      )}
      onClick={(e) => {
        const closeEvent = new CustomEvent('close-sheet');
        document.dispatchEvent(closeEvent);
      }}
    >
      <span
        className={cn('h-5 w-5 transition-transform', isActive && 'text-primary', !isActive && 'group-hover:scale-110')}
      >
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </Link>
  );
}
