let Tag = require("../../models/tags");

let routes = (app) => {

    app.post("/tag", async (req, res) => {
        try {
            let tagName = new Tag(req.body);
            await tagName.save()
            res.json(tagName)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get('/tags', async (req, res) => {
        try {
            let tags = await Tag.find();
            res.json(tags)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/tag/:id", async (req, res) => {
        try {
            let tag = await Tag.findOne({ _id: req.params.id });
            await tag.save()
            return res.json(tag)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get("/tags/:id", async (req, res) => {
        try {
            let tag = await Tag.findOne({ _id: req.params.id });
            res.json(tag)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
    
    app.delete("/tag/:id", async (req, res) => {
        try {
            let tag = await Tag.deleteOne({ _id: req.params.id });
            res.json(tag)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
    
}

module.exports = routes;
