import Joi from "joi";

export const validateNoteBody = Joi.object({
    title: Joi.string()
        .min(4)
        .required(),
    description: Joi.string()
        .min(4)
        .required(),
    userid: Joi.number().optional(),
});

export const validateUpdateNote = Joi.object({
    title: Joi.string()
        .min(4)
        .optional(),
    description: Joi.string()
        .min(4)
        .optional(),
    id: Joi.string().required(),
});

export const validateNoteParam = Joi.object({
    id: Joi.string().required(),
});
