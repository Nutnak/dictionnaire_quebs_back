const definition = require('../models/definition');

const getAllDefinitions = async (req, res) => {
    try {
        const definitions = await definition.findOne();
        if (!definitions) {
            return res.status(404).json({message: "No definitions found"});
        }
        res.status(200).json(definitions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching definitions", error});
    };
};

const createDefinition = async (req, res) => {
    try {
        const { name, expression, exemple, pseudonyme } = req.body;

        if (!name || !expression || !exemple || !pseudonyme) {
            return res.status(400).json({message: "All fields are required"});
        }

        const existDefinition = await definition.findOne({name});

        if (existDefinition) {
            return res.status(400).json({message: "Definition already exists"});
        }

        const newDefinition =  new definition({
            name,
            expression,
            exemple,
            pseudonyme
        });

        await newDefinition.save();

        return res.status(201).json({message: "Definition created", newDefinition});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error creating definition", error});
    };
};

const getDefinitionById = async (req, res) => {
    try {
        const id = req.params.id;
    
        const searchDefinition = await definition.findById(id);

        if(!searchDefinition) {
            res.status(404).json({message: "Definition not found."});
        };

        res.status(200).json(searchDefinition);
    } catch (error) {
        res.status(500).json({message: "Error fetching definition", error});
    };
};

module.exports = {
    createDefinition,
    getAllDefinitions,
    getDefinitionById
};