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

Terdapat 4 status dalam Invocing untuk mengetahui prosess disetiap Invocing Penjualan yaitu :

- **Outstanding :** Status Invoice belum dibayarkan.
- **Overdue :** Status Invoice melewati masa termin pembayaran.
- **Paid :** Status Invoice sudah lunas.
- **Partial Payment :** Status Invoice yang sudah mendapatkan uang muka.

![Docusaurus logo](/img/dt-inv-penjualan.PNG)
![Docusaurus logo](/img/inv-jual-7.PNG)

# Buat Invoice Penjualan
Pada halaman datatable **Invoice Penjualan** klik **Buat Invoice Penjualan**

Mohon memperhatikan kolom-kolom yang wajib di isi saat melakukan pembuatan Invoice Penjualan. Sistem akan memberikan pesan pada kolom pengisian jika nilai yang diinputkan tidak sesuai.

![Docusaurus logo](/img/inv-jual-1.PNG)

:::danger PERHATIAN
- Mitra - Wajib diisi.
- Tanggal Invoice - Wajib diisi.
- Nomor Invoice - Wajib diisi (*Auto Generate*).
- Deskripsi Penjualan - Wajib diisi.
- Termin Pembayaran - Wajib diisi.
- Quantity Produk - Wajib diisi.
- Jatuh Tempo - Wajib diisi (*Auto Generate dari Termin*).
:::    

Pada **Baris Invoice** Anda dapat menambahkan atau mengurangi **Item Produk** yang ingin diprosess sebagai **Invoice Penjualan** beserta **harga barang** serta **quantity produk**.

![Docusaurus logo](/img/inv-jual-3.PNG)

**Harga Barang** pada **Item Produk** secara otomatis diambil dari data **Master Produk**, namun Anda masih dapat melakukan perubahan harga sewaktu diperlukan saat pembuatan **Invoice Penjualan**.

![Docusaurus logo](/img/inv-jual-2.PNG)

Saat membuat **Invoice Penjualan** Anda juga dapat menambahkan **Diskon atau Uang Muka** ataupun sekaligus menambahkan keduanya **(Diskon & Uang Muka)** untuk satu **Invoice Penjualan** yang akan di prosess.

Nilai saat pengisian **Diskon dan Uang Muka** akan secara otomatis terkalkulasi oleh sistem berserta dengan nilai pajak yang sudah ditentukan sebesar 11% berdasarkan undang-undang yang berlaku.

:::tip PERHATIAN
Berdasarkan dasar hukum PPN yang tertuang dalam UU No.42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang dan Jasa dan Pajak Penjualan Atas Barang Mewah. Kemudian, dasar hukum terbaru PPN tertuang di dalam peraturan perundang-undangan perpajakan, yakni dalam UU No.7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (HPP).
:::
![Docusaurus logo](/img/inv-jual-6.PNG)

Setelah Anda memastikan data pada **Invoice Penjualan** Anda sudah sesuai dengan transaksi, maka Anda dapat terlebih dulu melakukan beberapa aksi seperti :

![Docusaurus logo](/img/btn-inv-confrim.PNG)

- **Simpan Draft**

Jika Anda menyimpan **Invoice Penjualan** sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data **Invoice Penjualan** tersebut.

- **Post Invoice**

Jika Anda sudah merasa yakin terhadap data **Invoice Penjualan**. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**

- **Post & Send Invoice**

Saat anda melakukan **Post & Send Invoice** sistem secara otomatis akan mengirimkan email yang berupa bukti **Invoice Penjualan** kepada entitas **Mitra** tertuju.  

![Docusaurus logo](/img/inv-jual-0.PNG)

### Invoice Pembelian

**Menu Transaksi -> Invoice -> Invoice Pembelian**
Terdapat 3 status dalam Invocing untuk mengetahui prosess disetiap Invocing Pembelian yaitu :

- **Outstanding :** Status Invoice belum dibayarkan.
- **Overdue :** Status Invoice melewati masa termin pembayaran.
- **Paid :** Status Invoice sudah lunas.

![Docusaurus logo](/img/dt-inv-beli.PNG)

# Buat Invoice Pembelian

Pada halaman datatable **Invoice Pemebelian** klik **Buat Invoice Pemebelian**

Mohon memperhatikan kolom-kolom yang wajib di isi saat melakukan pembuatan **Invoice Pembelian**. Sistem akan memberikan pesan pada kolom pengisian jika nilai yang diinputkan tidak sesuai.

:::danger PERHATIAN
- Mitra - Wajib diisi.
- Tanggal Invoice - Wajib diisi.
- Nomor Invoice - Wajib diisi (*No Invoice dari Penjual*).
- Deskripsi Pembelian - Wajib diisi.
- Termin Pembayaran - Wajib diisi.
- Quantity Produk - Wajib diisi.
- Jatuh Tempo - Wajib diisi (*Auto Generate dari Termin*).
:::    

![Docusaurus logo](/img/inv-beli-1.png)

**Harga Barang** pada **Item Produk** secara otomatis diambil dari data **Master Produk**, namun Anda masih dapat melakukan perubahan harga sewaktu diperlukan saat pembuatan **Invoice Pembelian**.

