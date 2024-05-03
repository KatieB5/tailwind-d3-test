import LoginForm from "./LoginForm";

export const LoginPage = () => {
  return (
    <section className="py-8 z-10 font-sans">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Login
        </h1>
      </div>
      <LoginForm />
    </section>
  );
};
