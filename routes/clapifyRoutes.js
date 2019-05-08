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
            "text": "Choose a game to play",
            "fallback": "You are unable to choose a game",
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
                    "name": "game",
                    "text": "Falken's Maze",
                    "type": "button",
                    "value": "maze"
                },
                {
                    "name": "game",
                    "text": "Thermonuclear War",
                    "style": "danger",
                    "type": "button",
                    "value": "war",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Wouldn't you prefer a good game of chess?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
      // response_type: "in_channel",
    })
  })

router.route('/post')
  .post(function(req, res){
    console.log(req.body);
    let clapifiedString = clapify(req.body.text);
    res.status(200).json({
      status: "ok",
      text: clapifiedString,
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

