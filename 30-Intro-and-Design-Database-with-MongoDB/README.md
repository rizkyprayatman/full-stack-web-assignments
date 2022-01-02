## Soal 1

Relasi One to one <br>

<b>Skema data</b>

```
{
  "_id": "ObjectId('AAA')",
  "fullName": "Acarakala",
  "email": "acarakala01@mail.com",
  "phoneNumber": "08115232151"
}
```

## Soal 2

Relasi One to few <br>

<b>Skema Data</b>

```
{
  "_id": "ObjectId('AAB')",
  "fullName": "Acarakala",
  "phoneNumber": "08115232151",
  "address": [
    { "street": "jalan margo utomo", "city": "yogyakarta", "cc": "indonesia" },
    { "street": "jalan malioboro", "city": "yogyakarta", "cc": "indonesia" }
  ]
}
```

## Soal 3

Relasi One to many <br>

<b>Skema data</b>

```
{
    "_id": "ObjectId('AAC')",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectId('AA1')", "ObjectId('AA2')"]
},

{
    "_id": "ObjectId('AA1')",
    "nameVariant": "kaos Polos Hitam",
    "color": "Hitam",
    "qty": 12,
    "price": 99000
},

{
    "_id": "ObjectId('AA2')",
    "nameVariant": "kaos Polos Navy",
    "color": "Navy",
    "qty": 10,
    "price": 99000
}
```

## Soal 4

Relasi many to many

<b>Skema data film</b>

```
    {
        "_id": ObjectId("AAA1"),
        "filmName": "Venom 2"
    },
    {
        "_id": ObjectId("AAA2"),
        "filmName": "Spiderman No Way Home"
    }
```

<b>Skema data cinema</b>

```
{
    "_id": "ObjectId('CCC1')",
    "cinemaName": "CGF",
    "location": "Pondok Indah Mall",
    "films": [
        {
            "_id":"ObjectId('AAA1')",
            "film": "Venom 2"
        },
        {
            "_id":"ObjectId('AAA2')",
            "film": "Spiderman No Way Home"
        }
    ]
},
{
    "_id": "ObjectId('CCC1')",
    "cinemaName": "Cinema31",
    "location": "Mall Kelapa Gading",
    "films": [
        {
            "_id":"ObjectId('AAA1')",
            "film": "Venom 2"
        },
        {
            "_id":"ObjectId('AAA2')",
            "film": "Spiderman No Way Home"
        }
    ]
}
```
