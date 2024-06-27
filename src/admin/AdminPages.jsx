const AdminPages = () => {
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="flex justify-between items-center px-16 py-4 bg-black text-white">
        <img src="/img/logo-fgs.png" />
        <div className="flex gap-4 items-center">
          {email}
          <button
            className="bg-amber-500 px-4 py-2 rounded-md font-bold"
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default AdminPages;
