---
sidebar_position: 5
---

# Transaksi
Pada module Transaksi terbagi menjadi beberapa sub-module yang dapat Anda gunakan sebagai alat pencatatan transaksi bisnis Anda.
- Journal Umum 
- Invoice
- Pembayaran
- Biaya

## Jurnal Umum
Merupakan sebuah fitur yang dapat digunakan untuk mencatat seluruh aktivitas keuangan sebuah bisnis atau usaha yang terjadi dalam periode tertentu untuk memudahkan pengelolaan keuangan oleh pihak organisasi.

**Menu Transaksi -> Jurnal Umum**

![Menu transaksi jurnal umum](/img/trx-menu.PNG)

### Buat Ayat Jurnal

Pada halaman datatable **Jurnal Umum** klik **Buat Ayat Jurnal**

![Halaman data jurnal umum](/img/dt-jurnal-umum.PNG)

Saat melakukan pengisian **Ayat Jurnal**, pastikan data yang dinputkan sesuai dengan data transaksi Anda berdasarkan **tipe** dan **No Referensi** yang sudah otomatis dikeluarkan oleh sistem.


![Form tambah ayat jurnal umum](/img/form-ayat-jurnal.PNG)
Saat terjadi kesalahan pengisian Ayat Jurnal, sistem akan mengerluarkan pesan kesalahan pada kolom-kolom yang mempunyai nilai yang tidak valid. Mohon perhatikan kolom-kolom yang wajib diisi.


![Notifikasi error pada form tambah ayat jurnal umum](/img/form-jurnal-required.PNG)


:::danger PERHATIAN
- Tipe - Wajib diisi.
- Deskripsi - Wajib diisi.
- Tanggal - Wajib diisi.
:::     


# Ayat Jurnal tidak balance

Dalam pengisian Ayat Journal, sistem dapat mengidentifikasi data jika terjadi ketidak-seimbangan data dalam Akuntansi (unbalance) sehingga tidak dapat diprosess. Jika hal ini terjadi, periksa kembali data yang anda inputkan atau konsultasi dengan **konsultan SEMPOA ERP** untuk bantuan lebih lanjut.

![Notifikasi tidak balance pada form tambah ayat jurnal umum](/img/non-balance-jurnal.PNG)

# Ayat Jurnal Balance

Jika pengisian data terhadap Ayat Jurnal sesuai maka sistem akan dapat memprosess data untuk disimpan ataupun diposting sebagai Ayat Jurnal yang valid.

![Notifikasi balance pada form tambah ayat jurnal umum](/img/balance-ayat-jurnal.PNG)

# Posting Ayat Jurnal
Sebelum melakukan posting ayat Jurnal, Pengguna dapat memilih beberapa aksi antara lain :




![Opsi simpan ayat jurnal umum](/img/pre-submit-jurnalumum.PNG)

- **Simpan Draft**

Jika Anda menyimpan ayat jurnal sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data ayat jurnal tersebut.

![Contoh draft ayat jurnal umum](/img/ayat-jurnal-draft.PNG)

- **Post Transaksi**

Jika Anda sudah merasa yakin terhadap data ayat jurnal. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**

![Dialog konfirmasi posting ayat jurnal umum](/img/konfrim-post-jurnal.PNG)

Data yang sudah terposting akan berstatus **Post**

![Contoh ayat jurnal umum yang dipost](/img/post-jurnal.PNG)

# Detail Jurnal Umum
Setelah membuat ayat jurnal, Anda bisa melihat keselurahan data detail di setiap ayat jurnal pada datatable untuk semua status yang berisikan informasi semua transaksi dari **chart of account** yang digunakan.
![Detail ayat jurnal umum](/img/detail-jurnal.PNG)

### Closing
Closing journal atau jurnal penutup adalah jurnal yang dibuat pada akhir periode akuntansi untuk mentransfer saldo dari akun sementara ke akun permanen. Akun sementara digunakan untuk mencatat aktivitas akuntansi selama periode tertentu.


