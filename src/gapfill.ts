const data = require('./dao/tax.json')
const houses = require('./dao/converted.json')
const fs = require('fs')
houses.forEach((item:any) => {
    if(item['landprice'] === "landprice" || item['buildingprice'] === "buildingprice") {
        data.forEach((buddy:any) => {
            if(item['strap'] === buddy['strap']) {
                item['landprice'] = buddy['landAssessedVal']
                item['buildingprice'] = buddy['bldAssessedVal']
                
            }
        })
    }
})
const meme = () => {
    return 6;
}

fs.writeFile('converted.json', JSON.stringify(houses), meme)

