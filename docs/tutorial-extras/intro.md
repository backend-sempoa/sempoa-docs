---
sidebar_position: 1
---

# Pendahuluan

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
