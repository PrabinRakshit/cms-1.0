const { StatusCodes } = require('http-status-codes')
const sendMail = require('../middleware/mail')

const mailController = {
    sendMail: async (req, res) => {
        try {
            
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
        }
    }
}

module.exports = mailController