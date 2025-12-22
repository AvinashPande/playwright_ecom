import {test , expect} from '@playwright/test';

import path from 'path';


test('file' , async ({page}) =>{

    const filePath1 = await  path.join(__dirname,'../testData/dummy1.jpg')

    await page.goto('https://practice.expandtesting.com/upload');
   await   page.locator('[data-testid="file-input"]').setInputFiles(filePath1)

   await page.locator('#fileSubmit').click()

   await page.waitForTimeout(5000)

    
})