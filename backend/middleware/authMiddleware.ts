
const checkAuth = (req, res, next) => {
  const token: String = req.headers.authorization;
  if( token && token.startsWith('Bearer') ) {
    console.log('Si tiene el token con bearer')
    next()
  }

  const err = new Error('Invalid or not-existent token')
  res.status(403).json({msg: err.message})

  next();
};

export default checkAuth;
