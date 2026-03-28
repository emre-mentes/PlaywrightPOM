import { Locator, Page } from "@playwright/test";


class SauceInventoryPage {

    private readonly page : Page;
    readonly inventoryItems : Locator


    constructor(page:Page){
        this.page = page;
        this.inventoryItems = page.locator("inventory_item")

    }

}