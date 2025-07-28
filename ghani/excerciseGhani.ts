console.log("kerjakan exercise di folder ini");

// 1. tabel perkalian integer 9
for (let i = 1; i <= 10; i++) {
  console.log(`9 x ${i} = ${9 * i}`);
}

// 2. cek string palindrome atau bukan
const strA: string = "madam";
const strB: string = "mister";
const strC: string = "racecar";

function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(`${strA} adalah palindrome: ${isPalindrome(strA)}`);
console.log(`${strB} adalah palindrome: ${isPalindrome(strB)}`);
console.log(`${strC} adalah palindrome: ${isPalindrome(strC)}`);

// 3. konversi cm ke km
const centiMtrA: number = 100000;
const centiMtrB: number = 50000;
const centiMtrC: number = 250000;

function cmToKm(cm: number): number {
  return cm / 100000;
}
console.log(`${centiMtrA} cm = ${cmToKm(centiMtrA)} km`);
console.log(`${centiMtrB} cm = ${cmToKm(centiMtrB)} km`);
console.log(`${centiMtrC} cm = ${cmToKm(centiMtrC)} km`);

// 4. konversi angka ke rupiah
const angkaA: number = 1000000;
const angkaB: number = 250000;
const angkaC: number = 500000;

function formatRupiah(angka: number): string {
  return `Rp ${angka.toLocaleString("id-ID")}`;
}
console.log(`${angkaA} dalam rupiah: ${formatRupiah(angkaA)}`);
console.log(`${angkaB} dalam rupiah: ${formatRupiah(angkaB)}`);
console.log(`${angkaC} dalam rupiah: ${formatRupiah(angkaC)}`);

// 5. hapus karakter tertentu dari string
const stringAwal: string = "Hello, World!";
const stringHapus: string = "o";

function removeCharacter(str: string, char: string): string {
  return str.split(char).join("");
}
console.log(`Original: ${stringAwal}`);
console.log(
  `Setelah menghapus karakter '${stringHapus}': ${removeCharacter(
    stringAwal,
    stringHapus
  )}`
);

// 6. kapital huruf pertama dari setiap kata
const kalimat: string = "selamat datang di dunia pemrograman";

function capitalizeFirstLetterOfEachWord(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(`Original: ${kalimat}`);
console.log(
  `Setelah kapitalisasi: ${capitalizeFirstLetterOfEachWord(kalimat)}`
);

// 7. menukar karakter besar/kecil tiap huruf
const kalimatGanti: string = "The QuiCk BrOwN Fox";

function swapCase(sentence: string): string {
  return sentence
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}
console.log(`Original: ${kalimatGanti}`);
console.log(`Setelah menukar huruf besar/kecil: ${swapCase(kalimatGanti)}`);

// 8. cari angka terbesar dari 2 angka
const angka1: number = 45;
const angka2: number = 78;

function findMax(a: number, b: number): number {
  return a > b ? a : b;
}
console.log(
  `Angka terbesar antara ${angka1} dan ${angka2} adalah: ${findMax(
    angka1,
    angka2
  )}`
);

// 9. susun angka dari kecil ke besar
const angkaArray: number[] = [34, 12, 5, 67, 23, 89, 1];

function sortArrayAscending(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log(`Array sebelum diurutkan: ${angkaArray}`);
console.log(`Array setelah diurutkan: ${sortArrayAscending(angkaArray)}`);

// 10. cek tipe data input
const input1: any = "Hello";
const input2: any = 123;
const input3: any = true;

function checkDataType(input: any): number {
  if (typeof input === "string") {
    return 1;
  } else if (typeof input === "number") {
    return 2;
  } else {
    return 3;
  }
}
console.log(`Input: ${input1}, Tipe data: ${checkDataType(input1)}`);
console.log(`Input: ${input2}, Tipe data: ${checkDataType(input2)}`);
console.log(`Input: ${input3}, Tipe data: ${checkDataType(input3)}`);

// 11. ubah semua huruf "a" menjadi karakter "*" pada string
const stringUbah: string = "JavaScript adalah bahasa pemrograman yang populer";

function replaceCharacter(
  str: string,
  target: string,
  replacement: string
): string {
  return str.split(target).join(replacement);
}
console.log(`Original: ${stringUbah}`);
console.log(
  `Setelah mengganti huruf "a" dengan "*": ${replaceCharacter(
    stringUbah,
    "a",
    "*"
  )}`
);
