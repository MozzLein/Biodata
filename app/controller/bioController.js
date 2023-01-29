const express = require('express')
const router = express.Router()
const {urlencodedParser, getHeroInfo, getAboutMe, getSkill, getExperience} = require ('../model/bioModel.js')

router.get('/', urlencodedParser, getHeroInfo);
router.get('/profesi', urlencodedParser, getHeroInfo);
router.get('/about', urlencodedParser, getAboutMe);
router.get('/skill', urlencodedParser, getSkill);
router.get('/experience', urlencodedParser, getExperience);
module.exports = router;        