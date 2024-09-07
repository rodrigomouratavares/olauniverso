let dados = [
  {
    titulo: 'Mercúrio',
    descricao: `
     <ul>
        <li><strong>Tipo:</strong> Planeta rochoso.</li>
        <li><strong>Distância do Sol:</strong> Mais próximo do Sol (aproximadamente 58 milhões de km).</li>
        <li><strong>Tamanho:</strong> O menor planeta do Sistema Solar.</li>
        <li><strong>Temperatura:</strong> Extremamente quente durante o dia (até 430°C) e muito frio à noite (até -180°C) devido à ausência de atmosfera significativa.</li>
        <li><strong>Atmosfera:</strong> Muito fina, composta principalmente de oxigênio, sódio e hidrogênio.</li>
        <li><strong>Superfície:</strong> Cheia de crateras, parecida com a Lua, devido a impactos de meteoritos.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Mercury&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://static.todamateria.com.br/upload/55/2c/552c10230a2eb-planeta-mercurio.jpg',
    },
    tags: 'mercurio planeta planetas rocha menor',
  },
  {
    titulo: 'Vênus',
    descricao: `
     <ul>
        <li><strong>Tipo:</strong> Planeta rochoso.</li>
        <li><strong>Distância do Sol:</strong> Segundo planeta a partir do Sol (cerca de 108 milhões de km).</li>
        <li><strong>Tamanho:</strong> Quase do mesmo tamanho da Terra, sendo um pouco menor.</li>
        <li><strong>Temperatura:</strong> O planeta mais quente do Sistema Solar (cerca de 465°C) devido ao efeito estufa extremo.</li>
        <li><strong>Atmosfera:</strong> Muito densa, composta principalmente de dióxido de carbono e com nuvens de ácido sulfúrico.</li>
        <li><strong>Superfície:</strong> Vulcânica, com muitas montanhas e planícies. Não é visível da superfície devido às nuvens espessas.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Venus&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://www.lifeder.com/wp-content/uploads/2020/02/fotografia-de-Venus-1024x683.jpg',
    },
    tags: 'venus rocha planeta segundo',
  },
  {
    titulo: 'Terra',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta rochoso.</li>
        <li><strong>Distância do Sol:</strong> Terceiro planeta (aproximadamente 150 milhões de km).</li>
        <li><strong>Tamanho:</strong> O maior dos planetas rochosos.</li>
        <li><strong>Temperatura:</strong> Varia amplamente, mas é adequada para a existência de água líquida e vida (de cerca de -90°C a 58°C).</li>
        <li><strong>Atmosfera:</strong> Rica em nitrogênio (78%) e oxigênio (21%), com uma camada de ozônio que protege contra a radiação ultravioleta.</li>
        <li><strong>Superfície:</strong> Composta por terras, oceanos, montanhas, desertos e geleiras. É o único planeta conhecido com vida.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Earth&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://i.pinimg.com/originals/1d/14/1b/1d141bb7ded6a35096b99f7fa6f4e12b.jpg',
    },
    tags: 'casa earth maior rocha terceiro planeta',
  },
  {
    titulo: 'Marte',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta rochoso.</li>
        <li><strong>Distância do Sol:</strong> Quarto planeta (cerca de 228 milhões de km).</li>
        <li><strong>Tamanho:</strong> Metade do tamanho da Terra.</li>
        <li><strong>Temperatura:</strong> Média de -60°C, podendo variar de -125°C a 20°C.</li>
        <li><strong>Atmosfera:</strong> Muito fina, composta principalmente de dióxido de carbono (95%), com traços de argônio e nitrogênio.</li>
        <li><strong>Superfície:</strong> Montanhas, cânions, vales, e calotas polares de gelo. Conhecido como o "Planeta Vermelho" devido ao óxido de ferro (ferrugem) na sua superfície.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Mars&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024https://images.nasa.gov/search?q=mars&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://i1.sndcdn.com/artworks-000476054169-rlv7xm-t1080x1080.jpg',
    },
    tags: 'rocha metade fina vermelho quarto planeta',
  },
  {
    titulo: 'Júpiter',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta gasoso.</li>
        <li><strong>Distância do Sol:</strong> Quinto planeta (cerca de 778 milhões de km).</li>
        <li><strong>Tamanho:</strong> O maior planeta do Sistema Solar, com mais de 1.300 vezes o volume da Terra.</li>
        <li><strong>Temperatura:</strong> Média de -110°C nas nuvens.</li>
        <li><strong>Atmosfera:</strong> Composta principalmente de hidrogênio (90%) e hélio (10%), com traços de amônia, metano e água.</li>
        <li><strong>Características Notáveis:</strong> Possui a Grande Mancha Vermelha, uma tempestade gigantesca. Tem 79 luas conhecidas, incluindo as quatro luas galileanas: Io, Europa, Ganimedes e Calisto.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Jupiter&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem: 'https://static.significados.com.br/foto/jupiter-planeta.jpg',
    },
    tags: 'gas jupiter vermelha gás planeta quinto',
  },
  {
    titulo: 'Saturno',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta gasoso.</li>
        <li><strong>Distância do Sol:</strong> Sexto planeta (cerca de 1,43 bilhões de km).</li>
        <li><strong>Tamanho:</strong> Segundo maior planeta do Sistema Solar.</li>
        <li><strong>Temperatura:</strong> Média de -140°C nas nuvens.</li>
        <li><strong>Atmosfera:</strong> Principalmente hidrogênio e hélio, com traços de metano, amônia e outros gases.</li>
        <li><strong>Características Notáveis:</strong> Famoso por seus anéis brilhantes compostos de gelo, rochas e poeira. Tem 83 luas conhecidas, incluindo Titã, a maior delas.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Saturn&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem: 'https://www.clarin.com/img/2023/03/08/wefnVb69p_1256x620__1.jpg',
    },
    tags: 'maior anel gas anéis aneis sexto planeta',
  },
  {
    titulo: 'Urano',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta gasoso (gigante de gelo).</li>
        <li><strong>Distância do Sol:</strong> Sétimo planeta (cerca de 2,87 bilhões de km).</li>
        <li><strong>Tamanho:</strong> Terceiro maior planeta em diâmetro.</li>
        <li><strong>Temperatura:</strong> Média de -195°C.</li>
        <li><strong>Atmosfera:</strong> Composta principalmente de hidrogênio e hélio, com quantidades significativas de água, amônia e metano.</li>
        <li><strong>Características Notáveis:</strong> Rotação inclinada quase de lado em relação ao seu plano orbital, o que causa estações extremas. Tem 27 luas conhecidas.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Uranus&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://digi.geenius.ee/app/uploads/sites/7/2022/06/6d1f9f44efffa7ae98bc09c83a431ab8-1920x1200.jpg',
    },
    tags: 'gas gigante gelo maior setimo planeta',
  },
  {
    titulo: 'Netuno',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta gasoso (gigante de gelo).</li>
        <li><strong>Distância do Sol:</strong> Oitavo planeta (cerca de 4,5 bilhões de km).</li>
        <li><strong>Tamanho:</strong> Quarto maior em diâmetro.</li>
        <li><strong>Temperatura:</strong> Média de -200°C.</li>
        <li><strong>Atmosfera:</strong> Composta de hidrogênio, hélio, e metano, que dá ao planeta sua cor azul intensa.</li>
        <li><strong>Características Notáveis:</strong> Possui os ventos mais rápidos do Sistema Solar, chegando a 2.100 km/h. Tem 14 luas conhecidas, incluindo Tritão.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Neptune&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem: 'https://www.nossohoroscopo.com/media/images/neptune.jpg',
    },
    tags: 'gigante gelo gas maior oitavo planeta',
  },
  {
    titulo: 'Plutão (Planeta Anão)',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Planeta anão.</li>
        <li><strong>Distância do Sol:</strong> Localizado no Cinturão de Kuiper, a cerca de 5,9 bilhões de km do Sol.</li>
        <li><strong>Tamanho:</strong> Muito menor que qualquer planeta; cerca de 2.377 km de diâmetro.</li>
        <li><strong>Temperatura:</strong> Extremamente frio, cerca de -225°C.</li>
        <li><strong>Atmosfera:</strong> Muito fina e temporária, composta principalmente de nitrogênio, metano e monóxido de carbono, que congela e sublima com as variações de distância do Sol.</li>
<li><strong>Superfície:</strong> Coberta de gelo de nitrogênio, com montanhas de gelo e grandes planícies.</li>
        <li><strong>Características Notáveis:</strong> Plutão tem cinco luas conhecidas, sendo Caronte a maior delas. Ele tem uma órbita excêntrica e inclinada em relação ao plano dos planetas, e leva 248 anos terrestres para completar uma volta ao redor do Sol.</li>
    </ul>
    `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=Pluto&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://upload.wikimedia.org/wikipedia/commons/7/70/Pluto-new-horizons-2015-07-14-01.jpg',
    },
    tags: 'plutao anao menor frio gelo planeta',
  },
  {
    titulo: 'Sol',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Estrela.</li>
        <li><strong>Descrição:</strong> O Sol é uma estrela de tamanho médio, composta principalmente de hidrogênio e hélio. Ele gera energia através da fusão nuclear, um processo em que os átomos de hidrogênio se fundem para formar hélio, liberando grandes quantidades de energia na forma de luz e calor.</li>
        <li><strong>Função:</strong> Como estrela, o Sol é a principal fonte de energia para o Sistema Solar. Ele fornece luz e calor que tornam a vida na Terra possível e mantém os planetas em suas órbitas devido à sua gravidade.</li>
         </ul>
      `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=sun&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://www.worldatlas.com/upload/a0/c6/23/shutterstock-1468418714.jpg',
    },
    tags: 'estrela sun tamanho solar energia',
  },
  {
    titulo: 'Lua',
    descricao: `
      <ul>
        <li><strong>Tipo:</strong> Satélite natural.</li>
            <li><strong>Descrição:</strong> A Lua é o único satélite natural da Terra. Ela é um corpo rochoso que não gera sua própria luz; o brilho da Lua que vemos é, na verdade, a luz do Sol refletida em sua superfície.</li>
        <li><strong>Função:</strong> A Lua influencia várias condições na Terra, como as marés, e também estabiliza a inclinação do eixo da Terra, o que é importante para o clima.</li>
         </ul>
      `,
    links: {
      informacoes:
        'https://images.nasa.gov/search?q=moon&page=1&media=image,video,audio&yearStart=1920&yearEnd=2024',
      imagem:
        'https://ocdn.eu/images/pulscms/YTY7MDA_/e2328752-c867-4eae-ae8b-547b7155a85c.jpeg',
    },
    tags: 'satelite moon rocha natural',
  },
];
