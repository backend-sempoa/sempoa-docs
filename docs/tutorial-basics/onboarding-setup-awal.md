---
sidebar_position: 2
---

# Setup Awal

Tapahan awal saat Anda menggunakan **SEMPOA ERP** :

- Migrasi **Chart Of Account (COA)** menggunakan Import file.
- Migrasi **Transaksi (Jurnal Umum)** menggunakan Import file **(Optional)**.



## Migrasi Chart Of Account (COA)
Masuk ke menu **Konfigurasi** dan ke **Migrasi Data**

![Menu migrasi data](/img/menumigrasi.PNG)

Anda akan masuk ke dalam datatable pilih **"Mulai Migrasi Data"** 

![Halaman migrasi data](/img/dt-migrasi.PNG)

Sebelumnya Anda perlu mendownload template import file untuk **Chart Of Account** yang akan Anda upload.
Dengan cara pilih **Tipe Data -> klik "Contoh Data Akun"**.

![Form migrasi data](/img/download-template-migrasi.PNG)

Berikut template **Chart of Account** yang sudah disediakan untuk dapat Anda adjust kembali sesuai kebutuhan organisasi Anda.
## Template Chart Of Account

![Template migrasi data akun](/img/excel-template.PNG)

Pada Template Chart Of Account (COA) , perlu diperhatikan kolom-kolom yang tertera.
## 1. Account Number
Kolom ini merupakan penomoran untuk Chart Of Account yang dapat disesuaikan sesuai kebutuhan.
## 2. Account Name
Kolom ini merupakan penamaan untuk Chart Of Account yang dapat disesuaikan sesuai kebutuhan.
## 3. Type
Pada SEMPOA ERP Chart of Account di klasifikasikan menjadi beberapa jenis tipe COA Seperti :
* Aset
* Kewajiban
* Modal
* Pendapatan
* HPP
* Biaya
* Pdpt Lain
* Biaya Lain
* Kas
* Bank
* Piutang
* Pajak Dimuka
* Biaya Dimuka
* Hutang Biaya
* Hutang
* Hutang Pajak

:::info

HPP, akronim dari Harga Pokok Penjualan.

Pdpt Lain, akronim dari Pendapatan Lain.

:::

## 4. Level
Kolom Level adalah penomoran untuk menentukan posisi COA sebagai Parent COA (Akun Atasan), yang memungkinkan setiap COA dapat memiliki lebih dari satu jenis COA untuk tipe yang sama.

## 5. Parent Account
Kolom yang mengindentifikasikan suatu nomor Chart Of Account memiliki Akun Atasan berdasarkan type Akun yang sama. Contoh : pada gambar template COA di atas Account Name : Aktiva Lancar (10100) memiliki Akun atasan Aktiva (10000).

## 5. Balance
Kolom balance berfungsi untuk menambahkan saldo pada COA tertentu sehingga COA yang langsung teridentifikasi terdebit.

## Setup Konfigurasi Chart Of Account (COA)
Setelah berhasil melakukan migrasi data, langkah selajuntnya Anda dapat melakukan konfigurasi untuk **Chart of Account** seacara default. Sebagai contoh untuk setiap transaksi penerimaan, Anda dapat membuat setiap transaksi penerimaan ditampung dalam **Chart of Account - Account Receiveble** .

Masuk pada menu **Konfigurasi -> Keuangan -> Akun**

![Menu konfigurasi akun](/img/menu-konfigurasi-akun.PNG)

Pada halaman **Konfigurasi Akun** Anda dapat memilih akun-akun mana saja yang ingin Anda jadikan default COA yang digunakan setiap kali terjadi transaksi.

![Halaman konfigurasi akun](/img/setup-coa.PNG)


## Migrasi Transaksi (Jurnal Umum)
Anda dapat menimport data transaksi yang sekaligus secara otomatis akan di Jurnal pada sistem Sempoa ERP. Dengan mengisi data transaksi Anda pada template yang sudah disediakan.

Masuk ke menu **Konfigurasi** dan ke **Migrasi Data**

![Menu migrasi data](/img/menumigrasi.PNG)

Anda akan masuk ke dalam datatable pilih **"Mulai Migrasi Data"** 

![Halaman migrasi data](/img/dt-migrasi.PNG)

