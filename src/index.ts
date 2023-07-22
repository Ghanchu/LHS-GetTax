import { getValue } from "./csvtojson";

exports.handler = async (event: any) => {
   
    const results = getValue(event.queryStringParameters.address)
    return {
        statusCode: 200,
        body: JSON.stringify(results), // Convert the result object to JSON string
        headers: {
          'Content-Type': 'application/json' // Set the response content type to JSON
        }
      };
}

