const { StatusCodes } = require("http-status-codes")

/* logic to logged read user id */
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = auth