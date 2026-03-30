import { Locator, Page } from "@playwright/test";


export class SnackAttackPage{
    page:Page;
     readonly loginButton:Locator;

    constructor(page:Page){
        this.page=page;

        this.loginButton=page.locator('path').nth(2);
    }

    async goto(){

        await this.page.goto('https://snackattack.deployedprojects.xyz/')

    }



}


