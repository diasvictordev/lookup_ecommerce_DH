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
        description:
          "Seja para trabalho ou lazer, o ASUS M515 é um notebook que oferece desempenho poderoso e visuais envolventes. Sua tela NanoEdge possui um revestimento antirreflexo fosco para uma experiência verdadeiramente envolvente. O M515 é equipado com até processador AMD Ryzen e memória de 8 GB. Armazenamento rápido com SSD com até 256GB PCIe SSD. O ASUS M515 possui armazenamento SSD, que além de ser muito mais rápido que o HD convencional, é menor, mais leve e não tem partes mecânicas extremamente sensíveis a impactos e solavancos. Isso garante maior proteção aos dados armazenados no seu notebook, para que você possa trabalhar sem preocupações, com alto desempenho e produtividade, mesmo em um veículo em movimento. Com processadores até SérioAMD Ryzen com 8 GB de memória, o ASUS M515 ajuda você a fazer as coisas com rapidez e eficiência. A tela NanoEdge dá ao ASUS M515 uma vasta área de tela para uma experiência de visualização envolvente seja para o trabalho ou lazer. Com tela FHD de visão ampla apresenta um revestimento antirreflexo para reduzir distrações indesejadas de reflexos irritantes, para que você possa realmente se concentrar no que está à sua frente.",
        description_2:
          "Marca: Asus, Sistema Operacional: windows 11 Home, Modelo: M515DA-BR1213W, Processador: AMD Ryzen 5 3500U 2,1 GHz (Cache de 4 M, até 3,7 GHz), - 15,6'', HD (1366 x 768), Armazenamento: 256 GBPCIe NVMe 3.0 x2 M.2 SSD, Rede: Wi-Fi 5 (802.11ac) + Bluetooth 4.1 (Dual band), Bateria: 45W, 2 Cells / 3300 mAh, Conectividade: - 1x 3.5mm Combo Audio Jack | 1x HDMI 1.4 | 1x USB 3.2 Gen 1 Type-A | 1x USB 3.2 Gen 1 Type-C | 2x USB 2.0 Type-A",
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
        description:
          "Ideal para gamers e usuários que também precisam de alta performance. Com tela de 15.6'' Full HD IPS Antirreflexo e taxa de atualização de 120Hz, para melhor definição de imagem e cores.Suporta até 3 monitores externos. O armanezamento SSD PCIe NVMe é 10x mais rápido* que um HDD 2.5” SATA, você terá mais segurança ao armazenar seus dados. O teclado retroiluminado em LED branco, deixa o computador mais atraente e também favorece a performance para jogos em lugares com pouca iluminação. Silencioso e não esquenta: projetado com um sistema de resfriamento otimizado composto por 2 coolers e 4 saídas de ar para suportar o alto desempenho do notebook.",
        description_2:
          "Marca: Lenovo, Modelo: 82QJ0000BR, Sistema Operacional: Windows 11 Home, Wireless: Wi-Fi 6 (2x2 AX), Processador: AMD Ryzen 7 5800H | Cores / Threads: Octa Core / 16 Threads | Cache: 4MB L2 / 16MB L3 | Clock: 3.2GHz (até 4.4GHz Max Turbo), Memória RAM: 16GB | 2x 8GB DDR4 3200MHz | Expansível até 32GB (2 slots DDR4 3200MHz), Armazenamento: SSD de 512GB M.2 PCIe NVMe, Placa de Vídeo: Placa Dedicada NVIDIA GeForce RTX 3050 4GB GDDR6, Tela: Resolução de Tela: Full HD (1920 x 1080) IPS Antirreflexo | Taxa de atualização da Tela (Refresh Rate): 120 Hz, Bateria: Bateria: Integrada: 60Wh | Adaptador AC: 230W Slim",
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
        description:
          "Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima. A GeForce GTX 1650 foi desenvolvida com o desempenho gráfico inovador da premiada arquitetura NVIDIA Turing. Ela é a potência definitiva para os games atuais mais populares e oferece ainda mais velocidade para os títulos modernos. Jogue melhor com a GeForce GTX.",
        description_2:
          "Marca: Acer, Modelo: AN515-55-79X0, Sistema Operacional: Windows 11 Home 64-bits, CPU: Intel Core i7-10750H | Six Core (12 threads) | Frequência: 2.60 GHz até 5.0 GHz | 12 MB de SmartCache, Memória: 8 GB RAM DDR4 2666 MHz (1 x 8 GB em módulo) | Expansível até 32GB DDR4 2666 MHz (2 Slots SO-DIMM com capacidade para até 16 GB cada), Tela: 15.6 com design ultrafino | Painel: IPS (In-Plane Switching) | Resolução: Full HD (1920 x 1080) | Taxa de atualização: 144 Hz | Tecnologia antirreflexo Acer ComfyView,Gráficos: NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 | UHD intel Graphics para processadores de 10ª geração com memória compartilhada com a memória RAM., Armazenamento: 512 GB SSD M.2 2280 PCIe 3.0 NVMe x4, Webcam: Webcam com resolução HD (1280 x 720)  e gravação de áudio e vídeo em 720p com tecnologia SHDR (Super high dynamic range imaging), Bateria: Bateria de 4 células (li-ion) 57 Wh | Autonomia de até 11 h (depende das condições de uso)",
        image: "Notebook-Gamer-Acer-Nitro-5-Intel-Core-i7-10750H",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 6250.98,
        category: "Smartphone",
        amount: 2,
        state: "Disponível",
        name: "iPhone 13 Mini 256GB Vermelho, 5G, Tela de 5.4, Câmera Dupla 12MP",
        description:
          "iPhone 13. O sistema de câmera dupla mais avançado em um iPhone. Chip A15 Bionic com velocidade impressionante. Um grande salto em bateria. Projetado para durar. 5G ultrarrápido. E tela Super Retina XDR mais brilhante. A tela tem bordas arredondadas que se ajustam ao design curvo do aparelho dentro da sua forma retangular. Quando medida como um retângulo, a tela tem 6,06 polegadas na diagonal. A área real de visualização é menor. A duração da bateria varia de acordo com o uso e a configuração. O iPhone 13 é resistente a respingos, água e poeira e foi testado em condições controladas em laboratório, classificado como IP68 segundo a norma IEC 60529.",
        description_2:
          "Marca: Apple, Modelo: MLK83BZ/A, Cor: Vermelho, Capacidade: 256GB, Dimensões: Largura 64.2 mm | Altura 131.5 mm | Espessura 7.65 mm, Câmera: Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP | Grande-angular: abertura ƒ/1.6 | Ultra-angular: abertura ƒ/2.4 e ângulo de visão de 120°, Gravação de vídeo: Modo Cinema para gravação de vídeos com profundidade de campo (1080p a 30 qps) | Gravação de vídeo HDR com Dolby Vision até 4K a 60 qps | Gravação de vídeo 4K a 24 qps, 25 qps, 30 qps ou 60 qps, Câmera TrueDepth: Câmera de 12 MP | Abertura ƒ/2.2 | Modo Retrato com efeito bokeh avançado e Controle de Profundidade, Face ID: Reconhecimento facial pela câmera TrueDepth, Energia e bateria: Reprodução de vídeo: Até 19 horas | Streaming de vídeo: Até 15 horas, Sistema operacional: iOS 15: O iOS é o sistema operacional móvel mais pessoal e seguro do mundo. Ele vem com muitos recursos poderosos e foi criado para proteger sua privacidade.",
        image: "iPhone-13-Mini-256GB-Vermelho",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 5300.56,
        category: "Smartphone",
        amount: 18,
        state: "Disponível",
        name: "Smartphone Asus Zenfone 8 5G ZS590KS-8J087BR, 8GB RAM, 256GB, Câmera Dupla 64MP, Tela 5.92, Prata",
        description:
          "Grande em desempenho, compacto no tamanho O poderoso Zenfone 8 apresenta desempenho excelente em um tamanho compacto e fácil de manusear, combinando praticidade com desempenho perfeito que cabe no bolso. Com o processador Qualcomm Snapdragon 888 5G para um desempenho de alto nível, tela AMOLED de 120 Hz com visuais de tirar o fôlego e bateria de 4.000 mAh de longa duração para trabalho ou lazer ininterrupto, além de um software profissional para o sistema de câmera com sensores Sony. O Zenfone 8 tem ótimo desempenho, ótima aparência e oferece uma ótima sensação de praticidade e conforto no manuseio! Desempenho inovador Equipado com o avançado processador Qualcomm Snapdragon 888 5G de 5 nm, o Zenfone 8 é o Zenfone mais poderoso de todos os tempos e apresenta as velocidades 5G mais rápidas possíveis. O Zenfone 8 também inclui a mais recente tecnologia WiFi 6 (Integrada 802.11 a/b/g/n/ac. 802.11 suporte para Tri-band 2,4 GHz/5 GHz. 2*2Mimo ) com suporte de 6 GHz, que oferece conexões mais rápidas e estáveis. O que quer que você queira fazer, você fará mais rápido com o Zenfone 8! Experimente a perfeição visual A tela AMOLED de 120 Hz com tempo de resposta de 1 ms garante uma rolagem suave e excelentes visuais sem borrões: você apreciará a velocidade a cada toque! A gama de cores DCI-P3 de 112% dá vida a vídeos e imagens, e a precisão de cores Delta-E < 1 líder do setor é a sua garantia de que todas as cores são reproduzidas com fidelidade. A tela também é certificada por HDR10 + para realçar os detalhes, até mesmo nas cenas mais escuras. E para mantê-lo com ótima aparência por mais tempo, a tela é protegida pelo Corning Gorilla Glass Victus mais recente e mais resistente de todos os tempos. Bateria grande, tamanho compacto Dentro do corpo compacto do Zenfone 8 está uma poderosa bateria de 4.000 mAh que fornece energia ininterrupta. Para durar ainda mais, o sistema de carregamento aprende automaticamente seu comportamento para que esteja sempre pronto para você. Para a melhor otimização de energia, existem modos de energia automáticos que permitem escolher diversas opções, desde o desempenho otimizado até a vida útil máxima da bateria. Há também um Modo Avançado para que você possa personalizar o uso de energia do Zenfone 8 para suas próprias necessidades.",
        description_2:
          "Marca: Asus, Modelo: Zenfone 8, Cor: Prata, Tela: Tipo: AMOLED 120 Hz HDR10 + | Resolução: 1080x2400 | Proteção: Gorila Glass, Processador: QUALCOMM SNAPDRAGON 888, Armazenar: Tamanho de armazenamento: 256 GB, Dual SIM: Sim, Câmera frontal: 12 MP AF, Câmera traseira: Dual: 64 MP OIS + 12 MP Wide AF, Flash traseiro: Sim, Bateria: 1 Célula / 4000 mAh",
        image: "Smartphone-Asus-Zenfone-8-5G-ZS590KS-8J087BR",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 8400,
        category: "Smartphone",
        amount: 8,
        state: "Em Oferta",
        name: "Smartphone Samsung Galaxy S22 Ultra, 12GB RAM, 256GB, Câmera Tripla 108MP, Tela Infinita 6.8, Vinho",
        description:
          "Tenha todos os seus compromissos e aplicativos úteis na palma da sua mão, sem deixar nada para trás com o S22 Ultra Galaxy da Samsung. Seu processador Octa-Core Snapdragon 8 Gen 1 e sua super memória RAM de 12GB permite que o smartphone funcione da melhor maneira possível e com total fluidez, evitando os indesejáveis travamentos nos aplicativos enquanto sua câmera traseira quádrupla de 108MP + 10MP + 12MP + 10MP permite que você registre fotos maravilhosas e de tirar o fôlego, com detalhes consistentes e impressionantes! Se você é fã de redes sociais, vai adorar compartilhar suas melhores selfies com a câmera frontal de 40MP com fotos iluminadas de forma inteligente para que você possa usar a noite para modelar suas fotos no modo retrato sem perder detalhes. A tela Dynamic AMOLED 2X de 6,8 com resolução QHD+ traz uma experiência de visualização impressionante, seja ao ver seus vídeos, fotos, filmes e séries favoritas ou até mesmo para jogar os seus games prediletos com muito mais qualidade, trazendo muito mais cores e brilho! Com seu incrível armazenamento interno de 256GB você tem muito espaço para salvar seus documentos, fotos e vídeos de maneira segura e prática. Fique sempre conectado com o Dual Chip e a tecnologia 5G que traz ainda mais velocidade para downloads e uploads, cobertura mais ampla e conexões mais estáveis. Precisa ficar muito tempo fora de casa? Não se preocupe, pois além de contar com uma bateria de 5000mAh o aparelho traz uma incrível bateria que se adapta de forma inteligente à forma como você usa seu celular, permitindo economia de energia para quando você mais precisar, garantindo que você tenha seu aparelho ativo por muito mais horas! Ah, além disso, esse Galaxy S é o primeiro a vir com a S Pen que se encaixa diretamente no aparelho! Basta tirá-la da parte inferior do celular para escrever, desenhar ou controlar seu smartphone. A latência aprimorada no Samsung Notes torna cada toque da caneta tão natural quanto a escrita no papel e você ainda pode converter as ideias que escrever apressadamente em texto legível. Sua cor vinho vem para destacar o design moderno do produto, sem falar que ela combinará perfeitamente com o seu estilo, seja ele clássico ou contemporâneo!",
        description_2:
          "Marca: Samsung, Modelo: Galaxy S22 Ultra, Dimensões do Aparelho (mm): 163.3 x 77.9 x 8.9, USB Conector: USB Type-C, Tecnologia: Super AMOLED 2x, Vidro Reforçado: Gorilla Glass Victus+, Resolução: Câmera quádrupla de 108MP OIS (Wide) + 10MP OIS (Zoom 3x) + 12MP (Ultra-Wide) + 10MP OIS (Zoom 10x), Foco Automático (AF): Sim, Flash: Flash-LED, Câmera Frontal: Resolução 40MP, Memória: Memória Interna total compartilhada: 256GB | Memória interna compartilhada com o sistema operacional e aplicativos pré embarcados., Suporte a Cartão de Memória: Não, Memória RAM: 12GB, Capacidade da Bateria (mAh): 5000mAh, Carregamento Sem Fio: Sim, Observação: Carregador não incluso na caixa",
        image: "Smartphone-Samsung-Galaxy-S22-Ultra-12GB-RAM-256GB",
        extension: ".jpg",
      },
      {
        product_id: uuidv4().toString(),
        price: 550,
        category: "Smartphone",
        amount: 10,
        state: "Disponível",
        name: "Smartphone Philco Hit P8, 3GB RAM, 32GB, Octa Core, Câmera 13MP, Tela Infinita 6, Rose Gold",
        description:
          "Com design moderno e com tela infinita sem botões, o Smartphone Philco Hit P8 traz a qualidade Philco para o mundo dos Smartphones. Com acabamento em tom rose gold, este Smartphone possui tela de 6 polegadas com a Tecnologia Drop Notch 6 IPS D + deixando as cores mais vivas e em alta definição em qualquer ângulo. Sua bateria de 3000 mAh, deixará você curtir suas redes e potência do seu Smartphone Hit P8 por mais tempo sem precisar carregá-lo. A qualidade do processador Octa-Core e memória RAM de 3GB, além da interna de 32GB, são ideais para rodar aplicativos e armazenar fotos e vídeos sem preocupação. Com desbloqueio por reconhecimento facial ou digital para armazenar suas informações com maior segurança, o Smartphone Philco Hit P8 é a sua escolha perfeita para seu próximo smartphone.",
        description_2:
          "Marca: Philco, Modelo: Hit P8 32 GB, Tela Infinita Drop Notch IPS HD +: Tela com 6’’ IPS e resolução HD, Processador: Octa Core A55 1.6 GHz, Sistema Operacional: Android 11, Memória interna: 32 GB | mais suporte para cartão SD de até 512 GB, Memória RAM: 3 GB, Bateria: 3000 mAh, Câmera Frontal: 5 MP, Câmera Traseira: Multi Cam – 13 MP + 2x 0.3 MP1 + 2 MP, Redes: 2G/3G/4G, Sensor de digital: Sim, Reconhecimento facial: Sim",
        image: "Smartphone-Philco-Hit-P8-3GB-RAM-32GB-Octa-Core-Gold",
        extension: "jpg",
      },
      {
      product_id: uuidv4().toString(),
      price: 2185,
      category: "Tablet",
      amount: 5,
      state: "Disponível",
      name: "Tablet Samsung Galaxy Tab S6 Lite 10,4” 4G Wi-Fi - 64GB Android 10 Octa-Core com Caneta e Capa",
      description:
        "Tenha criatividade sem limites com este produto da Samsung. O Galaxy Tab S6 Lite é um tablet que o ajuda a se preparar para todos os desafios que a vida tem para lhe oferecer. Desfrute de uma imagem impressionante em sua tela de 10,4, sendo ideal para você mergulhar nos seus conteúdos favoritos. Com um processador Octa-Core e 4GB de memória RAM ele é perfeito para multi tarefas! Fique sempre conectado nas redes sociais com a tecnologia Wi-Fi e 4G",
      description_2:
        "Marca: Samsung, Referência: SM-P615NZAVZTO, Modelo: Tab S6 Lite, Linha: Galaxy, Memória interna: 64GB, Acessórios: Caneta S-Pen - Capa protetora, Tamanho da tela: 10,4, Tecnologia: 4G, Conectividade: Bluetooth - Wi-Fi, Conexões: USB tipo C ,Sistema operacional: Android 10",
      image: "Tablet Samsung Galaxy Tab S6 Lite 10,4” 4G Wi-Fi - 64GB Android 10 Octa-Core com Caneta e Capa",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 1259,
      category: "Tablet",
      amount: 15,
      state: "Disponível",
      name: "Tablet Samsung Galaxy Tab A8, 64GB, 4GB RAM, WiFi, Tela 10.5, Câmera 8MP, Android 11, Cinza - SM-X200NZAUZTO",
      description:
        "Tablet Samsung Galaxy Tab A8, 64GB, 4GB RAM, WiFi, Tela 10.5, Câmera 8MP, Android 11, Cinza Uma visão maior de um mundo mais amplo A tela de 10,5 ” traz uma moldura simétrica permitindo que você fique totalmente imerso no que está na tela. Explore e desfrute sem preocupações. Suas séries e filmes no seu streaming favorito, jogos e conteúdos de como fazer para um hobby que você adora, o Galaxy Tab A8 o convida a um mundo mais amplo por meio de uma visão maior e melhor.",
      description_2:
        "Câmera: Câmera Traseira Resolução: 8.0 MP | Câmeras Traseiras Foco Automático: Sim | Câmera Frontal Resolução: 5.0MP | Câmera Traseira Flash: Não | Resolução de Gravação de Vídeos: FHD (1920 x 1080) @30fps, Bateria, Capacidade da Bateria (mAh, Typical): 7040 | Removível: Não, Processador: Velocidade do Processador: 2GHz | Tipo de Processador: Octa Core",
      image: "Tablet Samsung Galaxy Tab A8, 64GB, 4GB RAM, WiFi, Tela 10.5, Câmera 8MP, Android 11, Cinza - SM-X200NZAUZTO",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 359.10,
      category: "Tablet",
      amount: 20,
      state: "Disponível",
      name: "Tablet Positivo Twist Tab 7” Wi-Fi 32GB - Android Oreo Quad-Core",
      description:
        "O tablet Twist Tab da Positivo é versátil, moderno e perfeito para usar no dia a dia. Sua tela LCD de 7 polegadas tem o tamanho ideal para deixar seu momento de descontração ou trabalho mais agradável, além de garantir nitidez em qualquer ângulo de visualização. O processador Quad-Core e sua memória RAM de 1GB auxiliam muito nesta utilização.",
      description_2:
        "Marca: Positivo, Referência: 11160919, Modelo: Twist Tab, Memória interna: 32GB ,Tamanho da tela: 7 ,Conectividade: Wi-Fi, Sistema operacional: Android Oreo versão GO",
      image: "Tablet Positivo Twist Tab 7” Wi-Fi 32GB - Android Oreo Quad-Core",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 959,
      category: "Tablet",
      amount: 8,
      state: "Em oferta",
      name: "Tablet Samsung Galaxy A7 Lite 4G, 32GB, Android 11, Tela de 8.7, Grafite - SM-T225NZAPZTO",
      description:
        "Galaxy Tab A7 Lite (4G) 32 GB, Projetado para ir aonde você for com gestos simples para usar com apenas uma mão e possui uma câmera para capturar seus momentos ao vivo Feito para ir aonde você for Não troque estilo por conveniência. O Galaxy Tab A7 Lite oferece os dois em uma estrutura fina. Com espessura de 8,0 mm e 371 g de peso, ele é super portátil e pode ser guardado com facilidade na bolsa sem pesar.",
      description_2:
        "Tela: Tamanho: 8.7' (220.5mm) | Resolução: 1340 x 800 (WXGA+) | Tecnologia: TFT | Profundidade de Cor: 16 Milhões, Suporte de engrenagem: Galaxy Buds Pro, Galaxy Buds Live, Galaxy Buds +, Galaxy Buds, Gear IconX (2018) | S voz: Não | Mobile TV: Não",
      image: "Tablet Samsung Galaxy A7 Lite 4G, 32GB, Android 11, Tela de 8.7, Grafite - SM-T225NZAPZTO",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 557.07,
      category: "Tablet",
      amount: 10,
      state: "Em oferta",
      name: "Tablet Philco PTB8RRG 8” 4G Wi-Fi 32GB - Android 10 Quad-Core Câm. 5MP + Selfie 2MP",
      description:
        "O tablet PTB8RSG 4G da Philco é versátil, moderno e perfeito para usar no dia a dia. Sua tela IPS Multi-toque de 8 polegadas tem o tamanho ideal para deixar seu momento de descontração ou trabalho mais agradável, além de garantir nitidez em qualquer ângulo de visualização. O processador Quad-Core e sua memória RAM de 2GB auxiliam muito nesta utilização.",
      description_2:
        "Marca: Philco, Referência: 58203023, Modelo: PTB8RSG 4G, Memória interna: 32GB ,Tamanho da tela: 8 , Tecnologia: 4G, Conectividade: Wi-Fi - Bluetooth ,Sistema operacional: Android 10",
      image: "Tablet Philco PTB8RRG 8” 4G Wi-Fi 32GB - Android 10 Quad-Core Câm. 5MP + Selfie 2MP",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 1199.99,
      category: "TV",
      amount: 15,
      state: "Disponível",
      name: "Smart TV TCL Android 32 HD S615 HDR - Controle Remoto com Comando por Controle de Voz Google Assistant",
      description:
        "Desfrute de músicas, filmes, games e mais - os essenciais de entretenimento vêm pré-instalados e você pode baixar mais através da google play store. Controle remoto com comando de voz - Google Assistant. Conectividade Bluetooth, Chromecast Built in - sua conexão sem fios possibilita que dispositivos se interliguem de maneira rápida, descomplicada e sem uso de cabos, bastando que um esteja próximo do outro. Desfrute do conteúdo de notebooks e celulares diretamente em sua tv. Design sem bordas - tela sem bordas com o máximo de imagem e design minimalista.",
      description_2:
        "Marca: TCL, Recursos de Vídeos: HDR, MICRO DIMMING , Modo de Imagem Dinâmica, Padrão, Smart HDR, Esporte, Filme, Jogos e PC - AJUSTE DE COR Frio, Padrão, Quente e Personalizado, Recursos/Funcionalidades: Reconhecimento de Voz: Sim, através do controle remoto (Google Assistant embutido em português), Bluetooth, Chromecast Integrado ,Processador: Quad Core, Consumo (KW/h): Consumo Stand BY < 0,5W - CONSUMO MÁXIMO = 50W, Recursos de Áudio: Modo Som Dinâmico, Padrão, Esporte, Filmes, Música, Voz e Jogos, Tipo de TV: Smart TV Android",
      image: "Smart TV TCL Android 32 HD S615 HDR - Controle Remoto com Comando por Controle de Voz Google Assistant",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 1199.99,
      category: "TV",
      amount: 6,
      state: "Disponível",
      name: "TV Philco 32 Led HD",
      description:
        "A TV Philco 32” PTV32T10EDP Recepção Digital HD Led conta com 32 polegadas em resolução HD, com qualidade de imagem e som garantidas. As entradas de conexão para cabo HDMI, USB permitem que conecte seu dispositivo favorito e reproduza com alta qualidade suas imagens e leitura/gravação de arquivos digitais, através do seu pen-drive ou HD externo. Sendo assim é possível reproduzir vídeos, imagens e músicas",
      description_2:
        "Marca: Philco, Recursos de Vídeos: Conversor digital integrado | Recepção em ATV, DTV e CATV | Menu nos idiomas Português e Inglês | Busca automática de canais | Ajustes de temperatura de cor, Recursos/Funcionalidades: Mute | Mts¹ | Sleep | Closed Caption | Guide¹ | Info¹ | Bloqueio De Canal¹, Processador: Quad Core, Consumo(KW/h):	<0,5",
      image: "TV Philco 32 Led HD",
      extension: "jpg",
    },
    {
      product_id: uuidv4().toString(),
      price: 1099.99,
      category: "TV",
      amount: 18,
      state: "Em oferta",
      name: "TV LED 39 Philco HD com Conversor Digital 3 HDMI 1 USB Som Surround 60Hz - Preta",
      description:
        "Ter uma TV de tela grande em casa é muito bom, não é mesmo? Ainda mais quando ela conta com recursos modernos, que proporcionam conforto e bons momentos de entretenimento para quem está assistindo. A TV LED 39 Philco é assim, ela vai te proporcionar maior nitidez, clareza e definição, para você assistir e curtir ao máximo seus programas, filmes e series preferidos. Com resolução HD 1366 x 768 pixels, conexões USB e HDMI, função DNR, que reduz os ruídos de imagem e Som Surround, que recria um ambiente mais realista de áudio, aumentando a qualidade sonora. Aproveite, essa é a escolha perfeita para transformar a sua sala de estar em uma verdadeira sala de cinema.",
      description_2:
        "Marca: Philco, Tipo de TV: Comum, Cor: Preto, Tecnologia da Tela: LED, Polegadas: 39, Resolução: HD, Taxa de Atualização: 60Hz, Taxa de atualização com Tecnologia: 60Hz, Recursos de Vídeo: DNR, Receptor DTV, CC, Info, Guide, Sleep, Recursos de Áudio: SAP/MTS, Som Surround, Equalizadores de som predefinidos",
      image: "TV LED 39 Philco HD com Conversor Digital 3 HDMI 1 USB Som Surround 60Hz - Preta",
      extension: "jpg",
    },
        extension: ".jpg",
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};

