import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Home, {Portofolio, Kontak} from './components/home';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const artikelList = [
  {
    id: 1,
    judul: "Tugas Ke-1",
    kategori: "HTML & CSS",
    keterangan: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam fugit. Asperiores repudiandae suscipit, praesentium porro atque soluta. Consequuntur et saepe quas laborum laudantium. Magnam minus quae expedita eum impedit!",
    tujuan: "https://github.com/domantegeh/tugas1.git",
    gambar: "./komputer-1.jpg",
    suka: 10
  },
  {
    id: 2,
    judul: "Tugas Ke-2",
    kategori: "Javascript",
    keterangan: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam fugit. Asperiores repudiandae suscipit, praesentium porro atque soluta. Consequuntur et saepe quas laborum laudantium. Magnam minus quae expedita eum impedit!",
    tujuan: "https://github.com/domantegeh/tugas-js.git",
    gambar:
      "./komputer-2.jpg",
    suka: 7,
  },
  {
    id: 3,
    judul: "Belajar Bahasa Pemrograman PHP",
    kategori: "PHP",
    keterangan: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam fugit. Asperiores repudiandae suscipit, praesentium porro atque soluta. Consequuntur et saepe quas laborum laudantium. Magnam minus quae expedita eum impedit!",
    tujuan: "https://github.com/domantegeh/php-dasar.git",
    gambar:
      "./komputer-3.jpg",
    suka: 13,
  }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portofolio",
    element: <><Header />
    {artikelList.map((v, i) => {
        return(
          <Portofolio
            key={i}
            kategori={v.kategori}
            keterangan={v.keterangan}
            tujuan={v.tujuan}
            judul={v.judul}
            gambar={v.gambar}
            suka={v.suka}
            id={v.id}
            />
        );
      })}</>
  },
  {
    path: "/kontak",
    element: <><Header /><Kontak /></>
  }
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
