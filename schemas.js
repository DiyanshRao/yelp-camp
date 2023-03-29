const Joi = require('joi');
module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title : Joi.string().required(),
        price : Joi.number().required().min(0),
        location : Joi.string().required(),
        image : Joi.string().required(),
        descrition : Joi.string().required()


    }).required()
})

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(0).max(1),
        body : Joi.string().required()

    }).required()
})