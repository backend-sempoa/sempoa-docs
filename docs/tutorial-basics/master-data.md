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



<!-- # Master Data

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

**Result:** Let's see how to [Create a page](./create-a-page.md).

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well, as shown in [the extra guides](../tutorial-extras/manage-docs-versions.md).

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::



:::danger Take care

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> ! -->
