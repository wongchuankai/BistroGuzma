var menuModel = require('../models/menu-model');

const getAllMenu = async (req, res) => {
    await menuModel.find({}, (err, sentiments) => {
        if (err) {
          return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: sentiments })
      }).catch(err => console.log(err))
}

module.exports = {
    getAllMenu
}