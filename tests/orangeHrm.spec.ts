import {test,expect} from "@playwright/test"
import { AsyncLocalStorage } from "async_hooks";






test.describe("naukri LogIn", ()=>{
   

    /* ==== Test Created with Cypress Studio ==== */
    test('orangeHrm',  async ({page})=> {
        /* ==== Generated with Cypress Studio ==== */
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('.oxd-sheet > :nth-child(1)').click();
        await page.locator(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        await page.locator(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').fill('Admin');
        await page.locator('.oxd-sheet > :nth-child(2)').click();
        await page.locator(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        await page.locator(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').fill('admin123');
        await page.locator('.oxd-button').click();
        await page.locator(':nth-child(1) > .oxd-main-menu-item > .oxd-icon').click();
     
        
        
        
        
        
    });
})