![Docusaurus logo](/img/inv-beli-2.png)

Saat membuat **Invoice Pemebelian** Anda juga dapat menambahkan **Diskon atau Uang Muka** ataupun sekaligus menambahkan keduanya **(Diskon & Uang Muka)** untuk satu **Invoice Pembelian** yang akan di prosess.

Nilai saat pengisian **Diskon** dan **Uang Muka** akan secara otomatis terkalkulasi oleh sistem.

![Docusaurus logo](/img/inv-beli-3.png)

Setelah Anda memastikan data pada **Invoice Pembelian** Anda sudah sesuai dengan transaksi, maka Anda dapat terlebih dulu melakukan beberapa aksi seperti :

![Docusaurus logo](/img/btn-inv-confrim.PNG)

- **Simpan Draft**

Jika Anda menyimpan **Invoice Pembelian** sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data **Invoice Pembelian** tersebut.

- **Post Invoice**

Jika Anda sudah merasa yakin terhadap data **Invoice Pembelian**. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**

- **Post & Send Invoice**

Saat anda melakukan **Post & Send Invoice** sistem secara otomatis akan mengirimkan email yang berupa bukti **Invoice Pemeblian** kepada entitas **Mitra** tertuju.  


![Docusaurus logo](/img/inv-beli-4.png)


## Pembayaran

Voucher pembayaran atau debit yang berfungsi untuk pembayaran cek ataupun tunai. Sehingga kas perusahaan akan dikreditkan karena adanya aliran kas yang keluar. Tanda terima atau voucher kredit yang mencatat terima uang secara tunai ataupun tanda terima dari pihak bank.

Pada Sempoa ERP, Voucher Pembayaran terbagi menjadi 2 yaitu :
- Pembayaran Masuk
- Pembayaran Keluar

### Pembayaran Masuk
Pada menu **Pembayaran Masuk** Anda dapat membuat dan memprosess Voucher atas **Invoice Penjualan** yang telah Anda buat sebelumnya. Pada menu ini pula Anda bisa memklaim suatu Voucher **Pembayaran Masuk** telah **terlunaskan** atau masih memiliki **tunggakan**.

**Menu Transaksi -> Pembayaran -> Masuk**

![Docusaurus logo](/img/menu-pembayaran.PNG)

# Buat Pembayaran Masuk (Voucher Masuk)

Pada halaman datatable **Pembayaran Masuk** klik **Buat Pembayaran Masuk**.


![Docusaurus logo](/img/dt-pembayaran.PNG)


:::danger PERHATIAN
- Mitra - Wajib diisi.
- Tanggal - Wajib diisi.
- Nomor Pembayaran - Wajib diisi (*Auto Generate*).
- Deskripsi - Wajib diisi.
- Tipe Akun - Wajib diisi.
- Akun Pembayaran - Wajib diisi.
- Nomor Referensi - Wajib diisi (*Berdasarkan Invoice Penjualan*).
:::

Saat membuat **Pembayaran Masuk**, Anda dapat menginputkan **Nominal Yang Dibayarkan** dari **Jumlah Yang Terutang** berdasarkan **Invoice Penjualan** yang telah di issuekan sebelumnya. Jika **Nominal yang dibayarkan** sesuai dengan **Nominal Yang Terutang** maka Anda dapat memberi tanda **Lunas** pada Voucher **Pembayaran Masuk**.

Akan tetapi jika **Nominal Yang Dibayarkan** tidak sesuai maka Anda tetap dapat memprosess Voucher **Pembayaran Masuk** tersebut dengan status **belum lunas**. 

Sisa yang belum dibayarkan akan tetap muncul pada saat Anda membuat voucher **pembayaran masuk** untuk **Invoice Penjualan** tersebut dengan nominal yang sudah terpotong dari Voucher **Pembayaran Masuk** yang sudah di prosess sebelumnya.  

![Docusaurus logo](/img/buat-pembayaran-masuk.PNG)

Setelah Anda memastikan data pada **Pembayaran Masuk** Anda sudah sesuai dengan transaksi, maka Anda dapat terlebih dulu melakukan beberapa aksi seperti :

![Docusaurus logo](/img/btn-pembayaran-masuk.PNG)

- **Simpan Draft**

Jika Anda menyimpan **Pembayaran Masuk** sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data **Pembayaran Masuk** tersebut.

- **Post Pembayaran Masuk**

Jika Anda sudah merasa yakin terhadap data **Pembayaran Masuk**. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**

- **Post & Send Pembayaran Masuk**

Saat anda melakukan **Post & Send Pembayaran Masuk** sistem secara otomatis akan mengirimkan email yang berupa bukti **Voucher Pembayaran Masuk** kepada entitas **Mitra** tertuju.  

![Docusaurus logo](/img/dtl-pembayaran-masuk.PNG)

### Pembayaran Keluar

Pada menu **Pembayaran Keluar** Anda dapat membuat dan memprosess Voucher atas **Invoice Pembelian** yang telah Anda buat sebelumnya. Pada menu ini pula Anda bisa memklaim suatu Voucher **Pembayaran Keluar** telah **terlunaskan** atau masih memiliki **tunggakan**.

