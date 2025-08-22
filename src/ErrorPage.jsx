import { useRouteError, useNavigate } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  return (
    <>
      <div
        id="error-page"
        className="w-full h-screen place-content-center text-center wrapper error-page "
      >
        <h1 className="md:text-5xl text-3xl font-light">Oops!</h1>
        <p className="md:text-xl text-sm py-6 font-light">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="md:text-sm text-xs text-blue-400 font-light">
          <i>{error.statusText || error.message}</i>
        </p>

        <span>
          <button
            onClick={() => navigate("/")}
            className="border border-blue-400 rounded shadow-sm px-3 py-4  hover:outline-4 hover:outline-blue-200 text-xs w-36 md:w-48 uppercase mt-4"
          >
            back to home
          </button>
        </span>
      </div>
    </>
  );
}

export default ErrorPage;
