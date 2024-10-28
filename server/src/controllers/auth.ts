import prisma from '../db'

export const createUser = async (req, res) => {

    // validation 

    // check if email exists

    // hash password

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            password: req.body.password,
        },
    })
    res.json(user)
}

export const loginUser = async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    })
    res.json(user)
}

export const getUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.body.id
        },
    })
    res.json(user)
}

export const deleteUser = async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: req.body.id
        },
    })
    res.json(user)
}

