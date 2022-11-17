---
sidebar_position: 2
---

# Onboarding & Setup Awal

## Setup Awal

Tapahan awal saat Anda menggunakan SEMPOA ERP :

- Migrasi **Chart Of Account (COA)** menggunakan Import file.
- Setup Konfigurasi **Chart Of Account (COA)**.

***Optional***
- Membuat **Chart of Account** secara manual.

## Migrasi Chart Of Account (COA)
Masuk ke menu **Konfigurasi** dan ke **Migrasi Data**

![Docusaurus logo](/img/menumigrasi.PNG)

Anda akan masuk ke dalam datatable pilih **"Mulai Migrasi Data"** 

![Docusaurus logo](/img/dt-migrasi.PNG)

Sebelumnya Anda perlu mendownload template import file untuk **Chart Of Account** yang akan Anda upload.
Dengan cara pilih **Tipe Data -> klik "Contoh Data Akun"**.

![Docusaurus logo](/img/download-template-migrasi.PNG)

Berikut template **Chart of Account** yang sudah disediakan untuk dapat Anda adjust kembali sesuai kebutuhan organisasi Anda.

![Docusaurus logo](/img/excel-template.PNG)

Setelah selesai melakukan Adjustment terhadap template yang sudah disediakan maka Anda dapat memulai prosess upload data COA ke dalam sistem menggunakan fitur import file. Dimana sistem akan mendeteksi prosess upload yang terbagi menjadi 3 status :

### Import file berhasil

Jika tidak ditemukan masalah saat prosess upload data dan migrasi maka sistem akan menginfokan dengan status **"Migrasi Data Sukses"**.

![Docusaurus logo](/img/migrasi-berhasil.PNG)

Data berhasil dimigrasi akan masuk pada menu **"Data Master" -> Akun**

![Docusaurus logo](/img/list-coa.PNG)


### Import file sudah pernah diupload
Jika Anda mendapati status file upload mengeluarkan pesan **"Migrasi Data Telah Diunggah"**, maka dapat dipastikan bahwa data yang Anda upload sudah pernah dilakukan migrasi data sebelumnya, diharapkan Anda memeriksa kembali data yang akan Anda upload untuk dilakukan migrasi pada sistem.
![Docusaurus logo](/img/migrasi-double.PNG)

### Import file gagal
Pada saat terjadi kegagalan dalam prosess upload data untuk dimigrasi kedalam sistem, maka sistem akan mengeluarkan pesan **"Migrasi Data Gagal"** disertai dengan pesan error atau kesalahan pada kolom dan baris di file excel yang Anda upload. Jika Anda masih menemukan kendala dalam prosess Import ini kami sarankan untuk dapat berkonsulatsi dengan konsulatan kami agar dapat membimbing Anda sesegera mungkin. - [Kontak Kami](http://localhost:3000/docs/intro#registrasi). 

![Docusaurus logo](/img/migrasi-gagal.PNG)

## Setup Konfigurasi Chart Of Account (COA)
Setelah berhasil melakukan migrasi data, langkah selajuntnya Anda dapat melakukan konfigurasi untuk **Chart of Account** seacara default. Sebagai contoh untuk setiap transaksi penerimaan, Anda dapat membuat setiap transaksi penerimaan ditampung dalam **Chart of Account - Account Receiveble** .

Masuk pada menu **Konfigurasi -> Keuangan -> Akun**

![Docusaurus logo](/img/menu-konfigurasi-akun.PNG)

Pada halaman **Konfigurasi Akun** Anda dapat memilih akun-akun mana saja yang ingin Anda jadikan default COA yang digunakan setiap kali terjadi transaksi.

![Docusaurus logo](/img/setup-coa.PNG)


