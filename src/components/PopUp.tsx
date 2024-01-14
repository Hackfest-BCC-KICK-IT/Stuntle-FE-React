import React from "react";

interface PopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const PopModal: React.FC<PopModalProps> = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative z-10">
            <h2 className="text-center text-3xl mb-8 font-semibold">
              Yakin Ingin Menghapus?
            </h2>
            <div className="flex flex-col gap-4 items-center">
              <button
                type="button"
                className="w-full md:w-[50%] h-[46px] bg-transparent text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
                onClick={() => onDelete()}
              >
                Ya, Hapus Data
              </button>

              <button
                type="button"
                onClick={() => onClose()}
                className="bg-orange text-white rounded-lg block text-ms font-semibold w-full md:w-[50%] h-[46px]"
              >
                Tidak, Batalkan Hapus Data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopModal;
