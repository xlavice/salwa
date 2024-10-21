import RowRiwayat from "./rowRiwayat";

export default function riwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
        <h2  className="text2x1">Riwayat Pekerjaan</h2>
        </div>
        <RowRiwayat instansi="RA.Istiqomah Baskara" posisi="Guru TK" tahun="2023"/>
        <RowRiwayat instansi="PT. Growth Hub Indonesia" posisi="Content Creator" tahun="2024"/>
        <RowRiwayat instansi="PT. Insaba" posisi="Associate" tahun="2024"/>
        
        </div>
    );
}