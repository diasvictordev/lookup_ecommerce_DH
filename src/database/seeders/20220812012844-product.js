"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product", [
      {
        product_id: uuidv4().toString(),
        price: 3499.99,
        category: "Notebook",
        amount: 28,
        state: "Em oferta",
        name: "Notebook Lenovo Ultrafino IdeaPad 3 Ryzen 5-5500U, 8GB RAM, SSD 256GB, Tela 15.6 Full HD, Prata",
        description: "Lenovo IdeaPad 3 possui design leve e compacto. Com tela Full HD antirreflexo de 15.6 para mais conforto visual. Notebook ideal para todos os momentos. Conta com Wi-Fi AC ultrarrápido e teclado numérico para trabalhar com mais agilidade nas suas planilhas. O armazenamento SSD 256GB PCIe é 10x mais rápido que um HDD 2.5 SATA, você terá mais segurança ao armazenar seus dados. Nitidez e alta qualidade de som com certificação Dolby Audio. Sua privacidade pessoal é muito importante. É por isso que o IdeaPad 3 está equipado com porta de privacidade da webcam. Quando não estiver em uma chamada de vídeo ou gravando algo, basta deslizá-la. Faça vídeo-conferências em alta-definição com a câmera HD-720p.",
        description_2: "Marca: Acer, Modelo: 82MF0003BR, Processador: Ryzen 5-5500U | cache 3MB L2 / 8MB L3 |  Cores/Threads: HexaCore / 12 Threads, Memória RAM: 8GB, SSD: SSD de 256GB PCIe NVMe M.2 | Máxima expansão de armazenamento: 1x Slot 2.5 HDD até 1TB + 1x Slot M.2 2242 SSD até 512GB ou M.2 2280 SSD até 1TB, Placa de vídeo: Integrada AMD Radeon Graphics, Resolução de Tela: Full HD (1920 x 1080) Antirreflexo, Audio (alto-falantes): Alto-falantes com certificação Dolby Audio (2 x 1.5W), Camera: HD-720p com Privacidade, Bateria: 2 células 38Wh,Wi-Fi: WiFi 2x2 AC, Leitor de Cartões: Leitor de Cartões 4 em 1 (SD, SDHC, SDXC, MMC)",
        image: "Notebook-Lenovo-Ultrafino-IdeaPad-3-Ryzen-5-5500U",
        extension: ".jpg"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
s