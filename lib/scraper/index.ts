"use server"
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeAmazoneProduct(url: string) {
    if (!url) return;

    //curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_4484d7dd-zone-pricegoat:mzi67ky23gua -k https://lumtest.com/myip.json

    //BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
    try {
        //Fetch the product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);


        const title = $('#productTitle').text().trim();
        console.log({title})
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}