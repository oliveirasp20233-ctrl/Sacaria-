export interface PriceTier {
  minQuantity: number;
  unitPrice: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  productCount: number;
  coverImage: string | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  code: string;
  unit: string;
  salePrice: number;
  promoPrice: number | null;
  lowestTierPrice: number;
  categoryId: number;
  image: string;
  minimumQuantity: number;
  priceTiers: PriceTier[];
  specifications: string[];
}

export const WHATSAPP_NUMBER = "5511999893780";
export const WHATSAPP_DISPLAY = "(11) 99989-3780";
export const BRAND_NAME = "Conecta Sacaria";

export const BESTSELLER_IDS: number[] = [1621,1148,1154,1096,1089,1126];

export const CATEGORIES: Category[] = [
  {
    "id": 119,
    "name": "Cama",
    "slug": "cama",
    "parentId": null,
    "productCount": 60,
    "coverImage": "/products/8057a317-f3ed-4514-b731-382eee77d44b.webp"
  },
  {
    "id": 191,
    "name": "Banho",
    "slug": "banho",
    "parentId": null,
    "productCount": 44,
    "coverImage": "/products/de7e8ac0-36aa-496c-ba65-150c5d24d78c.webp"
  },
  {
    "id": 117,
    "name": "Tapetes de Porta",
    "slug": "tapetes",
    "parentId": null,
    "productCount": 37,
    "coverImage": "/products/c6e0e96c-4ebe-4fae-82eb-6845ae080ea4.webp"
  },
  {
    "id": 193,
    "name": "Toalhas de Banho",
    "slug": "toalhas-de-banho",
    "parentId": 191,
    "productCount": 31,
    "coverImage": "/products/c0b806d0-fbb1-410f-9067-82ff341d12d0.webp"
  },
  {
    "id": 120,
    "name": "Mantas e Cobertores",
    "slug": "mantas-e-cobertores",
    "parentId": 119,
    "productCount": 27,
    "coverImage": "/products/90c7b849-8194-44e4-92d3-f2a59fc9800d.webp"
  },
  {
    "id": 123,
    "name": "Tapetes de Porta",
    "slug": "tapetes-avulsos",
    "parentId": 117,
    "productCount": 26,
    "coverImage": "/products/c6e0e96c-4ebe-4fae-82eb-6845ae080ea4.webp"
  },
  {
    "id": 118,
    "name": "Cozinha",
    "slug": "cozinha",
    "parentId": null,
    "productCount": 22,
    "coverImage": "/products/851147f5-b750-4e25-a992-ec8fe4d3d0fa.webp"
  },
  {
    "id": 122,
    "name": "Panos de Prato e Copa",
    "slug": "panos-de-prato-e-copa",
    "parentId": 118,
    "productCount": 20,
    "coverImage": "/products/851147f5-b750-4e25-a992-ec8fe4d3d0fa.webp"
  },
  {
    "id": 187,
    "name": "Lençóis",
    "slug": "lencois",
    "parentId": 119,
    "productCount": 17,
    "coverImage": "/products/8057a317-f3ed-4514-b731-382eee77d44b.webp"
  },
  {
    "id": 195,
    "name": "Limpeza",
    "slug": "limpeza",
    "parentId": null,
    "productCount": 15,
    "coverImage": "/products/372dd81a-b359-41aa-a341-226ef5f0e35a.webp"
  },
  {
    "id": 198,
    "name": "Redes",
    "slug": "redes",
    "parentId": null,
    "productCount": 13,
    "coverImage": "/products/c3981257-18ed-4651-b271-3ba6fcefa162.webp"
  },
  {
    "id": 199,
    "name": "Redes de Dormir",
    "slug": "redes-de-dormir",
    "parentId": 198,
    "productCount": 12,
    "coverImage": "/products/c3981257-18ed-4651-b271-3ba6fcefa162.webp"
  },
  {
    "id": 124,
    "name": "Jogos de Passadeira",
    "slug": "jogos-de-passadeira",
    "parentId": 117,
    "productCount": 11,
    "coverImage": "/products/2d22b34b-2999-41b4-b780-91d248a43e51.webp"
  },
  {
    "id": 201,
    "name": "Meias e Kits de Trabalho",
    "slug": "meias-e-kits-de-trabalho",
    "parentId": null,
    "productCount": 11,
    "coverImage": "/products/8701efdc-9ac6-40cf-9bc9-5033375dba58.webp"
  },
  {
    "id": 196,
    "name": "Panos de Chão",
    "slug": "panos-de-chao",
    "parentId": 195,
    "productCount": 10,
    "coverImage": "/products/372dd81a-b359-41aa-a341-226ef5f0e35a.webp"
  },
  {
    "id": 202,
    "name": "Meias",
    "slug": "meias",
    "parentId": 201,
    "productCount": 9,
    "coverImage": "/products/8701efdc-9ac6-40cf-9bc9-5033375dba58.webp"
  },
  {
    "id": 188,
    "name": "Cobre-Leitos",
    "slug": "cobre-leitos",
    "parentId": 119,
    "productCount": 8,
    "coverImage": "/products/8aefb362-30b7-4a24-9135-41d7e0875903.webp"
  },
  {
    "id": 194,
    "name": "Toalhas de Rosto e Lavabo",
    "slug": "toalhas-de-rosto-e-lavabo",
    "parentId": 191,
    "productCount": 7,
    "coverImage": "/products/de7e8ac0-36aa-496c-ba65-150c5d24d78c.webp"
  },
  {
    "id": 192,
    "name": "Kits de Banheiro",
    "slug": "kits-de-banheiro",
    "parentId": 191,
    "productCount": 6,
    "coverImage": "/products/df67cad6-8a70-4827-a2ff-0264d3bcbbb4.webp"
  },
  {
    "id": 197,
    "name": "Flanelas e Panos Multiuso",
    "slug": "flanelas-e-panos-multiuso",
    "parentId": 195,
    "productCount": 5,
    "coverImage": "/products/47202a45-e9c1-445a-b63f-986aa60d1cfd.webp"
  },
  {
    "id": 189,
    "name": "Travesseiros e Fronhas",
    "slug": "travesseiros-e-fronhas",
    "parentId": 119,
    "productCount": 5,
    "coverImage": "/products/f5873aa8-1a91-4dbd-aa3b-3562aae2f18c.webp"
  },
  {
    "id": 121,
    "name": "Xales e Peseiras",
    "slug": "xales-e-peseiras",
    "parentId": 119,
    "productCount": 3,
    "coverImage": "/products/3dabd383-3c2a-401f-80e2-1726d70db29a.webp"
  },
  {
    "id": 203,
    "name": "Kits de Trabalho",
    "slug": "kits-de-trabalho",
    "parentId": 201,
    "productCount": 2,
    "coverImage": "/products/dbd6e60f-56d9-497d-9aea-7a989395ac24.webp"
  },
  {
    "id": 190,
    "name": "Utilidades",
    "slug": "utilidades",
    "parentId": 118,
    "productCount": 2,
    "coverImage": "/products/f50a3ff8-7f90-42fe-8269-257a70677817.webp"
  },
  {
    "id": 200,
    "name": "Redes Cadeira",
    "slug": "redes-cadeira",
    "parentId": 198,
    "productCount": 1,
    "coverImage": "/products/fa9aac0d-078f-489b-be51-bb66c749fb5f.webp"
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": 1585,
    "name": "Capa de Bebedouro/Gelágua Com Bico",
    "slug": "capa-de-bebedouro-gelagua-com-bico",
    "code": "PROD-107",
    "unit": "unidade",
    "salePrice": 7.5,
    "promoPrice": null,
    "lowestTierPrice": 7.5,
    "categoryId": 190,
    "image": "/products/f50a3ff8-7f90-42fe-8269-257a70677817.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.05
      },
      {
        "minQuantity": 5,
        "unitPrice": 9.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 9
      },
      {
        "minQuantity": 20,
        "unitPrice": 7.5
      }
    ],
    "specifications": [
      "Oxford"
    ]
  },
  {
    "id": 1570,
    "name": "Cobre Leito King Milão | Lisa",
    "slug": "cobre-leito-king-milao-lisa",
    "code": "PROD-92",
    "unit": "unidade",
    "salePrice": 80,
    "promoPrice": null,
    "lowestTierPrice": 80,
    "categoryId": 188,
    "image": "/products/02fba7db-d5f5-4a82-9b1f-d290841909ca.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 107.2
      },
      {
        "minQuantity": 5,
        "unitPrice": 100
      },
      {
        "minQuantity": 10,
        "unitPrice": 96
      },
      {
        "minQuantity": 20,
        "unitPrice": 80
      }
    ],
    "specifications": [
      "100% Poliéster",
      "240 × 260 cm",
      "50 × 70 cm",
      "Corttex"
    ]
  },
  {
    "id": 1573,
    "name": "Cobre Leito Milão Casal | Liso - Corttex",
    "slug": "cobre-leito-milao-casal-liso-corttex",
    "code": "PROD-95",
    "unit": "unidade",
    "salePrice": 65,
    "promoPrice": null,
    "lowestTierPrice": 65,
    "categoryId": 188,
    "image": "/products/8aefb362-30b7-4a24-9135-41d7e0875903.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 87.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 81.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 78
      },
      {
        "minQuantity": 20,
        "unitPrice": 65
      }
    ],
    "specifications": [
      "100% Poliéster",
      "220 × 240 cm",
      "50 × 70 cm",
      "Corttex",
      "Dupla Face com Viés"
    ]
  },
  {
    "id": 1572,
    "name": "Cobre Leito Milão Queen | Liso",
    "slug": "cobre-leito-milao-queen-liso",
    "code": "PROD-94",
    "unit": "unidade",
    "salePrice": 68,
    "promoPrice": null,
    "lowestTierPrice": 68,
    "categoryId": 188,
    "image": "/products/e72d82da-bdde-4f9a-af51-9041f8d20214.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 91.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 85
      },
      {
        "minQuantity": 10,
        "unitPrice": 81.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 68
      }
    ],
    "specifications": [
      "100% Poliéster",
      "240 × 260 cm",
      "50 × 70 cm",
      "Corttex"
    ]
  },
  {
    "id": 1568,
    "name": "Cobre Leito Milão Solteiro Corttex",
    "slug": "cobre-leito-milao-solteiro-corttex",
    "code": "PROD-90",
    "unit": "unidade",
    "salePrice": 45,
    "promoPrice": null,
    "lowestTierPrice": 45,
    "categoryId": 188,
    "image": "/products/ec696e94-7d72-4f84-a3f9-d8339c7ae1b5.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 60.3
      },
      {
        "minQuantity": 5,
        "unitPrice": 56.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 54
      },
      {
        "minQuantity": 20,
        "unitPrice": 45
      }
    ],
    "specifications": [
      "100% Poliéster",
      "160 × 260 cm",
      "50 × 70 cm",
      "Corttex"
    ]
  },
  {
    "id": 1569,
    "name": "Cobre Leito Paris Casal | Estampado",
    "slug": "cobre-leito-paris-casal-estampado",
    "code": "PROD-91",
    "unit": "unidade",
    "salePrice": 65,
    "promoPrice": null,
    "lowestTierPrice": 65,
    "categoryId": 188,
    "image": "/products/ad4178f5-cea9-4cc1-9492-c76b10d9103f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 87.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 81.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 78
      },
      {
        "minQuantity": 20,
        "unitPrice": 65
      }
    ],
    "specifications": [
      "100% Poliéster",
      "220 × 240 cm",
      "50 × 70 cm",
      "Corttex",
      "Dupla Face Com Viés"
    ]
  },
  {
    "id": 1574,
    "name": "Cobre Leito Paris King | Estampado",
    "slug": "cobre-leito-paris-king-estampado",
    "code": "PROD-96",
    "unit": "unidade",
    "salePrice": 80,
    "promoPrice": null,
    "lowestTierPrice": 80,
    "categoryId": 188,
    "image": "/products/fb58a1c4-23b8-4eb5-9ca2-081ff949ea96.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 107.2
      },
      {
        "minQuantity": 5,
        "unitPrice": 100
      },
      {
        "minQuantity": 10,
        "unitPrice": 96
      },
      {
        "minQuantity": 20,
        "unitPrice": 80
      }
    ],
    "specifications": [
      "100% Poliéster",
      "240 × 280 cm",
      "50 × 70 cm",
      "Corttex",
      "Dupla Face Com Viés"
    ]
  },
  {
    "id": 1571,
    "name": "Cobre Leito Paris Queen | Estampado",
    "slug": "cobre-leito-paris-queen-estampado",
    "code": "PROD-93",
    "unit": "unidade",
    "salePrice": 68,
    "promoPrice": null,
    "lowestTierPrice": 68,
    "categoryId": 188,
    "image": "/products/f17fdf87-f795-417c-90fd-101c2ae6a38a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 91.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 85
      },
      {
        "minQuantity": 10,
        "unitPrice": 81.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 68
      }
    ],
    "specifications": [
      "100% Poliéster",
      "240 × 260 cm",
      "50 × 70 cm"
    ]
  },
  {
    "id": 1567,
    "name": "Cobre Leito Paris Solteiro | Estampado",
    "slug": "cobre-leito-paris-solteiro-estampado",
    "code": "PROD-89",
    "unit": "unidade",
    "salePrice": 45,
    "promoPrice": null,
    "lowestTierPrice": 45,
    "categoryId": 188,
    "image": "/products/ffec901f-4ed2-4f00-b07e-34b6f78240a0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 60.3
      },
      {
        "minQuantity": 5,
        "unitPrice": 56.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 54
      },
      {
        "minQuantity": 20,
        "unitPrice": 45
      }
    ],
    "specifications": [
      "100% Poliéster",
      "160 × 260 cm",
      "50 × 70 cm"
    ]
  },
  {
    "id": 2056,
    "name": "Cortina de Pia Estampada com bico",
    "slug": "cortina-de-pia-estampada-com-bico",
    "code": "PROD-197",
    "unit": "unidade",
    "salePrice": 12.5,
    "promoPrice": null,
    "lowestTierPrice": 12.5,
    "categoryId": 190,
    "image": "/products/8fca54dd-7750-479a-88cb-d1971480034f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 16.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 15.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 15
      },
      {
        "minQuantity": 20,
        "unitPrice": 12.5
      }
    ],
    "specifications": [
      "100 un"
    ]
  },
  {
    "id": 1565,
    "name": "D&#x27;Kayane",
    "slug": "d-kayane",
    "code": "PROD-87",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 187,
    "image": "/products/0eba33af-565c-4ca8-b7ca-a91c9960a620.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": []
  },
  {
    "id": 1155,
    "name": "Dezena de Pano de Prato | 45cm x 75cm",
    "slug": "dezena-de-pano-de-prato-45cm-x-75cm",
    "code": "PROD-72",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 122,
    "image": "/products/851147f5-b750-4e25-a992-ec8fe4d3d0fa.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "45 × 75 cm"
    ]
  },
  {
    "id": 1632,
    "name": "Dz Flanela G | 48 x 78cm",
    "slug": "dz-flanela-g-48-x-78cm",
    "code": "PROD-154",
    "unit": "unidade",
    "salePrice": 25.5,
    "promoPrice": null,
    "lowestTierPrice": 25.5,
    "categoryId": 197,
    "image": "/products/060b2b46-01f7-45dd-a3fc-ca7aad39e75c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 34.17
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 30.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 25.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "48 × 78 cm"
    ]
  },
  {
    "id": 1631,
    "name": "Dz Flanela M | 38 x 58cm",
    "slug": "dz-flanela-m-38-x-58cm",
    "code": "PROD-153",
    "unit": "unidade",
    "salePrice": 16.2,
    "promoPrice": null,
    "lowestTierPrice": 16.2,
    "categoryId": 197,
    "image": "/products/b060b822-bec0-4026-84cb-ac47b0abf4c9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.71
      },
      {
        "minQuantity": 5,
        "unitPrice": 20.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.44
      },
      {
        "minQuantity": 20,
        "unitPrice": 16.2
      }
    ],
    "specifications": [
      "100% Algodão",
      "35 × 58 cm"
    ]
  },
  {
    "id": 1651,
    "name": "Dz Meia Curta | 12 Pares",
    "slug": "dz-meia-curta-12-pares",
    "code": "PROD-173",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 202,
    "image": "/products/8701efdc-9ac6-40cf-9bc9-5033375dba58.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "Curto",
      "12 pares"
    ]
  },
  {
    "id": 1652,
    "name": "Dz Meia Infantil | 12 Pares",
    "slug": "dz-meia-infantil-12-pares",
    "code": "PROD-174",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 202,
    "image": "/products/903336b1-a7f2-456e-b58c-9cabb6a37c54.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "Curto",
      "12 pares"
    ]
  },
  {
    "id": 1653,
    "name": "Dz Meia Longa | 12 Pares",
    "slug": "dz-meia-longa-12-pares",
    "code": "PROD-175",
    "unit": "unidade",
    "salePrice": 21.5,
    "promoPrice": null,
    "lowestTierPrice": 21.5,
    "categoryId": 202,
    "image": "/products/34ec7535-70cd-4adf-9b58-9d6e58e75d57.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 28.81
      },
      {
        "minQuantity": 5,
        "unitPrice": 26.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 25.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 21.5
      }
    ],
    "specifications": [
      "Longo",
      "12 pares"
    ]
  },
  {
    "id": 1654,
    "name": "Dz Meia Social Longa | 12 Pares",
    "slug": "dz-meia-social-longa-12-pares",
    "code": "PROD-176",
    "unit": "unidade",
    "salePrice": 24.9,
    "promoPrice": null,
    "lowestTierPrice": 24.9,
    "categoryId": 202,
    "image": "/products/beaf80f3-499c-4b09-830f-3337c0fda411.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 33.37
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 29.88
      },
      {
        "minQuantity": 20,
        "unitPrice": 24.9
      }
    ],
    "specifications": [
      "Longo",
      "12 pares"
    ]
  },
  {
    "id": 1650,
    "name": "Dz Meia X Curta | 12 Pares",
    "slug": "dz-meia-x-curta-12-pares",
    "code": "PROD-172",
    "unit": "unidade",
    "salePrice": 23,
    "promoPrice": null,
    "lowestTierPrice": 23,
    "categoryId": 202,
    "image": "/products/d27ed336-87df-4bbd-9094-2f9cb52a5373.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 30.82
      },
      {
        "minQuantity": 5,
        "unitPrice": 28.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 27.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 23
      }
    ],
    "specifications": [
      "Curto",
      "12 pares"
    ]
  },
  {
    "id": 1649,
    "name": "Dz Meia X Longa | 12 Pares",
    "slug": "dz-meia-x-longa-12-pares",
    "code": "PROD-171",
    "unit": "unidade",
    "salePrice": 24.5,
    "promoPrice": null,
    "lowestTierPrice": 24.5,
    "categoryId": 202,
    "image": "/products/f4f54adb-1146-426b-8583-2ae841044ad8.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 32.83
      },
      {
        "minQuantity": 5,
        "unitPrice": 30.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 29.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 24.5
      }
    ],
    "specifications": [
      "Longo",
      "12 pares"
    ]
  },
  {
    "id": 1655,
    "name": "Dz Meião Antiderrapante Curto | 12 Pares",
    "slug": "dz-meiao-antiderrapante-curto-12-pares",
    "code": "PROD-177",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 202,
    "image": "/products/a8b46398-440e-4882-ac8b-aee428fe0560.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": [
      "12 pares"
    ]
  },
  {
    "id": 1648,
    "name": "Dz Meião Antiderrapante | 12 Pares",
    "slug": "dz-meiao-antiderrapante-12-pares",
    "code": "PROD-170",
    "unit": "unidade",
    "salePrice": 92,
    "promoPrice": null,
    "lowestTierPrice": 92,
    "categoryId": 202,
    "image": "/products/c1da6ef4-cbf4-4fc3-970d-f00b37c15f97.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 123.28
      },
      {
        "minQuantity": 5,
        "unitPrice": 115
      },
      {
        "minQuantity": 10,
        "unitPrice": 110.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 92
      }
    ],
    "specifications": [
      "Longo",
      "12 pares"
    ]
  },
  {
    "id": 1105,
    "name": "Dz Pano de Prato 45 x 75cm Xadrez",
    "slug": "dz-pano-de-prato-45-x-75cm-xadrez",
    "code": "PROD-22",
    "unit": "unidade",
    "salePrice": 21.5,
    "promoPrice": null,
    "lowestTierPrice": 21.5,
    "categoryId": 122,
    "image": "/products/7faadc4c-852b-4156-a386-c5b84132538e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 28.81
      },
      {
        "minQuantity": 5,
        "unitPrice": 26.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 25.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 21.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 75 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1125,
    "name": "Dz Pano de Prato 45 x 85cm",
    "slug": "dz-pano-de-prato-45-x-85cm",
    "code": "PROD-42",
    "unit": "unidade",
    "salePrice": 23.6,
    "promoPrice": null,
    "lowestTierPrice": 23.6,
    "categoryId": 122,
    "image": "/products/a0855a6e-edf0-4843-afb8-7b544d29b2b0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 31.62
      },
      {
        "minQuantity": 5,
        "unitPrice": 29.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 28.32
      },
      {
        "minQuantity": 20,
        "unitPrice": 23.6
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 85 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1133,
    "name": "Dz Pano de Prato Cobre-Tudo 68x90cm Xadrez",
    "slug": "dz-pano-de-prato-cobre-tudo-68x90cm-xadrez",
    "code": "PROD-50",
    "unit": "unidade",
    "salePrice": 44.8,
    "promoPrice": null,
    "lowestTierPrice": 44.8,
    "categoryId": 122,
    "image": "/products/1f90a8ae-344a-48b5-af47-6e8f11a1a808.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 60.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 56
      },
      {
        "minQuantity": 10,
        "unitPrice": 53.76
      },
      {
        "minQuantity": 20,
        "unitPrice": 44.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "68 × 90 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1116,
    "name": "Dz Pano de Prato Especial 46x75cm",
    "slug": "dz-pano-de-prato-especial-46x75cm",
    "code": "PROD-33",
    "unit": "unidade",
    "salePrice": 27,
    "promoPrice": null,
    "lowestTierPrice": 27,
    "categoryId": 122,
    "image": "/products/77443271-02ce-4fff-b6a4-deaa20764bb8.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 36.18
      },
      {
        "minQuantity": 5,
        "unitPrice": 33.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 32.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 27
      }
    ],
    "specifications": [
      "100% Algodão",
      "46 × 75 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1104,
    "name": "Dz Pano de Prato Especial 48x88cm",
    "slug": "dz-pano-de-prato-especial-48x88cm",
    "code": "PROD-21",
    "unit": "unidade",
    "salePrice": 31.5,
    "promoPrice": null,
    "lowestTierPrice": 31.5,
    "categoryId": 122,
    "image": "/products/e0a556eb-ef9a-4735-a8e2-98ababe78d0c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 42.21
      },
      {
        "minQuantity": 5,
        "unitPrice": 39.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 37.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 31.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "48 × 88 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1130,
    "name": "Dz Pano de Prato Especial 48x88cm Liso",
    "slug": "dz-pano-de-prato-especial-48x88cm-liso",
    "code": "PROD-47",
    "unit": "unidade",
    "salePrice": 30.5,
    "promoPrice": null,
    "lowestTierPrice": 30.5,
    "categoryId": 122,
    "image": "/products/6499ca9a-b553-49ec-bad1-f9728e0a0bd2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 40.87
      },
      {
        "minQuantity": 5,
        "unitPrice": 38.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 36.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 30.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "48 × 88 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1087,
    "name": "Dz de Pano de Prato 45 x 75cm",
    "slug": "dz-de-pano-de-prato-45-x-75cm",
    "code": "PROD-4",
    "unit": "unidade",
    "salePrice": 20,
    "promoPrice": null,
    "lowestTierPrice": 20,
    "categoryId": 122,
    "image": "/products/a2ad70f9-4bb9-4e18-8fc8-faf5ebcfb918.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 26.8
      },
      {
        "minQuantity": 5,
        "unitPrice": 25
      },
      {
        "minQuantity": 10,
        "unitPrice": 24
      },
      {
        "minQuantity": 20,
        "unitPrice": 20
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 75 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1154,
    "name": "Dz de Pano de Prato B | 45cm x 75cm",
    "slug": "dz-de-pano-de-prato-b-45cm-x-75cm",
    "code": "PROD-71",
    "unit": "unidade",
    "salePrice": 18.5,
    "promoPrice": null,
    "lowestTierPrice": 18.5,
    "categoryId": 122,
    "image": "/products/c7f5cd01-2982-4169-975d-6db3e412fa22.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.79
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 18.5
      }
    ],
    "specifications": [
      "45 × 75 cm"
    ]
  },
  {
    "id": 1580,
    "name": "Dz de Prato 45 x 75cm de Cor",
    "slug": "dz-de-prato-45-x-75cm-de-cor",
    "code": "PROD-102",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 122,
    "image": "/products/31697bd9-fe64-48ae-950f-0efce5ff7e1c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "45 × 75 cm"
    ]
  },
  {
    "id": 1575,
    "name": "Fronha de travesseiro",
    "slug": "fronha-de-travesseiro",
    "code": "PROD-97",
    "unit": "unidade",
    "salePrice": 9.5,
    "promoPrice": null,
    "lowestTierPrice": 9.5,
    "categoryId": 189,
    "image": "/products/f5873aa8-1a91-4dbd-aa3b-3562aae2f18c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 12.73
      },
      {
        "minQuantity": 5,
        "unitPrice": 11.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 11.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 9.5
      }
    ],
    "specifications": [
      "180",
      "2 fronhas"
    ]
  },
  {
    "id": 1156,
    "name": "JOGO DE PASSADEIRA NOZINHO TRADICIONAL",
    "slug": "jogo-de-passadeira-nozinho-tradicional",
    "code": "PROD-73",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 124,
    "image": "/products/86cabf4d-8e99-4b8d-82d1-874c09e8cb4e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "42 × 60 cm",
      "42 × 130 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1151,
    "name": "JOGO DE PASSADEIRA XADREZ",
    "slug": "jogo-de-passadeira-xadrez",
    "code": "PROD-68",
    "unit": "unidade",
    "salePrice": 17.5,
    "promoPrice": null,
    "lowestTierPrice": 17.5,
    "categoryId": 124,
    "image": "/products/c2501120-de6a-4dbe-9cda-bc4125e3cab9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 23.45
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 21
      },
      {
        "minQuantity": 20,
        "unitPrice": 17.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "43 × 55 cm",
      "43 × 125 cm",
      "Sortidas",
      "3 peças",
      "50 un"
    ]
  },
  {
    "id": 1127,
    "name": "Jogo De Passadeira Pernambucana Listrada",
    "slug": "jogo-de-passadeira-pernambucana-listrada",
    "code": "PROD-44",
    "unit": "unidade",
    "salePrice": 16.8,
    "promoPrice": null,
    "lowestTierPrice": 16.8,
    "categoryId": 124,
    "image": "/products/5fde47fc-01ec-4b2e-9936-64f150fac35d.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.51
      },
      {
        "minQuantity": 5,
        "unitPrice": 21
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.16
      },
      {
        "minQuantity": 20,
        "unitPrice": 16.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "42 × 60 cm",
      "42 × 130 cm",
      "3 peças"
    ]
  },
  {
    "id": 1157,
    "name": "Jogo de Passadeira Casinha",
    "slug": "jogo-de-passadeira-casinha",
    "code": "PROD-74",
    "unit": "unidade",
    "salePrice": 16.3,
    "promoPrice": null,
    "lowestTierPrice": 16.3,
    "categoryId": 124,
    "image": "/products/58c5b32e-0760-4b53-b92d-3a04b3fb6eeb.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.84
      },
      {
        "minQuantity": 5,
        "unitPrice": 20.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.56
      },
      {
        "minQuantity": 20,
        "unitPrice": 16.3
      }
    ],
    "specifications": [
      "100% Algodão",
      "42 × 60 cm",
      "42 × 120 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1586,
    "name": "Jogo de Passadeira Chenil",
    "slug": "jogo-de-passadeira-chenil",
    "code": "PROD-108",
    "unit": "unidade",
    "salePrice": 14,
    "promoPrice": null,
    "lowestTierPrice": 14,
    "categoryId": 124,
    "image": "/products/b13ee2e4-48bf-4fc0-977a-47afccebe34a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 18.76
      },
      {
        "minQuantity": 5,
        "unitPrice": 17.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 16.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 14
      }
    ],
    "specifications": []
  },
  {
    "id": 1091,
    "name": "Jogo de Passadeira Chenil Lisa",
    "slug": "jogo-de-passadeira-chenil-lisa",
    "code": "PROD-8",
    "unit": "unidade",
    "salePrice": 14.6,
    "promoPrice": null,
    "lowestTierPrice": 14.6,
    "categoryId": 124,
    "image": "/products/e20fd9f2-4330-43be-a251-b9118ad5016c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 19.56
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 17.52
      },
      {
        "minQuantity": 20,
        "unitPrice": 14.6
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm",
      "40 × 120 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1111,
    "name": "Jogo de Passadeira Dama",
    "slug": "jogo-de-passadeira-dama",
    "code": "PROD-28",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 124,
    "image": "/products/73660a20-f769-484b-b038-0b65e8ca6892.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm",
      "44 × 140 cm",
      "Sortidas",
      "3 peças",
      "50 un"
    ]
  },
  {
    "id": 1108,
    "name": "Jogo de Passadeira Jack",
    "slug": "jogo-de-passadeira-jack",
    "code": "PROD-25",
    "unit": "kit",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 124,
    "image": "/products/83282aa0-5e5b-4e90-927b-2d18aebc55cb.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 23
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 21
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 64 cm",
      "44 × 128 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1090,
    "name": "Jogo de Passadeira Listrado PP",
    "slug": "jogo-de-passadeira-listrado-pp",
    "code": "PROD-7",
    "unit": "unidade",
    "salePrice": 6.8,
    "promoPrice": null,
    "lowestTierPrice": 6.8,
    "categoryId": 124,
    "image": "/products/2d22b34b-2999-41b4-b780-91d248a43e51.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 9.11
      },
      {
        "minQuantity": 5,
        "unitPrice": 8.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 8.16
      },
      {
        "minQuantity": 20,
        "unitPrice": 6.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 50 cm",
      "40 × 100 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1115,
    "name": "Jogo de Passadeira com Estampa Geométrica",
    "slug": "jogo-de-passadeira-com-estampa-geometrica",
    "code": "PROD-32",
    "unit": "unidade",
    "salePrice": 17.5,
    "promoPrice": null,
    "lowestTierPrice": 17.5,
    "categoryId": 124,
    "image": "/products/73f1beb4-e563-426a-98af-837c09329b32.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 23.45
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 21
      },
      {
        "minQuantity": 20,
        "unitPrice": 17.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 64 cm",
      "44 × 128 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1134,
    "name": "Jogo de Passadeira de Cor Lisa",
    "slug": "jogo-de-passadeira-de-cor-lisa",
    "code": "PROD-51",
    "unit": "unidade",
    "salePrice": 22.5,
    "promoPrice": null,
    "lowestTierPrice": 22.5,
    "categoryId": 124,
    "image": "/products/c4086de8-fbb9-4671-b41a-2a9ab6ad6d7e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 30.15
      },
      {
        "minQuantity": 5,
        "unitPrice": 28.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 27
      },
      {
        "minQuantity": 20,
        "unitPrice": 22.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "46 × 80 cm",
      "46 × 160 cm",
      "3 tapetes"
    ]
  },
  {
    "id": 1579,
    "name": "Kit Cozinha 7 Peças",
    "slug": "kit-cozinha-7-pecas",
    "code": "PROD-101",
    "unit": "unidade",
    "salePrice": 11.5,
    "promoPrice": null,
    "lowestTierPrice": 11.5,
    "categoryId": 122,
    "image": "/products/7df963f8-85f7-4676-b38e-1c0ef037acff.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 15.41
      },
      {
        "minQuantity": 5,
        "unitPrice": 14.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 13.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 11.5
      }
    ],
    "specifications": [
      "7 peças",
      "01 pano de fogão; 01 pano de botijão; 01 pano de liquidificador; 02 panos de copa; 01 pano de estola; 01 pano de gelagua"
    ]
  },
  {
    "id": 1633,
    "name": "Kit Pano Multi-uso | 7 Peças",
    "slug": "kit-pano-multi-uso-7-pecas",
    "code": "PROD-155",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 197,
    "image": "/products/059af930-0c33-4c04-9ad5-d198fd13847a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Poliéster",
      "35 × 45 cm",
      "7 unidades"
    ]
  },
  {
    "id": 2062,
    "name": "Kit Semaninha 5 panos | barra estampada",
    "slug": "kit-semaninha-5-panos-barra-estampada",
    "code": "PROD-203",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 122,
    "image": "/products/98104693-35ab-408e-9b35-7304c2bed893.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": [
      "5 panos"
    ]
  },
  {
    "id": 1657,
    "name": "Kit Trabalho com Bala-Clava| 3 Peças",
    "slug": "kit-trabalho-com-bala-clava-3-pecas",
    "code": "PROD-179",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 203,
    "image": "/products/dbd6e60f-56d9-497d-9aea-7a989395ac24.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "1 Par de Manguitos; 1 Chapéu com Saia; 1 Bala Clava"
    ]
  },
  {
    "id": 1656,
    "name": "Kit Trabalho com Bolsa Sacola Esportiva | 3 Peças",
    "slug": "kit-trabalho-com-bolsa-sacola-esportiva-3-pecas",
    "code": "PROD-178",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 203,
    "image": "/products/58c11883-b328-4e6d-94e7-41a3913e4607.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "1 Par de Manguitos; 1 Bolsa Sacola Espotiva com Bolso de Zíper; 1 Chapéu com Saia"
    ]
  },
  {
    "id": 1591,
    "name": "Kit de Banheiro Casinha",
    "slug": "kit-de-banheiro-casinha",
    "code": "PROD-113",
    "unit": "unidade",
    "salePrice": 13,
    "promoPrice": null,
    "lowestTierPrice": 13,
    "categoryId": 192,
    "image": "/products/4b44fed4-721e-43a6-9718-f28015aafc61.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 17.42
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 15.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 13
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 50 cm",
      "Retorcido",
      "3 peças"
    ]
  },
  {
    "id": 1589,
    "name": "Kit de Banheiro Listrado PP",
    "slug": "kit-de-banheiro-listrado-pp",
    "code": "PROD-111",
    "unit": "unidade",
    "salePrice": 6.8,
    "promoPrice": null,
    "lowestTierPrice": 6.8,
    "categoryId": 192,
    "image": "/products/df67cad6-8a70-4827-a2ff-0264d3bcbbb4.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 9.11
      },
      {
        "minQuantity": 5,
        "unitPrice": 8.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 8.16
      },
      {
        "minQuantity": 20,
        "unitPrice": 6.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm",
      "3 peças"
    ]
  },
  {
    "id": 1588,
    "name": "Kit de Banheiro Listrado | Liso",
    "slug": "kit-de-banheiro-listrado-liso",
    "code": "PROD-110",
    "unit": "unidade",
    "salePrice": 7.5,
    "promoPrice": null,
    "lowestTierPrice": 7.5,
    "categoryId": 192,
    "image": "/products/89b12ece-bbdc-4fdd-aff4-24018439af8e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.05
      },
      {
        "minQuantity": 5,
        "unitPrice": 9.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 9
      },
      {
        "minQuantity": 20,
        "unitPrice": 7.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "3 peças"
    ]
  },
  {
    "id": 1592,
    "name": "Kit de Banheiro Xadrez",
    "slug": "kit-de-banheiro-xadrez",
    "code": "PROD-114",
    "unit": "unidade",
    "salePrice": 13.5,
    "promoPrice": null,
    "lowestTierPrice": 13.5,
    "categoryId": 192,
    "image": "/products/0dad4d2c-f630-406b-aa46-7989f4900063.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 18.09
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 16.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 13.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 50 cm",
      "Retorcido",
      "3 peças"
    ]
  },
  {
    "id": 1590,
    "name": "Kit de Banheiro Xadrez com Coração",
    "slug": "kit-de-banheiro-xadrez-com-coracao",
    "code": "PROD-112",
    "unit": "unidade",
    "salePrice": 14.6,
    "promoPrice": null,
    "lowestTierPrice": 14.6,
    "categoryId": 192,
    "image": "/products/964b3f43-45f8-4a7d-b06c-e1559f285a0d.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 19.56
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 17.52
      },
      {
        "minQuantity": 20,
        "unitPrice": 14.6
      }
    ],
    "specifications": [
      "40 × 60 cm",
      "3 peças"
    ]
  },
  {
    "id": 1593,
    "name": "Kit de Banheiro com Estampa Geométrica",
    "slug": "kit-de-banheiro-com-estampa-geometrica",
    "code": "PROD-115",
    "unit": "unidade",
    "salePrice": 9,
    "promoPrice": null,
    "lowestTierPrice": 9,
    "categoryId": 192,
    "image": "/products/478c8f1e-904c-43c9-b21a-9f0f2721dfb2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 12.06
      },
      {
        "minQuantity": 5,
        "unitPrice": 11.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 10.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 9
      }
    ],
    "specifications": [
      "40 × 60 cm",
      "3 peças"
    ]
  },
  {
    "id": 1630,
    "name": "Kit pano Multi-Uso | 3 peças",
    "slug": "kit-pano-multi-uso-3-pecas",
    "code": "PROD-152",
    "unit": "unidade",
    "salePrice": 8,
    "promoPrice": null,
    "lowestTierPrice": 8,
    "categoryId": 197,
    "image": "/products/c488304e-15bc-443c-a7fb-9cf53da4264b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.72
      },
      {
        "minQuantity": 5,
        "unitPrice": 10
      },
      {
        "minQuantity": 10,
        "unitPrice": 9.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 8
      }
    ],
    "specifications": [
      "100% Algodão",
      "34 × 34 cm"
    ]
  },
  {
    "id": 1634,
    "name": "Kit pano microfibra Medidas: 31×31cm",
    "slug": "kit-pano-microfibra-medidas-31-31cm",
    "code": "PROD-156",
    "unit": "unidade",
    "salePrice": 6,
    "promoPrice": null,
    "lowestTierPrice": 6,
    "categoryId": 197,
    "image": "/products/47202a45-e9c1-445a-b63f-986aa60d1cfd.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 8.04
      },
      {
        "minQuantity": 5,
        "unitPrice": 7.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 7.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 6
      }
    ],
    "specifications": [
      "31 × 31 cm"
    ]
  },
  {
    "id": 1557,
    "name": "Lençol Cor Única",
    "slug": "lencol-cor-unica",
    "code": "PROD-79",
    "unit": "unidade",
    "salePrice": 13,
    "promoPrice": null,
    "lowestTierPrice": 13,
    "categoryId": 187,
    "image": "/products/8057a317-f3ed-4514-b731-382eee77d44b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 17.42
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 15.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 13
      }
    ],
    "specifications": [
      "50% Algodão, 50% Poliéster",
      "200 × 240 cm"
    ]
  },
  {
    "id": 1564,
    "name": "Lençol Valentina",
    "slug": "lencol-valentina",
    "code": "PROD-86",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 187,
    "image": "/products/c00b997b-a6dc-48a2-ad97-bcab3c984477.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": []
  },
  {
    "id": 1560,
    "name": "Lençol com Elástico Box Casal",
    "slug": "lencol-com-elastico-box-casal",
    "code": "PROD-82",
    "unit": "unidade",
    "salePrice": 33,
    "promoPrice": null,
    "lowestTierPrice": 33,
    "categoryId": 187,
    "image": "/products/8ebd0896-85c6-4fc3-9fd3-deff2bf5192e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 44.22
      },
      {
        "minQuantity": 5,
        "unitPrice": 41.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 39.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 33
      }
    ],
    "specifications": [
      "100% Algodão",
      "140 × 200 × 30 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1559,
    "name": "Lençol com Elástico Queen",
    "slug": "lencol-com-elastico-queen",
    "code": "PROD-81",
    "unit": "unidade",
    "salePrice": 39.8,
    "promoPrice": null,
    "lowestTierPrice": 39.8,
    "categoryId": 187,
    "image": "/products/5361573e-0891-40d9-ad42-7e2e042f8c88.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 53.33
      },
      {
        "minQuantity": 5,
        "unitPrice": 49.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 47.76
      },
      {
        "minQuantity": 20,
        "unitPrice": 39.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "160 × 200 × 35 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1558,
    "name": "Lençol com Elástico Solteiro",
    "slug": "lencol-com-elastico-solteiro",
    "code": "PROD-80",
    "unit": "unidade",
    "salePrice": 25.2,
    "promoPrice": null,
    "lowestTierPrice": 25.2,
    "categoryId": 187,
    "image": "/products/e3b9cbb1-a030-44e7-bbe7-078e520d572d.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 33.77
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 30.24
      },
      {
        "minQuantity": 20,
        "unitPrice": 25.2
      }
    ],
    "specifications": [
      "100% Algodão",
      "88 × 188 × 18 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1566,
    "name": "Lençol com Elástico Solteirão",
    "slug": "lencol-com-elastico-solteirao",
    "code": "PROD-88",
    "unit": "unidade",
    "salePrice": 26.5,
    "promoPrice": null,
    "lowestTierPrice": 26.5,
    "categoryId": 187,
    "image": "/products/f67aa6f2-b6ad-4b88-b694-997cf3d7d020.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 35.51
      },
      {
        "minQuantity": 5,
        "unitPrice": 33.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 31.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 26.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "100 × 200 × 30 cm",
      "Sortidas"
    ]
  },
  {
    "id": 2045,
    "name": "Lençol com Elástico | Casal",
    "slug": "lencol-com-elastico-casal",
    "code": "PROD-186",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 187,
    "image": "/products/5db98e90-6a2e-499f-9665-0c277ff70957.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": [
      "100% Algodão",
      "138 × 188 × 20 cm",
      "Sortidas"
    ]
  },
  {
    "id": 2061,
    "name": "Lençol com Ziper | Solteirão",
    "slug": "lencol-com-ziper-solteirao",
    "code": "PROD-202",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 187,
    "image": "/products/cff3e4f9-ef5a-421b-bb90-93ffbbf42a29.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": [
      "100 × 200 × 30 cm"
    ]
  },
  {
    "id": 1562,
    "name": "Lençol com Zíper Box Casal",
    "slug": "lencol-com-ziper-box-casal",
    "code": "PROD-84",
    "unit": "unidade",
    "salePrice": 32.5,
    "promoPrice": null,
    "lowestTierPrice": 32.5,
    "categoryId": 187,
    "image": "/products/791d488d-cbf6-490d-845d-48782cb1e52e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 43.55
      },
      {
        "minQuantity": 5,
        "unitPrice": 40.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 39
      },
      {
        "minQuantity": 20,
        "unitPrice": 32.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "140 × 200 × 30 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1561,
    "name": "Lençol com Zíper King",
    "slug": "lencol-com-ziper-king",
    "code": "PROD-83",
    "unit": "unidade",
    "salePrice": 44.8,
    "promoPrice": null,
    "lowestTierPrice": 44.8,
    "categoryId": 187,
    "image": "/products/e929796a-77c5-4b47-a625-b45ab9035ed2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 60.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 56
      },
      {
        "minQuantity": 10,
        "unitPrice": 53.76
      },
      {
        "minQuantity": 20,
        "unitPrice": 44.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "193 × 200 × 40 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1563,
    "name": "Lençol com Zíper Queen",
    "slug": "lencol-com-ziper-queen",
    "code": "PROD-85",
    "unit": "unidade",
    "salePrice": 40.5,
    "promoPrice": null,
    "lowestTierPrice": 40.5,
    "categoryId": 187,
    "image": "/products/b9915438-00d0-44f1-a19f-af9c4652e228.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 54.27
      },
      {
        "minQuantity": 5,
        "unitPrice": 50.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 48.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 40.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "160 × 200 × 35 cm",
      "Sortidas"
    ]
  },
  {
    "id": 1556,
    "name": "Lençol de Bolinha",
    "slug": "lencol-de-bolinha",
    "code": "PROD-78",
    "unit": "unidade",
    "salePrice": 13,
    "promoPrice": null,
    "lowestTierPrice": 13,
    "categoryId": 187,
    "image": "/products/a86dc200-9341-4779-a991-806be2735be5.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 17.42
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 15.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 13
      }
    ],
    "specifications": [
      "50% Algodão, 50% Poliéster",
      "200 × 220 cm"
    ]
  },
  {
    "id": 2044,
    "name": "Lençol estampado",
    "slug": "lencol-estampado",
    "code": "PROD-185",
    "unit": "unidade",
    "salePrice": 13,
    "promoPrice": null,
    "lowestTierPrice": 13,
    "categoryId": 187,
    "image": "/products/73285c32-6499-440f-a8d8-a516bda04d2f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 17.42
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 15.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 13
      }
    ],
    "specifications": [
      "50% Algodão, 50% Poliéster",
      "200 × 240 cm",
      "100 un"
    ]
  },
  {
    "id": 1121,
    "name": "MANTA CASINHA",
    "slug": "manta-casinha",
    "code": "PROD-38",
    "unit": "unidade",
    "salePrice": 22,
    "promoPrice": null,
    "lowestTierPrice": 22,
    "categoryId": 120,
    "image": "/products/90c7b849-8194-44e4-92d3-f2a59fc9800d.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 29.48
      },
      {
        "minQuantity": 5,
        "unitPrice": 27.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 26.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 22
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1150,
    "name": "MANTA ESTRELA",
    "slug": "manta-estrela-2",
    "code": "PROD-67",
    "unit": "unidade",
    "salePrice": 24,
    "promoPrice": null,
    "lowestTierPrice": 24,
    "categoryId": 120,
    "image": "/products/faa7e8dc-a4fc-4617-a257-41844c0a402e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 32.16
      },
      {
        "minQuantity": 5,
        "unitPrice": 30
      },
      {
        "minQuantity": 10,
        "unitPrice": 28.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 24
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1159,
    "name": "MANTA OLHO DE PEIXE",
    "slug": "manta-olho-de-peixe-2",
    "code": "PROD-76",
    "unit": "unidade",
    "salePrice": 20,
    "promoPrice": null,
    "lowestTierPrice": 20,
    "categoryId": 120,
    "image": "/products/dcb2c2a8-cf9d-4ead-bab9-c312ce643dfd.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 26.8
      },
      {
        "minQuantity": 5,
        "unitPrice": 25
      },
      {
        "minQuantity": 10,
        "unitPrice": 24
      },
      {
        "minQuantity": 20,
        "unitPrice": 20
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1122,
    "name": "MANTA QUADRO CASAL",
    "slug": "manta-quadro-casal",
    "code": "PROD-39",
    "unit": "unidade",
    "salePrice": 22,
    "promoPrice": null,
    "lowestTierPrice": 22,
    "categoryId": 120,
    "image": "/products/7232b625-c33e-43bb-8859-1f8c0d096b1a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 29.48
      },
      {
        "minQuantity": 5,
        "unitPrice": 27.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 26.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 22
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1144,
    "name": "MANTA RAVENALA",
    "slug": "manta-ravenala",
    "code": "PROD-61",
    "unit": "unidade",
    "salePrice": 22,
    "promoPrice": null,
    "lowestTierPrice": 22,
    "categoryId": 120,
    "image": "/products/bdb6e92b-2e8e-4b5f-9e92-6d59b1234de0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 29.48
      },
      {
        "minQuantity": 5,
        "unitPrice": 27.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 26.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 22
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1103,
    "name": "Manta Colméia",
    "slug": "manta-colmeia",
    "code": "PROD-20",
    "unit": "unidade",
    "salePrice": 38,
    "promoPrice": null,
    "lowestTierPrice": 38,
    "categoryId": 120,
    "image": "/products/f80bfd72-eb10-4bd9-9dbc-f311d990b3f7.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 50.92
      },
      {
        "minQuantity": 5,
        "unitPrice": 47.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 45.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 38
      }
    ],
    "specifications": [
      "100% Algodão",
      "240 × 250 cm",
      "1500 g",
      "25 un"
    ]
  },
  {
    "id": 1102,
    "name": "Manta Crouchê",
    "slug": "manta-crouche",
    "code": "PROD-19",
    "unit": "unidade",
    "salePrice": 44,
    "promoPrice": null,
    "lowestTierPrice": 44,
    "categoryId": 120,
    "image": "/products/59eab422-9b0a-45a0-8172-ae5045c24157.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 58.96
      },
      {
        "minQuantity": 5,
        "unitPrice": 55
      },
      {
        "minQuantity": 10,
        "unitPrice": 52.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 44
      }
    ],
    "specifications": [
      "100% Algodão",
      "245 × 250 cm",
      "1600 g"
    ]
  },
  {
    "id": 1119,
    "name": "Manta Estrela",
    "slug": "manta-estrela",
    "code": "PROD-36",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/c0a55cd3-877a-4cae-8314-ce7ee8b70b90.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": []
  },
  {
    "id": 1140,
    "name": "Manta Fofinha Canelada | Casal",
    "slug": "manta-fofinha-canelada-casal",
    "code": "PROD-57",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/6dde9315-e3d0-4492-b141-daa1242ffab9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Microfibra",
      "180 × 200 cm"
    ]
  },
  {
    "id": 1097,
    "name": "Manta Fofinha Canelada | Solteira",
    "slug": "manta-fofinha-canelada-solteira",
    "code": "PROD-14",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 120,
    "image": "/products/037bf982-1988-4849-ba8c-60685ec46b4f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "100% Microfibra",
      "140 × 200 cm"
    ]
  },
  {
    "id": 1095,
    "name": "Manta Fofinha Casal | Estampada",
    "slug": "manta-fofinha-casal-estampada",
    "code": "PROD-12",
    "unit": "unidade",
    "salePrice": 14,
    "promoPrice": null,
    "lowestTierPrice": 14,
    "categoryId": 120,
    "image": "/products/1a6ee1ea-f9cd-4123-9698-911103d78eb4.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 18.76
      },
      {
        "minQuantity": 5,
        "unitPrice": 17.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 16.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 14
      }
    ],
    "specifications": [
      "100% Microfibra",
      "180 × 200 cm",
      "650 g"
    ]
  },
  {
    "id": 1096,
    "name": "Manta Fofinha Casal | Lisa",
    "slug": "manta-fofinha-casal-lisa",
    "code": "PROD-13",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 120,
    "image": "/products/6f9711d2-6003-4b2d-b77e-21cb95c6d106.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Microfibra",
      "180 × 200 cm",
      "650 g"
    ]
  },
  {
    "id": 1160,
    "name": "Manta Fofinha | Quadrejada",
    "slug": "manta-fofinha-quadrejada",
    "code": "PROD-77",
    "unit": "unidade",
    "salePrice": 21,
    "promoPrice": null,
    "lowestTierPrice": 21,
    "categoryId": 120,
    "image": "/products/4b25bed0-f026-4494-af6b-7f04eeb7d480.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 28.14
      },
      {
        "minQuantity": 5,
        "unitPrice": 26.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 25.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 21
      }
    ],
    "specifications": [
      "100% Microfibra",
      "180 × 200 cm",
      "40 un"
    ]
  },
  {
    "id": 1132,
    "name": "Manta Indiana",
    "slug": "manta-indiana",
    "code": "PROD-49",
    "unit": "unidade",
    "salePrice": 38,
    "promoPrice": null,
    "lowestTierPrice": 38,
    "categoryId": 120,
    "image": "/products/005c48ea-2693-4883-b648-3fe2ff502471.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 50.92
      },
      {
        "minQuantity": 5,
        "unitPrice": 47.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 45.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 38
      }
    ],
    "specifications": [
      "100% Algodão",
      "250 × 205 cm",
      "1400 g",
      "25 un"
    ]
  },
  {
    "id": 1124,
    "name": "Manta Indiana Solteira",
    "slug": "manta-indiana-solteira",
    "code": "PROD-41",
    "unit": "unidade",
    "salePrice": 20,
    "promoPrice": null,
    "lowestTierPrice": 20,
    "categoryId": 120,
    "image": "/products/957a927b-1f96-4b18-9096-84113829cd5b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 26.8
      },
      {
        "minQuantity": 5,
        "unitPrice": 25
      },
      {
        "minQuantity": 10,
        "unitPrice": 24
      },
      {
        "minQuantity": 20,
        "unitPrice": 20
      }
    ],
    "specifications": [
      "100% Algodão",
      "120 × 159 cm"
    ]
  },
  {
    "id": 1135,
    "name": "Manta Lisa Casal",
    "slug": "manta-lisa-casal",
    "code": "PROD-52",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 120,
    "image": "/products/eabf5ae7-e8d0-404d-a001-7db2db261391.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "220 × 172 cm",
      "700 g",
      "100 un"
    ]
  },
  {
    "id": 1113,
    "name": "Manta Lisa King",
    "slug": "manta-lisa-king",
    "code": "PROD-30",
    "unit": "unidade",
    "salePrice": 25,
    "promoPrice": null,
    "lowestTierPrice": 25,
    "categoryId": 120,
    "image": "/products/c82eca48-5e83-48e2-af4f-386dee3f7cae.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 33.5
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 30
      },
      {
        "minQuantity": 20,
        "unitPrice": 25
      }
    ],
    "specifications": [
      "100% Algodão",
      "300 × 180 cm",
      "1200 g",
      "25 un"
    ]
  },
  {
    "id": 1137,
    "name": "Manta Lisa com Cinta",
    "slug": "manta-lisa-com-cinta",
    "code": "PROD-54",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 120,
    "image": "/products/e666ed38-dae7-4001-b2f0-0350f97db56f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "100% Algodão",
      "220 × 172 cm",
      "700 g",
      "100 un"
    ]
  },
  {
    "id": 1123,
    "name": "Manta Olho de Peixe",
    "slug": "manta-olho-de-peixe",
    "code": "PROD-40",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 120,
    "image": "/products/667bf4cf-761e-42ef-90e7-5b35357e5df9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "160 × 230 cm",
      "720 g",
      "25 un"
    ]
  },
  {
    "id": 1142,
    "name": "Manta Oslo",
    "slug": "manta-oslo",
    "code": "PROD-59",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 120,
    "image": "/products/cfe655fb-3983-4307-ac30-0772f5a9845b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "195 × 140 cm",
      "610 g",
      "100 un"
    ]
  },
  {
    "id": 1092,
    "name": "Manta Popular | Solteira",
    "slug": "manta-popular-solteira",
    "code": "PROD-9",
    "unit": "unidade",
    "salePrice": 11,
    "promoPrice": null,
    "lowestTierPrice": 11,
    "categoryId": 120,
    "image": "/products/1e651b17-9d26-4d2e-b94d-c627b08a3a61.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 14.74
      },
      {
        "minQuantity": 5,
        "unitPrice": 13.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 13.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 11
      }
    ],
    "specifications": [
      "100% Algodão",
      "215 × 150 cm"
    ]
  },
  {
    "id": 1118,
    "name": "Manta Quadrinho (casal)",
    "slug": "manta-quadrinho-casal",
    "code": "PROD-35",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/9472f541-1ab4-4860-aa96-02ef22b0f015.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Algodão",
      "265 × 165 cm",
      "830 g"
    ]
  },
  {
    "id": 1129,
    "name": "Manta Tijolinho",
    "slug": "manta-tijolinho",
    "code": "PROD-46",
    "unit": "unidade",
    "salePrice": 16.5,
    "promoPrice": null,
    "lowestTierPrice": 16.5,
    "categoryId": 120,
    "image": "/products/7ebdd8e8-4435-44d0-b7b0-a403860780ed.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.11
      },
      {
        "minQuantity": 5,
        "unitPrice": 20.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 16.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "170 × 230 cm",
      "820 g"
    ]
  },
  {
    "id": 1094,
    "name": "Manta Tricô",
    "slug": "manta-trico",
    "code": "PROD-11",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 120,
    "image": "/products/30e585a1-dcb8-4f8a-b66f-7d80d623c202.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "120 × 140 cm"
    ]
  },
  {
    "id": 1098,
    "name": "Manta Uga Lisa",
    "slug": "manta-uga-lisa",
    "code": "PROD-15",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/58845c7e-aa36-4cbd-acff-e2d77c9f18bf.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Algodão",
      "180 × 220 cm",
      "Sortidas",
      "50 un"
    ]
  },
  {
    "id": 1143,
    "name": "Manta Uga Uga",
    "slug": "manta-uga-uga",
    "code": "PROD-60",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/29ba79f5-f8af-4dca-811e-c70877165e8f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Algodão",
      "235 × 165 cm",
      "820 g",
      "100 un"
    ]
  },
  {
    "id": 1100,
    "name": "Manta Xadrez",
    "slug": "manta-xadrez",
    "code": "PROD-17",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 120,
    "image": "/products/043d126b-750b-4844-94d6-7eb6f3fd4794.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "100% Algodão",
      "265 × 165 cm",
      "830 g"
    ]
  },
  {
    "id": 1158,
    "name": "Manta Xale Casal",
    "slug": "manta-xale-casal",
    "code": "PROD-75",
    "unit": "unidade",
    "salePrice": 23,
    "promoPrice": null,
    "lowestTierPrice": 23,
    "categoryId": 121,
    "image": "/products/3c5f4087-931f-433a-a94a-80624de31ed9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 30.82
      },
      {
        "minQuantity": 5,
        "unitPrice": 28.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 27.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 23
      }
    ],
    "specifications": [
      "100% Algodão",
      "230 × 165 cm",
      "935 g"
    ]
  },
  {
    "id": 1128,
    "name": "Manta Xale King",
    "slug": "manta-xale-king",
    "code": "PROD-45",
    "unit": "unidade",
    "salePrice": 38,
    "promoPrice": null,
    "lowestTierPrice": 38,
    "categoryId": 121,
    "image": "/products/8853204d-935e-4092-8df6-021bd2daa951.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 50.92
      },
      {
        "minQuantity": 5,
        "unitPrice": 47.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 45.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 38
      }
    ],
    "specifications": [
      "100% Algodão",
      "240 × 225 cm",
      "1390 g"
    ]
  },
  {
    "id": 1093,
    "name": "Manta Xale Solteira",
    "slug": "manta-xale-solteira",
    "code": "PROD-10",
    "unit": "unidade",
    "salePrice": 13,
    "promoPrice": null,
    "lowestTierPrice": 13,
    "categoryId": 121,
    "image": "/products/3dabd383-3c2a-401f-80e2-1726d70db29a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 17.42
      },
      {
        "minQuantity": 5,
        "unitPrice": 16.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 15.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 13
      }
    ],
    "specifications": [
      "100% Algodão",
      "220 × 115 cm",
      "500 g"
    ]
  },
  {
    "id": 2058,
    "name": "Meia Maluca Infantil",
    "slug": "meia-maluca-infantil",
    "code": "PROD-199",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 202,
    "image": "/products/3de01d27-a331-419d-862c-6a739e62aced.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "50 un"
    ]
  },
  {
    "id": 2040,
    "name": "Pano de Chão Alveijado 45x65cm",
    "slug": "pano-de-chao-alveijado-45x65cm",
    "code": "PROD-181",
    "unit": "unidade",
    "salePrice": 1.9,
    "promoPrice": null,
    "lowestTierPrice": 1.9,
    "categoryId": 196,
    "image": "/products/f6a46632-a5b8-4066-a263-d09f448588e9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 2.55
      },
      {
        "minQuantity": 5,
        "unitPrice": 2.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 2.28
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.9
      }
    ],
    "specifications": [
      "45 × 65 cm",
      "400 un"
    ]
  },
  {
    "id": 1623,
    "name": "Pano de Chão Alvejado 52 x 70cm",
    "slug": "pano-de-chao-alvejado-52-x-70cm",
    "code": "PROD-145",
    "unit": "unidade",
    "salePrice": 2.9,
    "promoPrice": null,
    "lowestTierPrice": 2.9,
    "categoryId": 196,
    "image": "/products/177f412c-d9eb-482d-8877-bfdfc2e3ead9.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.89
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.48
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.9
      }
    ],
    "specifications": [
      "100% Algodão",
      "50 × 70 cm"
    ]
  },
  {
    "id": 1628,
    "name": "Pano de Chão Alvejado Flanelado | 48 x 68cm",
    "slug": "pano-de-chao-alvejado-flanelado-48-x-68cm",
    "code": "PROD-150",
    "unit": "unidade",
    "salePrice": 3.2,
    "promoPrice": null,
    "lowestTierPrice": 3.2,
    "categoryId": 196,
    "image": "/products/515a5c7e-e8b8-4305-911d-1e2137a27e7e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.29
      },
      {
        "minQuantity": 5,
        "unitPrice": 4
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.84
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.2
      }
    ],
    "specifications": [
      "100% Algodão",
      "48 × 68 cm"
    ]
  },
  {
    "id": 1629,
    "name": "Pano de Chão Alvejado Flanelado | 55 x 75cm",
    "slug": "pano-de-chao-alvejado-flanelado-55-x-75cm",
    "code": "PROD-151",
    "unit": "unidade",
    "salePrice": 5,
    "promoPrice": null,
    "lowestTierPrice": 5,
    "categoryId": 196,
    "image": "/products/e3020405-5f75-4aac-a433-7d21b351c504.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.7
      },
      {
        "minQuantity": 5,
        "unitPrice": 6.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 6
      },
      {
        "minQuantity": 20,
        "unitPrice": 5
      }
    ],
    "specifications": [
      "100% Algodão",
      "55 × 75 cm"
    ]
  },
  {
    "id": 1627,
    "name": "Pano de Chão Cru | 52 x 72cm",
    "slug": "pano-de-chao-cru-52-x-72cm",
    "code": "PROD-149",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 196,
    "image": "/products/6b41a3c0-d956-4b85-a379-509b2275d92a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "52 × 72 cm"
    ]
  },
  {
    "id": 1624,
    "name": "Pano de Chão Flanelado Xadrez 48 x 68cm",
    "slug": "pano-de-chao-flanelado-xadrez-48-x-68cm",
    "code": "PROD-146",
    "unit": "unidade",
    "salePrice": 3.2,
    "promoPrice": null,
    "lowestTierPrice": 3.2,
    "categoryId": 196,
    "image": "/products/23f71080-fda6-4ba2-882f-9fc295818795.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.29
      },
      {
        "minQuantity": 5,
        "unitPrice": 4
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.84
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.2
      }
    ],
    "specifications": [
      "100% Algodão",
      "48 × 68 cm"
    ]
  },
  {
    "id": 1625,
    "name": "Pano de Chão Neblina | 50 x 70cm",
    "slug": "pano-de-chao-neblina-50-x-70cm",
    "code": "PROD-147",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 196,
    "image": "/products/b2c41586-574d-4ba4-9c1e-6c6c79ee651b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "50 × 70 cm"
    ]
  },
  {
    "id": 1621,
    "name": "Pano de Chão Xadrez 45x65cm",
    "slug": "pano-de-chao-xadrez-45x65cm",
    "code": "PROD-143",
    "unit": "unidade",
    "salePrice": 1.8,
    "promoPrice": null,
    "lowestTierPrice": 1.8,
    "categoryId": 196,
    "image": "/products/372dd81a-b359-41aa-a341-226ef5f0e35a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 2.41
      },
      {
        "minQuantity": 5,
        "unitPrice": 2.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 2.16
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 65 cm"
    ]
  },
  {
    "id": 1622,
    "name": "Pano de Chão Xadrez | 50 x 70cm",
    "slug": "pano-de-chao-xadrez-50-x-70cm",
    "code": "PROD-144",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 196,
    "image": "/products/e6c79413-1a1f-4ea5-b79b-20f7ee53913b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "50 × 70 cm"
    ]
  },
  {
    "id": 1626,
    "name": "Pano de Chão de Cor | 52 x 70cm",
    "slug": "pano-de-chao-de-cor-52-x-70cm",
    "code": "PROD-148",
    "unit": "unidade",
    "salePrice": 2.9,
    "promoPrice": null,
    "lowestTierPrice": 2.9,
    "categoryId": 196,
    "image": "/products/c4fc0440-4b7a-46fe-98cd-3f89799c8658.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.89
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.48
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.9
      }
    ],
    "specifications": [
      "100% Algodão",
      "52 × 70 cm"
    ]
  },
  {
    "id": 1582,
    "name": "Pano de Copa microfibra estampado 40×60cm",
    "slug": "pano-de-copa-microfibra-estampado-40-60cm",
    "code": "PROD-104",
    "unit": "unidade",
    "salePrice": 3.5,
    "promoPrice": null,
    "lowestTierPrice": 3.5,
    "categoryId": 122,
    "image": "/products/61f4944f-6194-4197-8892-4527bdadd881.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.69
      },
      {
        "minQuantity": 5,
        "unitPrice": 4.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 4.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.5
      }
    ],
    "specifications": [
      "40 × 60 cm"
    ]
  },
  {
    "id": 1148,
    "name": "Pano de Prato 40x 60cm",
    "slug": "pano-de-prato-40x-60cm",
    "code": "PROD-65",
    "unit": "unidade",
    "salePrice": 14.6,
    "promoPrice": null,
    "lowestTierPrice": 14.6,
    "categoryId": 122,
    "image": "/products/dc858cb6-9de6-4b61-90fb-394eb6e8020e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 19.56
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 17.52
      },
      {
        "minQuantity": 20,
        "unitPrice": 14.6
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm",
      "Sarja",
      "12 unidades"
    ]
  },
  {
    "id": 1114,
    "name": "Pano de Prato 45cm x 75cm Colorido",
    "slug": "pano-de-prato-45cm-x-75cm-colorido",
    "code": "PROD-31",
    "unit": "unidade",
    "salePrice": 18.5,
    "promoPrice": null,
    "lowestTierPrice": 18.5,
    "categoryId": 122,
    "image": "/products/21ffb8f9-04e6-47e5-9a5a-3d5395dccc79.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.79
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 18.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 75 cm"
    ]
  },
  {
    "id": 1089,
    "name": "Pano de Prato | Semaninha Bordada",
    "slug": "pano-de-prato-semaninha-bordada",
    "code": "PROD-6",
    "unit": "unidade",
    "salePrice": 18,
    "promoPrice": null,
    "lowestTierPrice": 18,
    "categoryId": 122,
    "image": "/products/512540aa-c533-4a81-87d5-606335cabdbb.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 22.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 21.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 18
      }
    ],
    "specifications": [
      "100% Algodão",
      "45 × 75 cm"
    ]
  },
  {
    "id": 1088,
    "name": "Pano de Prato | Semaninha Pintada",
    "slug": "pano-de-prato-semaninha-pintada",
    "code": "PROD-5",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 122,
    "image": "/products/0d9b91d7-888c-4da1-95fb-a3a6fc35ec62.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "45 × 75 cm"
    ]
  },
  {
    "id": 1584,
    "name": "Pano de copa | Microfibra",
    "slug": "pano-de-copa-microfibra",
    "code": "PROD-106",
    "unit": "unidade",
    "salePrice": 0,
    "promoPrice": null,
    "lowestTierPrice": 0,
    "categoryId": 122,
    "image": "/products/2c9cdf04-bd53-47f7-b13e-9e45e768343f.webp",
    "minimumQuantity": 1,
    "priceTiers": [],
    "specifications": []
  },
  {
    "id": 1583,
    "name": "Pano de copa | Microfibra atoalhado 40×60cm",
    "slug": "pano-de-copa-microfibra-atoalhado-40-60cm",
    "code": "PROD-105",
    "unit": "unidade",
    "salePrice": 3.5,
    "promoPrice": null,
    "lowestTierPrice": 3.5,
    "categoryId": 122,
    "image": "/products/d1258a81-c50c-4a41-bb4f-fa8a9151a1c3.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.69
      },
      {
        "minQuantity": 5,
        "unitPrice": 4.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 4.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.5
      }
    ],
    "specifications": [
      "40 × 60 cm"
    ]
  },
  {
    "id": 1576,
    "name": "Par de Fronhas Percal Flex 500 | Par",
    "slug": "par-de-fronhas-percal-flex-500-par",
    "code": "PROD-98",
    "unit": "unidade",
    "salePrice": 9.5,
    "promoPrice": null,
    "lowestTierPrice": 9.5,
    "categoryId": 189,
    "image": "/products/021af950-3106-45c9-a9c9-d8ee903606b2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 12.73
      },
      {
        "minQuantity": 5,
        "unitPrice": 11.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 11.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 9.5
      }
    ],
    "specifications": [
      "2 fronhas"
    ]
  },
  {
    "id": 1637,
    "name": "Rede Amazonas",
    "slug": "rede-amazonas",
    "code": "PROD-159",
    "unit": "unidade",
    "salePrice": 50,
    "promoPrice": null,
    "lowestTierPrice": 50,
    "categoryId": 199,
    "image": "/products/83e05e55-3c0a-4209-805c-9cc7229ad940.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 67
      },
      {
        "minQuantity": 5,
        "unitPrice": 62.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 60
      },
      {
        "minQuantity": 20,
        "unitPrice": 50
      }
    ],
    "specifications": [
      "100% Algodão",
      "240 × 140 cm",
      "4,00 m",
      "até 150 kg",
      "30 un"
    ]
  },
  {
    "id": 1644,
    "name": "Rede Bucho de Boi com Varanda",
    "slug": "rede-bucho-de-boi-com-varanda",
    "code": "PROD-166",
    "unit": "unidade",
    "salePrice": 85,
    "promoPrice": null,
    "lowestTierPrice": 85,
    "categoryId": 199,
    "image": "/products/99585929-a272-4ef4-bad5-b94bc8bc248a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 113.9
      },
      {
        "minQuantity": 5,
        "unitPrice": 106.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 102
      },
      {
        "minQuantity": 20,
        "unitPrice": 85
      }
    ],
    "specifications": [
      "100% Algodão",
      "270 × 170 cm",
      "4,00 m",
      "até 300 kg",
      "20 un"
    ]
  },
  {
    "id": 1647,
    "name": "Rede Cadeira",
    "slug": "rede-cadeira",
    "code": "PROD-169",
    "unit": "unidade",
    "salePrice": 58,
    "promoPrice": null,
    "lowestTierPrice": 58,
    "categoryId": 200,
    "image": "/products/fa9aac0d-078f-489b-be51-bb66c749fb5f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 77.72
      },
      {
        "minQuantity": 5,
        "unitPrice": 72.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 69.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 58
      }
    ],
    "specifications": []
  },
  {
    "id": 1640,
    "name": "Rede Cinza",
    "slug": "rede-cinza",
    "code": "PROD-162",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 199,
    "image": "/products/c3981257-18ed-4651-b271-3ba6fcefa162.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "190 × 130 cm",
      "3,30 m",
      "até 150 kg"
    ]
  },
  {
    "id": 1643,
    "name": "Rede Estrela",
    "slug": "rede-estrela",
    "code": "PROD-165",
    "unit": "unidade",
    "salePrice": 58,
    "promoPrice": null,
    "lowestTierPrice": 58,
    "categoryId": 199,
    "image": "/products/64375373-bbf3-4168-98b4-1ff981345cab.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 77.72
      },
      {
        "minQuantity": 5,
        "unitPrice": 72.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 69.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 58
      }
    ],
    "specifications": [
      "100% Algodão",
      "260 × 160 cm",
      "4,20 m",
      "20 un"
    ]
  },
  {
    "id": 1641,
    "name": "Rede Grega",
    "slug": "rede-grega",
    "code": "PROD-163",
    "unit": "unidade",
    "salePrice": 50,
    "promoPrice": null,
    "lowestTierPrice": 50,
    "categoryId": 199,
    "image": "/products/6a0ac242-e504-437c-a0d1-344f75cffb03.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 67
      },
      {
        "minQuantity": 5,
        "unitPrice": 62.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 60
      },
      {
        "minQuantity": 20,
        "unitPrice": 50
      }
    ],
    "specifications": [
      "100% Algodão",
      "275 × 160 cm",
      "4,35 m",
      "até 300 kg",
      "20 un"
    ]
  },
  {
    "id": 1638,
    "name": "Rede Indiana Premium",
    "slug": "rede-indiana-premium",
    "code": "PROD-160",
    "unit": "unidade",
    "salePrice": 85,
    "promoPrice": null,
    "lowestTierPrice": 85,
    "categoryId": 199,
    "image": "/products/98f7dada-e514-4a68-a2a3-e15f5231bd97.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 113.9
      },
      {
        "minQuantity": 5,
        "unitPrice": 106.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 102
      },
      {
        "minQuantity": 20,
        "unitPrice": 85
      }
    ],
    "specifications": [
      "100% Algodão",
      "250 × 160 cm",
      "4,00 m",
      "até 300 kg"
    ]
  },
  {
    "id": 1636,
    "name": "Rede Indiana Simples",
    "slug": "rede-indiana-simples",
    "code": "PROD-158",
    "unit": "unidade",
    "salePrice": 35,
    "promoPrice": null,
    "lowestTierPrice": 35,
    "categoryId": 199,
    "image": "/products/6d0ee066-4de6-4e57-91d0-2b1b92dff89a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 46.9
      },
      {
        "minQuantity": 5,
        "unitPrice": 43.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 42
      },
      {
        "minQuantity": 20,
        "unitPrice": 35
      }
    ],
    "specifications": [
      "100% Algodão",
      "250 × 160 cm",
      "4,00 m",
      "até 180 kg"
    ]
  },
  {
    "id": 1639,
    "name": "Rede Jaguaruana",
    "slug": "rede-jaguaruana",
    "code": "PROD-161",
    "unit": "unidade",
    "salePrice": 50,
    "promoPrice": null,
    "lowestTierPrice": 50,
    "categoryId": 199,
    "image": "/products/e4f08520-f3ee-4d3e-b3ab-34d3617573b1.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 67
      },
      {
        "minQuantity": 5,
        "unitPrice": 62.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 60
      },
      {
        "minQuantity": 20,
        "unitPrice": 50
      }
    ],
    "specifications": [
      "100% Algodão",
      "260 × 145 cm",
      "4,15 m",
      "até 300 kg"
    ]
  },
  {
    "id": 1635,
    "name": "Rede Jeans",
    "slug": "rede-jeans",
    "code": "PROD-157",
    "unit": "unidade",
    "salePrice": 30,
    "promoPrice": null,
    "lowestTierPrice": 30,
    "categoryId": 199,
    "image": "/products/c83b968b-4b13-439a-9776-8788cb0194b0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 40.2
      },
      {
        "minQuantity": 5,
        "unitPrice": 37.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 36
      },
      {
        "minQuantity": 20,
        "unitPrice": 30
      }
    ],
    "specifications": [
      "100% Algodão",
      "250 × 140 cm",
      "3,90 m",
      "até 300 kg"
    ]
  },
  {
    "id": 1646,
    "name": "Rede Jeans Top",
    "slug": "rede-jeans-top",
    "code": "PROD-168",
    "unit": "unidade",
    "salePrice": 55,
    "promoPrice": null,
    "lowestTierPrice": 55,
    "categoryId": 199,
    "image": "/products/a005b4a8-3aa5-4beb-953c-15b7610fd3dc.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 73.7
      },
      {
        "minQuantity": 5,
        "unitPrice": 68.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 66
      },
      {
        "minQuantity": 20,
        "unitPrice": 55
      }
    ],
    "specifications": []
  },
  {
    "id": 1645,
    "name": "Rede Sol a Sol Bordada",
    "slug": "rede-sol-a-sol-bordada",
    "code": "PROD-167",
    "unit": "unidade",
    "salePrice": 68,
    "promoPrice": null,
    "lowestTierPrice": 68,
    "categoryId": 199,
    "image": "/products/8a32a282-21ef-49ef-9161-a66b5b436599.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 91.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 85
      },
      {
        "minQuantity": 10,
        "unitPrice": 81.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 68
      }
    ],
    "specifications": [
      "100% Algodão",
      "265 × 165 cm",
      "4,00 m",
      "até 300 kg"
    ]
  },
  {
    "id": 1642,
    "name": "Rede Sol a Sol estampada",
    "slug": "rede-sol-a-sol-estampada",
    "code": "PROD-164",
    "unit": "unidade",
    "salePrice": 60,
    "promoPrice": null,
    "lowestTierPrice": 60,
    "categoryId": 199,
    "image": "/products/4f0aabfb-b70a-4677-97af-8c656341a724.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 80.4
      },
      {
        "minQuantity": 5,
        "unitPrice": 75
      },
      {
        "minQuantity": 10,
        "unitPrice": 72
      },
      {
        "minQuantity": 20,
        "unitPrice": 60
      }
    ],
    "specifications": [
      "100% Algodão",
      "265 × 165 cm",
      "4,00 m",
      "até 300 kg"
    ]
  },
  {
    "id": 2051,
    "name": "Refil de Almofada | Fibras Silicone",
    "slug": "refil-de-almofada-fibras-silicone",
    "code": "PROD-192",
    "unit": "unidade",
    "salePrice": 8.5,
    "promoPrice": null,
    "lowestTierPrice": 8.5,
    "categoryId": 189,
    "image": "/products/466a3467-b50a-4529-a499-85f8decc1c79.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 11.39
      },
      {
        "minQuantity": 5,
        "unitPrice": 10.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 10.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 8.5
      }
    ],
    "specifications": [
      "20 un"
    ]
  },
  {
    "id": 2046,
    "name": "Saia Box | Casal",
    "slug": "saia-box-casal",
    "code": "PROD-187",
    "unit": "unidade",
    "salePrice": 18,
    "promoPrice": null,
    "lowestTierPrice": 18,
    "categoryId": 187,
    "image": "/products/789e8350-7587-45af-aad4-916c4e7c68c7.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 22.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 21.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 18
      }
    ],
    "specifications": [
      "140 × 200 × 35 cm",
      "50 un"
    ]
  },
  {
    "id": 2048,
    "name": "Saia Box | Queen",
    "slug": "saia-box-queen",
    "code": "PROD-189",
    "unit": "unidade",
    "salePrice": 19,
    "promoPrice": null,
    "lowestTierPrice": 19,
    "categoryId": 187,
    "image": "/products/210803be-25f4-45ca-ba0b-ca1b1ecdbf84.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 25.46
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 19
      }
    ],
    "specifications": [
      "160 × 200 × 35 cm",
      "50 un"
    ]
  },
  {
    "id": 2047,
    "name": "Saia Box | Solteirão",
    "slug": "saia-box-solteirao",
    "code": "PROD-188",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 187,
    "image": "/products/5ed57ff3-f105-40b0-8fb1-7319672a8633.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100 × 200 × 35 cm",
      "50 un"
    ]
  },
  {
    "id": 1120,
    "name": "TAPETE CASINHA",
    "slug": "tapete-casinha",
    "code": "PROD-37",
    "unit": "unidade",
    "salePrice": 4.25,
    "promoPrice": null,
    "lowestTierPrice": 4.25,
    "categoryId": 123,
    "image": "/products/f8516fa7-dc30-471a-a436-dc3570b48ab4.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 5.7
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.31
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.1
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.25
      }
    ],
    "specifications": [
      "100% Algodão",
      "42 × 60 cm",
      "Sortidas",
      "250 un"
    ]
  },
  {
    "id": 1101,
    "name": "TAPETE ESTAMPA GEOMÉTRICA",
    "slug": "tapete-estampa-geometrica",
    "code": "PROD-18",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/c85934ac-1ac9-4991-a91e-04df2b593a7a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm",
      "Sortidas",
      "200 un"
    ]
  },
  {
    "id": 1145,
    "name": "TAPETE JARDIM",
    "slug": "tapete-jardim",
    "code": "PROD-62",
    "unit": "unidade",
    "salePrice": 5,
    "promoPrice": null,
    "lowestTierPrice": 5,
    "categoryId": 123,
    "image": "/products/b6ec94eb-d541-4fd4-b57f-66d9d0e2488f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.7
      },
      {
        "minQuantity": 5,
        "unitPrice": 6.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 6
      },
      {
        "minQuantity": 20,
        "unitPrice": 5
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm",
      "Sortidas",
      "200 un"
    ]
  },
  {
    "id": 1139,
    "name": "TAPETE LISTRADO COM FRANJA",
    "slug": "tapete-listrado-com-franja",
    "code": "PROD-56",
    "unit": "unidade",
    "salePrice": 5.4,
    "promoPrice": null,
    "lowestTierPrice": 5.4,
    "categoryId": 123,
    "image": "/products/c6e0e96c-4ebe-4fae-82eb-6845ae080ea4.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 7.24
      },
      {
        "minQuantity": 5,
        "unitPrice": 6.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 6.48
      },
      {
        "minQuantity": 20,
        "unitPrice": 5.4
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm",
      "Sortidas",
      "200 un"
    ]
  },
  {
    "id": 1131,
    "name": "TAPETE PERNAMBUCANO",
    "slug": "tapete-pernambucano",
    "code": "PROD-48",
    "unit": "unidade",
    "salePrice": 4.6,
    "promoPrice": null,
    "lowestTierPrice": 4.6,
    "categoryId": 123,
    "image": "/products/d3082020-313f-4bfb-a582-cd6db6a0fddd.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.16
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.52
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.6
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm",
      "Sortidas",
      "200 un"
    ]
  },
  {
    "id": 1117,
    "name": "Tapete Atoalhado Cru Listrado",
    "slug": "tapete-atoalhado-cru-listrado",
    "code": "PROD-34",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 123,
    "image": "/products/68f984d3-96c4-4f0f-9048-064c8d8aa50b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "44 × 60 cm"
    ]
  },
  {
    "id": 1126,
    "name": "Tapete Atoalhado com barra",
    "slug": "tapete-atoalhado-com-barra",
    "code": "PROD-43",
    "unit": "unidade",
    "salePrice": 3,
    "promoPrice": null,
    "lowestTierPrice": 3,
    "categoryId": 123,
    "image": "/products/4eaf362d-7a93-4bc3-b525-6e964286a4bc.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.02
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 3
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 68 cm",
      "Sortidas",
      "250 un"
    ]
  },
  {
    "id": 1086,
    "name": "Tapete Atoalhado do Pezinho Xadrez",
    "slug": "tapete-atoalhado-do-pezinho-xadrez",
    "code": "PROD-3",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 123,
    "image": "/products/3ce34c93-e8fd-4f50-9e94-ab3890cc6533.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm"
    ]
  },
  {
    "id": 1153,
    "name": "Tapete Atoalhado do Pezinho com estampa Xadrez",
    "slug": "tapete-atoalhado-do-pezinho-com-estampa-xadrez",
    "code": "PROD-70",
    "unit": "unidade",
    "salePrice": 2.8,
    "promoPrice": null,
    "lowestTierPrice": 2.8,
    "categoryId": 123,
    "image": "/products/dd737faf-e6bf-4ccb-82fa-588f997a4b3a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.36
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm"
    ]
  },
  {
    "id": 1146,
    "name": "Tapete Bem Vindo | Algodão",
    "slug": "tapete-bem-vindo-algodao",
    "code": "PROD-63",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/97699d5b-4cf4-4c42-b073-3d4270ca29be.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm"
    ]
  },
  {
    "id": 1106,
    "name": "Tapete Bem Vindo | Emborrachado",
    "slug": "tapete-bem-vindo-emborrachado",
    "code": "PROD-23",
    "unit": "unidade",
    "salePrice": 9,
    "promoPrice": null,
    "lowestTierPrice": 9,
    "categoryId": 123,
    "image": "/products/7ce4197c-7176-4c6f-8e4d-6481bebf7920.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 12.06
      },
      {
        "minQuantity": 5,
        "unitPrice": 11.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 10.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 9
      }
    ],
    "specifications": [
      "40 × 60 cm"
    ]
  },
  {
    "id": 1110,
    "name": "Tapete Chenil Pintado",
    "slug": "tapete-chenil-pintado",
    "code": "PROD-27",
    "unit": "unidade",
    "salePrice": 3.2,
    "promoPrice": null,
    "lowestTierPrice": 3.2,
    "categoryId": 123,
    "image": "/products/ff5cf130-b72f-4537-b93f-d23476e0fbad.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.29
      },
      {
        "minQuantity": 5,
        "unitPrice": 4
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.84
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.2
      }
    ],
    "specifications": [
      "44 × 60 cm"
    ]
  },
  {
    "id": 1149,
    "name": "Tapete Chenil de Cor Liso",
    "slug": "tapete-chenil-de-cor-liso",
    "code": "PROD-66",
    "unit": "unidade",
    "salePrice": 3.2,
    "promoPrice": null,
    "lowestTierPrice": 3.2,
    "categoryId": 123,
    "image": "/products/b0596c24-6c1c-4c0b-b9c1-b81571180a18.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 4.29
      },
      {
        "minQuantity": 5,
        "unitPrice": 4
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.84
      },
      {
        "minQuantity": 20,
        "unitPrice": 3.2
      }
    ],
    "specifications": [
      "100% Algodão",
      "38 × 50 cm",
      "Sortidas",
      "200 un"
    ]
  },
  {
    "id": 1658,
    "name": "Tapete Cru com Franja PP",
    "slug": "tapete-cru-com-franja-pp",
    "code": "PROD-180",
    "unit": "unidade",
    "salePrice": 2.1,
    "promoPrice": null,
    "lowestTierPrice": 1.85,
    "categoryId": 123,
    "image": "/products/33e17fd2-e733-49bb-a9c2-51369f531ac0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 5,
        "unitPrice": 2.1
      },
      {
        "minQuantity": 10,
        "unitPrice": 1.95
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.85
      }
    ],
    "specifications": []
  },
  {
    "id": 1107,
    "name": "Tapete Dama",
    "slug": "tapete-dama",
    "code": "PROD-24",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/ce7d1048-2b10-4d11-bbc0-6d4d36d5b234.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "42 × 60 cm"
    ]
  },
  {
    "id": 1147,
    "name": "Tapete Especial Liso",
    "slug": "tapete-especial-liso",
    "code": "PROD-64",
    "unit": "unidade",
    "salePrice": 7.5,
    "promoPrice": null,
    "lowestTierPrice": 7.5,
    "categoryId": 123,
    "image": "/products/3a10582d-2046-4114-9441-e50d9ea98d6f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.05
      },
      {
        "minQuantity": 5,
        "unitPrice": 9.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 9
      },
      {
        "minQuantity": 20,
        "unitPrice": 7.5
      }
    ],
    "specifications": [
      "50 × 70 cm"
    ]
  },
  {
    "id": 1099,
    "name": "Tapete Especial Pintado a Mão",
    "slug": "tapete-especial-pintado-a-mao",
    "code": "PROD-16",
    "unit": "unidade",
    "salePrice": 7.85,
    "promoPrice": null,
    "lowestTierPrice": 7.85,
    "categoryId": 123,
    "image": "/products/804497b6-0ed2-49eb-a4f1-65ef41ae9314.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.52
      },
      {
        "minQuantity": 5,
        "unitPrice": 9.81
      },
      {
        "minQuantity": 10,
        "unitPrice": 9.42
      },
      {
        "minQuantity": 20,
        "unitPrice": 7.85
      }
    ],
    "specifications": [
      "50 × 70 cm"
    ]
  },
  {
    "id": 1587,
    "name": "Tapete Geométrico com Nozinho",
    "slug": "tapete-geometrico-com-nozinho",
    "code": "PROD-109",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/7b520497-16d8-4b24-be1e-98344cae2615.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm"
    ]
  },
  {
    "id": 1152,
    "name": "Tapete Listrado Jack",
    "slug": "tapete-listrado-jack",
    "code": "PROD-69",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/65f441e1-0f2d-4a61-b280-543876bdc69c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "44 × 60 cm"
    ]
  },
  {
    "id": 1084,
    "name": "Tapete Listrado PP Liso",
    "slug": "tapete-listrado-pp-liso",
    "code": "PROD-1",
    "unit": "unidade",
    "salePrice": 1.75,
    "promoPrice": null,
    "lowestTierPrice": 1.75,
    "categoryId": 123,
    "image": "/products/c2e87a0d-8b38-47e6-8739-00c9b39f08d3.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 2.35
      },
      {
        "minQuantity": 5,
        "unitPrice": 2.19
      },
      {
        "minQuantity": 10,
        "unitPrice": 2.1
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.75
      }
    ],
    "specifications": [
      "100% Algodão",
      "34 × 52 cm"
    ]
  },
  {
    "id": 1085,
    "name": "Tapete Listrado PP Pintado",
    "slug": "tapete-listrado-pp-pintado",
    "code": "PROD-2",
    "unit": "unidade",
    "salePrice": 1.75,
    "promoPrice": null,
    "lowestTierPrice": 1.75,
    "categoryId": 123,
    "image": "/products/55fa846d-b13a-4ee8-a0b7-018eadcc2452.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 2.35
      },
      {
        "minQuantity": 5,
        "unitPrice": 2.19
      },
      {
        "minQuantity": 10,
        "unitPrice": 2.1
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.75
      }
    ],
    "specifications": []
  },
  {
    "id": 1112,
    "name": "Tapete Macarrão",
    "slug": "tapete-macarrao",
    "code": "PROD-29",
    "unit": "unidade",
    "salePrice": 11,
    "promoPrice": null,
    "lowestTierPrice": 11,
    "categoryId": 123,
    "image": "/products/864e1ffb-b843-4458-8efb-94dd974bcc59.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 14.74
      },
      {
        "minQuantity": 5,
        "unitPrice": 13.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 13.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 11
      }
    ],
    "specifications": [
      "38 × 58 cm"
    ]
  },
  {
    "id": 1141,
    "name": "Tapete Mandacarú",
    "slug": "tapete-mandacaru",
    "code": "PROD-58",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/08667c37-5e33-4ec3-9e4a-7bb9745a7081.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "40 × 60 cm"
    ]
  },
  {
    "id": 1109,
    "name": "Tapete Pernambucano Listrado",
    "slug": "tapete-pernambucano-listrado",
    "code": "PROD-26",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/f6a97beb-bbd6-4f3e-8047-ca954a2d3ab8.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "44 × 60 cm"
    ]
  },
  {
    "id": 1138,
    "name": "Tapete Tira de Malha",
    "slug": "tapete-tira-de-malha",
    "code": "PROD-55",
    "unit": "unidade",
    "salePrice": 2.7,
    "promoPrice": null,
    "lowestTierPrice": 2.7,
    "categoryId": 123,
    "image": "/products/c8ab6c76-7bb0-44a9-8ab5-16bc9e042676.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 3.62
      },
      {
        "minQuantity": 5,
        "unitPrice": 3.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 3.24
      },
      {
        "minQuantity": 20,
        "unitPrice": 2.7
      }
    ],
    "specifications": [
      "40 × 60 cm"
    ]
  },
  {
    "id": 1136,
    "name": "Tapete Xadrez | porta",
    "slug": "tapete-xadrez-porta",
    "code": "PROD-53",
    "unit": "unidade",
    "salePrice": 4.5,
    "promoPrice": null,
    "lowestTierPrice": 4.5,
    "categoryId": 123,
    "image": "/products/77bdc1c0-2f0f-4180-9320-1864e8ddb616.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 6.03
      },
      {
        "minQuantity": 5,
        "unitPrice": 5.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 5.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 4.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "42 × 60 cm"
    ]
  },
  {
    "id": 2059,
    "name": "Toalha Banhão Soares",
    "slug": "toalha-banhao-soares",
    "code": "PROD-200",
    "unit": "unidade",
    "salePrice": 23.8,
    "promoPrice": null,
    "lowestTierPrice": 23.8,
    "categoryId": 193,
    "image": "/products/aec6a762-8a56-4304-a07f-08dfb6a7c74d.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 31.89
      },
      {
        "minQuantity": 5,
        "unitPrice": 29.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 28.56
      },
      {
        "minQuantity": 20,
        "unitPrice": 23.8
      }
    ],
    "specifications": [
      "100% Algodão",
      "80 × 140 cm",
      "400 g",
      "50 un"
    ]
  },
  {
    "id": 2055,
    "name": "Toalha Banhão Sol",
    "slug": "toalha-banhao-sol",
    "code": "PROD-196",
    "unit": "unidade",
    "salePrice": 24,
    "promoPrice": null,
    "lowestTierPrice": 24,
    "categoryId": 193,
    "image": "/products/7f31fbec-bd85-401e-95a7-bae5734dcb64.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 32.16
      },
      {
        "minQuantity": 5,
        "unitPrice": 30
      },
      {
        "minQuantity": 10,
        "unitPrice": 28.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 24
      }
    ],
    "specifications": [
      "80 × 140 cm",
      "400 g",
      "50 un"
    ]
  },
  {
    "id": 2049,
    "name": "Toalha Decore - Salão de Beleza",
    "slug": "toalha-decore-salao-de-beleza",
    "code": "PROD-190",
    "unit": "unidade",
    "salePrice": 7.5,
    "promoPrice": null,
    "lowestTierPrice": 7.5,
    "categoryId": 194,
    "image": "/products/ad8d7c94-80a4-46a1-a915-90c4be33e75a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.05
      },
      {
        "minQuantity": 5,
        "unitPrice": 9.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 9
      },
      {
        "minQuantity": 20,
        "unitPrice": 7.5
      }
    ],
    "specifications": [
      "43 × 70 cm",
      "500 un"
    ]
  },
  {
    "id": 1618,
    "name": "Toalha Lavabo",
    "slug": "toalha-lavabo",
    "code": "PROD-140",
    "unit": "unidade",
    "salePrice": 1.7,
    "promoPrice": null,
    "lowestTierPrice": 1.7,
    "categoryId": 194,
    "image": "/products/de7e8ac0-36aa-496c-ba65-150c5d24d78c.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 2.28
      },
      {
        "minQuantity": 5,
        "unitPrice": 2.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 2.04
      },
      {
        "minQuantity": 20,
        "unitPrice": 1.7
      }
    ],
    "specifications": [
      "100% Algodão",
      "26 × 46 cm"
    ]
  },
  {
    "id": 2043,
    "name": "Toalha Manoela - Salão de Beleza",
    "slug": "toalha-manoela-salao-de-beleza",
    "code": "PROD-184",
    "unit": "unidade",
    "salePrice": 6.5,
    "promoPrice": null,
    "lowestTierPrice": 6.5,
    "categoryId": 194,
    "image": "/products/350d0b8a-a39a-4171-be97-9bb7149db112.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 8.71
      },
      {
        "minQuantity": 5,
        "unitPrice": 8.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 7.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 6.5
      }
    ],
    "specifications": [
      "42 × 65 cm",
      "100 g",
      "500 un"
    ]
  },
  {
    "id": 2041,
    "name": "Toalha Pop de Banho Listrada",
    "slug": "toalha-pop-de-banho-listrada",
    "code": "PROD-182",
    "unit": "unidade",
    "salePrice": 8.2,
    "promoPrice": null,
    "lowestTierPrice": 8.2,
    "categoryId": 193,
    "image": "/products/ba2c7a9c-d062-4292-966d-1668e1e30fc2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 10.99
      },
      {
        "minQuantity": 5,
        "unitPrice": 10.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 9.84
      },
      {
        "minQuantity": 20,
        "unitPrice": 8.2
      }
    ],
    "specifications": [
      "70 × 140 cm",
      "Sortidas",
      "80 un"
    ]
  },
  {
    "id": 1617,
    "name": "Toalha Social Com franja.",
    "slug": "toalha-social-com-franja",
    "code": "PROD-139",
    "unit": "unidade",
    "salePrice": 1,
    "promoPrice": null,
    "lowestTierPrice": 1,
    "categoryId": 194,
    "image": "/products/2edfd2f6-6d74-45e2-bfd0-601202a7b294.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 1.34
      },
      {
        "minQuantity": 5,
        "unitPrice": 1.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 1.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 1
      }
    ],
    "specifications": [
      "100% Algodão",
      "23 × 98 cm",
      "1000 un"
    ]
  },
  {
    "id": 2042,
    "name": "Toalha de Banho Amanda",
    "slug": "toalha-de-banho-amanda",
    "code": "PROD-183",
    "unit": "unidade",
    "salePrice": 11,
    "promoPrice": null,
    "lowestTierPrice": 11,
    "categoryId": 193,
    "image": "/products/f0726a19-39c8-4f45-93a2-eef01ee29d1b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 14.74
      },
      {
        "minQuantity": 5,
        "unitPrice": 13.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 13.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 11
      }
    ],
    "specifications": [
      "100% Algodão",
      "65 × 120 cm",
      "200 g",
      "50 un"
    ]
  },
  {
    "id": 1594,
    "name": "Toalha de Banho Bola Gigante",
    "slug": "toalha-de-banho-bola-gigante",
    "code": "PROD-116",
    "unit": "unidade",
    "salePrice": 18,
    "promoPrice": null,
    "lowestTierPrice": 18,
    "categoryId": 193,
    "image": "/products/c0b806d0-fbb1-410f-9067-82ff341d12d0.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.12
      },
      {
        "minQuantity": 5,
        "unitPrice": 22.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 21.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 18
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 180 cm",
      "370 g"
    ]
  },
  {
    "id": 1609,
    "name": "Toalha de Banho Colore",
    "slug": "toalha-de-banho-colore",
    "code": "PROD-131",
    "unit": "unidade",
    "salePrice": 28,
    "promoPrice": null,
    "lowestTierPrice": 28,
    "categoryId": 193,
    "image": "/products/eca6f4d6-8611-498f-b74b-0a68f485219b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 37.52
      },
      {
        "minQuantity": 5,
        "unitPrice": 35
      },
      {
        "minQuantity": 10,
        "unitPrice": 33.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 28
      }
    ],
    "specifications": [
      "100% Algodão",
      "500 g"
    ]
  },
  {
    "id": 1605,
    "name": "Toalha de Banho Dubai",
    "slug": "toalha-de-banho-dubai",
    "code": "PROD-127",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 193,
    "image": "/products/802de887-23d4-4f4c-a307-98303425c830.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "280 g"
    ]
  },
  {
    "id": 1608,
    "name": "Toalha de Banho D’Fiore",
    "slug": "toalha-de-banho-d-fiore",
    "code": "PROD-130",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 193,
    "image": "/products/18ced934-0902-468a-a174-ca7e1e037847.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 140 cm",
      "300 g"
    ]
  },
  {
    "id": 2057,
    "name": "Toalha de Banho Esmeralda",
    "slug": "toalha-de-banho-esmeralda",
    "code": "PROD-198",
    "unit": "unidade",
    "salePrice": 22.75,
    "promoPrice": null,
    "lowestTierPrice": 22.75,
    "categoryId": 193,
    "image": "/products/7040cce5-6828-43ed-8a7d-457238ef8c7b.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 30.49
      },
      {
        "minQuantity": 5,
        "unitPrice": 28.44
      },
      {
        "minQuantity": 10,
        "unitPrice": 27.3
      },
      {
        "minQuantity": 20,
        "unitPrice": 22.75
      }
    ],
    "specifications": [
      "75 × 145 cm",
      "60 un"
    ]
  },
  {
    "id": 1600,
    "name": "Toalha de Banho Florença",
    "slug": "toalha-de-banho-florenca",
    "code": "PROD-122",
    "unit": "unidade",
    "salePrice": 28,
    "promoPrice": null,
    "lowestTierPrice": 28,
    "categoryId": 193,
    "image": "/products/e2f9723c-a11e-42e3-a4a5-f08170757f52.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 37.52
      },
      {
        "minQuantity": 5,
        "unitPrice": 35
      },
      {
        "minQuantity": 10,
        "unitPrice": 33.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 28
      }
    ],
    "specifications": [
      "100% Algodão",
      "500 g"
    ]
  },
  {
    "id": 1607,
    "name": "Toalha de Banho Fofura",
    "slug": "toalha-de-banho-fofura",
    "code": "PROD-129",
    "unit": "unidade",
    "salePrice": 25.5,
    "promoPrice": null,
    "lowestTierPrice": 25.5,
    "categoryId": 193,
    "image": "/products/847c9415-8788-4517-8c63-070cdf7dce55.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 34.17
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 30.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 25.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "500 g"
    ]
  },
  {
    "id": 1610,
    "name": "Toalha de Banho Folha",
    "slug": "toalha-de-banho-folha",
    "code": "PROD-132",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 193,
    "image": "/products/121f786f-f944-4e25-ba0e-ef74a0320edb.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 140 cm"
    ]
  },
  {
    "id": 1599,
    "name": "Toalha de Banho Gigante",
    "slug": "toalha-de-banho-gigante",
    "code": "PROD-121",
    "unit": "unidade",
    "salePrice": 18.5,
    "promoPrice": null,
    "lowestTierPrice": 18.5,
    "categoryId": 193,
    "image": "/products/55068c2f-65b6-45dd-ba7b-2d3dc2ce7c9e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.79
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 18.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "80 × 180 cm",
      "370 g"
    ]
  },
  {
    "id": 2060,
    "name": "Toalha de Banho Golden",
    "slug": "toalha-de-banho-golden",
    "code": "PROD-201",
    "unit": "unidade",
    "salePrice": 31.5,
    "promoPrice": null,
    "lowestTierPrice": 31.5,
    "categoryId": 193,
    "image": "/products/95fc474d-5b92-4dc1-83e4-21f578bb3acb.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 42.21
      },
      {
        "minQuantity": 5,
        "unitPrice": 39.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 37.8
      },
      {
        "minQuantity": 20,
        "unitPrice": 31.5
      }
    ],
    "specifications": [
      "75 × 150 cm",
      "500 g",
      "100 un"
    ]
  },
  {
    "id": 2050,
    "name": "Toalha de Banho Hotel",
    "slug": "toalha-de-banho-hotel",
    "code": "PROD-191",
    "unit": "unidade",
    "salePrice": 11,
    "promoPrice": null,
    "lowestTierPrice": 11,
    "categoryId": 193,
    "image": "/products/ffe96090-26c5-413a-b54d-1cfac40ec71f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 14.74
      },
      {
        "minQuantity": 5,
        "unitPrice": 13.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 13.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 11
      }
    ],
    "specifications": [
      "65 × 120 cm",
      "50 un"
    ]
  },
  {
    "id": 1601,
    "name": "Toalha de Banho Infantil",
    "slug": "toalha-de-banho-infantil",
    "code": "PROD-123",
    "unit": "unidade",
    "salePrice": 15.5,
    "promoPrice": null,
    "lowestTierPrice": 15.5,
    "categoryId": 193,
    "image": "/products/99eb5334-493d-4d82-8c01-20afab6d35b3.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.77
      },
      {
        "minQuantity": 5,
        "unitPrice": 19.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 18.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 15.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 110 cm"
    ]
  },
  {
    "id": 1614,
    "name": "Toalha de Banho Isa",
    "slug": "toalha-de-banho-isa",
    "code": "PROD-136",
    "unit": "unidade",
    "salePrice": 9.5,
    "promoPrice": null,
    "lowestTierPrice": 9.5,
    "categoryId": 193,
    "image": "/products/990b3ea1-9edb-4da8-96ca-ffe00487ba62.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 12.73
      },
      {
        "minQuantity": 5,
        "unitPrice": 11.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 11.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 9.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "65 × 120 cm",
      "180 g"
    ]
  },
  {
    "id": 1611,
    "name": "Toalha de Banho Jade",
    "slug": "toalha-de-banho-jade",
    "code": "PROD-133",
    "unit": "unidade",
    "salePrice": 21,
    "promoPrice": null,
    "lowestTierPrice": 21,
    "categoryId": 193,
    "image": "/products/ef31a83d-1dd9-44bf-99d1-dea43531308f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 28.14
      },
      {
        "minQuantity": 5,
        "unitPrice": 26.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 25.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 21
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 150 cm",
      "280 g"
    ]
  },
  {
    "id": 1615,
    "name": "Toalha de Banho Jardim",
    "slug": "toalha-de-banho-jardim",
    "code": "PROD-137",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 193,
    "image": "/products/d8e5da5b-4dde-4a22-88ae-e8b5b3a415ff.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 140 cm",
      "280 g"
    ]
  },
  {
    "id": 1595,
    "name": "Toalha de Banho Luna",
    "slug": "toalha-de-banho-luna",
    "code": "PROD-117",
    "unit": "unidade",
    "salePrice": 12,
    "promoPrice": null,
    "lowestTierPrice": 12,
    "categoryId": 193,
    "image": "/products/e888bfe4-a04e-4345-88bd-65b65bed3756.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 16.08
      },
      {
        "minQuantity": 5,
        "unitPrice": 15
      },
      {
        "minQuantity": 10,
        "unitPrice": 14.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 12
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 135 cm"
    ]
  },
  {
    "id": 1596,
    "name": "Toalha de Banho Luxo",
    "slug": "toalha-de-banho-luxo",
    "code": "PROD-118",
    "unit": "unidade",
    "salePrice": 14.5,
    "promoPrice": null,
    "lowestTierPrice": 14.5,
    "categoryId": 193,
    "image": "/products/685d298d-7b64-4167-a582-acaf6f4c4ea2.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 19.43
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 17.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 14.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 150 cm"
    ]
  },
  {
    "id": 1597,
    "name": "Toalha de Banho Mahatan",
    "slug": "toalha-de-banho-mahatan",
    "code": "PROD-119",
    "unit": "unidade",
    "salePrice": 18.5,
    "promoPrice": null,
    "lowestTierPrice": 18.5,
    "categoryId": 193,
    "image": "/products/71e35db0-4095-4a90-b0f8-6fe8c0355334.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 24.79
      },
      {
        "minQuantity": 5,
        "unitPrice": 23.13
      },
      {
        "minQuantity": 10,
        "unitPrice": 22.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 18.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "370 g"
    ]
  },
  {
    "id": 2052,
    "name": "Toalha de Banho Manoela",
    "slug": "toalha-de-banho-manoela",
    "code": "PROD-193",
    "unit": "unidade",
    "salePrice": 19.5,
    "promoPrice": null,
    "lowestTierPrice": 19.5,
    "categoryId": 193,
    "image": "/products/619f7a50-7e74-4f78-bd14-13ce08dfe690.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 26.13
      },
      {
        "minQuantity": 5,
        "unitPrice": 24.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 23.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 19.5
      }
    ],
    "specifications": [
      "68 × 135 cm",
      "50 un"
    ]
  },
  {
    "id": 1613,
    "name": "Toalha de Banho Monique",
    "slug": "toalha-de-banho-monique",
    "code": "PROD-135",
    "unit": "unidade",
    "salePrice": 23.5,
    "promoPrice": null,
    "lowestTierPrice": 23.5,
    "categoryId": 193,
    "image": "/products/1ca56491-29ad-47ab-beea-eac225109fa5.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 31.49
      },
      {
        "minQuantity": 5,
        "unitPrice": 29.38
      },
      {
        "minQuantity": 10,
        "unitPrice": 28.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 23.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 150 cm",
      "420 g"
    ]
  },
  {
    "id": 1603,
    "name": "Toalha de Banho Nobre",
    "slug": "toalha-de-banho-nobre",
    "code": "PROD-125",
    "unit": "unidade",
    "salePrice": 22,
    "promoPrice": null,
    "lowestTierPrice": 22,
    "categoryId": 193,
    "image": "/products/14cca3d1-4682-4c86-8650-c3e0579575c8.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 29.48
      },
      {
        "minQuantity": 5,
        "unitPrice": 27.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 26.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 22
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 150 cm"
    ]
  },
  {
    "id": 1606,
    "name": "Toalha de Banho Ouro",
    "slug": "toalha-de-banho-ouro",
    "code": "PROD-128",
    "unit": "unidade",
    "salePrice": 25.5,
    "promoPrice": null,
    "lowestTierPrice": 25.5,
    "categoryId": 193,
    "image": "/products/b15e5cfc-9939-4e62-9d75-784139326aaf.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 34.17
      },
      {
        "minQuantity": 5,
        "unitPrice": 31.88
      },
      {
        "minQuantity": 10,
        "unitPrice": 30.6
      },
      {
        "minQuantity": 20,
        "unitPrice": 25.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "75 × 150 cm"
    ]
  },
  {
    "id": 1604,
    "name": "Toalha de Banho Paixão",
    "slug": "toalha-de-banho-paixao",
    "code": "PROD-126",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 193,
    "image": "/products/4665b2ec-0818-457b-8223-a90b7663c91f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 140 cm"
    ]
  },
  {
    "id": 1602,
    "name": "Toalha de Banho Praia",
    "slug": "toalha-de-banho-praia",
    "code": "PROD-124",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 193,
    "image": "/products/e4c9208a-b218-41ba-a96a-32e3c8955939.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "80 × 180 cm",
      "250 g"
    ]
  },
  {
    "id": 1598,
    "name": "Toalha de Banho Serena",
    "slug": "toalha-de-banho-serena",
    "code": "PROD-120",
    "unit": "unidade",
    "salePrice": 17,
    "promoPrice": null,
    "lowestTierPrice": 17,
    "categoryId": 193,
    "image": "/products/20cae348-145a-4d44-b6ed-2dc18cf01ab3.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 22.78
      },
      {
        "minQuantity": 5,
        "unitPrice": 21.25
      },
      {
        "minQuantity": 10,
        "unitPrice": 20.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 17
      }
    ],
    "specifications": [
      "100% Algodão",
      "300 g"
    ]
  },
  {
    "id": 1612,
    "name": "Toalha de Banho Transfer",
    "slug": "toalha-de-banho-transfer",
    "code": "PROD-134",
    "unit": "unidade",
    "salePrice": 12.5,
    "promoPrice": null,
    "lowestTierPrice": 12.5,
    "categoryId": 193,
    "image": "/products/e33d40d2-d02a-4e11-87c0-1cbe3b98b35f.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 16.75
      },
      {
        "minQuantity": 5,
        "unitPrice": 15.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 15
      },
      {
        "minQuantity": 20,
        "unitPrice": 12.5
      }
    ],
    "specifications": [
      "100% Algodão",
      "65 × 120 cm",
      "240 g"
    ]
  },
  {
    "id": 1616,
    "name": "Toalha de Banho Veneza",
    "slug": "toalha-de-banho-veneza",
    "code": "PROD-138",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 193,
    "image": "/products/d5e71b5b-cc29-4509-9b2d-e4906f5154ec.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": [
      "100% Algodão",
      "70 × 140 cm"
    ]
  },
  {
    "id": 1619,
    "name": "Toalha de Rosto Amanda",
    "slug": "toalha-de-rosto-amanda",
    "code": "PROD-141",
    "unit": "unidade",
    "salePrice": 6,
    "promoPrice": null,
    "lowestTierPrice": 6,
    "categoryId": 194,
    "image": "/products/c045f547-71df-44fd-a413-07c6b72e1c8e.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 8.04
      },
      {
        "minQuantity": 5,
        "unitPrice": 7.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 7.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 6
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 60 cm"
    ]
  },
  {
    "id": 1620,
    "name": "Toalha de Rosto Hotel",
    "slug": "toalha-de-rosto-hotel",
    "code": "PROD-142",
    "unit": "unidade",
    "salePrice": 7,
    "promoPrice": null,
    "lowestTierPrice": 7,
    "categoryId": 194,
    "image": "/products/04a5d671-0b1b-4fd5-a32c-69da761cf6ec.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 9.38
      },
      {
        "minQuantity": 5,
        "unitPrice": 8.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 8.4
      },
      {
        "minQuantity": 20,
        "unitPrice": 7
      }
    ],
    "specifications": [
      "100% Algodão",
      "40 × 65 cm"
    ]
  },
  {
    "id": 2054,
    "name": "Toalha de Rosto Jardim",
    "slug": "toalha-de-rosto-jardim",
    "code": "PROD-195",
    "unit": "unidade",
    "salePrice": 6.1,
    "promoPrice": null,
    "lowestTierPrice": 6.1,
    "categoryId": 194,
    "image": "/products/b322f6d4-ae24-4903-a8a4-561c74215e72.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 8.17
      },
      {
        "minQuantity": 5,
        "unitPrice": 7.63
      },
      {
        "minQuantity": 10,
        "unitPrice": 7.32
      },
      {
        "minQuantity": 20,
        "unitPrice": 6.1
      }
    ],
    "specifications": [
      "43 × 66 cm",
      "120 un"
    ]
  },
  {
    "id": 1581,
    "name": "Toalha em Microfibra 60x80cm",
    "slug": "toalha-em-microfibra-60x80cm",
    "code": "PROD-103",
    "unit": "unidade",
    "salePrice": 6,
    "promoPrice": null,
    "lowestTierPrice": 6,
    "categoryId": 122,
    "image": "/products/47a0d05b-ab30-4f86-b30d-7d9877cd666a.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 8.04
      },
      {
        "minQuantity": 5,
        "unitPrice": 7.5
      },
      {
        "minQuantity": 10,
        "unitPrice": 7.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 6
      }
    ],
    "specifications": [
      "60 × 80 cm"
    ]
  },
  {
    "id": 1577,
    "name": "Travasseiro Eco-Pluma",
    "slug": "travasseiro-eco-pluma",
    "code": "PROD-99",
    "unit": "unidade",
    "salePrice": 16,
    "promoPrice": null,
    "lowestTierPrice": 16,
    "categoryId": 189,
    "image": "/products/3aee1f64-1a95-4dd2-b6c0-4218d82a9770.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 21.44
      },
      {
        "minQuantity": 5,
        "unitPrice": 20
      },
      {
        "minQuantity": 10,
        "unitPrice": 19.2
      },
      {
        "minQuantity": 20,
        "unitPrice": 16
      }
    ],
    "specifications": [
      "70 × 50 cm",
      "Plumas de Ganso Sintética",
      "Sim"
    ]
  },
  {
    "id": 1578,
    "name": "Travesseiro Vera",
    "slug": "travesseiro-vera",
    "code": "PROD-100",
    "unit": "unidade",
    "salePrice": 15,
    "promoPrice": null,
    "lowestTierPrice": 15,
    "categoryId": 189,
    "image": "/products/57bdb5a5-3df7-426d-9267-499a4c0627c8.webp",
    "minimumQuantity": 1,
    "priceTiers": [
      {
        "minQuantity": 1,
        "unitPrice": 20.1
      },
      {
        "minQuantity": 5,
        "unitPrice": 18.75
      },
      {
        "minQuantity": 10,
        "unitPrice": 18
      },
      {
        "minQuantity": 20,
        "unitPrice": 15
      }
    ],
    "specifications": []
  }
];
