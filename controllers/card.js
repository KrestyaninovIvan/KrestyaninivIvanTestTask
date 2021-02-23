const fs = require('fs')
const file = fs.readFileSync('users.json', 'utf8')


const fullDataJ = JSON.parse(file)
const summaryDataJ = JSON.parse(JSON.stringify(fullDataJ, ['ObjectID', '$oid', 'first_name', 'last_name', 'image']))
const n = 12
let maxPage = 0

module.exports.summaryData = function (req, res) {
    let outData = []
    let page = req.query.page || 0
    if (page > 1) {
        //   outData = outData.concat(summaryDataJ[req.query.page * n - n])
        for (let i = 0; i < n; i++) {
            if ((summaryDataJ[i + req.query.page * n - n]) != null) outData = outData.concat(summaryDataJ[i + req.query.page * n - n])
        }
    } else {
        // outData = outData.concat(summaryDataJ[0])
        for (let i = 0; i < n; i++) {
            outData = outData.concat(summaryDataJ[i])
        }
    }
    res.status(200).json(outData)
}

module.exports.fullData = function (req, res) {
    let outData = []
    for (key in fullDataJ) {
        if (fullDataJ[key].ObjectID.$oid === req.params.id)
            outData = fullDataJ[key]
    }
    res.status(200).json(outData)
}

module.exports.cardMaxPage = function (req, res) {
    let d = 0
    for (key in fullDataJ) {
        d++
    }
    maxPage = (Math.floor(d / 12))
   if (maxPage!==d/12) maxPage++
    res.status(200).json(JSON.parse(maxPage))
}

module.exports.search = function (req, res) {
    let outData = []
    for (key in summaryDataJ) {
        if (summaryDataJ[key].ObjectID.$oid === req.params.id ||
            summaryDataJ[key].first_name === req.params.id ||
            summaryDataJ[key].last_name === req.params.id ||
            (summaryDataJ[key].last_name + '_' + summaryDataJ[key].first_name) === req.params.id) {
            outData = outData.concat(summaryDataJ[key])
        }
    }
    res.status(200).json(outData)
}
