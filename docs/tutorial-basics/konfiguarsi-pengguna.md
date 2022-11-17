---
sidebar_position: 3
---

# Konfigurasi Pengguna



## Otorisasi Pengguna


### Peran Pengguna

**SEMPOA ERP** menerapkan roles atau peran untuk setiap users atau pengguna di dalam sebauh organisasi atau perusahaan yang menggunakan aplikasi ini.
- *Setiap organisasi atau perusahaan harus dan wajib memiliki paling tidak 1 pengguna yang berperan sebagai* **Company Admin** *dan 1 Pengguna sebagai* **Finance Manager**.
```md title="Daftar Peran / Roles SEMPOA ERP"
---
Role: Super Admin
capability:
  - Authorities: Administartor SEMPOA ERP
  - Accessable: Full Access on system

Role: Dev Ops
capability:
  - Authorities: Administartor SEMPOA ERP
  - Accessable: Full Access on system

Role: Company Admin
capability:
  - Authorities: Users
  - Accessable: Limited Access on modules

Role: Finance Manager
capability:
  - Authorities: Users
  - Accessable: Limited Access on features

Role: Finance Staff
capability:
  - Authorities: Users
  - Accessable: Limited Access on features
---
```

### Membuat Pengguna
Perlu diingat hanya pengguna yang berperan sebagai **Company Admin** yang diperbolehkan untuk menambahkan anggota pengguna dalam suatu organisasi atau perusahaan di dalam sistem **SEMPOA ERP**.

- Masuk ke menu **Administrasi -> Pengguna**.

![Docusaurus logo](/img/pengguna-menu.PNG)

- Pada halaman datatable klik tombol **Buat Pengguna**.
![Docusaurus logo](/img/dt-pengguna.PNG)

- Isi Form pengguna baru dalam organisasi Anda, dimana terdapat kolom kolom yang wajib di isi.

:::danger PERHATIAN
- Nama - Wajib di isi.
- Email - Wajib di isi.
- No Telepon - Wajib di isi.
- Peran - Wajib di isi.

:::
![Docusaurus logo](/img/form-buat-pengguna.PNG)

- Jika Anda gagal dalam pengisian data pengguna baru maka sistem akan memberi pesan error pada kolom yang salah atau wajib di isi. Namun di sisi lain jika Anda berhasil menambahkan pengguna baru maka status pengguna baru belum aktif.

- Aktifkan status pengguna baru agar dapat diverifikasi oleh sistem. 
- Klik nama pengguna yang berstatus belum aktif.

![Docusaurus logo](/img/non-aktiv-pertama.PNG)

- Pastikan data pengguna baru sudah benar sebelum Anda menekan tombol "Aktifkan"

![Docusaurus logo](/img/aktifkan-pengguna.PNG)

- Anda akan mengkonfirmasi untuk mengaktifkan pengguna baru.

![Docusaurus logo](/img/confrim-aktif.PNG)

- Setelah terkonfirmasi aktif, maka pengguna yang sudah di daftarkan akan mendapatkan email konfirmasi yang harus segera di konfirmasi. **Email verifikasi berlaku 24 jam**.

![Docusaurus logo](/img/confrim-user.PNG)

- Pada email verifikasi pengguna baru, terdapat tombol **"Confrim Account"**, pengguna baru akan dialihkan untuk dapat membuat password yang dapat dipakai untuk login kedalam sistem **SEMPOA ERP**.

![Docusaurus logo](/img/setNewPassword.jpeg)

- Setalah selesai melakukan pengisian password, pengguna baru akan diahlikan masuk kedalam **Dashboard SEMPOA ERP** sesuai peran pengguna yang sudah ditetapkan oleh **Company Admin**.

### Edit Pengguna

Hanya peran **Company Admin** yang dapat melakukan perubahan data terhadap pengguna didalam sebuah organisasi atau perusahaan yang menggunakan aplikasi **SEMPOA ERP**. 


- Masuk ke menu **Administrasi -> Pengguna**.

![Docusaurus logo](/img/pengguna-menu.PNG)

- Pada halaman datatable tertampil data-data pengguna dalam organisasi Anda, untuk melakukan perubahan data pada entitas pengguna, **Company Admin** hanya dapat melakukan beberapa perubahan seperti :

- Merubah Biodata Pengguna
- Merubah Peran Pengguna


Untuk melakukan perubahan data biodata ataupun peran pengguna, **Company Admin** cukup menekan nama pengguna yang dituju.

![Docusaurus logo](/img/dt-pengguna.PNG)

Lakukan perubahan sesuai data yang diinginkan.

![Docusaurus logo](/img/aktifkan-pengguna.PNG)

Jika perubahan data berhasil maka sistem akan menampilkan pesan **"Data berhasil disimpan"**, namun jika terdapat kesalahan, maka sistem akan menampilkan pesan error pada kolom pengisian data.


### Hapus Pengguna
:::danger PENTING
**Company Admin** tidak diperkenankan untuk menghapus data pengguna, jika ingin melakukan penghapusan data pengguna silahkan menghubungi konsultan **SEMPOA ERP**.
:::


