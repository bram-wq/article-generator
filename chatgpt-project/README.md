# Article Generator untuk ChatGPT Project

Menulis artikel langsung di ChatGPT, tanpa API key dan tanpa biaya API. Cara pasangnya sama dengan APOPS METHOD.

## Pasang (3 menit)
1. Di ChatGPT, buat Project baru bernama `ARTICLE GENERATOR`.
2. Buka Project settings, tempel seluruh isi `00_PROJECT_INSTRUCTIONS.md` ke Instructions, klik Save.
3. Di Sources, unggah enam file di folder `sources/`. Jangan unggah README ini atau file instruksi.
4. Mulai chat baru di dalam Project.

## Pakai
```
/ARTIKEL Cara membangun kebiasaan membaca untuk remaja. Pembaca: orang tua murid SMP.
Tujuan: mereka mencoba satu langkah minggu ini. Sedang, edukatif,
kata kunci: kebiasaan membaca, minat baca remaja.
```

Command lain: `/OUTLINE`, `/LANJUT`, `/REVISI`, `/PERSINGKAT`, `/PERPANJANG`, `/TONE`, `/TERJEMAH`, `/SEO`, `/JUDUL`, `/SERI`, `/CEK`. Semuanya opsional; brief bahasa biasa juga cukup.

## Batas
- Satu chat untuk satu artikel.
- ChatGPT tidak boleh mengarang angka atau kutipan; bagian yang butuh data ditandai `[PERLU DATA: ...]` dan harus Anda isi.
- Hasil tetap perlu dibaca manusia sebelum terbit.
