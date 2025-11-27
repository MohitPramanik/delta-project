const { Router } = require("express");
const wrapAsync = require("../utilities/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

const router = Router();

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup))

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login)

router.get("/logout", userController.logout)

module.exports = router;