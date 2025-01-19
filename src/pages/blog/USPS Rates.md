---
layout: "../../layouts/BlogPostLayout.astro"
title: Building an Astro Post Tag Component
date: 2023-12-06
author: Anna Dixon
image: { src: "/images/post-6.jpg", alt: "A picture of a coder" }
description: In this project, we’ll build out a custom Astro component for post tags.
draft: false
category: Artical
---

# USPS Rates (Domestic)

# Rate Indicators

```
Rate Indicator

Legal Flat Rate Envelope
Medium Flat Rate Box
Flat Rate Envelope
Padded Flat Rate Envelope
Small Flat Rate Box
Large Flat Rate Box
Large Flat Rate Box APO/FPO/DPO

Single Piece
Cubic Soft Pack Tier 1
Cubic Soft Pack Tier 2
Cubic Soft Pack Tier 3
Cubic Soft Pack Tier 4
Cubic Soft Pack Tier 5
Cubic Soft Pack Tier 6
Cubic Soft Pack Tier 7
Cubic Soft Pack Tier 8
Cubic Soft Pack Tier 9
Cubic Soft Pack Tier 10
Oversized
Dimensional Nonrectangular
Dimensional Rectangular
```

# USPS at Max dimension and weight

### Request

```jsx
{
    "originZIPCode": "10038",
    "destinationZIPCode": "10017",
    "weight": 70,
    "length":26,
    "width": 26,
    "height": 26,
    "mailClasses": [
        "PRIORITY_MAIL",
        "PRIORITY_MAIL_EXPRESS",
        "USPS_GROUND_ADVANTAGE"
    ],
    "priceType": "CONTRACT",
    "mailingDate": "2024-11-27",
    "accountType": "PERMIT",
    "accountNumber": "79120"
}
```

### Response

```json
{
  "rateOptions": [
    {
      "totalBasePrice": 113.62,
      "rates": [
        {
          "SKU": "DUXO0XXXXC01700",
          "description": "USPS Ground Advantage Nonmachinable Oversized",
          "priceType": "COMMERCIAL",
          "price": 91.62,
          "weight": 70,
          "dimWeight": 106,
          "fees": [
            {
              "name": "Nonstandard Length > 22",
              "SKU": "D811XUXXXXX0000",
              "price": 4
            },
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XUXXXXX0000",
              "price": 18
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage",
          "productDefinition": "2-5 day specific delivery, perfect for packages weighing 1 ounce up to 70 lbs"
        }
      ]
    }
  ]
}
```

# 21 dimension and different weight (Same for dimension up to 14 inches )

## At weight 70 pound

### Request

```json
{
  "originZIPCode": "10038",
  "destinationZIPCode": "10017",
  "weight": 70,
  "width": 21,
  "length": 21,
  "height": 21,
  "mailClasses": [
    "PRIORITY_MAIL",
    "PRIORITY_MAIL_EXPRESS",
    "USPS_GROUND_ADVANTAGE"
  ],
  "priceType": "CONTRACT",
  "mailingDate": "2024-11-27",
  "accountType": "PERMIT",
  "accountNumber": "79120"
}
```

### Response

```json
{
  "rateOptions": [
    {
      "totalBasePrice": 84.45,
      "rates": [
        {
          "SKU": "DPXX0XXXXC01700",
          "description": "Priority Mail Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 54.45,
          "weight": 70,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 233.5,
      "rates": [
        {
          "SKU": "DEXX0XXXXC01700",
          "description": "Priority Mail Express Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 203.5,
          "weight": 70,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 65.46,
      "rates": [
        {
          "SKU": "DUXP0XXXXC01700",
          "description": "USPS Ground Advantage Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 47.46,
          "weight": 70,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XUXXXXX0000",
              "price": 18
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage",
          "productDefinition": "2-5 day specific delivery, perfect for packages weighing 1 ounce up to 70 lbs"
        }
      ]
    }
  ]
}
```

## At weight 50-1

### Resquest

```json
{
  "originZIPCode": "10038",
  "destinationZIPCode": "10017",
  "weight": 25,
  "width": 21,
  "length": 21,
  "height": 21,
  "mailClasses": [
    "PRIORITY_MAIL",
    "PRIORITY_MAIL_EXPRESS",
    "USPS_GROUND_ADVANTAGE"
  ],
  "priceType": "CONTRACT",
  "mailingDate": "2024-11-27",
  "accountType": "PERMIT",
  "accountNumber": "79120"
}
```

