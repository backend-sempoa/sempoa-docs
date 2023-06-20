---
sidebar_position: 2
---

# Jurnal Umum

## Deskripsi

Berikut adalah API untuk mendapatkan atau menyimpan data transaksi Jurnal Umum.

## Daftar API

## POST `/jurnal`

| Kolom     | Wajib | Tipe Data | Catatan                                   |
| --------- | :---: | --------- | ----------------------------------------- |
| deskripsi |  ✅   | String    | Deskripsi jurnal                          |
| referensi |  ✅   | String    | Nomor referensi jurnal. <br /> Unik.      |
| tanggal   |  ✅   | String    | Tanggal jurnal <br /> Format : YYYY-MM-DD |
| transaksi |  ✅   | Array     | akun, debit, kredit                       |

#### Contoh pada Laravel

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
    "transaction": {
      "id": "9963cfa0-4ee0-4c4b-8de9-cc4855efa538",
      "transaction_date": "2023-06-07",
      "model_id": "other",
      "model_type": null,
      "transaction_type": false,
      "transaction_status": 2,
      "reference_number": "003",
      "description": "Deskripsinya",
      "company_id": "995dab46-9947-4a7a-940a-91e757695ef4",
      "created_by": "System",
      "updated_by": "System",
      "void_by": null,
      "deleted_by": null,
      "created_at": "2023-06-12T03:14:02.000000Z",
      "updated_at": "2023-06-12T03:14:02.000000Z",
      "void_at": null,
      "deleted_at": null,
      "checking_balance_credit": 50000,
      "checking_balance_debit": 50000,
      "transaction_date_human": "Jun 7, 2023",
      "transaction_details": [
        {
          "id": "9963cfa0-5032-4222-aa0a-0e707a8d1f94",
          "account_id": "9963cf70-bbf5-41eb-ab85-de4090bf1d17",
          "transaction_id": "9963cfa0-4ee0-4c4b-8de9-cc4855efa538",
          "debit_amount": 50000,
          "credit_amount": 0
        },
        {
          "id": "9963cfa0-514a-4bfe-9f1e-d0fdb8272103",
          "account_id": "9963cf70-cca2-4ba3-b87c-a2afde2fe084",
          "transaction_id": "9963cfa0-4ee0-4c4b-8de9-cc4855efa538",
          "debit_amount": 0,
          "credit_amount": 50000
        }
      ]
    }
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
