const 
    express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    dotenv = require('dotenv').config()

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    let clapifiedString = clapify(req.body.text);
    res.status(200).json({
      status: "ok",
      response_type: "ethereal",
      text: "You clapped em' 👏"
    })
    let postUrl = buildMessageUrl(clapifiedString, req.body.user_id, req.body.channel_id, process.env.clappifyToken);
    axios.post(postUrl)
  })

// User this route to handle interactive messages
// Not used currently
router.route('/post')
  .post(function(req, res){
    let data = JSON.parse(req.body.payload);
    // console.log(data);
    let text = data.actions[0].value;
    res.status(200).json({
      status: "ok",
      // text: text,
      response_type: "ethereal",
    })
    let postUrl = buildMessageUrl(text, data.user.id, data.channel.id, process.env.token);
    axios.post(postUrl)
      .then((response) => {
        // console.log({response});
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

function buildMessageUrl(message, user, channel, token){
  let encodedMessage = encodeURIComponent(message);
  return `https://slack.com/api/chat.postMessage?token=${token}&channel=${channel}&text=${encodedMessage}&as_user=true&pretty=1`
}
