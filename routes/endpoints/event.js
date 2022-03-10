let Eventt = require("../../models/events");
let Comment = require("../../models/comments");
let Tag = require("../../models/tags");

let routes = (app) => {
    app.post('/create/events', async (req, res) => {
        try {
            let eventt = new Eventt(req.body);
            await eventt.save();
            res.json(eventt);
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/events', async (req, res) => {
        try {
            let eventt = await Eventt.find();
            res.json(eventt);
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/event/:id', async (req, res) => {
        try {
            let eventt = await Eventt.findOne({ _id: req.params.id });
            res.json(eventt);
        }
        catch (err) {
            res.status(500).send(err);
        }
    });
    
    app.delete('/event/:id', async (req, res) => {
        try {
            let eventt = await Eventt.deleteOne({ _id: req.params.id });
            res.json(eventt);
            res.send('event deleted')
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.put("/event/:id", async (req, res) => {
        try {
            let eventt = await Eventt.updateOne({ _id: req.params.id }, req.body);
            res.json(eventt)
        }
        catch {
            res.status(500).send(err)
        }
    });

    app.put("/event/like/:id", async (req, res) => {
        try {
            let eventt = await Eventt.findOne({ _id: req.params.id });
            eventt.likes++
            await post.save()
            res.json(eventt)
        }
        catch {
            res.status(500).send(err)
        }
    });

    app.get("/event/:id/comments", async (req, res) => {
        let comments = await Comment.find({ eventt_id: req.params.id })
        res.json(comments)
    });

    app.get("/event-by-tag/", async (req, res) => {
        let eventt = await Eventt.find({ tags_id: req.params.id })
        res.json(eventt)
    });

    // app.put("/event/:id/comments", async (req, res) => {
    //     let comments = await Comment.find({ eventt_id: req.params.id })
    //     Eventt.comment_no = comments.length;
    //     let result = Eventt.comment_no;
    //     await Eventt.save()
    //     res.send(result)
    // });

}

module.exports = routes;
