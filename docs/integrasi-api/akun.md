---
sidebar_position: 2
---

# Akun

## Deskripsi

Berikut adalah API untuk mendapatkan data Akun.

## Base URL

> `https://sempoa.id/api/integration`

## GET `/akun`

| Parameter | Wajib | Tipe Data | Catatan                                                   |
| --------- | :---: | --------- | --------------------------------------------------------- |
| limit     |  ❌   | Integer   | Membatasi jumlah data keluaran. <br /> Default: 10        |
| page      |  ❌   | Integer   | Menampilkan data pada halaman terpilih. <br /> Default: 1 |

### Penggunaan

```php
// tanpa parameter
Http::withToken('token')
  ->get(__BASE_URL___ . '/akun');

// dengan parameter
Http::withToken('token')
  ->get(__BASE_URL___ . '/akun', [
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
      "kode": "10000",
      "akun": "Asset",
      "tipe": "Aset",
      "level": 1,
      "balance": "Debit",
      "akun_induk": "-"
    },
    {
      "kode": "31000",
      "akun": "Laba Berjalan",
      "tipe": "Modal",
      "level": 1,
      "balance": "Credit",
      "akun_induk": "Equity"
    },
    // 8 data lainnya
  ]
}
```

## GET `/akun/:kode`

| Parameter | Wajib | Tipe Data | Catatan   |
| --------- | :---: | --------- | --------- |
| kode      |  ✅   | String    | Kode akun |

### Penggunaan

```php
// tanpa variabel
Http::withToken('token')
  ->get(__BASE_URL___ . '/akun/10000');

// dengan variabel
$kode = '10000';
Http::withToken('token')
  ->get(__BASE_URL___ . '/akun/' . $kode);
```

### Contoh sukses

```json
{
    "status": 200,
    "message": "Success",
    "data": {
        "kode": "10000",
        "akun": "Aktiva",
        "tipe": "Aset",
        "level": 1,
        "balance": "Debit",
        "akun_induk": "-"
    }
}
```

### Contoh gagal

```json
{
    "status": 404,
    "message": "Akun tidak ditemukan."
}
```