### Response

```json
{
  "rateOptions": [
    {
      "totalBasePrice": 77.63,
      "rates": [
        {
          "SKU": "DPXR0XXXXC01560",
          "description": "Priority Mail Nonmachinable Dimensional Rectangular",
          "priceType": "COMMERCIAL",
          "price": 47.63,
          "weight": 25,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 70.72,
      "rates": [
        {
          "SKU": "DPXR0XXXXC01440",
          "description": "Priority Mail Nonmachinable Dimensional Nonrectangular",
          "priceType": "COMMERCIAL",
          "price": 40.72,
          "weight": 25,
          "dimWeight": 44,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 195.95,
      "rates": [
        {
          "SKU": "DEXR0XXXXC01560",
          "description": "Priority Mail Express Nonmachinable Dimensional Rectangular",
          "priceType": "COMMERCIAL",
          "price": 165.95,
          "weight": 25,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 163.45,
      "rates": [
        {
          "SKU": "DEXR0XXXXC01440",
          "description": "Priority Mail Express Nonmachinable Dimensional Nonrectangular",
          "priceType": "COMMERCIAL",
          "price": 133.45,
          "weight": 25,
          "dimWeight": 44,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XXNXXXX0000",
              "price": 30
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 59.56,
      "rates": [
        {
          "SKU": "DUXR0XXXXC01560",
          "description": "USPS Ground Advantage Nonmachinable Dimensional Rectangular",
          "priceType": "COMMERCIAL",
          "price": 41.56,
          "weight": 25,
          "dimWeight": 56,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XUXXXXX0000",
              "price": 18
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage",
          "productDefinition": "2-5 day specific delivery, perfect for packages weighing 1 ounce up to 70 lbs"
        }
      ]
    },
    {
      "totalBasePrice": 53.59,
      "rates": [
        {
          "SKU": "DUXR0XXXXC01440",
          "description": "USPS Ground Advantage Nonmachinable Dimensional Nonrectangular",
          "priceType": "COMMERCIAL",
          "price": 35.59,
          "weight": 25,
          "dimWeight": 44,
          "fees": [
            {
              "name": "Nonstandard Volume > 2 cu ft",
              "SKU": "D813XUXXXXX0000",
              "price": 18
            }
          ],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage",
          "productDefinition": "2-5 day specific delivery, perfect for packages weighing 1 ounce up to 70 lbs"
        }
      ]
    }
  ]
}
```

# At dimension 5 and weight 5 (Same for almost all)

### Request

```json
{
  "originZIPCode": "10038",
  "destinationZIPCode": "10017",
  "weight": 5,
  "width": 5,
  "length": 5,
  "height": 5,
  "mailClasses": [
    "PRIORITY_MAIL",
    "PRIORITY_MAIL_EXPRESS",
    "USPS_GROUND_ADVANTAGE"
  ],
  "priceType": "CONTRACT",
  "mailingDate": "2024-11-27",
  "accountType": "PERMIT",
  "accountNumber": "79120"
}
```

### Response

