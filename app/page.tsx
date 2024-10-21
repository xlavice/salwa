import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowRiwayat from "./components/rowRiwayat";
import FavColor from "./components/favColor";
import InputKuis from "./components/inputKuis";




export default function CV() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor/>
      <InputKuis />
    </section>
  );
}