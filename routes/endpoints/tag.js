let Tag = require("../../models/tags");

let routes = (app) => {

    // app.use((req, res, next) => {
    //     if (req.query.isAdmin) {
    //         next()
    //     }
    //     res.send('sorry not an admin')
    // })

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
            let tags = await Tag.find().sort({ tagName: 1 });
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
            // const { id } = req.params;
            // let tag = await Tag.findById({ id });
            res.json(tag)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
}

module.exports = routes;