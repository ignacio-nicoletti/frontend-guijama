import { Outlet } from "react-router-dom";
import Layout from "./layout"; // Tu layout principal

export default function ConfigurationLayout() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <Outlet />
      </div>
    </Layout>
  );
}
