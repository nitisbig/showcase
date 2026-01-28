import { db } from "$lib/server/db";
import * as schema from '$lib/server/db/schema';
import type { Actions } from "./$types.js";
import { fail, redirect } from '@sveltejs/kit';

export async function load(){
    const users = await db.query.usersTable.findMany();
    return { users };
}

export const actions = {
    default: async ({request})=>{
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const url = formData.get('url') as string;
        const description = formData.get('description') as string;
        const email = formData.get('email') as string;

        await db.insert(schema.usersTable).values({
            name,
            url,
            description,
            email
        })

       throw redirect(303, '/');
    }
} satisfies Actions