'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
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
  ChevronRight,
  ChevronLeft,
  HelpCircle,
} from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

// Navigation structure
const NAV_ITEMS = [
  {
    category: '',
    items: [
      { href: '/', icon: <LayoutDashboard size={22} />, label: 'Dashboard' },
      { href: '/funds', icon: <Wallet size={22} />, label: 'Funds' },
      { href: '/holdings', icon: <Briefcase size={22} />, label: 'Holdings' },
    ],
  },
  {
    category: 'Analysis',
    items: [
      { href: '/verified-pnl', icon: <BadgeCheck size={22} />, label: 'Verified P&L' },
      { href: '/positions', icon: <BarChart3 size={22} />, label: 'Positions' },
      { href: '/journal', icon: <NotebookText size={22} />, label: 'Journal' },
    ],
  },
  {
    category: 'Reports',
    items: [
      { href: '/reports', icon: <FileBarChart size={22} />, label: 'Reports' },
      { href: '/corporate-actions', icon: <Landmark size={22} />, label: 'Corporate Actions' },
      { href: '/tax-pnl', icon: <FileWarning size={22} />, label: 'Tax PNL' },
    ],
  },
];

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  expanded: boolean;
  onClick?: () => void;
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <TooltipProvider>
      <div
        className={cn(
          'h-screen sticky top-0 border-r border-border bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 z-30 overflow-hidden',
          expanded ? 'w-64' : 'w-16'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          {expanded && (
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              <span className="text-primary">Trade</span>Wise
            </h2>
          )}
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setExpanded(!expanded)}
                className={cn(
                  'text-muted-foreground hover:text-foreground rounded-full p-1.5 hover:bg-accent/80 transition-colors',
                  !expanded && 'mx-auto'
                )}
                aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                {expanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </TooltipTrigger>
            {!expanded && (
              <TooltipContent side="right" className="text-xs font-medium">
                {expanded ? 'Collapse' : 'Expand'}
              </TooltipContent>
            )}
          </Tooltip>
        </div>

        <SidebarNav expanded={expanded} />
      </div>
    </TooltipProvider>
  );
}

function SidebarNav({ expanded }: { expanded: boolean }) {
  return (
    <nav className="flex flex-col justify-between flex-1 overflow-hidden h-[calc(100vh-65px)]">
      <div className="space-y-1 p-3 overflow-auto">
        {NAV_ITEMS.map((section, i) => (
          <div key={i} className="mb-6">
            {expanded && section.category && (
              <h3 className="text-xs uppercase font-semibold text-muted-foreground ml-3 mb-2">{section.category}</h3>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem key={item.href} href={item.href} icon={item.icon} label={item.label} expanded={expanded} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-border mt-auto">
        <SidebarItem href="/help" icon={<HelpCircle />} label="Help & Support" expanded={expanded} />
      </div>
    </nav>
  );
}

function SidebarItem({ href, icon, label, expanded, onClick }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            'hover:bg-accent/50 hover:text-accent-foreground hover:shadow-sm hover:translate-x-[1px]',
            isActive ? 'bg-primary/10 text-primary shadow-inner border-l-2 border-primary' : 'text-muted-foreground',
            !expanded && 'justify-center px-2',
            'group'
          )}
          onClick={() => onClick && onClick()}
        >
          <span
            className={cn(
              'h-5 w-5 transition-transform',
              isActive && 'text-primary',
              !isActive && 'group-hover:scale-110'
            )}
          >
            {icon}
          </span>
          {expanded && <span className="truncate">{label}</span>}
        </Link>
      </TooltipTrigger>
      {!expanded && (
        <TooltipContent side="right" className="text-xs font-medium">
          {label}
        </TooltipContent>
      )}
    </Tooltip>
  );
}
