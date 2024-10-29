import { writeFile } from 'node:fs/promises';
import puppeteer from 'puppeteer';

const data = []

const browser = await puppeteer.launch();
const page = await browser.newPage();

for (let i = 1; i < 8; i++) {
    await page.goto(`https://escolas.com.br/particulares/sc/joinville?pagina=${i}`);
    await page.setViewport({width: 1080, height: 1024});

    const bodyHandle = await page.$('body');
    const links = await page.evaluate((body) => {
        const data = []
        body
            .querySelector('.schools_list')
            .querySelectorAll("li")
            .forEach(el => {
                data.push({
                    nome: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                })
            })

        return data
    }, bodyHandle)

    await bodyHandle.dispose();

    for (const { link, nome } of links) {
        await page.goto(link);

        const bodyHandle = await page.$('body');
        const response = await page.evaluate((body) => {
            const texts = body.querySelector('p[itemprop="address"]').innerText.split('\n')
            console.log(texts)
            const schoolData = {
                rua: texts[0].split(', ')[0],
                numero: texts[0].split(', ')[1],
                bairro: texts[1],
            }

            return schoolData
        }, bodyHandle)

        response.nome = nome
        console.log(response)
        data.push(response)
    }
}

writeFile("data.json", JSON.stringify(data))
await browser.close();