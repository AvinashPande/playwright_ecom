import{test,expect} from  '@playwright/test';
import { runInNewContext } from 'vm';

test(" browser  ficture", async({browser}) => {

     const context = await browser.newContext();
     const page = await context.newPage();


    await page.waitForTimeout(3000);

})

test("page ficture", async({page}) =>{

    await page.waitForTimeout(3000);

})