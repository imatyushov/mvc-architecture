const userModel = require('./model')

module.exports = {
    create: (req, res) => {
        try {
            const {username, age} = req.body

            if (!username || !age) {
                throw new Error('Не указали имя пользователя либо возраст')
            }

            userModel.create({username, age})

            return res.redirect('/users')
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message
            })
        }
    },

    getAll: (req, res) => {
        return res.render('users.hbs', {
            users: userModel.getAll()
        })
    },
    getById: (req, res) => {}
}