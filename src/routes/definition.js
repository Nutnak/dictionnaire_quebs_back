const express = require('express');
const definitionCtrl = require('../controllers/definition');
const router = express.Router();


router.get('/', definitionCtrl.getAllDefinitions);
router.post('/', definitionCtrl.createDefinition);
router.get('/:id', definitionCtrl.getDefinitionById);

module.exports = router;