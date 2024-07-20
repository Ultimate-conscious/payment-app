import z from 'zod';

export const signupbody = z.object({
    username: z.string().email(),
    password: z.string().min(5),
    firstName: z.string(),
    lastName: z.string()
})
export const signinbody = z.object({
    username: z.string().email(),
    password: z.string().min(5)
})

export const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})


// module.exports = {
//     signinbody,
//     signupbody,
//     updateBody
// }
