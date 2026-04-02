import * as xlsx from "xlsx";

/**
 * Excel dosyasından veri okuyup JSON formatında döndüren yardımcı fonksiyon.
 *
 * Kullanım amacı:
 * - Test senaryolarında kullanılacak verileri Excel'den okumak için kullanılır.
 * - Data-driven testing yaklaşımında test verilerini dışarıdan beslemek için idealdir.
 *
 * @param filePath - Okunacak Excel dosyasının yolu (örn: "data/testData.xlsx")
 * @returns Excel'in ilk sayfasındaki satırları JSON dizisi olarak döndürür.
 *          Her satır bir nesne olur, sütun başlıkları key olarak kullanılır.
 *
 * Örnek:
 * | username | password |
 * | admin    | 1234     |
 *
 * Yukarıdaki Excel verisi şu şekilde döner:
 * [{ username: "admin", password: "1234" }]
 */
export function getExcelData(filePath: string): any[] {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet);
}