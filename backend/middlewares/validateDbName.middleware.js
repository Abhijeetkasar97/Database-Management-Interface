// middlewares/validateDbName.middleware.js
module.exports = (req, res, next) => {
  const { dbName } = req.body;

  const regex = /^[a-z][a-z0-9_]{2,62}$/;
  if (!regex.test(dbName)) {
    return res.status(400).json({
      message: "Invalid database name"
    });
  }
  next();
};
