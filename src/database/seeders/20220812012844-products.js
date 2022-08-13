"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        product_id: uuidv4().toString(),
        price: 3599.99,
        category: "Notebook",
        amount: 28,
        state: "Em oferta",
        name: "Notebook Lenovo Ultrafino IdeaPad 3 Ryzen 5-5500U, 8GB RAM, SSD 256GB, Tela 15.6 Full HD, Prata",
        description:
          "Lenovo IdeaPad 3 possui design leve e compacto. Com tela Full HD antirreflexo de 15.6 para mais conforto visual. Notebook ideal para todos os momentos. Conta com Wi-Fi AC ultrarrápido e teclado numérico para trabalhar com mais agilidade nas suas planilhas. O armazenamento SSD 256GB PCIe é 10x mais rápido que um HDD 2.5 SATA, você terá mais segurança ao armazenar seus dados. Nitidez e alta qualidade de som com certificação Dolby Audio. Sua privacidade pessoal é muito importante. É por isso que o IdeaPad 3 está equipado com porta de privacidade da webcam. Quando não estiver em uma chamada de vídeo ou gravando algo, basta deslizá-la. Faça vídeo-conferências em alta-definição com a câmera HD-720p.",
        description_2:
          "Marca: Acer, Modelo: 82MF0003BR, Processador: Ryzen 5-5500U | cache 3MB L2 / 8MB L3 |  Cores/Threads: HexaCore / 12 Threads, Memória RAM: 8GB, SSD: SSD de 256GB PCIe NVMe M.2 | Máxima expansão de armazenamento: 1x Slot 2.5 HDD até 1TB + 1x Slot M.2 2242 SSD até 512GB ou M.2 2280 SSD até 1TB, Placa de vídeo: Integrada AMD Radeon Graphics, Resolução de Tela: Full HD (1920 x 1080) Antirreflexo, Audio (alto-falantes): Alto-falantes com certificação Dolby Audio (2 x 1.5W), Camera: HD-720p com Privacidade, Bateria: 2 células 38Wh,Wi-Fi: WiFi 2x2 AC, Leitor de Cartões: Leitor de Cartões 4 em 1 (SD, SDHC, SDXC, MMC)",
        image: "Notebook-Lenovo-Ultrafino-IdeaPad-3-Ryzen-5-5500U",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 3499.99,
        category: "Notebook",
        amount: 5,
        state: "Disponível",
        name: "Notebook Acer Aspire 5 Intel Core i5-10210U, 8GB RAM, SSD 256GB, 15.6 Full HD, Prata",
        description:
          "Os notebooks da linha Aspire 5 são convenientemente portáteis e elegantes para acompanhar suas tarefas do dia a dia. Os recursos tecnológicos de sua confiança ao seu lado sempre que precisar. Desempenho suficiente para todas as tarefas, com Processador Intel Core 10ª geração. Você cria, edita, compartilha e assiste vídeos, fotos e imagens sem dificuldades. Os notebooks da linha Aspire 5 utilizam os processadores Intel® de 10ª geração que possuem desempenho muito superior em relação a geração anterior de processadores. Com até quatro núcleos para renderização e edição mais rápidas e muito mais, tudo em um notebook com um belo design. A tela de 15,6” Full HD entrega uma experiência de imagens muito rica, perfeita para assistir seus filmes e editar seus projetos em vídeo.",
        description_2:
          "Marca: Acer, Modelo: A515-54-57CS, Sistema Operacional: Windows 11 Home 64-bits, Processador:	Intel® Core™ i5 – 10210U | Quad Core (8 Threads) | Frequência: 1.60 GHz até 4.20 GHz | 6 MB Intel® Smart Cache, Memória: 8 GB RAM DDR4 (4 GB Soldada + 4 GB Módulo) | Expansível até 20 GB, Tela: 15,6” LED com design ultrafino | Resolução: Full HD (1920x1080) | Tecnologia Anti reflexo Acer ComfyView, Armazenamento:  256 GB SSD PCIe 3.0 x4 NVMe (M.2 2280), Webcam: Webcam HD com 1280 x 720 de resolução e Gravação de áudio e vídeo em 720p, Bateria: Bateria de 4 células (Li-Íon) 48Wh | Autonomia da bateria de até 8 horas10 (depende das condições de uso), Touchpad: Multi-gestual com dois botões | Certificação Microsoft Precision Touchpad",
        image: "Notebook-Acer-Aspire-5-Intel-Core-i5-10210U",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 2929.99,
        category: "Notebook",
        amount: 15,
        state: "Disponível",
        name: "Notebook Asus AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6', Radeon Vega 8, Cinza",
        description: "Seja para trabalho ou lazer, o ASUS M515 é um notebook que oferece desempenho poderoso e visuais envolventes. Sua tela NanoEdge possui um revestimento antirreflexo fosco para uma experiência verdadeiramente envolvente. O M515 é equipado com até processador AMD Ryzen e memória de 8 GB. Armazenamento rápido com SSD com até 256GB PCIe SSD. O ASUS M515 possui armazenamento SSD, que além de ser muito mais rápido que o HD convencional, é menor, mais leve e não tem partes mecânicas extremamente sensíveis a impactos e solavancos. Isso garante maior proteção aos dados armazenados no seu notebook, para que você possa trabalhar sem preocupações, com alto desempenho e produtividade, mesmo em um veículo em movimento. Com processadores até SérioAMD Ryzen com 8 GB de memória, o ASUS M515 ajuda você a fazer as coisas com rapidez e eficiência. A tela NanoEdge dá ao ASUS M515 uma vasta área de tela para uma experiência de visualização envolvente seja para o trabalho ou lazer. Com tela FHD de visão ampla apresenta um revestimento antirreflexo para reduzir distrações indesejadas de reflexos irritantes, para que você possa realmente se concentrar no que está à sua frente.",
        description_2: "Marca: Asus, Sistema Operacional: windows 11 Home, Modelo: M515DA-BR1213W, Processador: AMD Ryzen 5 3500U 2,1 GHz (Cache de 4 M, até 3,7 GHz), - 15,6'', HD (1366 x 768), Armazenamento: 256 GBPCIe NVMe 3.0 x2 M.2 SSD, Rede: Wi-Fi 5 (802.11ac) + Bluetooth 4.1 (Dual band), Bateria: 45W, 2 Cells / 3300 mAh, Conectividade: - 1x 3.5mm Combo Audio Jack | 1x HDMI 1.4 | 1x USB 3.2 Gen 1 Type-A | 1x USB 3.2 Gen 1 Type-C | 2x USB 2.0 Type-A",
        image: "Notebook-Asus-AMD-Ryzen-5-3500U",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 7399.99,
        category: "Notebook",
        amount: 3,
        state: "Disponível",
        name: "Notebook Gamer Lenovo Legion 5 AMD Ryzen 7-5800H, GeForce RTX 3050, 16GB RAM, SSD 512GB",
        description: "Ideal para gamers e usuários que também precisam de alta performance. Com tela de 15.6'' Full HD IPS Antirreflexo e taxa de atualização de 120Hz, para melhor definição de imagem e cores.Suporta até 3 monitores externos. O armanezamento SSD PCIe NVMe é 10x mais rápido* que um HDD 2.5” SATA, você terá mais segurança ao armazenar seus dados. O teclado retroiluminado em LED branco, deixa o computador mais atraente e também favorece a performance para jogos em lugares com pouca iluminação. Silencioso e não esquenta: projetado com um sistema de resfriamento otimizado composto por 2 coolers e 4 saídas de ar para suportar o alto desempenho do notebook.",
        description_2: "Marca: Lenovo, Modelo: 82QJ0000BR, Sistema Operacional: Windows 11 Home, Wireless: Wi-Fi 6 (2x2 AX), Processador: AMD Ryzen 7 5800H | Cores / Threads: Octa Core / 16 Threads | Cache: 4MB L2 / 16MB L3 | Clock: 3.2GHz (até 4.4GHz Max Turbo), Memória RAM: 16GB | 2x 8GB DDR4 3200MHz | Expansível até 32GB (2 slots DDR4 3200MHz), Armazenamento: SSD de 512GB M.2 PCIe NVMe, Placa de Vídeo: Placa Dedicada NVIDIA GeForce RTX 3050 4GB GDDR6, Tela: Resolução de Tela: Full HD (1920 x 1080) IPS Antirreflexo | Taxa de atualização da Tela (Refresh Rate): 120 Hz, Bateria: Bateria: Integrada: 60Wh | Adaptador AC: 230W Slim",
        image: "Notebook-Gamer-Lenovo-Legion-5-AMD-Ryzen-7-5800H",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 6000,
        category: "Notebook",
        amount: 10,
        state: "Em Oferta",
        name: "Notebook Gamer Acer Nitro 5 Intel Core i7-10750H, GeForce GTX 1650, 8GB RAM, SSD 512GB, Preto",
        description: "Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima. A GeForce GTX 1650 foi desenvolvida com o desempenho gráfico inovador da premiada arquitetura NVIDIA Turing. Ela é a potência definitiva para os games atuais mais populares e oferece ainda mais velocidade para os títulos modernos. Jogue melhor com a GeForce GTX.",
        description_2: "Marca: Acer, Modelo: AN515-55-79X0, Sistema Operacional: Windows 11 Home 64-bits, CPU: Intel Core i7-10750H | Six Core (12 threads) | Frequência: 2.60 GHz até 5.0 GHz | 12 MB de SmartCache, Memória: 8 GB RAM DDR4 2666 MHz (1 x 8 GB em módulo) | Expansível até 32GB DDR4 2666 MHz (2 Slots SO-DIMM com capacidade para até 16 GB cada), Tela: 15.6 com design ultrafino | Painel: IPS (In-Plane Switching) | Resolução: Full HD (1920 x 1080) | Taxa de atualização: 144 Hz | Tecnologia antirreflexo Acer ComfyView,,Gráficos: NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 | UHD intel Graphics para processadores de 10ª geração com memória compartilhada com a memória RAM., Armazenamento: 512 GB SSD M.2 2280 PCIe 3.0 NVMe x4, Webcam: Webcam com resolução HD (1280 x 720)  e gravação de áudio e vídeo em 720p com tecnologia SHDR (Super high dynamic range imaging), Bateria: Bateria de 4 células (li-ion) 57 Wh | Autonomia de até 11 h (depende das condições de uso)",
        image: "Notebook-Gamer-Acer-Nitro-5-Intel-Core-i7-10750H",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 00,
        category: "",
        amount: 28,
        state: "",
        name: "",
        description: "",
        description_2: "",
        image: "",
        extension: "",
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
s;
