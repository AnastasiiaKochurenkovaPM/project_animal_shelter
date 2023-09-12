const uuid = require('uuid')
const path = require('path')
const { Adverts, Files, Shelters } = require('../model/models');
const sequelize = require('sequelize');
const {getFile} = require('./FilesController')


//create advertations
const createAdvert = async (req, res) => {
    try {
        const { nameAnimal, type, sex, age, nameperson, city, phone, ster, vac, img1, img2, img3 } = req.body;
        const { userId: ShelterId } = req.session 
        console.log(req.session)
        const adverts = await Adverts.create({
            nameAnimal,
            type,
            sex,
            age,
            nameperson,
            city,
            phone,
            ster,
            vac,
            img1,
            img2,
            img3,
            ShelterId
        })
        console.log(adverts);
        return res.json(adverts)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error});
    }
}

//all advertations
const getAll = async (req, res) => {
    try{
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 25
        let offset = page * limit - limit
        const adverts = await Adverts.findAll({
            limit, 
            offset,
            raw: true
        })
        console.log(adverts);   
        return res.json(adverts).status(200) 
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error});
    }
}

const getAllAdvertssession = async (req, res) => {
    try{
        const {userId: user} = req.session
        console.log(req.session);
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 25
        let offset = page * limit - limit
        const adverts = await Adverts.findAll({
            where: {ShelterId: user},
            limit, 
            offset,
            raw: true
        })
        console.log(adverts);   
        return res.json(adverts).status(200) 
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error});
    }
}

const getSomeAdvert = async (req, res) => {
    try{
        const {userId: user} = req.session
        console.log(req.session);
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const adverts = await Adverts.findAll({
            limit, 
            offset,
            raw: true
        })
        console.log(adverts);   
        return res.json(adverts).status(200) 
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error});
    }
}

//one advertations
const getOne = async (req, res) => {
    const { id } = await req.params;
    const advert = await Adverts.findOne({
       where: {
            id: id
        },
        raw: true
    }).catch(error => console.log(error))
    console.log(advert);
    return res.json(advert).status(200)
}


const editAdvert = async(req,res)=>{
       const{id} = await req.params;
       const advert = await Adverts.findOne({
          where: {
             id: id
          },
          raw: true
       }).catch(error => console.log(error))
       console.log(advert);
       return res.json(advert).status(200)
 }
 
 
 const uploadAdvert = async (req, res) => {
    try{
       const{id} = req.params;
       const data = req.body;
       const selector = {where:{id:id}}
       const update = await Adverts.update(data, selector)
       console.log(update);
 
    } catch (error) {
       console.error(error.message);
       return res.status(500).json({error});
    }
 }

 
 const viewOneAdInProfile = async (req, res) => {
    const { id } = req.params;
    const advert = await Adverts.findOne({
        where: {
          id: id,
        },
        include: [{
            model: Shelters,
            //where: {completed: true},
            require: true,
    }],
        raw: true
    }).catch(error => console.log(error))
    console.log(advert);
    return res.json(advert).status(200)
}

const deleteAdvert = async(req,res)=>{
        const{id} = req.params;
        const advert = await Adverts.destroy({
            where:{
                id:id
            },
            raw:true
         }).catch(error=>console.log(error))
         console.log("Delete success");
}

module.exports = {
    createAdvert, 
    getAll, 
    getOne, 
    editAdvert, 
    uploadAdvert, 
    getAllAdvertssession,
    getSomeAdvert,
    viewOneAdInProfile,
    deleteAdvert 
}
