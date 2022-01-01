import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Allow", "POST");
        return res.json({
            "error": "Method not allowed.",
            "code": "method_not_allowed"
        });
    }

    if (!req.body.url) {
        res.statusCode = 422;
        return res.json({
            "error": "Missing video url.",
            "code": "missing_url"
        });
    }

    let urlObj;
    
    try {
        urlObj = new URL(req.body.url);
    } catch (err) {
        res.statusCode = 422;
        return res.json({
            "error": "Invalid video url.",
            "code": "invalid_url"
        });
    }
        
    if (urlObj.host.replace(/([a-zA-Z0-9]+.)/, "") !== "facebook.com") {
        res.statusCode = 422;
        return res.json({
            "error": "Invalid video url.",
            "code": "invalid_url"
        });
    }

    urlObj.hostname = "m.facebook.com";

    const newUrl = urlObj.toString();
    
    let resp;
    try {
        resp = await axios.get(newUrl, {
            headers: {
                "cookie": "datr=hh_QYV-8Ie18ek0d28BLwcNg; m_pixel_ratio=1; wd=817x947'",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "viewport-width": "1920"
            }
        });
    } catch (err) {
        res.statusCode = 500;
        console.error("[ERROR] - " + err.stack);
        return res.json({
            "error": "An error occured while creating the request.",
            "code": "request_error"
        });
    }

    let returnData = {};

    try {
        const $ = cheerio.load(resp.data);
        let el = $("#root > div._7om2 > div > div._97ki > div > div > div").get();
        let data = $(el[0]).attr("data-store");

        el = $("head > meta[name='description']").get();
        returnData.description = $(el[0]).attr("content");

        el = $("head > meta[property='og:image']").get();
        returnData.thumbnail = $(el[0]).attr("content");

        el = $("head > meta[property='og:video:type']").get();
        returnData.type = $(el[0]).attr("content");

        el = $("head > meta[property='og:title']").get();
        returnData.title = $(el[0]).attr("content").replace("| Facebook", "");

        returnData.videoUrl = JSON.parse(data).src;
        returnData.originalUrl = JSON.parse(data).videoURL;
    } catch (err) {
        res.statusCode = 500;
        console.error("[ERROR] - " + err.stack);
        return res.json({
            "error": "An error occured while parsing the response.",
            "code": "response_error"
        });
    }

    if (
        !returnData.videoUrl ||
        !returnData.originalUrl ||
        !returnData.thumbnail ||
        !returnData.description ||
        !returnData.title ||
        !returnData.type
    ) {
        res.statusCode = 500;
        return res.json({
            "error": "Couldn't fetch all needed data.",
            "code": "missing_data"
        });
    }
        
    return res.json(returnData);
}