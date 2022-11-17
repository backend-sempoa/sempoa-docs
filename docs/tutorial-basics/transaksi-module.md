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

![Docusaurus logo](/img/trx-menu.PNG)

### Buat Ayat Jurnal

Pada halaman datatable **Jurnal Umum** klik **Buat Ayat Jurnal**

![Docusaurus logo](/img/dt-jurnal-umum.PNG)

Saat melakukan pengisian **Ayat Jurnal**, pastikan data yang dinputkan sesuai dengan data transaksi Anda berdasarkan **tipe** dan **No Referensi** yang sudah otomatis dikeluarkan oleh sistem.


![Docusaurus logo](/img/form-ayat-jurnal.PNG)
Saat terjadi kesalahan pengisian Ayat Jurnal, sistem akan mengerluarkan pesan kesalahan pada kolom-kolom yang mempunyai nilai yang tidak valid. Mohon perhatikan kolom-kolom yang wajib di isi.


![Docusaurus logo](/img/form-jurnal-required.PNG)


:::danger PERHATIAN
- Tipe - Wajib di isi.
- Deskripsi - Wajib di isi.
- Tanggal - Wajib di isi.
:::     


# Ayat Jurnal tidak balance

Dalam pengisian Ayat Journal, sistem dapat mengidentifikasi data jika terjadi ketidak-seimbangan data dalam Akuntansi (unbalance) sehingga tidak dapat diprosess. Jika hal ini terjadi periksa kembali data yang anda inputkan atau konsultasi dengan **konsultan SEMPOA ERP** untuk bantuan lebih lanjut.

![Docusaurus logo](/img/non-balance-jurnal.PNG)

# Ayat Jurnal Balance

Jika pengisian data terhadap Ayat Jurnal sesuai maka sistem akan dapat memprosess data untuk disimpan ataupun diposting sebagai Ayat Jurnal yang valid.

![Docusaurus logo](/img/balance-ayat-jurnal.PNG)

# Posting Ayat Jurnal
Sebelum melakukan posting ayat Jurnal, Pengguna dapat memilih beberapa aksi antara lain :




![Docusaurus logo](/img/pre-submit-jurnalumum.PNG)

- **Simpan Draft**

Jika Anda menyimpan ayat jurnal sebagai draft maka data akan tersimpan dan Anda kapan saja bisa melakukan perubahan data kembali terhadap data ayat jurnal tersebut.

![Docusaurus logo](/img/ayat-jurnal-draft.PNG)

- **Post Transaksi**

Jika Anda sudah merasa yakin terhadap data ayat jurnal. Anda bisa melakukan posting data, dengan catatan setiap data yang sudah terposting tidak lagi bisa dilakukan perubahan data.
Perubahan data saat terposting hanya dapat dilakukan oleh pengguna yang berstatus **Company Admin** dengan mengembalikan status data menjadi **Unposting (Draft)**

![Docusaurus logo](/img/konfrim-post-jurnal.PNG)

Data yang sudah terposting akan berstatus **Post**

![Docusaurus logo](/img/post-jurnal.PNG)

# Detail Jurnal Umum
Setelah membuat ayat jurnal, Anda bisa melihat keselurahan data detail di setiap ayat jurnal pada datatable untuk semua status yang berisikan informasi semua transaksi dari **chart of account** yang digunakan.
![Docusaurus logo](/img/detail-jurnal.PNG)

### Closing
Closing journal atau jurnal penutup adalah jurnal yang dibuat pada akhir periode akuntansi untuk mentransfer saldo dari akun sementara ke akun permanen. Akun sementara digunakan untuk mencatat aktivitas akuntansi selama periode tertentu.


Pada halaman datatable **Jurnal Umum** klik tombol **"Closing"**

![Docusaurus logo](/img/closing-btn.PNG)

Tertampil data pada periode bulan berjalan dalam satu tahun. Anda dapat melakukan closing terhadap data transaksi berdasarkan bulan sesuai kebutuhan Anda.
![Docusaurus logo](/img/dt-closing.PNG)

Sistem akan mengkonfirmasi saat Anda melakukan closing untuk memastikan tidak terjadi kesalahan closing pada sistem yang disebabkan oleh *human error*.
![Docusaurus logo](/img/konfrim-closing.PNG)

Saat bulan transaksi sudah terclosing maka sistem akan memberikan status **"Closed"**, saldo pada akun-akun yang terdapat pada bulan transaksi yang diclosing akan termutasi sesuai perhitungan akuntansi.

Namun jika terjadi kesalahan transaksi pada saat setelah terclosing maka Anda cukup membuka kembali bulan yang sudah terclosing tersebut menggunakan fitur **(re-open)** yang sudah disediakan oleh sistem **SEMPOA ERP**.

![Docusaurus logo](/img/reopen-closing.PNG)

Konfirmasi Reopen untuk bulan yang sudah diclosing. Bulan yang sudah diopen kembali secara otomatis juga ikut mengembalikan nilai-nilai pada akun akun sebelum termutasi.

![Docusaurus logo](/img/konfrim-reopen.PNG)

### Ekspor Data
Dalam mempermudah Anda dalam melihat seluruh aktivitas transaksi dalam jurnal umum, sistem menyediakan fitur ekspor file dalam bentuk **xlsx. (excel)**.

Pada halaman datatable **Jurnal Umum** klik **Ekspor**.
![Docusaurus logo](/img/ekspor-jurnal.PNG)

![Docusaurus logo](/img/ekspor-jurnal-1.PNG)

Sebelum Anda melakukan **Ekpor file Jurnal Umum**, Anda terlebih dulu diharuskan untuk memfilter data berdasarkan tanggal, bulan atau periode waktu tertentu sesuai kebutuhan Anda.

![Docusaurus logo](/img/filter-ekspor-jurnal.PNG)

Berikut hasil Ekspor file yang sudah terfilterisasi untuk **jurnal umum**
![Docusaurus logo](/img/contoh-ekspor-jurnal.PNG)


## Invoice

### Invoice Penjualan

### Invoice Pembelian

## Pembayaran

### Pembayaran Masuk

### Pembayaran Keluar

## Biaya

