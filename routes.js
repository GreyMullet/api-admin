const baseUri="/api"

const ROUTES={
    "sign-in": `${baseUri}/sign-in`,
    "fetch-hotel-params": `${baseUri}/fetch-hotel-params`,
    "fetch-banks-params": `${baseUri}/fetch-banks-params`,
    "fetch-mails-params": `${baseUri}/fetch-mails-params`,
    "update-hotel": `${baseUri}/update-hotel`,
    "update-bank": `${baseUri}/update-bank`,
    "update-mail": `${baseUri}/update-mail`,
    "add-hotel": `${baseUri}/add-hotel`, 
    "add-equiring": `${baseUri}/add-equiring`,
    "add-mail": `${baseUri}/add-mail`,
}

module.exports={ ROUTES }