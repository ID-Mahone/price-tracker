"use server"

import { scrapeAmazoneProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if (!productUrl) return;

    try {
        const scrapedProduct = await scrapeAmazoneProduct(productUrl)
    } catch (error: any) {
        throw new Error(`failed to create/update product: ${error.message}`)
    }
}