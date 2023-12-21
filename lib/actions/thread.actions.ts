import { connectToDB } from "../mongoose";

interface Params{
    text:string,
    author:string,
    communityId:string |null,
    path:string,
}
export async function createThread({}:Params){
    connectToDB()
    const createThread=await ThreadValidation.create()
    try{

    }catch(err){

    }

}