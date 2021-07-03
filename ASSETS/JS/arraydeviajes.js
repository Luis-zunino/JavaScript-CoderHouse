const viajes = [
    {
      departamento: "Montevideo",
      tipo: "ciudad",
      img: "2",
      nombre: "Montevideo",
      costo: 500,
      info: "Capital de Uruguay conocida por la Ciudad Vieja colonial y art deco, y playas como Pocitos.",
      cordX: -34.907528,
      cordY: -56.163532,
    },
    {
      departamento: "Maldonado",
      tipo: "ciudad",
      img: "3",
      nombre: "Punta del Este",
      costo: 500,
      info: "Ciudad turística uruguaya conocida por la escultura “La Mano”, la playa Mansa y la isla Gorriti.",
      cordX: -34.93909470049689,
      cordY: -54.93399304868235,
    },
    {
      departamento: "Colonia",
      tipo: "ciudad",
      img: "4",
      nombre: "Colonia del Sacramento",
      costo: 500,
      info: "Ciudad uruguaya frente al río con su Barrio Histórico bien conservado desde la época colonial",
      cordX: -34.47178211606984,
      cordY: -57.852083537530135,
    },
    {
      departamento: "Colonia",
      tipo: "ciudad",
      img: "6",
      nombre: "Río de la Plata",
      costo: 500,
      info: "Estuario de los ríos Paraná y Uruguay",
      cordX: -34.517450565836114,
      cordY: -57.4683802262987,
    },
    {
      departamento: "Rocha",
      tipo: "playa",
      img: "7",
      nombre: "Punta del Diablo",
      costo: 500,
      info: "Pueblo turístico uruguayo conocido por sus playas, el parque Santa Teresa y la conservación de tortugas.",
      cordX: -34.041883102587434,
      cordY: -53.547148931016814,
    },
    {
      departamento: "Maldonado",
      tipo: "playa",
      img: "7",
      nombre: "Piriápolis",
      costo: 500,
      info: " Población costera de Uruguay con vistas desde el cerro de San Antonio y edificios de estilo Belle Époque.",
      cordX: -34.86473070007707,
      cordY: -55.272627183255885,
    },
    {
      departamento: "Durazno",
      tipo: "ciudad",
      img: "8",
      nombre: "José Ignacio",
      costo: 500,
      info: "Complejo turístico playero elegante con áreas para surf, coctelerías y restaurantes modernos, además de vistas desde el faro de José Ignacio",
      cordX: -34.83611016828466,
      cordY: -54.64523441647295,
    },
    {
      departamento: "Salto",
      tipo: "ciudad",
      img: "9",
      nombre: "Salto",
      costo: 500,
      info: "Ciudad uruguaya conocida por la animada calle Uruguay, el Teatro Larrañaga del siglo XIX y las aguas termales.",
      cordX: -31.38839761342913,
      cordY: -57.95672135677959,
    },
    {
      departamento: "Rocha",
      tipo: "ciudad",
      img: "10",
      nombre: "La Paloma",
      costo: 500,
      info: "Pueblo costero de Uruguay junto al faro del cabo de Santa María, la bahía Grande y la reserva Laguna de Rocha.",
      cordX: -34.65614074324158,
      cordY: -54.18284188442711,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      info: "Departamento del este de Uruguay con playas en la Punta del Diablo y tortugas marinas en La Coronilla.",
      img: "11",
      nombre: "Departamento de Rocha",
      costo: 500,
      cordX: -34.48117328722865,
      cordY: -54.332114085479716,
    },
    {
      departamento: "Maldonado",
  
      tipo: "playa",
      img: "12",
      nombre: "La Pedrera",
      costo: 500,
      info: "Playa, surf y deportes acuáticos",
      cordX: -34.59026854598685,
      cordY: -54.12900862782401,
    },
    {
      departamento: "Colonia",
  
      tipo: "playa",
      img: "13",
      nombre: "Carmelo",
      costo: 500,
      info: "Municipio uruguayo famoso por la Playa Seré, el Río de la Plata y la Rambla de los ituyentes",
      cordX: -33.99568310206379,
      cordY: -58.28631214491138,
    },
    {
      departamento: "Rocha",
  
      tipo: "playa",
      img: "14",
      nombre: "Rocha",
      costo: 500,
      info: "Playa y parque",
      cordX: -34.48117328722865,
      cordY: -54.33039747169805,
    },
    {
      departamento: "Río Negro",
  
      tipo: "ciudad",
      img: "15",
      nombre: "Fray Bentos",
      costo: 500,
      info: "Teatro, museo, historia, playa y río",
      cordX: -33.10427764233283,
      cordY: -58.300615582825785,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "16",
      nombre: "Chuy",
      costo: 500,
      info: "Parque acuático, playa, compras y parque",
      cordX: -33.692731571916376,
      cordY: -53.455248117460144,
    },
    {
      departamento: "Canelones",
  
      tipo: "ciudad",
      img: "17",
      nombre: "Atlántida",
      costo: 500,
      info: "Playa, águila y jardín zoológico",
      cordX: -34.76954521292122,
      cordY: -55.76447964495242,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "18",
      nombre: "Barra de Valizas",
      costo: 500,
      info: "Playa",
      cordX: -34.33682688038163,
      cordY: -53.79374024653844,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "19",
      nombre: "Termas del Arapey",
      costo: 500,
      info: "Aguas termales y golf",
      cordX: -30.943475504969808,
      cordY: -57.52808331551122,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "20",
      nombre: "Garzón",
      costo: 500,
      info: "Pueblo uruguayo conocido por el restaurante El Garzón, la bodega Garzón y las playas de José Ignacio.",
      cordX: -34.59099122648053,
      cordY: -54.54272775882206,
    },
    {
      departamento: "Maldonado",
  
      tipo: "playa",
      img: "21",
      nombre: "Maldonado",
      costo: 500,
      info: "Playa, museo e historia",
      cordX: -34.902254110040786,
      cordY: -54.96282940159248,
    },
    {
      departamento: "Lavalleja",
  
      tipo: "playa",
      img: "22",
      nombre: "Minas",
      costo: 500,
      info: "Parque y naturaleza",
      cordX: -34.36453836380059,
      cordY: -55.25907391335315,
    },
    {
      departamento: "Rivera",
  
      tipo: "ciudad",
      img: "23",
      nombre: "Rivera",
      costo: 500,
      info: "Casino, bodega, compras y vino",
      cordX: -30.918329145831336,
      cordY: -55.54540985536567,
    },
    {
      departamento: "Colonia",
  
      tipo: "ciudad",
      img: "24",
      nombre: "Nueva Helvecia",
      costo: 500,
      info: "Historia, monumento y cata de vinos",
      cordX: -34.30369697025337,
      cordY: -57.231009532866224,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "25",
      nombre: "San Gregorio de Polanco",
      costo: 500,
      info: "Playa, pintura, arte y museo",
      cordX: -32.6141018097183,
      cordY: -55.82371177321795,
    },
    {
      departamento: "Tacuarembó",
  
      tipo: "ciudad",
      img: "26",
      nombre: "Tacuarembó",
      costo: 500,
      info: "Museo, arte y naturaleza",
      cordX: -31.721369481259035,
      cordY: -55.98725688962126,
    },
    {
      departamento: "Maldonado",
  
      tipo: "ciudad",
      img: "27",
      nombre: "Pan de Azúcar",
      costo: 500,
      info: "Turismo ecológico, parque e historia",
      cordX: -34.77936474773449,
      cordY: -55.230847062361896,
    },
    {
      departamento: "Lavalleja",
  
      tipo: "ciudad",
      img: "28",
      nombre: "Villa Serrana",
      costo: 500,
      info: "Senderismo",
      cordX: -34.31305579172528,
      cordY: -54.987860350438545,
    },
    {
      departamento: "Maldonado",
  
      tipo: "ciudad",
      img: "29",
      nombre: "Sauce de Portezuelo",
      costo: 500,
      info: "Playa",
      cordX: -34.87337494801016,
      cordY: -55.139629967006776,
    },
    {
      departamento: "Paysandú",
  
      tipo: "ciudad",
      img: "30",
      nombre: "Paysandú",
      costo: 500,
      info: "Ciudad uruguaya con el museo histórico, esculturas en el cementerio de Paysandú y baños termales cercanos.",
      cordX: -32.31140156068527,
      cordY: -58.07464451304608,
    },
    {
      departamento: "Salto",
  
      tipo: "ciudad",
      img: "31",
      nombre: "Termas del Dayman",
      costo: 500,
      info: "Aguas termales y parque acuático",
      cordX: -31.45093837882345,
      cordY: -57.90740797764738,
    },
    {
      departamento: "Canelones",
  
      tipo: "ciudad",
      img: "32",
      nombre: "Canelones",
      costo: 500,
      info: "Bodega, playa, viña, vino y cata de vinos",
      cordX: -34.52923392538573,
      cordY: -56.2872517251743,
    },
    {
      departamento: "Maldonado",
  
      tipo: "ciudad",
      img: "33",
      nombre: "Laguna Garzón",
      costo: 500,
      info: "Área protegida, kitesurf y windsurf",
      cordX: -34.76695453863073,
      cordY: -54.56003935825548,
    },
    {
      departamento: "Maldonado",
  
      tipo: "ciudad",
      img: "34",
      nombre: "Manantiales",
      costo: 500,
      info: "Pueblo animado frente al mar, con surf en la playa Bikini, una intensa vida nocturna, y tiendas y restaurantes modernos.",
      cordX: -34.904888661618195,
      cordY: -54.827465866706035,
    },
    {
      departamento: "Durazno",
  
      tipo: "ciudad",
      img: "35",
      nombre: "Durazno",
      costo: 500,
      info: "Jardín zoológico, monumento e historia",
      cordX: -33.38241191129658,
      cordY: -56.52769430457502,
    },
    {
      departamento: "Paysandú",
  
      tipo: "ciudad",
      img: "36",
      nombre: "Paysandú",
      costo: 500,
      info: "Monumento, basílica y aguas termales",
      cordX: -32.27055039292046,
      cordY: -58.0804682489409,
    },
    {
      departamento: "San José",
  
      tipo: "ciudad",
      img: "37",
      nombre: "San José de Mayo",
      costo: 500,
      info: "Catedral, museo e historia",
      cordX: -34.349416645270736,
      cordY: -56.70849781341156,
    },
    {
      departamento: "Treinta y Tres",
  
      tipo: "ciudad",
      img: "38",
      nombre: "Treinta y Tres",
      costo: 500,
      info: "Naturaleza, río e historia",
      cordX: -33.22879146508683,
      cordY: -54.35893806027949,
    },
    {
      departamento: "Rocha",
  
      tipo: "ciudad",
      img: "39",
      nombre: "Aguas Dulces",
      costo: 500,
      info: "Playa",
      cordX: -34.27936393711271,
      cordY: -53.78702407299277,
    },
    {
      departamento: "Maldonado",
  
      tipo: "ciudad",
      img: "40",
      nombre: "Punta Colorada",
      costo: 500,
      info: "Playa y surf",
      cordX: -34.89476134055786,
      cordY: -55.25092012660722,
    },
    {
      departamento: "Artigas",
      tipo: "ciudad",
      img: "41",
      nombre: "Artigas",
      costo: 500,
      info: "Minería, monumento y naturaleza",
      cordX: -30.406696659590015,
      cordY: -56.47724265714417,
    },
    {
      departamento: "Rocha",
      tipo: "ciudad",
      img: "42",
      nombre: "Laguna de Rocha",
      costo: 500,
      info: "Área protegida, humedal y naturaleza",
      cordX: -34.62326788211407,
      cordY: -54.2925447543187,
    },
  ];