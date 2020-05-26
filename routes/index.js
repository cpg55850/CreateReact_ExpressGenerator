var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/express_backend", function (req, res, next) {
	res.send({
		name: "charlie",
	});
});

module.exports = router;
