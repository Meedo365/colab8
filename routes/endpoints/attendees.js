let Attending = require("../../models/attendee");


let routes = (app) => {
    app.post("/attend", async (req, res) => {
        try {
            let attend = new Attending(req.body);
            await attend.save()
            res.json(attend)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get("/attend", async (req, res) => {
        try {
            let attend = await Attending.find()
                .populate("user_id")
                .populate("event_id")
            res.json(attend)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/attend/:id", async (req, res) => {
        try {
            let attend = await Attending.findOne({ _id: req.params.id });
            res.json(attend)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
    
     app.get("/attends/", async (req, res) => {
        try {
            let attend = await Attending.findOne({user,event});
            res.json(attend)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
    
     app.delete("/attend/:id", async (req, res) => {
        try {
            let attend = await Attending.deleteOne({ _id: req.params.id });
            res.json(attend)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
}

module.exports = routes;
