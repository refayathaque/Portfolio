var mongoose = require('mongoose');

var User = mongoose.model('User');

var Item = mongoose.model('Item');

function ItemsController() {

    this.getUserItems = function(req, res) {
        User.find({_id : req.session.user._id})
        .populate('items')
        .exec(function(err, data) {
            // .then((data) => {
                res.json(data);
            // })
            // .catch(err) => {
            //     console.log('(ITEMS CONTROLLER) .CATCH : ', err)
            // }
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
        console.log('(ITEMS CONTROLLER) REQ.BODY : ', req.body);
        Item.findOne({
            $or: [
                {title : req.body.title},
                {description: req.body.description}
            ]
        })
        .then((data) => {
            if(data) { // We need to FIRST check if 'data' returned anything from the query above or is null, only after checking to see if 'data' has a value can we go into it to do our title and description checks, if it's null the else statement gets run and we store the req.body data to our db
                if(data.title === req.body.title) {
                    console.log('(ITEMS CONTROLLER) TITLE ALREADY IN DB : ', data.title);
                    res.json({error : true, messages : 'Item previously added'})
                }
                if(data.description === req.body.description) {
                    console.log('(ITEMS CONTROLLER) DESCRIPTION ALREADY IN DB : ', data.description);
                    res.json({error : true, messages : 'Description previously added'})
                }
            } //if(data)
            else {
                User.findOne({_id: req.body.creator}, function(err, user) {
                    var item = new Item(req.body);
                    // item._creator = user._id;
                    console.log('(ITEMS CONTROLLER) USER DATA : ', user);
                    if(req.body.friend === req.body.creator) {
                        res.json({error : true, messages : 'You cannot add yourself as a friend'})
                    }
                    else {
                        item.save((err, item) => {
                            if(req.body.friend && req.body.friend !== req.body.creator) {
                                User.findOneAndUpdate(
                                    { _id : req.body.creator },
                                    { $push : { items : item } }, // When pushing into arrays we don't need to $set, $set is only for updating specific fields with specific data, not for pushing into arrays
                                    { returnNewDocument : true },
                                    function(err, item) {
                                        if(err) {
                                            console.log('(ITEMS CONTROLLER) ERROR : ', err)
                                            res.json({error : true, messages : 'Error with inserting data into db'})
                                        } else {
                                            console.log('(ITEMS CONTROLLER) USER DATA POST UPDATE WITH ITEM : ', user);
                                            res.json({error : false, item : item})
                                        }
                                    } //function(err, item)
                                ) //findOneAndUpdate
                                User.updateMany(
                                    { _id : req.body.creator, _id : req.body.friend }, { $push : { items: item } },
                                    function(err, item) {
                                        if(err) {
                                            console.log('(ITEMS CONTROLLER) ERROR : ', err)
                                            res.json({error : true, messages : 'Error with inserting data into db'})
                                        } else {
                                            console.log('(ITEMS CONTROLLER) USER DATA POST UPDATE WITH ITEM : ', user);
                                            res.json({error : false, item : item})
                                        }
                                    } //function(err, item)
                                )
                            }
                            else {
                                User.findOneAndUpdate(
                                    { _id : req.body.creator },
                                    { $push : { items : item } }, // When pushing into arrays we don't need to $set, $set is only for updating specific fields with specific data, not for pushing into arrays
                                    { returnNewDocument : true },
                                    function(err, item) {
                                        if(err) {
                                            console.log('(ITEMS CONTROLLER) ERROR : ', err)
                                            res.json({error : true, messages : 'Error with inserting data into db'})
                                        } else {
                                            console.log('(ITEMS CONTROLLER) USER DATA POST UPDATE WITH ITEM : ', user);
                                            res.json({error : false, item : item})
                                        }
                                    } //function(err, item)
                                ) //findOneAndUpdate
                            }
                        }) //item.save
                    }
                }) //findOne
            } //else
        }) //then
        .catch((err) => {
            console.log('(ITEMS CONTROLLER) .CATCH : ', err)
        })
    } //this.addItem = function(req, res)
} //function ItemsController()

module.exports = new ItemsController();
