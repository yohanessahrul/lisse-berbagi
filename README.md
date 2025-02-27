# Lisse Berbagi

Lisse berbagi adalah wadah amal bagi penghuni Cluster Lisse (Perumahan Metland Cibitung) yang diselenggarai oleh Ibu-ibu PKK.

Project ini hanya menampilkan data yang ada dari GoogleSheet, sehingga memerlukan update API parameter apabila range yang dicakup lebih luas untuk menampilkan data.

Karna bergantung terhadap update manual, project ini belum menampilkan data secara realtime.

## API Reference

#### Base URL

```bash
https://sheets.googleapis.com
```

#### Get data

```bash
  GET /v4/spreadsheets/{{spreadsheetID}}/values/Master!A2:E48?key={{apiKey}}
```

| Parameter       | Type     | Description                                                           |
| :-------------- | :------- | :-------------------------------------------------------------------- |
| `spreadsheetID` | `string` | **Required**. ID from google sheet url                                |
| `api_key`       | `string` | **Required**. Your API key from Google Console > Credential > API Key |

## Run Locally

Clone the project

```bash
  git clone https://github.com/yohanessahrul/lisse-berbagi.git
```

Go to the project directory

```bash
  cd lisse-berbagi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Client:** React, React Router Dom, TailwindCSS, SWR, Vite

**Server:** Google Sheet API

## Version

NodeJS 22.11.0\
ReactJS 18.3.1\
Vite 6.0.1\
Tailwind 3.4.16
