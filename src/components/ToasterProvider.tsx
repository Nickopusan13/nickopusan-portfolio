import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={true}
      toastOptions={{
        duration: 2000,
        style: {
          background: "#ffd772",
          border: "2px solid #000",
          padding: "0.45rem 0.8rem",
          boxShadow: "3px 3px 0px #000",
        },
      }}
    />
  );
}
