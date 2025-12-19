import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import { useUIStore } from "@/store/ui.store";
import { useThemeStore } from "@/store/theme.store";
import { useTenantStore } from "@/store/tenant.store";
import { routes, AppRoute } from "@/routes/routes.config";
import LoadingOverlay from "../ui/LoadingOverlay";
import Toast from "../ui/Toast";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"


interface AppLayoutProps {
  title?: string;
}

const SIDEBAR_WIDTH = "20rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"


export default function AppLayout({ title: defaultTitle }: AppLayoutProps) {
  const { pathname } = useLocation();
  const sidebarCollapsed = useUIStore((s) => s.sidebarCollapsed);
  const { theme } = useThemeStore();
  const { activeTenant } = useTenantStore();
  const { loading, toastMessage, clearToast } = useUIStore();

  // Determine dynamic title from route config
  const findRouteTitle = (routesList: AppRoute[], path: string): string | undefined => {
    for (const r of routesList) {
      if (path.startsWith(r.path)) {
        if (r.children) {
          const childTitle = findRouteTitle(r.children, path);
          if (childTitle) return childTitle;
        }
        return r.title;
      }
    }
    return undefined;
  };

  const title = defaultTitle ?? findRouteTitle(routes, pathname) ?? "YAMS";

  return (
    <SidebarProvider>
        <Sidebar />
        <SidebarInset>
        <Navbar title={title} children={<SidebarTrigger />}/>
          {/* <SidebarTrigger /> */}
          <Outlet />
          {loading && <LoadingOverlay />}
          {toastMessage && <Toast message={toastMessage} onClose={clearToast} />}
        </SidebarInset>
    </ SidebarProvider>
  );
}
