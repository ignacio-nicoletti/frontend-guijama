import Layout from '../../components/layout/layout'
// import LoginForm from '../../features/auth/component/loginForm'

export default function LoginPage() {

    return (
        <Layout>
            <div className="flex flex-col z-10 bg-white p-6 md:p-24 gap-4 rounded-lg shadow-md  lg:min-w-[800px] lg:min-h-[466px] w-full max-w-md">
                <h1 className='text-3xl text-(--textColor) font-bold'>Iniciar sesión</h1>
                <h4 className='text-sm text-(--textColor)'>Utilizá tus credenciales para ingresar al sistema.</h4>
                {/* <LoginForm /> */}
            </div>
        </Layout>
    )
}


