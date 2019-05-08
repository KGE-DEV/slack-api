const 
    express = require('express'),
    router = express.Router()

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    let clapifiedString = clapify(req.body.text);
    res.status(200).json({
      status: "ok",
      text: clapifiedString,
      "attachments": [
        {
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "clap",
                    "text": "Clap Em'",
                    "type": "button",
                    "value": "clap"
                },
                {
                    "name": "cancel",
                    "text": "Show Mercy",
                    "type": "button",
                    "value": "cancel"
                },
            ]
        }
    ]
      // response_type: "in_channel",
    })
  })

router.route('/post')
  .post(function(req, res){
    console.log(req.body);
    res.status(200).json({
      status: "ok",
      text: "clapifiedString",
      response_type: "in_channel",
    })
  })





module.exports = router


function clapify(string){
	let clapifiedString = string.replaceAll(" ", " 👏 ");
	return clapifiedString;
}

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

