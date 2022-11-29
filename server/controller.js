const RE = require('./db.json');

let globalId = 4

module.exports ={
    getHouses: (req,res) =>{
        res.status(200).send(RE)},
    deleteHouse: (req,res) =>{
        let {id} = req.params
        let index = RE.findIndex(el => el.id === +id)

            if (index === -1){
                res.status(400).send(`user not found`)
            } else {
                RE.splice(index,1)
                res.status(200).send(RE)
            }
        },
    createHouse: (req,res) =>{
        const {address, price, imageURL} = req.body
        let newRE ={
            id:globalId,
            address,
            price,
            imageURL
        }
        RE.push(newRE)
        res.status(200).send(RE)
        globalId++
    },
    updateHouse: (req,res) =>{
        let {id} = req.params
        let index = RE.findIndex(el => el.id === +id)
        let {type} = req.body

        if(RE[index].price === 0 && type === 'plus'){
            res.status(400).send(`value has to be positive`)
        } else if (type === 'plus'){
            RE[index].price += 10000
            res.status(200).send(RE)
        } else if (type === 'minus'){
            RE[index].price -= 10000
            res.status(200).send(RE)
        } else {
            res.sendStatus(400)
        }
    }
}
