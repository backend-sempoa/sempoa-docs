---
sidebar_position: 3
---

# Jurnal Umum

## Deskripsi

Berikut adalah API untuk mendapatkan atau menyimpan data transaksi Jurnal Umum.

## Base URL

> `https://sempoa.id/api/integration`

## GET `/jurnal`

| Parameter | Wajib | Tipe Data | Catatan                                                   |
| --------- | :---: | --------- | --------------------------------------------------------- |
| limit     |  ❌   | Integer   | Membatasi jumlah data keluaran. <br /> Default: 10        |
| page      |  ❌   | Integer   | Menampilkan data pada halaman terpilih. <br /> Default: 1 |

### Penggunaan

```php
// tanpa parameter
Http::withToken('token')
  ->get(__BASE_URL___ . '/jurnal');

// dengan parameter
Http::withToken('token')
  ->get(__BASE_URL___ . '/jurnal', [
    'limit' => 50,
    'page' => 2
  ]);
```

### Contoh sukses

```json
{
    "status": 200,
    "message": "Success",
    "data": [
        {
            "tanggal": "30-12-2023",
            "referensi": "PB/2023/VI/0009",
            "deskripsi": "Pembelian ruko",
            "nominal": 90000,
            "status": "Post",
            "transaksi": [
                {
                    "akun": "Asset",
                    "kredit": 0,
                    "debit": 15000
                },
                {
                    "akun": "Inventory",
                    "kredit": 0,
                    "debit": 75000
                },
                {
                    "akun": "BANK BCA",
                    "kredit": 90000,
                    "debit": 0
                }
            ]
        },
        {
            "tanggal": "30-12-2023",
            "referensi": "PB/2023/VI/0008",
            "deskripsi": "Pembelian ruko",
            "nominal": 90000,
            "status": "Post",
            "transaksi": [
                {
                    "akun": "Asset",
                    "kredit": 0,
                    "debit": 15000
                },
                {
                    "akun": "Inventory",
                    "kredit": 0,
                    "debit": 75000
                },
                {
                    "akun": "BANK BCA",
                    "kredit": 90000,
                    "debit": 0
                }
            ]
        },
        // 8 data lainnya
    ]
}
```

## POST `/jurnal`

| Kolom     | Wajib | Tipe Data | Catatan                                   |
| --------- | :---: | --------- | ----------------------------------------- |
| deskripsi |  ✅   | String    | Deskripsi jurnal                          |
| referensi |  ✅   | String    | Nomor referensi jurnal. <br /> Unik.      |
| tanggal   |  ✅   | String    | Tanggal jurnal <br /> Format : YYYY-MM-DD |
| transaksi |  ✅   | Array     | akun, debit, kredit                       |

### Penggunaan

```php
$items = [
  [
    'akun' => '1000',
    'debit' => 15000,
    'kredit' => 0
  ],
  [
    'akun' => '1001',
    'debit' => 75000,
    'kredit' => 0
  ],
  [
    'akun' => '1002',
    'debit' => 0,
    'kredit' => 90000
  ]
];

Http::withToken('token')
  ->post(__BASE_URL___ . '/jurnal', [
    'deskripsi' => 'Pembelian ruko di Citra Raya',
    'referensi' => 'PB/2023/VI/0001',
    'tanggal' => '2023-12-30',
    'transaksi' => $items
  ]);
```

### Contoh sukses

```json
{
    "status": 200,
    "message": "Success",
    "data": {
        "id": "997474e9-17de-4e93-9ec1-c960507c3556",
        "tanggal": "30-12-2023",
        "referensi": "PB/2023/VI/0012",
        "deskripsi": "Pembelian ruko",
        "nominal": 90000,
        "status": "Post",
        "transaksi": [
            {
                "akun": "Asset",
                "kredit": 0,
                "debit": 15000
            },
            {
                "akun": "Inventory",
                "kredit": 0,
                "debit": 75000
            },
            {
                "akun": "BANK BCA",
                "kredit": 90000,
                "debit": 0
            }
        ]
    }
}
```

### Contoh gagal

```json
{
  "status": 400,
  "message": "Nomor referensi sudah ada"
}
```
