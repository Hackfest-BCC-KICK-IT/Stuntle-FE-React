export interface RecipesModel {
  id: string; // give id to backend
  value: string; //show value to user
}

export const optionsRecipesFor: RecipesModel[] = [
  { id: "orang_tua", value: "Orang Tua" },
  { id: "bayi_anak", value: "Bayi & Anak" },
];

export const optionsRecipesAgeMoms: RecipesModel[] = [
  { id: "trimester_1", value: "Trisemester 1" },
  { id: "trimester_2", value: "Trisemester 2" },
  { id: "trimester_3", value: "Trisemester 3" },
];
export const optionsRecipesAgeBaby: RecipesModel[] = [
  { id: "0_3_bulan", value: "0 - 3 Bulan" },
  { id: "3_6_bulan", value: "3 - 6 Bulan" },
  { id: "6_12_bulan", value: "6 - 12 Bulan" },
  { id: "1_tahun", value: "1 Tahun" },
  { id: "2_tahun", value: "2 Tahun" },
];
export const optionsRecipesTime: RecipesModel[] = [
  { id: "sarapan", value: "Sarapan" },
  { id: "makan_siang", value: "Makan Siang" },
  { id: "makan_malam", value: "Makan Malam" },
  { id: "snack_sehat", value: "Snack Sehat" },
];

export const optionsRecipesMade: RecipesModel[] = [
  { id: "sayuran", value: "Sayuran" },
  { id: "buah_buahan", value: "Buah-Buahan" },
  { id: "daging_sapi", value: "Daging Sapi" },
  { id: "daging_ayam", value: "Daging Ayam" },
  { id: "daging_ikan", value: "Daging Ikan" },
  { id: "telur", value: "Telur" },
  { id: "susu", value: "Susu" },
  { id: "lainnya", value: "Lainnya" },
];

export const optionsRecipesTimeMade: RecipesModel[] = [
  { id: "10_20_menit", value: "10 - 20 Menit" },
  { id: "20_30_menit", value: "20 - 30 Menit" },
  { id: "30_60_menit", value: "30 - 60 Menit" },
  { id: "diatas_60_menit", value: "Diatas 60 Menit" },
];
