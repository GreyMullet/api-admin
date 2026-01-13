const baseUri="/api"

const ROUTES={
    "sign-in": `${baseUri}/sign-in`,
    "fetch-hotel-params": `${baseUri}/fetch-hotel-params`,
    "fetch-banks-params": `${baseUri}/fetch-banks-params`,
    "update-hotel": `${baseUri}/update-hotel`,
    "update-bank": `${baseUri}/update-bank`,
    "add-hotel": `${baseUri}/add-hotel`, 
    "add-equiring": `${baseUri}/add-equiring`,
    "add-mail": `${baseUri}/add-mail`
}

module.exports={ ROUTES }