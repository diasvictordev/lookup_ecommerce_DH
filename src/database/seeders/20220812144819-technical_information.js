'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('technical_information', [
  {
    characteristics: "Modelo: A515-45G-R3BM",
    specifications: "Processador AMD Ryzen R7 5700U – Octa Core|Sistema Operacional Windows 11|Tela 15.6”com resolução Full HD|GPU AMD Radeon RX 640 com 2 GB de memória dedicada GDDR5|Design Premium com tampa em metal|256 GB de armazenamento SSD NVMe x4",
    GPU: "AMD Ryzen 7-5700U|Octa core (16 threads)|Frequência: 1.8 GHz até 4.3 GHz|8 MB Cache",
    memory: "8 GB RAM DDR4 (4 GB Soldada + 4 GB Módulo)|DDR4-3200Mhz|Expansível até 20 GB",
    screen: "15,6 LED com design ultrafino|Painel: IPS|Resolução: Full HD (1920 x 1080)|Proporção 16:9|Taxa de Atualização: 60 Hz|Tempo de resposta: 25~ 27 ms|Brilho: 250 nits|Taxa de contraste: 800:1|Espaço de cor (color gamut): 45% NTSC|Tecnologia Anti reflexo Acer ComfyViewTM",
    graphic: "AMD Radeon RX 640 com 2 GB de memória dedicada GDDR5|Suporte às tecnologias: AMD Radeon Software, AMD Radeon Chill, AMD FreeSync, AMD Eyefinity, AMD PowerTune, AMD Enduro, Sharder Model 5.0, Microsoft DirectX 11.2/12, OpenGL 4.5 e OpenCLTM 2.0 AMD Radeon Graphics com memória compartilhada com a memória RAM",
    storage: "256 GB SSD PCIe 3.0 x4 NVMe (M.2 2280)|Upgrades Este modelo possuí capacidade para a instalação e/ou melhorias de SSD e HDD:|Slot ocupado M.2 2280, compatível com unidades SSD PCIe 3.0 NVMe x2/x4 de até 512GB (Não acompanha o produto)|Slot livre SATA 3, compatível com HDD ou SSD SATA 3 2.5” de até 2TB (Não acompanha o produto)",
    audio: "Dois alto-falantes estéreo:|Tecnologia AcerTrueHarmony Gen 2|Microfone duplo:|Tecnologia Acer Purified Voice|Compativél com Cortana com voz",
    webcam: "Webcam HD com 1280 x 720 de resolução e Gravação de áudio e vídeo em 720p|Wireless e Rede1 Wireless (Wi-Fi):|Compatível com IEE 802.11a/b/g/n/acR2+ax wireless LAN|Suporte a redes com frequência de 2.4 GHz e 5 GHz|Suporte ao Wi-Fi 6|Com tecnologia MU-MIMO 2x2|Bluetooth 5.1|LAN/Rede com fio:|Gigabit Ethernet, Wake on LAN Ready",
    dimension_weight: "363.4 (L) x 250.5 (P) x 17.95 (A) mm|1.77 kg",
    battery: "Fonte de alimentação:|Adaptador AC Bivolt de 3 pinos (65W) com cabo certificação INMETRO|Bateria:|Bateria de 3 células (Li-Íon) 48Wh|Autonomia da bateria de até 10 horas (dependendo das condições de uso)",
    keyboard_touchpad: "Teclado:|Teclado numerico Independente|Tipo membrana em português do Brasil padrão ABNT 2|Atalho com função multimídia (Play/pause, parar, voltar, avançar, aumentar volume e diminuir volume)|Touchpad:|Multi-gestual com dois botões|Certificação Microsoft Precision Touchpad|Windows Hello Certification"

  }]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('technical_information', null, {});
  }
};
