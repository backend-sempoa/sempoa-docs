---
sidebar_position: 1
---

# API Integration

We are trying to open connectivity to systems that want to use our platform.

## Base URL

> `https://sempoa.id/api/integration`

## API Documentation

We still working on it, please keep in touch with us for API Documentation.

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

---

![Menu master data mitra](/img/coming4.gif)
