const 
    express = require('express'),
    router = express.Router()

router.route('/:message')
.get(function(req, res){
  let clapifiedString = clapify(req.params.message);
  res.status(200).json({
    status: "ok",
    clapifiedString
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

