let User = require("../../models/users");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getMilliseconds() + file.originalname);
    }
});
const upload = multer({ storage: storage }).single('url');

let routes = (app) => {
//     app.post('/register', async (req, res) => {
//         upload(req, res, async (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 if (req.file) {
//                     req.body.url = '/' + req.file.path;
//                     try {
//                         let { fullname, email, password } = new User(req.body);
//                         let newuser = new User(req.body);
//                         let check = await User.findOne({ email });
//                         if (check == null) {
//                             await newuser.save()
//                             res.json(newuser);
//                         } else {
//                             return res.json({ msg: "Email already Registered" })
//                         }
//                     }
//                     catch (err) {
//                         res.status(500).send(err);
//                     }
//                 }
//             }
//         });

//     });

    app.post('/register', async (req, res) => {
        try {
            let { fullname, email, password } = new User(req.body);
            let newuser = new User(req.body);
            let check = await User.findOne({ email });
            if (check == null) {
                await newuser.save()
                res.json(newuser);
            } else {
                return res.json({ msg: "Email already Registered" })
            }
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.put("/login", async (req, res) => {
        try {
            let { email, password } = req.body;
            let update ={active: true};
            let user = await User.findOneAndUpdate({ email, password }, update, {returnOriginal: false});
            if (user == null) {
                return res.json({ msg: "Invalid email or password" })
            } else {
                res.json(user)
            }
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
    
    app.put("/logout", async (req, res) => {
        try {
            let { email, password } = req.body;
            let update ={active: false};
            let user = await User.findOneAndUpdate({ email, password }, update, {returnOriginal: false});
            if (user == null) {
                return res.json({ msg: "Invalid email or password" })
            } else {
                res.json(user)
            }
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get('/users', async (req, res) => {
        try {
            let users = await User.find();
            res.json(users)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/user/:id", async (req, res) => {
        try {
            let update=req.body;
            let user = await User.updateOne({ _id: req.params.id },update,{returnOriginal:false});
//             user.active = false;
            await user.save()
            return res.json(user)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.get("/users/:id", async (req, res) => {
        try {
            let user = await User.findOne({ _id: req.params.id });
            res.json(user)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });
}

module.exports = routes;