```json
{
  "rateOptions": [
    {
      "totalBasePrice": 9.8,
      "rates": [
        {
          "SKU": "DPFE2XXXXC00700",
          "description": "Priority Mail Padded Flat Rate Envelope",
          "priceType": "COMMERCIAL",
          "price": 9.8,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Padded Flat Rate Envelope",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 9.8,
      "rates": [
        {
          "SKU": "DPFE2XXXXC00700",
          "description": "Priority Mail Nonmachinable Padded Flat Rate Envelope",
          "priceType": "COMMERCIAL",
          "price": 9.8,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Padded Flat Rate Envelope",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 16.85,
      "rates": [
        {
          "SKU": "DPFB1XXXXC00700",
          "description": "Priority Mail Nonmachinable Medium Flat Rate Box",
          "priceType": "COMMERCIAL",
          "price": 16.85,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Medium Flat Rate Box",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 23.05,
      "rates": [
        {
          "SKU": "DPFB0XXXXC00700",
          "description": "Priority Mail Nonmachinable Large Flat Rate Box",
          "priceType": "COMMERCIAL",
          "price": 23.05,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Large Flat Rate Box",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 21.35,
      "rates": [
        {
          "SKU": "DPFB3XXXXC00700",
          "description": "Priority Mail Nonmachinable Large Flat Rate Box APO/FPO/DPO",
          "priceType": "COMMERCIAL",
          "price": 21.35,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Large Flat Rate APO/FPO/DPO",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 9.7,
      "rates": [
        {
          "SKU": "DPXX0XXXXC01050",
          "description": "Priority Mail Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 9.7,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail",
          "productDefinition": "1-3 day specific delivery to all U.S. states and territories"
        }
      ]
    },
    {
      "totalBasePrice": 8.31,
      "rates": [
        {
          "SKU": "DPUX1XXXXC01200",
          "description": "Priority Mail Nonmachinable Cubic Non-Soft Pack Tier 1",
          "priceType": "COMMERCIAL",
          "price": 8.31,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Cubic",
          "productDefinition": "1-3 day specific delivery for packages or padded envelopes weighing up to 20 lbs and measuring less than or equal to half a cubic foot in combined dimensions"
        }
      ]
    },
    {
      "totalBasePrice": 8.31,
      "rates": [
        {
          "SKU": "DPUX1XXXXC01200",
          "description": "Priority Mail Nonmachinable Cubic Soft Pack Tier 1",
          "priceType": "COMMERCIAL",
          "price": 8.31,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL",
          "zone": "01",
          "productName": "Priority Mail Cubic",
          "productDefinition": "1-3 day specific delivery for packages or padded envelopes weighing up to 20 lbs and measuring less than or equal to half a cubic foot in combined dimensions"
        }
      ]
    },
    {
      "totalBasePrice": 28.4,
      "rates": [
        {
          "SKU": "DEFE2XXXXC00700",
          "description": "Priority Mail Express Padded Flat Rate Envelope",
          "priceType": "COMMERCIAL",
          "price": 28.4,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express Padded Flat Rate Envelope",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 28.4,
      "rates": [
        {
          "SKU": "DEFE2XXXXC00700",
          "description": "Priority Mail Express Nonmachinable Padded Flat Rate Envelope",
          "priceType": "COMMERCIAL",
          "price": 28.4,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express Padded Flat Rate Envelope",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 29.85,
      "rates": [
        {
          "SKU": "DEXX0XXXXC01050",
          "description": "Priority Mail Express Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 29.85,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "PRIORITY_MAIL_EXPRESS",
          "zone": "01",
          "productName": "Priority Mail Express",
          "productDefinition": "1-2 day specific guaranteed delivery by 6:00pm local delivery time"
        }
      ]
    },
    {
      "totalBasePrice": 8.44,
      "rates": [
        {
          "SKU": "DUXP0XXXXC01050",
          "description": "USPS Ground Advantage Nonmachinable Single-piece",
          "priceType": "COMMERCIAL",
          "price": 8.44,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage",
          "productDefinition": "2-5 day specific delivery, perfect for packages weighing 1 ounce up to 70 lbs"
        }
      ]
    },
    {
      "totalBasePrice": 6.97,
      "rates": [
        {
          "SKU": "DUUP1XXXXC01200",
          "description": "USPS Ground Advantage Nonmachinable Cubic Non-Soft Pack Tier 1",
          "priceType": "COMMERCIAL",
          "price": 6.97,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage Cubic",
          "productDefinition": "2-5 day specific delivery for packages or padded envelopes weighing up to 20 lbs and measuring less than or equal to half a cubic foot in combined dimensions"
        }
      ]
    },
    {
      "totalBasePrice": 6.97,
      "rates": [
        {
          "SKU": "DUUP1XXXXC01200",
          "description": "USPS Ground Advantage Nonmachinable Cubic Soft Pack Tier 1",
          "priceType": "COMMERCIAL",
          "price": 6.97,
          "weight": 5,
          "dimWeight": 0,
          "fees": [],
          "startDate": "2024-10-06",
          "endDate": "",
          "mailClass": "USPS_GROUND_ADVANTAGE",
          "zone": "01",
          "productName": "USPS Ground Advantage Cubic",
          "productDefinition": "2-5 day specific delivery for packages or padded envelopes weighing up to 20 lbs and measuring less than or equal to half a cubic foot in combined dimensions"
        }
      ]
    }
  ]
}
```
