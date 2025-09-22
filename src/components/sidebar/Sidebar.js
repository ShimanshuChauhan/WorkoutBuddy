import { useState } from "react";
import styles from "./Sidebar.module.css";
import { CiLogout } from "react-icons/ci";

export function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Drawer toggle button (only show when sidebar is closed) */}
      {!isOpen && (
        <button className={styles.drawerBtn} onClick={openSidebar}>
          ☰
        </button>
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        {/* Close button inside sidebar (only on mobile) */}
        <button className={styles.closeBtn} onClick={closeSidebar}>
          ✕
        </button>

        <ul className={styles.sidebarList}>
          {children}
        </ul>
        <div className={styles.logoutBtn}>
          <span className={styles.logoutIcon}><CiLogout strokeWidth={2} /></span>
          <span className={styles.logoutText}>Logout</span>
        </div>
      </aside >
    </>
  );
}

export function SidebarItem({ icon, label }) {
  return (
    <li className={styles.sidebarItem}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </li>
  );
}
