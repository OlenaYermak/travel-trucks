import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import Loader from "../Loader/Loader.jsx";


export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <div>{children}</div>

        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </div>
  );
}
