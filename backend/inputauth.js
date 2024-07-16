import z from 'zod';

const signupbody = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(5)
})
const signinbody = z.object({
    username: z.string().email(),
    password: z.string().min(5)
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


module.exports = {
    signinbody,
    signupbody,
    updateBody
}
