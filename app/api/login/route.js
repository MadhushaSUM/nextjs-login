import { json } from "stream/consumers";
import {db} from "../../../utils/database";

export const POST = async (req) => {
    const inputs = await req.json();

    try {
        await db.connect();

        await db.query("select * from users where username = ?", inputs.username, (err, data) => {
            if (err) return new Response(JSON.stringify(err), { status: 501 });
            
            if (data[0].password === inputs.password) {
                return new Response(JSON.stringify("logged in"), { status: 201 });               
            } else {
                return new Response(JSON.stringify("Mismatch!"), { status: 501 });                
            }
        })        

        await db.end();
        return new Response(JSON.stringify(results), { status: 201 });       
        
    } catch (error) {
        return new Response("Failed to create a new prompt", { status:500 })        
    }
} 