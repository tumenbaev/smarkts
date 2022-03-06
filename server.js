const cors_proxy = require("cors-anywhere");
require("dotenv").config();

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;


if (!process.env.CF_CLEARANCE_TOKEN) {
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error("CF_CLEARANCE_TOKEN not fount in .env file");
    console.error(
        "please open https://api.smarkets.com/ and save the value of cf_clearance cookie as CF_CLEARANCE_TOKEN"
    );
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    process.exit(1);
}

cors_proxy
    .createServer({
        originWhitelist: [],
        setHeaders: {
            cookie: `cf_clearance=${process.env.CF_CLEARANCE_TOKEN}`,
        },
    })
    .listen(port, host, function () {
        console.log("Running CORS Anywhere on " + host + ":" + port);
    });
