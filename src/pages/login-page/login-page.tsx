import Layout from "../../components/layout/layout";

export default function LoginPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat justify-center items-center gap-4 p-8 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      >
        <h1 className="text-3xl text-(--textColor) font-bold">Iniciar sesión</h1>
        <h4 className="text-sm text-(--textColor)">
          Utilizá tus credenciales para ingresar al sistema.
        </h4>
        {/* <LoginForm /> */}
      </div>
    </Layout>
  );
}
