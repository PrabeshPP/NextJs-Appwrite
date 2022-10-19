import { Storage,Client,Account } from "appwrite";

const client=new Client();
client.setEndpoint('http://localhost/v1').setProject("634f4520d51ca2e34622");

export const appwriteSDK=()=>{
    const storage=new Storage(client);
    return storage;
}

export const accountSDK=()=>{
    const account=new Account(client);
    return account;
}