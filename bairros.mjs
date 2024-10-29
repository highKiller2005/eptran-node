import { writeFile } from 'node:fs/promises';

const bairros = `Morro do Meio', 1);
Nova Brasília', 2);
São Marcos', 3);
Vila Nova', 4);
Aventureiro', 5);
Comasa', 6);
Espinheiros', 7);
Iririú', 8);
Jardim Iririú', 9);
Vila Cubatão', 10);
Zona Industrial Tupy', 11);
América', 12);
Atiradores', 13);
Bom Retiro', 14);
Centro', 15);
Costa e Silva', 16);
Dona Francisca', 17);
Glória', 18);
Jardim Paraíso', 19);
Jardim Sofia', 20);
Pirabeiraba', 21);
Rio Bonito', 22);
Saguaçu', 23);
Santo Antônio', 24);
Zona Industrial Norte', 25);
Adhemar Garcia', 26);
Anita Garibaldi', 27);
Boehmerwald', 28);
Fátima', 29);
Floresta', 30);
Guanabara', 31);
Itaum', 32);
Itinga', 33);
Jarivatuba', 34);
João Costa', 35);
Paranaguamirim', 36);
Parque Guarani', 37);
Petrópolis', 38);
Profipo', 39);
Santa Catarina', 40);
Ulysses Guimarães', 41);
Boa Vista', 42);
Bucarein', 43)`.split(');\n').map(a => {
    return {
        nome: a.split("', ")[0],
        id: a.split("', ")[1]
    }
})

await writeFile('bairros.json', JSON.stringify(bairros))