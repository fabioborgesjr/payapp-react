const schema = require('./schema')
const errorHandler = require('../commons/errorHandler')

schema.methods(['get', 'post', 'put', 'delete'])
schema.updateOptions({ new: true, runValidators: true })

schema.after('post', errorHandler)
.after('put', errorHandler)
.after('get', errorHandler)
.after('delete', errorHandler)


schema.route('count', (req, res, next) => {
    schema.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})


schema.route('summary', (req, res, next) => {
    schema.aggregate(
        {
            $project: {
                credit: { $sum: "$credits.value" },
                debt: { $sum: "$debts.value" }
            }
        },
        {
            $group: {
                _id: null,
                credit: { $sum: "$credit" },
                debt: { $sum: "$debt" }
            }
        }, {
            $project: {
                _id: 0,
                credit: 1,
                debt: 1
            }
        }, (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result[0] || { credit: 0, debt: 0 })
            }
        }
    )
})

module.exports = schema