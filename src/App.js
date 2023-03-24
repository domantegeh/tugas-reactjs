import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home, {Portofolio, Kontak} from './components/home';

function App() {
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

  return (
    <div>
      <Header />
      <Home />
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
      })}
      <Kontak />
    </div>
  );
}

export default App;
