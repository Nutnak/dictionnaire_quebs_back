
const definition = require('../models/definition');

const getAllDefinitions = async (req, res) => {
    try {
        const definitions = await definition.find();
        if (!definitions) {
            return res.status(404).json({message: "No definitions found"});
        }
        res.status(200).json(definitions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching definitions", error});
    }
}

const createDefinition = async (req, res) => {
    const { name, definition, exemple, pseudonyme } = req.body;

    const newDefinition = new definition({
        name,
        definition,
        exemple,
        pseudonyme
    });

    try {
        newDefinition = await newDefinition.save();
        res.status(201).json({message: "Definition created", newDefinition});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error creating definition", error});
    }
}

module.exports = {
    createDefinition,
    getAllDefinitions
}