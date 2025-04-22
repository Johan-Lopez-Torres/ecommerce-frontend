import CinemaSeatSelection from "./components/room";
import { Dashboard } from "./components/dashboard";
import { ModeToggle } from "./components/ButtonTheme";
import DashboardHeader from "./components/Header";
import ProjectShowcase from "./components/ProjectView";
import GithubConnectionForm from "./components/Modal";
import CreateProduct from "./pages/CreateProduct";
import SidebarWithHeader from "./components/Sidebar";
import { DashboardList } from "./components/ProductList";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Children } from "react";
import ShareModal from "./components/Modal-2";
import OrdersDashboard from "./components/VideoPlayer";
import AddNewProduct from "./components/AddProduct2";

export default function Home() {
  return (
    <>
      <div className="flex  justify-center  bg-gray-100">
        <CreateProduct />
        {/*   <ShareModal/>
                <CinemaSeatSelection/> */}
      </div>
    </>
  );
}
