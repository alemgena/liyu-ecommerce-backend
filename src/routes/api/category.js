const express = require("express");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validations/category");
const categoryController = require("../../controllers/category");
const router = express.Router();
const passport=require('passport');

router.post(
  "/add",
  passport.authenticate('jwt',{session:false}),
 validate(categoryValidation.add),
  categoryController.add
);

router.get(
  "/list",
  passport.authenticate('jwt',{session:false}),
  categoryController.list
);

router.patch(
    "/update/:id",
    passport.authenticate('jwt',{session:false}),
    categoryController.update
  );
  
router.delete(
    "/delete/:id",
    passport.authenticate('jwt',{session:false}),
    categoryController.delete
  );  
module.exports = router;