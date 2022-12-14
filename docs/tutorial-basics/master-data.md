---
sidebar_position: 4
---

# Data Master
Pada module **Data Master** terbagi menjadi 3 sub-module yang dapat Anda sesuaikan dengan kebutuhan perusahaan Anda.
  -  Master Mitra
  -  Master Akun
  -  Master Produk
  
## Master Mitra

Master Mitra adalah sub-moodule di mana Anda dapat menambahkan suatu entitas yang memiliki relasi bisnis dengan organisasi Anda. Relasi tersebut pada **SEMPOA ERP** terbagi menjadi :
- Pelanggan (Customers)
- Pemasok (Suppliers)
- Keduanya (Both)

Masuk pada menu **Master Data -> Mitra**

![Menu master data mitra](/img/menu-master-data.PNG)

- Pada halamanan datatable tekan tombol **Tambah Mitra**
![Halaman data mitra](/img/dt-mitra.PNG)

- Silahkan isi form mitra dengan memperhatihkan kolom-kolom yang wajib diisi.
![form tambah data mitra](/img/form-add-mitra.PNG)

- Form akan memberikan pesan pada kolom yang wajib diisi.
![Notifikasi error input data mitra](/img/mitra-required-form.PNG)

:::danger PERHATIAN
- Nama Mitra - Wajib diisi.
- Surel - Wajib diisi.
- Tipe - Wajib diisi.
- Alamat - Wajib diisi.
- Kota - Wajib diisi.
- Negara - Wajib diisi.
:::

### Pemasok

Saat memilih **Tipe Mitra** sebagai **Pemasok (Supplier)**. Anda akan memilih **Chart of Account** yang ingin Anda definisikan sebagai **Akun Hutang** untuk Mitra tersebut.  

![Tipe akun hutang](/img/tipe-supplier.PNG)


### Pelanggan

Saat memilih **Tipe Mitra** sebagai **Pelanggan (Customers)**. Anda akan memilih **Chart of Account** yang ingin Anda definisikan sebagai **Akun Piutang** untuk Mitra tersebut.   
![Tipe akun piutang](/img/tipe-pelanggan.PNG)


### Keduanya

Jika Anda ingin mengindentifikasikan suatu entitas mitra memiliki **Tipe Mitra** sebagai **Pemasok (Supplier)** sekaligus **Pelanggan (Customers)**, maka Anda cukup memilih **Chart Of Account** mana saja yang di definisikan sebagai **Akun Hutang** dan **Akun Piutang** untuk Mitra tersebut.

![Tipe akun hutang dan piutang](/img/tipe-keduanya.PNG)

- Jika pembuatan entitas mitra berhasil maka data mitra anda akan muncul pada baris datatable di menu mitra.

![Halaman data mitra](/img/dt-mitra-1.PNG)

:::tip Tips

Segera setelah pembuatan Mitra berhasil, pada halaman datatable mitra, klik icon document untuk membuat **Invoice Penjualan** dan **Invoice Pembelian**.

:::

## Master Akun

Merupakan daftar-daftar **Chart of account** yang dapat Anda gunakan dalam membuat laporan-laporan akuntansi dan keuangan. Data Master Akun dapat anda sesuaikan dengan kebutuhan organisasi anda saat pertama kali melakukan onboarding data pada sistem SEMPOA ERP.

:::tip Baca Juga :

[Onboarding & Setup Awal](/docs/tutorial-basics/onboarding-setup-awal). 


:::

Data Master Akun selain dapat dilakukan melalui migrasi data, juga dapat diinputkan secara manual.

**Data Master -> Akun**.

![Menu data master akun](/img/menu-master-akun.PNG)

Pada halaman Akun, klik tombol **"Tambah Akun"**

![Halaman data master akun](/img/dt-akun.PNG)

![form input data akun](/img/form-akun.PNG)

Jika pembuatan Akun anda gagal maka sistem akan mengeluarkan pesan kesalahan pada kolom. Mohon diperhatikan kolom kolom yang wajib diisi.

:::danger PERHATIAN
- Tipe Akun - Wajib diisi.
- Level - Wajib diisi.
- Nama Akun - Wajib diisi.
- Kode Akun - Wajib diisi.
- Saldo - Wajib diisi.
- Bulan Saldo - Wajib diisi.
:::

## Master Produk
Kumpulan data produk atau jasa yang menjadi objek jual beli dan atau jasa yang diberikan untuk setiap transaksi. Di dalam master produk Anda dapat mengindentifikasi setiap barang atau jasa berdasarkan **SKU (Stock Keeping Unit)** untuk setiap objek transaksi.

**Data Master -> Produk**

![Menu data master produk](/img/menu-produk.PNG)

Pada halaman datatable Produk, klik tombol **"Tambah Produk"**

![Halaman data master produk](/img/dt-produk.PNG)

Silahkan mengisi data pada form untuk menambahkan produk dengan memperhatikan kolom-kolom yang wajib diisi.

![Form tambah data produk](/img/form-produk.PNG)

:::danger PERHATIAN
- Nama Produk - Wajib diisi.
- Kategori - Wajib diisi.
- SKU - Wajib diisi.
- Harga - Wajib diisi.
- Tipe - Wajib diisi.
:::

### Kategori Barang
Kategori dapat Anda sesuaikan dengan produk yang ingin diinputkan, sistem telah menyedian beberapa kategori barang yang dapat Anda pilih, akan tetapi Anda dapat membuat kategori tersendiri sesuai dengan kebutuhan Anda.

![Form tambah data produk](/img/list-kategori.PNG)

Pada halaman form tambah produk klik **"Tambahkan Kategori Baru"**.
![Tombol tambah kategori](/img/btn-add-cat.PNG)

Silahkan isi kategori baru yang ingin Anda tambahkan.

![Form tambah data kategori](/img/input-new-cat.PNG)
### Tipe
Menentukan jenis suatu objek transaksi yang bersifat produk atau jasa yang dimana setiap objek memiliki dampak dalam meyusun laporan pajak, **SEMPOA ERP** menerapkan pajak 11% pada sistem sesuai dengan peraturan perundang-undangan yang berlaku. 

![Tipe produk](/img/tipe-jasa-barang.PNG)

:::tip PERHATIAN
Berdasarkan dasar hukum PPN yang tertuang dalam UU No.42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang dan Jasa dan Pajak Penjualan Atas Barang Mewah. Kemudian, dasar hukum terbaru PPN tertuang di dalam peraturan perundang-undangan perpajakan, yakni dalam UU No.7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (HPP).
:::
