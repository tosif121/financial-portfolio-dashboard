import dynamic from 'next/dynamic';
const Dashboard = dynamic(() => import('@/components/dashboard/Dashboard'));

export default function Home() {
  return <Dashboard />;
}
