const adidasModel = require('./index.js');

let data = [
  {productID: 1, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 2, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productID: 3, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 4, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 5, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 6, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 7, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 8, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 9, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 10, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 100},
  {productID: 11, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 140}, 
  {productID: 12, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 13, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 14, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productID: 15, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 16, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 17, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productID: 18, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 19, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 20, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productID: 21, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 22, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productID: 23, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 24, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 25, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 26, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 27, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 28, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 29, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 30, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 31, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 32, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 33, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 34, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 35, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 36, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 37, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 38, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 39, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productID: 40, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 41, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 42, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 43, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 44, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 45, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 46, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 47, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productID: 48, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 49, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 50, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 51, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 52, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 53, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 54, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 55, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 56, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 57, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 58, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 59, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 60, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productID: 61, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 62, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 63, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 64, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productID: 65, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 66, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 110},
  {productID: 67, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 68, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 69, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 70, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productID: 71, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 72, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 73, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 74, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productID: 75, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 140},
  {productID: 76, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 77, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 78, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 79, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 80, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 81, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 82, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 83, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 84, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 85, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 86, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 87, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 88, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 89, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 90, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 91, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 92, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 93, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productID: 94, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 95, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 96, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 97, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 98, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 99, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 100, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 120}
];

const imagePool = [
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5598df83a9af4e809275aa0a01057122_9366/LXCON_Shoes_Green_EG0386_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/8e8daf6340a54e3cb874a92a0133e9a2_9366/Pharrell_Williams_SOLARHU_NMD_Shoes_Pink_BB9531_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7209945d23fd4621a622a88500f619b5_9366/Pharrell_Williams_Hu_Holi_NMD_MC_Shoes_Black_AC7033_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/b09c17f44a86428d8707a80b00bc4787_9366/Superstar_Shoes_White_C77154_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c18da2efe501464ba268a80b00baccbe_9366/Stan_Smith_Shoes_White_M20605_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/796f24f638a64857a1e7a9cf01331f4d_9366/U_Path_Run_Shoes_Black_G28108_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/42aa2445c0494d45b0c1a9c400d332f9_9366/NMD_R1_Shoes_Pink_BD8029_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5fd74bfb0f534da9933ea9910167be14_9366/Track_Jacket_Black_DV2557_21_model.jpg",
  "https://assets.adidas.com/images/w_600,f_auto,q_auto/c015b43ecb054f59972da8be01025a1e_9366/3_Stripes_Tee_White_DH3188.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/cae8f200dbb549a59934a9de01175906_9366/3_Stripes_Tee_Green_DV2590_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/13aa267673c54fe69200a99101535bf3_9366/Dame_5_Shoes_Turquoise_BB9314_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/13cf83eaf1ae4e45aa92a8a1016b45c7_9366/Utility_Knee_Socks_Red_BA1968_03_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/72b638e7224d46e3aa20a9c300cb2f38_9366/I_5923_Shoes_Pink_CG6025_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/e07b69b112fa4d52bfd4a9bd00d3fa00_9366/I_5923_Shoes_Blue_CG6026_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ac9ee0d3cf674ee5bc9da9b6008d1319_9366/Must_Haves_French_Terry_Badge_of_Sport_Pants_Blue_DX2497_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ab10d4e6602d46b59026a92701211133_9366/Must_Haves_French_Terry_Badge_of_Sport_Pants_Grey_DT9959_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/25c6ee3fa73d41f1a5e2a993012f3cba_9366/Essentials_3_Stripes_Sweatshirt_Grey_DU0709_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/a9a0af41a475457d8b39a99e01122980_9366/Essentials_3_Stripes_Sweatshirt_Black_DT5072_21_model.jpg",
  "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/64b036b193ea4d3d9c5fa7bb010112e0_9366/adidas_Z.N.E._Primeknit_Pants_Black_CF1466_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/8cabf10cae4c4909899da9de01172f8c_9366/SST_Track_Pants_Pink_DV2593_03_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/188c6437f3e84f20ba20a87900f025bc_9366/SST_Track_Pants_Black_CE2400_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/223141b0d1e9406e9001a988012c9b9c_9366/3_Stripes_Dress_Black_DV2567_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/99c3a303fb51442f932ea93f00f9a8c6_9366/3_Stripes_Dress_Pink_DV2565_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/23d1f7209ea54a4ca077a944012316d1_9366/3_Stripes_Pants_Black_DV1549_21_model.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3c63a7cc0c2143b887cca81f00a9c9c3_9366/Adilette_Cloudfoam_Plus_Stripes_Slides_Black_AP9971_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ce7e0a630b9240e3b5b9a8d200d99860_9366/Adilette_Cloudfoam_Plus_Stripes_Slides_Grey_B42115_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9dc58538ceb14286b9eaa9d300a35566_9366/Tanaami_Hoodie_Black_DY6691_21_model.jpg"

];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * Math.floor(max - min) + min);
};

const addImg = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].imageUrl = imagePool[getRandomInt(0, imagePool.length -1)];
  }
  return arr;
}

addImg(data);

const getRandom = () => {
  let result = [];
  let count = 0;
  while (count < 16) {
    result.push(data[getRandomInt(0, data.length-1)]);
    count++;
  }
  return result;
}

const seedFunc = () => {
  for (let i = 1; i < 100; i++) {
    let result = getRandom();
    adidasModel.updateOne({productID: i}, {similarItems: result})
      .then(() => {
        console.log('data seeded');
      })
      .catch(err => console.log(err));
  }

}

seedFunc();