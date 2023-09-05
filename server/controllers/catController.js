// const { Prisma } = require('@PrismaClient');
// const prisma = new PrismaClient()
const axios = require('axios');
const apikey = 'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';
// const response = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${apikey}`)
const getAll = async (req, res) => {


    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${apikey}`)
        const result = await response.data
        res.status(200).json(result)
        // console.log(result.length)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
     }
}



const getById = async (req, res) => {

    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${req.params.id}`)
        const result = await response.data
        res.status(200).json(result)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}



const create = async (req, res) => {

}


module.exports = { getAll, create, getById }
