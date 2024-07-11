import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";
import prisma from "@/lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";





const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    // Get the token from the request
    const token = await req.text();

    // Decode the token
    // const { header } = jwt.decode(token, { complete: true });
    const jwtDecoded = jwt.decode(token, { complete: true });

    if (!jwtDecoded) {
      throw new Error("Invalid token");
    }
    const { header } = jwtDecoded;
    

    const { kid } = header;

    // Verify the token
    const key = await client.getSigningKey(kid);
    const signingKey = key.getPublicKey();
    const event =  jwt.verify(token, signingKey) as jwt.JwtPayload;

    
    switch (event?.type) {
     
        
      case "user.created":
        
         {
            const user= (event.data.user);
        
            const isAdmin=(user.organizations[0].roles[0].key !=="basic_user");
            
            
  
            await prisma.user.create({
  
  
              data: {
               
                id: user.id,
                firstName: user.first_name ?? "",
                lastName: user.given_name ?? "",
                email: user.email ?? "",
                profileImage: user.picture ?? `https://avatar.vercel.sh/${user.first_name}`,
                isAdmin:isAdmin,
  
  
              },
            });
        
            
  
          break;
         }
         case "user.updated":

         {
           const user= (event.data.user);
       
           const isAdmin=(user.organizations[0].roles[0].key !=="basic_user");
           
           
   
           await prisma.user.update({
   
             where: {
               id: user.id,   },
   
             data: {
              
               id: user.id,
               firstName: user.first_name ?? "",
               lastName: user.given_name ?? "",
               email: user.email ?? "",
               profileImage: user.picture ?? `https://avatar.vercel.sh/${user.first_name}`,
               isAdmin:isAdmin,
           
           }
   
             
           });
       
           
   
         break;
        }  
        
        case 'user.deleted':
            {

                const user= (event.data.user);
                // const isAdmin=(user.organizations[0].roles[0].key !=="basic_user")
                await prisma.user.delete({
                    where: {
                        id: user.id,
                    },
                });
                break;

            }
   
       
          
      default:
       
        break;
    }

  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}