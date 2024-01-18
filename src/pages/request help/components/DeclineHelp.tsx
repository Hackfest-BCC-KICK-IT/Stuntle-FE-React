import BackButton from "./BackButton";

const DeclineHelp: React.FC<{ item: HelpModel }> = ({ item }) => {
  return (
    <div>
      <div className="w-[70%]">
        <p className="mt-4 text-lg font-medium">
          Tanggal Pengajuan: {item.createdAt}
        </p>
        <p className="mt-4 text-lg font-medium">
          Judul Pengajuan: {item.judul}
        </p>
        <p className="mt-4 text-lg font-medium">
          Deskripsi Pengajuan: {item.deskripsi}
        </p>
        <p className="mt-4 text-lg font-medium">Apakah Genting: YA</p>

        <p className="mt-4 text-lg font-medium">
          Status Pengajuan: <span className="text-red">Ditolak</span>
        </p>
      </div>
      <div className=" w-[70%]">
        <h3 className="heading1 mt-8 mb-4">Pesan Tambahan</h3>
        <textarea
          rows={4}
          className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
          placeholder="Tuliskan pesan tambahan kepada orang tua atas respon yang anda berikan, baik menerima maupun menolak permintaan bantuannya"
          value={item.pesanTambahan}
        />
      </div>
      <BackButton />
    </div>
  );
};
export default DeclineHelp;
