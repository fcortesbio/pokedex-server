const express = require("express"); 
const router = express.Router(); 

router.get("/test", (req, res) => {
  console.log("Hello from Pokemon Status");
  res.send("Hello from Pokemon Status");
});

module.exports = router;
