import { readFile, writeFile } from 'node:fs/promises';

const bairrosFile = await readFile('bairros.json')
const bairros = JSON.parse(bairrosFile.toString())

const file = await readFile('escolas-publicas.json')
const data = JSON.parse(file.toString())

console.log(bairros)

const raws = data.map(escola => {
    const bairro = bairros.find(b => {
        let nome = b.nome
        let ebairro = escola.bairro
        ebairro = ebairro.toLowerCase();                                                         
        ebairro = ebairro.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        ebairro = ebairro.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        ebairro = ebairro.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        ebairro = ebairro.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        ebairro = ebairro.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        ebairro = ebairro.replace(new RegExp('[Ç]','gi'), 'c');

        nome = nome.toLowerCase();                                                         
        nome = nome.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        nome = nome.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        nome = nome.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        nome = nome.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        nome = nome.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        nome = nome.replace(new RegExp('[Ç]','gi'), 'c');
        console.log({ nome, ebairro })

        return nome === ebairro
    })
    console.log({ escola, bairro })
    const raw = `INSERT INTO escola (nome, rua, numero_escola, id_bairro) VALUES (${escola.nome}, ${escola.rua}, ${escola.numero}, ${bairro.id}`
    return raw
})

console.log(raws)