**Menu Transaksi -> Pembayaran -> Keluar**

![Docusaurus logo](/img/menu-pembayaran-keluar.PNG)

# Buat Pembayaran Keluar (Voucher Keluar)

Pada halaman datatable **Pembayaran Keluar** klik **Buat Pembayaran Keluar**.

![Docusaurus logo](/img/dt-pembayaran-keluar.PNG)

:::danger PERHATIAN
- Tipe - Wajib diisi.
- Mitra - Wajib diisi.
- Tanggal - Wajib diisi.
- Nomor Pembayaran - Wajib diisi (*Auto Generate*).
- Deskripsi - Wajib diisi.
- Tipe Akun - Wajib diisi.
- Akun Pembayaran - Wajib diisi.
- Nomor Referensi - Wajib diisi (*Berdasarkan Invoice Pembelian*).
:::

Saat membuat **Pembayaran Keluar**, Anda dapat menginputkan **Nominal Yang Dibayarkan** dari **Jumlah Yang Terutang** berdasarkan **Invoice Pembelian** yang telah di issuekan sebelumnya. Jika **Nominal yang dibayarkan** sesuai dengan **Nominal Yang Terutang** maka Anda dapat memberi tanda **Lunas** pada Voucher **Pembayaran Keluar**.

Akan tetapi jika **Nominal Yang Dibayarkan** tidak sesuai maka Anda tetap dapat memprosess Voucher **Pembayaran Keluar** tersebut dengan status **belum lunas**. 

Sisa yang belum dibayarkan akan tetap muncul pada saat Anda membuat voucher **Pembayaran Keluar** untuk **Invoice Pembelian** tersebut dengan nominal yang sudah terpotong dari Voucher **Pembayaran Keluar** yang sudah di prosess sebelumnya.  


![Docusaurus logo](/img/buat-pembayaran-keluar.PNG)

Setelah Anda memastikan data pada **Pembayaran Keluar** Anda sudah sesuai dengan transaksi, maka Anda dapat terlebih dulu melakukan beberapa aksi seperti :

![Docusaurus logo](/img/btn-pembayaran-keluar.PNG)

- **Simpan Draft**

Jika Anda menyimpan **Pembayaran Keluar** sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data **Pembayaran Keluar** tersebut.

- **Post Pembayaran Keluar**

Jika Anda sudah merasa yakin terhadap data **Pembayaran Keluar**. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**.

- **Post & Send Pembayaran Keluar**

Saat anda melakukan **Post & Send Pembayaran Keluar** sistem secara otomatis akan mengirimkan email yang berupa bukti **Voucher Pembayaran Keluar** kepada entitas **Mitra** tertuju.  

![Docusaurus logo](/img/dtl-pembayaran-keluar.PNG)

## Biaya

**Biaya** adalah sebuah kegiatan **pencatatan, pengklasifikasian, pembuatan, hingga pelaporan** semua transaksi atau **biaya** yang terjadi dari proses produksi hingga distribusi dalam penjualan produk atau jasa.

**Menu Transaksi -> Biaya**

![Docusaurus logo](/img/menu-biaya.PNG)


# Buat Biaya

Pada halaman datatable **Biaya** klik **Buat Biaya**.

![Docusaurus logo](/img/dt-biaya.PNG)


Pada saat Anda membuat **Expense (Biaya)**, pada sistem **SEMPOA ERP** terdapat 2 jenis status terhadap **Biaya** yang akan Anda proses yaitu :

- **Lunas**
- **Belum Bayar**

![Docusaurus logo](/img/buat-biaya.PNG)

Dimana Anda dapat melakukan penyesuaian terhadap **Chart Of Account** yang akan digunakan dalam pembuatan **Expense (Biaya)** tersebut sesuai dengan kebutuhan.

Dalam melakukan pembuatan **Expense (Biaya)** harap Anda memeperhatikan kolom-kolom yang wajib di isi. Sistem akan menampilkan pesan error ketika nilai yang diinputkan tidak valid.

:::danger PERHATIAN
- Tanggal Biaya - Wajib diisi.
- Nomor Referensi - Wajib diisi.
- Deskripsi - Wajib diisi.
- Status Pembayaran - Wajib pilih.
- Akun Biaya - Wajib diisi.
- Akun Pembayaran - Wajib diisi.
- Nominal - Wajib diisi.
:::

Setelah Anda memastikan data pada **Biaya** Anda sudah sesuai dengan transaksi, maka Anda dapat terlebih dulu melakukan beberapa aksi seperti :

![Docusaurus logo](/img/btn-biaya.PNG)

- **Simpan Draft**

Jika Anda menyimpan **Biaya** sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data **Biaya** tersebut.

- **Post Biaya**

Jika Anda sudah merasa yakin terhadap data **Biaya**. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**.

- **Post & Send Biaya**

Saat anda melakukan **Post & Send Biaya** sistem secara otomatis akan mengirimkan email yang berupa bukti **Biaya** kepada entitas **Mitra** tertuju.  

![Docusaurus logo](/img/dtl-biaya.PNG)







