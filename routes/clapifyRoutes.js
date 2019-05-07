const 
    express = require('express'),
    router = express.Router()

router.route('/:message')
.post(function(req, res){
  console.log(req.body.text);
  let clapifiedString = clapify(req.body.text);
  res.status(200).json({
    status: "ok",
    text: clapifiedString
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

