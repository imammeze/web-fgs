const LoginPages = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/admin/penginapan";
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs border rounded-lg py-8 px-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-amber-500">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="********"
            />
          </div>
          <button
            className="bg-amber-500 h-10 px-6 text-white w-full py-2 rounded-md font-semibold"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
