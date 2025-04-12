const checkAuth = (req, res, next) => {
  console.log("from my middleware");
  next();
};

export default checkAuth;
