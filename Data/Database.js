const data_maskapai = {
    GI:{
        maskapai_id: "GI",
        maskapai_nama: "Garuda Indonesia",
    },
    TAS:{
        maskapai_id: "TAS",
        maskapai_nama: "Trigana Air Service",
        
    },
    IAA:{
        maskapai_id: "IAA",
        maskapai_nama: "Indonesia AirAsia",
        
    },
    LA:{
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",   
    },
    WAA:{
        maskapai_id: "WAA",
        maskapai_nama: "Wings Abadi Airlines",
    },
    TA:{
        maskapai_id: "TA",
        maskapai_nama: "Tri-mg Airlines",
    },
    CI:{
        maskapai_id: "CI",
        maskapai_nama: "Citilink",
    },
    NA:{
        maskapai_id: "NA",
        maskapai_nama: "Nusantara Air",
        
    },
};

const data_bandara = {
    SIM:{
        bandara_kode: "SIM",
        bandara_nama: "Sultan Iskandar Muda",
    },
    SYK:{
        bandara_kode: "SYK",
        bandara_nama: "Sultan Syarif Kasim II",
    },
    SH:{
        bandara_kode: "SH",
        bandara_nama: "Soekarno Hatta",
    },
    ZAM:{
        bandara_kode: "ZAM",
        bandara_nama: "Zainuddin Abdul Madjid",
    },
    AY:{
        bandara_kode: "AY",
        bandara_nama: "Ahmad Yani",
    },
    SN:{
        bandara_kode: "SN",
        bandara_nama: "Syamsuddin Noor",
    },
    SAMS:{
        bandara_kode: "SMAS",
        bandara_nama: "Sultan Aji Muhammad Sulaiman",
    },
};

const data_jadwal = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "NA"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SH",
        maskapai_id: "NA"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "SH",
        maskapai_id: "TA"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "ZAM",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "ZAM",
        maskapai_id: "GI"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "AY",
        maskapai_id: "TAS"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "ZAM",
        bandara_kode_tujuan: "AY",
        maskapai_id: "TA"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "ZAM",
        bandara_kode_tujuan: "SN",
        maskapai_id: "IAA"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "AY",
        bandara_kode_tujuan: "SN",
        maskapai_id: "LA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "AY",
        bandara_kode_tujuan: "SMAS",
        maskapai_id: "WAA"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "SN",
        bandara_kode_tujuan: "SMAS",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "SN",
        bandara_kode_tujuan: "SIM",
        maskapai_id: "AA"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "SMAS",
        bandara_kode_tujuan: "SIM",
        maskapai_id: "GI"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "SMAS",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "TAS"
    },
    {
        jadwal_id: "15",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "ZAM",
        maskapai_id: "IAA"
    },
    {
        jadwal_id: "16",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "AY",
        maskapai_id: "LA"
    },
    {
        jadwal_id: "17",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "SN",
        maskapai_id: "WAA"
    },
    {
        jadwal_id: "18",
        bandara_kode_keberangkatan: "ZAM",
        bandara_kode_tujuan: "SMAS",
        maskapai_id: "TA"
    },
    {
        jadwal_id: "19",
        bandara_kode_keberangkatan: "SMAS",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "20",
        bandara_kode_keberangkatan: "ZAM",
        bandara_kode_tujuan: "SH",
        maskapai_id: "NA"
    },

];

export {
    data_maskapai, 
    data_bandara,
    data_jadwal,
};