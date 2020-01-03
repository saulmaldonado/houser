module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')

        const houses = await db.get_all_houses()

        res.status(200).json(houses)
    },

    addHouse: async (req, res) => {
        const db = req.app.get('db')

        const {name, address, city, state, zipcode, image, mortgage, rent} = req.body

        const houses = await db.add_house(name, address, city, state, zipcode, image, mortgage, rent)

        res.status(200).json(houses)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params

        const houses = await db.delete_house(id)

        res.status(200).json(houses)
    }
}