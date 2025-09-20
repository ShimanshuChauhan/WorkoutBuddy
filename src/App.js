import './App.css';
import { Sidebar, SidebarItem } from './components/sidebar/Sidebar';
import Auth from './pages/auth/authLayout/Auth';
function App() {
  return (
    // <Auth />
    <Sidebar>
      <SidebarItem icon={"⭐"} label={"First"} />
      <SidebarItem icon={"⭐"} label={"First"} />
      <SidebarItem icon={"⭐"} label={"First"} />
      <SidebarItem icon={"⭐"} label={"First"} />
    </Sidebar>
  );
}

export default App;
