import { getValue } from "./csvtojson";

exports.handler = async (event: any) => {
   
    return getValue(event.queryStringParameters.address)
}