Pada halaman datatable **Jurnal Umum** klik tombol **"Closing"**

![Tombol closing jurnal umum](/img/closing-btn.PNG)

Tertampil data pada periode bulan berjalan dalam satu tahun. Anda dapat melakukan closing terhadap data transaksi berdasarkan bulan sesuai kebutuhan Anda.
![Halaman closing jurnal umum](/img/dt-closing.PNG)

Sistem akan mengkonfirmasi saat Anda melakukan closing untuk memastikan tidak terjadi kesalahan closing pada sistem yang disebabkan oleh *human error*.
![Dialog konfirmasi closing jurnal umum](/img/konfrim-closing.PNG)

Saat bulan transaksi sudah terclosing maka sistem akan memberikan status **"Closed"**, saldo pada akun-akun yang terdapat pada bulan transaksi yang diclosing akan termutasi sesuai perhitungan akuntansi.

Namun jika terjadi kesalahan transaksi pada saat setelah terclosing maka Anda cukup membuka kembali bulan yang sudah terclosing tersebut menggunakan fitur **(re-open)** yang sudah disediakan oleh sistem **SEMPOA ERP**.

![Halaman closing jurnal umum](/img/reopen-closing.PNG)

Konfirmasi Reopen untuk bulan yang sudah diclosing. Bulan yang sudah diopen kembali secara otomatis juga ikut mengembalikan nilai-nilai pada akun akun sebelum termutasi.

![Dialog konfirmasi reopen jurnal umum](/img/konfrim-reopen.PNG)

### Ekspor Data
Dalam mempermudah Anda dalam melihat seluruh aktivitas transaksi dalam jurnal umum, sistem menyediakan fitur ekspor file dalam bentuk **xlsx. (excel)**.

Pada halaman datatable **Jurnal Umum** klik **Ekspor**.
![Tombol ekspor jurnal umum](/img/ekspor-jurnal.PNG)

![Form filter jurnal umum](/img/ekspor-jurnal-1.PNG)

Sebelum Anda melakukan **Ekpor file Jurnal Umum**, Anda terlebih dulu diharuskan untuk memfilter data berdasarkan tanggal, bulan atau periode waktu tertentu sesuai kebutuhan Anda.

![Filter tanggal ekspor jurnal umum](/img/filter-ekspor-jurnal.PNG)

Berikut hasil Ekspor file yang sudah terfilterisasi untuk **jurnal umum**
![Contoh file hasil ekspor jurnal umum](/img/contoh-ekspor-jurnal.PNG)


## Invoice
Invoice adalah sebuah dokumen yang tertulis dan digunakan sebagai suatu bukti pembelian yang berisi informasi seperti daftar barang kiriman yang dilengkapi dengan catatan nama, dan jumlah pembayaran yang harus dibayarkan oleh pembeli.

**Menu Transaksi -> Invoice**

![Docusaurus logo](/img/menu-inv.PNG)


### Invoice Penjualan
**Menu Transaksi -> Invoice -> Invoice Penjualan**

Terdapat 3 status dalam Invocing untuk mengetahui prosess disetiap Invocing baik Penjualan ataupun Pembelian yaitu :

- **Outstanding :** Status Invoice belum dibayarkan.
- **Overdue :** Status Invoice melewati masa termin pembayaran.
- **Paid :** Status Invoice sudah lunas.

![Docusaurus logo](/img/dt-inv-penjualan.PNG)

# Buat Invoice Penjualan
Pada halaman datatable **Invoice Penjualan** klik **Buat Invoice Penjualan**

![Docusaurus logo](/img/inv-jual-1.PNG)



![Docusaurus logo](/img/inv-jual-2.PNG)


![Docusaurus logo](/img/inv-jual-6.PNG)


### Invoice Pembelian

## Pembayaran

### Pembayaran Masuk

### Pembayaran Keluar

## Biaya

