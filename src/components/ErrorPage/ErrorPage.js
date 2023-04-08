import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "center", textAlign: "center"}}>
      <h1>Oops!</h1>
      <div>
        <p>Sorry, the requested page doesn't exist.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
