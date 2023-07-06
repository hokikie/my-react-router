import { useCurrentPathContext } from './Router';

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route = ({ path, component }: RouteProps) => {
  const { currentPath } = useCurrentPathContext();
  return path === currentPath ? component : null;
};

export default Route;
