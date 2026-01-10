import Layout from "../../../components/layout/layout";

export function ConfigurationPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat pt-[2.5%] items-center gap-4 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      ></div>
    </Layout>
  );
}
