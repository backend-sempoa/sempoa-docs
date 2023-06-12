---
sidebar_position: 1
---

# API Integration

Untuk mendapatkan `token`, Anda bisa ke halaman **Konfigurasi API** pada submenu **Konfigurasi**, lalu klik tombol `Generate Token`.

![Email reset password](/img/api-01-konfigurasi.png)

Setelahnya Anda akan mendapatkan _random string_ yang bisa dipakai di aplikasi lain.

:::danger PENTING
Jika Anda **sudah melakukan** generate token, hati-hati jika melakukan generate ulang karena Anda akan mendapatkan token baru dan **merusak koneksi** pada aplikasi lain yang menggunakan token lama.
:::

## Base URL

> `https://sempoa.id/api/integration`

## Kode Status API

| Kode Status | Keterangan                   |
| ----------- | ---------------------------- |
| 200         | Ok                           |
| 400         | Bad request                  |
| 401         | Unauthorized / Invalid token |
| 404         | Not found                    |

### Contoh success

Contoh umum `success response`

```json
{
  "status": 200,
  "message": "Success",
  "data": null
}
```

### Contoh error

Contoh umum `error response`

```json
{
  "status": 400,
  "message": "API Sempoa not authorized"
}
```

## API Documentation

Semua _endpoint_ yang tersedia diharuskan menggunakan `token` yang didapatkan di atas sebagai **Bearer Token**.

### Check Token

#### POST `/check`

Respon sukses (200)

```json
{
  "status": 200,
  "message": "Success",
  "data": null
}
```

Respon gagal (401)

```json
{
  "status": 401,
  "message": "API Sempoa not authorized"
}
```

### Jurnal Umum

#### POST `/jurnal`

| Kolom     | Wajib | Tipe Data | Catatan                                   |
| --------- | :---: | --------- | ----------------------------------------- |
| deskripsi |  ✅   | String    | Deskripsi jurnal                          |
| referensi |  ✅   | String    | Nomor referensi jurnal. <br /> Unik.      |
| tanggal   |  ✅   | String    | Tanggal jurnal <br /> Format : YYYY-MM-DD |
| akun      |  ✅   | Array     | Nomor akun                                |
| debit     |  ✅   | Array     | Jumlah debit                              |
| kredit    |  ✅   | Array     | Jumlah kredit                             |

#### Contoh pada Laravel

```php
Http::withToken('token')
  ->post(__BASE_URL___ . '/jurnal', [
    'deskripsi' => 'Pembelian ruko di Citra Raya',
    'referensi' => 'PB/2023/VI/0001',
    'tanggal' => '2023-12-30',
    'akun' => [
      '1000', '1001', '1002'
    ],
    'debit' => [
      '15000', '75000', '0'
    ],
    'kredit' => [
      '0', '0', '90000'
    ]
  ]);
```

Contoh sukses

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

---

![Menu master data mitra](/img/coming4.gif)
