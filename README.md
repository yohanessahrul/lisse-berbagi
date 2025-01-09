# Lisse Berbagi

Lisse berbagi adalah wadah amal bagi penghuni Cluster Lisse (Perumahan Metland Cibitung) yang diselenggarai oleh Ibu-ibu PKK.

Project ini hanyalah menampilkan data yang ada dari Google Sheet, Sehingga memerllukan update API parameter apabila range yang dicakup lebih luas untuk menampilkan data.

Karna bergantung terhadap update manual, project ini belum menampilkan data secara realtime.

## API Reference

#### Base URL

```http
https://sheets.googleapis.com
```

#### Get data

```http
  GET /v4/spreadsheets/{{spreadsheetID}}/values/Master!A2:E48?key={{apiKey}}
```

| Parameter       | Type     | Description                                                           |
| :-------------- | :------- | :-------------------------------------------------------------------- |
| `spreadsheetID` | `string` | **Required**. ID from google sheet url                                |
| `api_key`       | `string` | **Required**. Your API key from Google Console > Credential > API Key |

## Run Locally

Clone the project

```bash
  git clone xxx
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
