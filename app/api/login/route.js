import {query} from "../../../utils/database";

export const POST = async (req, res) => {

    const inputs = await req.json();
    
    // Checking user
    const q = "SELECT * FROM users WHERE username = ?";

    const data = await query({
        query: q,
        values: [inputs.username],
    });

    if (data.length === 0) console.log("No user");

    if (data[0].password === inputs.password) {
        console.log("Correct");        
    } else {
        console.log("Invalid");
    }

    return new Response({ status:200 });    
} 