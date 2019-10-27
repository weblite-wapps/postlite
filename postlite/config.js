export default {
  comments: {
    server: (process.env.NODE_ENV !== "development") ? "https://wapp.weblite.me/srv-comment"
      : "http://localhost:5110"
  }
}