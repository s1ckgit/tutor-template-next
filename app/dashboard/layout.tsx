import Sidebar from './_components/sidebar/sidebar';
import styles from './layout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.children}>
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
