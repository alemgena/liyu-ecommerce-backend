const express = require("express");
const validate = require("../../middlewares/validate");
const faqValidation = require("../../validations/faq");
const faqController = require("../../controllers/faq");
const router = express.Router();


router.post(
  "",
  validate(faqValidation.add),
  faqController.add
);

router.get(
  "",
  faqController.list
);

router.patch(
  "/:id", 
  faqController.update
);

router.delete(
  "/:id",
  faqController.delete
);
module.exports = router;