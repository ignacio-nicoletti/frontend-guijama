import Layout from "../../components/layout/layout";

export default function LoginPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat justify-center items-center gap-4 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      >
        {/* <LoginForm /> */}
      </div>
    </Layout>
  );
}
