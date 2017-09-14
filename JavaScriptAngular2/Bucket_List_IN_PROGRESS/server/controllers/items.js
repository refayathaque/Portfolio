var mongoose = require('mongoose');

var User = mongoose.model('User');

var Item = mongoose.model('Item');

function ItemsController() {

    this.getUserItems = function(req, res) {
        User.find({_id : req.session.user._id})
        .populate('items')
        .exec(function (err, data) {
            if (data) {
                res.json(data);
                console.log('(ITEMS CONTROLLER) [GET USER ITEMS] DATA : ', data);
            }
            if (err) {
                console.log('(ITEMS CONTROLLER) [GET USER ITEMS] ERROR : ', err)
            }
        })
    }

    this.getFriendItemsPending = function(req, res) {
        User.find({_id : req.params.id})
        .populate('items')
        .exec(function (err, data) {
            if (data) {
                var pendingArray = [];
                for (i = 0; i < data[0].items.length; i++) {
                    if (data[0].items[i].status === false) {
                        pendingArray.push(data[0].items[i]);
                    }
                }
                res.json(pendingArray);
                console.log('(ITEMS CONTROLLER) [GET FRIEND ITEMS PENDING] : ', pendingArray);
            }
            if (err) {
                console.log('(ITEMS CONTROLLER) [GET FRIEND ITEMS PENDING] ERROR : ', err)
            }
        })
    }

    this.getFriendItemsDone = function(req, res) {
        User.find({_id : req.params.id})
        .populate('items')
        .exec(function (err, data) {
            if (data) {
                var doneArray = [];
                for (i = 0; i < data[0].items.length; i++) {
                    if (data[0].items[i].status === true) {
                        doneArray.push(data[0].items[i]);
                    }
                }
                res.json(doneArray);
                console.log('(ITEMS CONTROLLER) [GET FRIEND ITEMS DONE] : ', doneArray);
            }
            if (err) {
                console.log('(ITEMS CONTROLLER) [GET FRIEND ITEMS DONE] ERROR : ', err)
            }
        })
    }

    this.changeItemStatus = function(req, res) {
        console.log(req.params.id)
        Item.findOne({_id : req.params.id, status : false})
        .then((item) => {
            if(item) {
                Item.findOneAndUpdate(
                    {_id : req.params.id},
                    {$set : { status : true }},
                    { returnNewDocument : true },
                    function(err, item) {
                        if(err) {
                            console.log('(ITEMS CONTROLLER) ERROR : ', err)
                            res.json({error : true, messages : 'Error with inserting data into db'})
                        } else {
                            console.log('(ITEMS CONTROLLER) ITEM DATA UPDATED WITH NEW STATUS : ', item);
                            res.json({error : false, item : item})
                        }
                    } //function(err, item)
                )
            } else {
                Item.findOneAndUpdate(
                    {_id : req.params.id},
                    {$set : { status : false }},
                    { returnNewDocument : true },
                    function(err, item) {
                        if(err) {
                            console.log('(ITEMS CONTROLLER) ERROR : ', err)
                            res.json({error : true, messages : 'Error with inserting data into db'})
                        } else {
                            console.log('(ITEMS CONTROLLER) ITEM DATA UPDATED WITH NEW STATUS : ', item);
                            res.json({error : false, item : item})
                        }
                    } //function(err, item)
                )
            }
        })
    }

    this.addItem = function(req, res) {
        console.log('(ITEMS CONTROLLER) [ADD ITEM] ITEM REQ.BODY : ', req.body);
        Item.findOne({
            $or: [
                {title : req.body.title},
                {description: req.body.description}
            ]
        })
        .then((data) => {
            if(data) { // We need to FIRST check if 'data' returned anything from the query above or is null, only after checking to see if 'data' has a value can we go into it to do our title and description checks, if it's null the else statement gets run and we store the req.body into our db
                if(data.title === req.body.title) {
                    console.log('(ITEMS CONTROLLER) [ADD ITEM] TITLE ALREADY IN DB : ', data.title);
                    res.json({error : true, messages : 'Item previously added'})
                }
                if(data.description === req.body.description) {
                    console.log('(ITEMS CONTROLLER) [ADD ITEM] DESCRIPTION ALREADY IN DB : ', data.description);
                    res.json({error : true, messages : 'Description previously added'})
                }
            } //if(data)
            else {
                // User.findOne({_id: req.body.creator}, function(err, user) {
                var item = new Item(req.body);
                // console.log('(ITEMS CONTROLLER) USER DATA : ', user);
                item.save((err, item) => {
                    if (req.body.friend === "") {
                        User.findOneAndUpdate(
                            { _id : req.body.creator },
                            { $push : { items : item } }, // When pushing into arrays we don't need to $set, $set is only for updating specific fields with specific data, not for pushing into arrays
                            // { returnNewDocument : true },
                            function(err, item) {
                                if(err) {
                                    console.log('(ITEMS CONTROLLER) ERROR : ', err)
                                    res.json({error : true, messages : 'Error with inserting data into db'})
                                } else {
                                    // console.log('(ITEMS CONTROLLER) USER DATA WITH NEW ITEM : ', user);
                                    res.json({error : false, item : item})
                                }
                            } //function(err, item)
                        ) //findOneAndUpdate
                    }
                    else {
                        User.updateMany(
                            { $or : [ { _id : req.body.creator }, { _id : req.body.friend } ] }, { $push : { items: item } }, // WAY TO TARGET MULTIPLE DOCUMENTS IN A TABLE!
                            function(err, item) {
                                if(err) {
                                    console.log('(ITEMS CONTROLLER) ERROR : ', err)
                                    res.json({error : true, messages : 'Error with inserting data into db'})
                                } else {
                                    // console.log('(ITEMS CONTROLLER) USER DATA WITH NEW ITEM [TWO USERS] : ', user);
                                    res.json({error : false, item : item})
                                }
                            } //function(err, item)
                        )
                    }
                }) //item.save
                // }) //findOne
            } //else
        }) //then
        .catch((err) => {
            console.log('(ITEMS CONTROLLER) .CATCH : ', err)
        })
    } //this.addItem = function(req, res)

    this.update = function(req, res) {
        console.log('(ITEMS CONTROLLER) [UPDATE] REQ.BODY : ', req.body)
        console.log('(ITEMS CONTROLLER) [UPDATE] REQ.PARAMS.ID : ', req.params.id);
        Item.findOneAndUpdate(
            { _id : req.params.id },
            { $set: { "title" : req.body.title, "description" : req.body.description }},
            function(err, item) {
                if(err) {
                    console.log('(ITEMS CONTROLLER) ERROR : ', err)
                    res.json({error : true, messages : 'Error with updating data'})
                } else {
                    res.json({error : false, item : item})
                }
            } //function(err, item)
        ) //findOneAndUpdate
    }

    this.delete = function(req, res) {
        console.log('(ITEMS CONTROLLER) [DELETE] REQ.PARAMS.ID : ', req.params.id);
        Item.deleteOne(
            { _id : req.params.id },
            function(err, item) {
                if(err) {
                    console.log('(ITEMS CONTROLLER) ERROR : ', err)
                    res.json({error : true, messages : 'Error with deleting data'})
                } else {
                    res.json({error : false, item : item})
                }
            }
        )
    }

} //function ItemsController()

module.exports = new ItemsController();
