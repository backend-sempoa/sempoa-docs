---
sidebar_position: 4
---

# Data Master
Pada module **Data Master** terbagi menjadi 3 sub-module yang dapat Anda sesuaikan dengan kebutuhan perusahaan Anda.
  -  Master Mitra
  -  Master Akun
  -  Master Produk
  
## Master Mitra

Master Mitra adalah sub-moodule dimana Anda dapat menambahkan suatu entitas yang memiliki relasi bisnis dengan organisasi Anda. Relasi tersebut pada **SEMPOA ERP** terbagi menjadi :
- Pelanggan (Customers)
- Pemasok (Suppliers)
- Keduanya (Both)

Masuk pada menu **Master Data -> Mitra**

![Docusaurus logo](/img/menu-master-data.PNG)

- Pada halamanan datatable tekan tombol **Tambah Mitra**
![Docusaurus logo](/img/dt-mitra.PNG)

- Silahkan isi form mitra dengan memperhatihkan kolom-kolom yang wajib di isi.
![Docusaurus logo](/img/form-add-mitra.PNG)

- Form akan memberikan pesan pada kolom yang wajib di isi.
![Docusaurus logo](/img/mitra-required-form.PNG)

:::danger PERHATIAN
- Nama Mitra - Wajib di isi.
- Surel - Wajib di isi.
- Tipe - Wajib di isi.
- Alamat - Wajib di isi.
- Kota - Wajib di isi.
- Negara - Wajib di isi.
:::

### Pemasok

Saat memilih **Tipe Mitra** sebagai **Pemasok (Supplier)**. Anda akan memilih **Chart of Account** yang ingin Anda definisikan sebagai **Akun Hutang** untuk Mitra tersebut.  

![Docusaurus logo](/img/tipe-supplier.PNG)


### Pelanggan

Saat memilih **Tipe Mitra** sebagai **Pelanggan (Customers)**. Anda akan memilih **Chart of Account** yang ingin Anda definisikan sebagai **Akun Piutang** untuk Mitra tersebut.   
![Docusaurus logo](/img/tipe-pelanggan.PNG)


### Keduanya

Jika Anda ingin mengindentifikasikan suatu entitas mitra memiliki **Tipe Mitra** sebagai **Pemasok (Supplier)** sekaligus **Pelanggan (Customers)**, maka Anda cukup memilih **Chart Of Account** mana saja yang di definisikan sebagai **Akun Hutang** dan **Akun Piutang** untuk Mitra tersebut.

![Docusaurus logo](/img/tipe-keduanya.PNG)

- Jika pembuatan entitas mitra berhasil maka data mitra anda akan muncul pada baris datatable di menu mitra.

![Docusaurus logo](/img/dt-mitra-1.PNG)

:::tip Tips

Segera setelah pembuatan Mitra berhasil, pada halaman datatable mitra
klik icon document untuk membuat **Invoice Penjualan** dan **Invoice Pembelian**.

:::

## Master Akun

Merupakan daftar-daftar **Chart of account** yang dapat Anda gunakan dalam membuat laporan - laporan akuntansi dan keuangan. Data Master Akun dapat anda sesuaikan dengan kebutuhan organisasi anda saat pertama kali melakukan onboarding data pada sistem SEMPOA ERP.

:::tip Baca Juga :

[Onboarding & Setup Awal](http://localhost:3000/docs/tutorial-basics/onboarding-setup-awal). 


:::

Data Master Akun selain dapat dilakukan melalui migrasi data, juga dapat diinputkan secara manual.

**Data Master -> Akun**.

![Docusaurus logo](/img/menu-master-akun.PNG)

Pada halaman Akun, klik tombol **"Tambah Akun"**

![Docusaurus logo](/img/dt-akun.PNG)

![Docusaurus logo](/img/form-akun.PNG)

Jika pembuatan Akun anda gagal maka sistem akan mengeluarkan pesan kesalahan pada kolom. Mohon diperhatikan kolom kolom yang wajib di isi.

:::danger PERHATIAN
- Tipe Akun - Wajib di isi.
- Level - Wajib di isi.
- Nama Akun - Wajib di isi.
- Kode Akun - Wajib di isi.
- Saldo - Wajib di isi.
- Bulan Saldo - Wajib di isi.
:::

## Master Produk
Kumpulan data produk atau jasa yang menjadi objek jual beli dan atau jasa yang diberikan untuk setiap transaksi. Di dalam master produk Anda dapat mengindentifikasi setiap barang atau jasa berdasarkan **SKU (Stock Keeping Unit)** untuk setiap objek transaksi.

**Data Master -> Produk**

![Docusaurus logo](/img/menu-produk.PNG)

Pada halaman datatable Produk, klik tombol **"Tambah Produk"**

![Docusaurus logo](/img/dt-produk.PNG)

Silahkan mengisi data pada form untuk menambahkan produk dengan memperhatikan kolom-kolom yang wajib di isi.

![Docusaurus logo](/img/form-produk.PNG)

:::danger PERHATIAN
- Nama Produk - Wajib di isi.
- Kategori - Wajib di isi.
- SKU - Wajib di isi.
- Harga - Wajib di isi.
- Tipe - Wajib di isi.
:::

### Kategori Barang
Kategori dapat Anda sesuaikan dengan produk yang ingin diinputkan, sistem telah menyedian beberapa kategori barang yang dapat Anda pilih, akan tetapi Anda dapat membuat kategori tersendiri sesuai dengan kebutuhan Anda.

![Docusaurus logo](/img/list-kategori.PNG)

Pada halaman form tambah produk klik **"Tambahkan Kategori Baru"**.
![Docusaurus logo](/img/btn-add-cat.PNG)

Silahkan isi kategori baru yang ingin Anda tambahkan.

![Docusaurus logo](/img/input-new-cat.PNG)
### Tipe
Menentukan jenis suatu objek transaksi yang bersifat produk atau jasa yang dimana setiap objek memiliki dampak dalam meyusun laporan pajak, **SEMPOA ERP** menerapkan pajak 11% pada sistem sesuai dengan peraturan perundang-undangan yang berlaku. 

![Docusaurus logo](/img/tipe-jasa-barang.PNG)

:::tip PERHATIAN
Berdasarkan dasar hukum PPN yang tertuang dalam UU No.42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang dan Jasa dan Pajak Penjualan Atas Barang Mewah. Kemudian, dasar hukum terbaru PPN tertuang di dalam peraturan perundang-undangan perpajakan, yakni dalam UU No.7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (HPP).
:::
