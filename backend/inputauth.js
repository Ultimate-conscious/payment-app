import z from 'zod';

const signupbody = z.object({
    username: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string().min(5)
})
const signinbody = z.object({
    username: z.string().email(),
    password: z.string().min(5)
})

module.exports = {
    signinbody,
    signupbody
}
