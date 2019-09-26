export default process.env.NODE_ENV === "development"
  ? {
      server: "https://localhost:4220"
    }
  : {
      server: "https://wapp.weblite.me/postlite"
    };