Sebelumnya Anda perlu mendownload template import file untuk **Transaksi** yang akan Anda upload.
Dengan cara pilih **Tipe Data -> klik "Contoh Data Transaksi"**.

![Halaman migrasi data](/img/migrasi-transaksi.PNG)


## Template Transaksi (Jurnal Umum)


![Form migrasi data](/img/templateTransaksi.PNG)

Kolom kolom pada transaksi terdiri dari :


## 1. Group ID
 Pada contoh di atas jika Anda ingin mengimport 1 transaksi Anda cukup menidentifikasi transaksi berdasarkan grup dengan nomor 1 untuk data pertama, dan selanjutnya 2 untuk data transaksi yang ke 2 begitupun selanjutnya.

## 2. Reference Number
 Nomor Identifikasi yang dapat Anda sesuaikan berdasarkan Nomor Invoice, Nomor Voucher atau yang lainnya sebagai penanda setiap transaksi.

## 3. Date 
 Tanggal pada setiap transaksi.

## 4. Description
 Penjelasan akan setiap transaksi.

## 5. Account Number 
 Kode Chart Of Account (COA), yang ingin di masukan pada transaksi tersebut.

## 6. Debit Amount
 Nominal terdebit pada transaksi untuk COA yang digunakan.

## 7. Credit Amount
 Nominal terkredit pada transaksi untuk COA yang digunakan.

## 8. Transaction Type
 Pada kolom Transaction Type sistem mengidentifikasikan menjadi 5 jenis transaksi yang ditandai menggunakan penomoran seperti :

    - Transaction Type Code : 1 (Invoice)

    - Transaction Type Code : 2 (Voucher)

    - Transaction Type Code : 3 (Transaksi Lainnya)

    - Transaction Type Code : 4 (Purchase Order)

    - Transaction Type Code : 4 (Sales Order)

:::danger PENTING
**Jika Anda** tidak mempunyai nomor **Invoice/Voucher atau PO/SO** Anda dapat menggunakan **kode transaksi 3 (Transaksi Lainnya)** untuk melakukan import data transaksi pada sistem **Sempoa ERP**.
:::

Jika data Import Anda berhasil maka data **Transaksi** akan masuk pada Menu **Transaksi -> Jurnal Umum**.


## Status Migrasi
Terdapat 3 Jenis Status Migrasi saat Anda melakukan Migrasi Data pada sistem Sempoa ERP. Sistem akan memberitahukan kesalahan saat Migrasi Data gagal atau bermasalah.

### Import file berhasil

Jika tidak ditemukan masalah saat prosess upload data dan migrasi maka sistem akan menginfokan dengan status **"Migrasi Data Sukses"**.

![Notifikasi migrasi data](/img/migrasi-berhasil.PNG)

Data berhasil dimigrasi untuk COA (Chart Of Aaccount) akan masuk pada menu **"Data Master" -> Akun**.


![Halaman migrasi data](/img/berhasil-transaksi-import.PNG)

Data berhasil dimigrasi untuk Transaksi (Jurnal Umum) akan masuk pada menu **Transaksi -> Jurnal Umum**.



### Import file sudah pernah diupload
Jika Anda mendapati status file upload mengeluarkan pesan **"Migrasi Data Telah Diunggah"**, maka dapat dipastikan bahwa data yang Anda upload sudah pernah dilakukan migrasi data sebelumnya, diharapkan Anda memeriksa kembali data yang akan Anda upload untuk dilakukan migrasi pada sistem.
![Notifikasi import file sudah pernah diupload](/img/migrasi-double.PNG)

### Import file gagal
Pada saat terjadi kegagalan dalam prosess upload data untuk dimigrasi kedalam sistem, maka sistem akan mengeluarkan pesan **"Migrasi Data Gagal"** disertai dengan pesan error atau kesalahan pada kolom dan baris di file excel yang Anda upload. Jika Anda masih menemukan kendala dalam prosess Import ini kami sarankan untuk dapat berkonsulatsi dengan konsulatan kami agar dapat membimbing Anda sesegera mungkin. - [Kontak Kami](http://localhost:3000/docs/intro#registrasi). 

![Notifikasi import file gagal](/img/migrasi-gagal.PNG)




