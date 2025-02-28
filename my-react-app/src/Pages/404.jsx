import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-6xl text-red-400 font-bold">Oops!</h1>
      <p className="text-2xl my-5">Sorry, an unexpected error has occured</p>
      <p className="text-2xl ">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
