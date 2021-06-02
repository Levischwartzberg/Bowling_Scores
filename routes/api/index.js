const router = require("express").Router();
const playerRoutes = require("./players");

// Player routes
router.use("/players", playerRoutes);

module.exports = router;
