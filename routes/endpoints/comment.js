let Comment = require("../../models/comments");


let routes = (app) => {
    // app.post("/create/comment", async (req, res) => {
    app.post("/createcomment", async (req, res) => {
        try {
            let comment = new Comment(req.body);
            await comment.save()
            res.json(comment)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get("/comments", async (req, res) => {
        try {
            let comments = await Comment.find();
            res.json(comments)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/comment/:id", async (req, res) => {
        try {
            let comment = await Comment.findOne({ _id: req.params.id });
            res.json(comment)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
}

module.exports = routes;