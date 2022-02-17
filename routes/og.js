var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/:id', function (req, res, next) {
  let id = req.params.id
  const max = process.env.MAX_OG

  //null check
  if (id <= 0) {
    res.status(500).json({ error: `OG id should start with 1 upto ${max}` })
  }

  //integer check
  if (!isInt(id)) {
    res.status(500).json({ error: `OG id has to be an integer!` })
  }

  //maximum limit check
  if (id > max) {
    res.status(404).json({ error: `Maximum ${max} OGs!` })
  }

  // all is well
  res.json(
  {
    name: 'DataX OG #'+ id,
    description:
      'A collective of 500 OGs helping grow DataX Protocol',
    image: 'https://gateway.pinata.cloud/ipfs/'+ process.env.IMAGE_CID,
    external_url: "https://datax.fi",
    animation_url:'https://gateway.pinata.cloud/ipfs/'+ process.env.IMAGE_CID,
    edition: 1,
    socials: {
      "website" :"https://datax.fi",
      "twitter" : "https://twitter.com/dataxfi",
      "discord": "https://discord.com/invite/b974xHrUGV",
      "github": "https://github.com/dataxfi/"
    },
    date: 1645000766360,
    attributes: [
      {
        trait_type: 'Rank',
        value: id,
      },
      {
        trait_type: 'Swag',
        value: Math.floor(random(id) * 100) + '%'
      },
      {
        trait_type: 'X-Factor',
        value: Math.floor(random(id + 1) * 1000)
      },
      {
        trait_type: 'Level',
        value: 1
      },
      {
        trait_type: 'Role',
        value: 1
      },
      {
        trait_type: 'Role',
        value: 'OG'
      },
      {
        trait_type: 'City',
        value: 'Datapolis'
      },
      {
        trait_type: 'Generation',
        value: 'X'
      },
    ]
  }
  )
})


function isInt(value) {
  var x = parseFloat(value)
  return !isNaN(value) && (x | 0) === x
}

function random(id) {
  var x = Math.sin(id++) * 10000;
  return x - Math.floor(x);
}

module.exports = router
