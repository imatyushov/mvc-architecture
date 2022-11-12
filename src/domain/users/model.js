let users = [
    {id: '1', username: 'sdfsdf', age: 20}
]

//Бизнес логика

module.exports = {
    create: ({username, age}) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        }

        if (!users.find(user => user.username === username)) {
            users.push(newUser)
        } else {
            throw new Error('Пользователь с таким ником уже существует')
        }
        return newUser;
    },
    removeById: ({id}) => {
        const userIndex = users.findIndex(user => user.id === String(id))

        if (userIndex === -1) {
            throw new Error('Пользователь с таким id не найден')
        }
        users.splice(userIndex, 1)
        return id;
        },
    removeByUsername: ({id}) => {},
    getAll: () => {},
    getById: ({id}) => {},

    getAll: () => {
        return users;
    },
    getById: ({id}) => {
        return users.find(user => user.id === id);
    }

}