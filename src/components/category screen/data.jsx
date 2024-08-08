import React from "react";

//mobile imports
import eleven from "./mobile images/iphone11.webp"
import twelevemini from "./mobile images/iphone12mini.webp"
import tweleve from "./mobile images/iphone12pro.webp"
import fifteen from "./mobile images/15proooomax.webp"
import mone from "./mobile images/mobile1.webp"
import mtwo from "./mobile images/mobile2.jfif" 
import mthree from "./mobile images/mobile3.webp"
import mfour from "./mobile images/mobile4.webp"
import mfive from "./mobile images/mobile 20.webp"
import msix from "./mobile images/mobile6.webp"
import mseven from "./mobile images/mobile19.webp"
import meight from "./mobile images/mobile8.webp"
import mnine from "./mobile images/mobile9.webp"
import mten from "./mobile images/mobile10.webp"
import meleven from "./mobile images/mobile11.webp"
import mtweleve from "./mobile images/mobile12.webp"
import mthirteen from "./mobile images/mobile13.webp"
import mfourteen from "./mobile images/mobile14.webp"
import mfifhteen from "./mobile images/mobile15.webp"
import msixhteen from "./mobile images/mobile16.webp"

//vehices imports
import vone from "./vehicle images/c1.webp"
import vtwo from "./vehicle images/c2.webp"
import vthree from "./vehicle images/c3.jfif"
import vfour from "./vehicle images/c4.webp"
import vfive from "./vehicle images/c5.webp"
import vsix from "./vehicle images/c6.webp"
import vseven from "./vehicle images/c7.webp"
import veight from "./vehicle images/c8.webp"
import vnine from "./vehicle images/c9.webp"
import vten from "./vehicle images/c10.webp"
import veleven from "./vehicle images/c11.webp"
import vtweleve from "./vehicle images/c12.webp"
import vthirteen from "./vehicle images/c13.webp"
import vfourteen from "./vehicle images/c14.webp"
import vfifhteen from "./vehicle images/c15.webp"
import vsixhteen from "./vehicle images/c16.webp"
import vseventeen from "./vehicle images/c17.webp"
import veighteen from "./vehicle images/c18.webp"
import vnineteen from "./vehicle images/c19.webp"
import vtwenty from "./vehicle images/c20.webp"

//property sale imports
import psone from "./sale images/ps1.webp"
import pstwo from "./sale images/ps2.webp"
import psthree from "./sale images/ps3.webp"
import psfour from "./sale images/ps4.webp"
import psfive from "./sale images/ps5.webp"
import pssix from "./sale images/ps6.webp"
import psseven from "./sale images/ps7.webp"
import pseight from "./sale images/ps8.webp"
import psnine from "./sale images/ps9.webp"
import psten from "./sale images/ps10.webp"
import pseleven from "./sale images/ps11.webp"
import pstweleve from "./sale images/ps12.webp"
import psthirteen from "./sale images/ps13.webp"
import psfourteen from "./sale images/ps14.webp"
import psfifteen from "./sale images/ps15.webp"
import pssixteen from "./sale images/ps16.webp"
import psseventeen from "./sale images/ps17.webp"
import pseighteen from "./sale images/ps18.webp"
import psnineteen from "./sale images/ps19.webp"
import pstwenty from "./sale images/ps20.webp"

//property rent imports
import prone from "./rent images/pr1.webp"
import prtwo from "./rent images/pr2.webp"
import prthree from "./rent images/pr3.webp"
import prfour from "./rent images/pr4.webp"

//electronics imports
import eone from"./electronics images/e1.webp"
import etwo from"./electronics images/e2.webp"
import ethree from"./electronics images/e3.webp"
import efour from"./electronics images/e4.webp"

//bike imports
import bone from "./bikes images/b1.webp"

//business imports
import buone from "./business images/bu1.webp"

//services imports
import sone from "./services images/s1.webp"

//jobs imports
import jone from "./jobs images/j1.webp"

//animal imports
import aone from "./animals/a1.webp"

//furniture imports
import fone from "./furniture images/f1.webp"

//fashion imports
import faone from "./fashion images/fu1.webp"

//books imports 
import bkone from "./books images/b1.jfif"

//kids imports
import kone from "./kids images/k1.webp"

export let mobile = [
    { type: "mobile", id: 1, subtitle: "iPhone 11 | Pta Approved | 64gb", location: "Gulshan, Karachi ", delivery: "Yes", brand: "iPhone", condition: "used", Title: "iPhone 11", Description: "64gb | Pta Approved", Price:  75500, image: eleven, since: "aug 2002", name: "Adamji"},
    { type: "mobile", id: 2, subtitle: "iPhone 15 Pro Max | Factory Unlock | 512gb", location: "Clifton, Karachi ", delivery: "no", brand: "iPhone", condition: "New", Title: "iPhone 15 Pro Max", Description: "512gb | Factory unlock", Price:  525000, image: fifteen, since: "aug 2005", name: "Shoaib" },
    { type: "mobile", id: 3, subtitle: "iPhone 12 Pro | JV | 128gb", location: "Defence, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Open Box", Title: "iPhone 12 Pro ", Description: "128gb | JV", Price: 120000, image: tweleve, since: "june 2011", name: "Shafay" },
    { type: "mobile", id: 4, subtitle: "iPhone 12 Mini | Non Pta | 256gb", location: "Clifton, Karachi ", delivery: "no", brand: "iPhone", condition: "Slightly used", Title: "iPhone 12 Mini", Description: "256gb | Non Pta", Price: 100000, image: twelevemini, since: "oct 2006", name: "Ahmaan" },

    { type: "mobile", id: 5, subtitle: "One Plus | Pta Patch | 256gb", location: "Memar, Karachi ", delivery: "No", brand: "One Plus", condition: "used", Title: "One Plus", Description: "256gb | Pta Patched", Price: 123200, image: mone, since: "nov 2007", name: "Ahmed" },
    { type: "mobile", id: 6, subtitle: "Xiomi | Pta Approved | 128gb", location: "Latifabad, Hyderabad ", delivery: "Yes", brand: "Redmi", condition: "Open Box ", Title: "Redmi Xiomi", Description: "128gb | Pta Approved", Price:43980, image: mtwo, since: "july 2014", name: "Arfeen" },
    { type: "mobile", id: 7, subtitle: "Samsung | Pta Approved | 64gb", location: "Hadeed, Karachi ", delivery: "No", brand: "Samsung", condition: "used", Title: "Samsung s1", Description: "64gb | Pta Approved", Price:  25000, image: mthree, since: "sep 2018", name: "Amin" },
    { type: "mobile", id: 8, subtitle: "Huawei | Pta Approved | 512gb", location: "Gulshan, Karachi ", delivery: "No", brand: "Huawei", condition: "New", Title: "Huawei h100", Description: "512gb | Pta Approved", Price: 210000, image: mfour,  since: "apr 2020", name: "Talha" },

    { type: "mobile", id: 9, subtitle: "OPPO | Pta Approved | 64gb", location: "Power House, Karachi ", delivery: "No", brand: "Oppo", condition: "used", Title: "OPPO A33f", Description: "64gb | Pta Approved", Price: 15300, image: mfive, since: "feb 2018", name: "Asfahaan" },
    { type: "mobile", id: 10, subtitle: "One Plus | Non Pta | 256gb", location: "Garden, Karachi ", delivery: "No", brand: "One Plus", condition: "used", Title: "One Plus OP2", Description: "256gb | Non Pta ", Price: 110000, image: msix, since: "june 2013", name: "Abhiyaan" },
    { type: "mobile", id: 11, subtitle: "Samsung | Pta Approved | 64gb", location: "Kotri, Hyderabad ", delivery: "No", brand: "Samsung", condition: "New", Title: "Samsung A16", Description: "64gb | Pta Approved", Price:  52000, image: mseven, since: "sep 2019", name: "Rohaan" },
    { type: "mobile", id: 12, subtitle: "Redmi | Pta Approved | 64gb", location: "Iqbal Town, Karachi ", delivery: "No", brand: "Redmi", condition: "used", Title: "Redmi Xiomi Note 10 Pro", Description: "64gb | Pta Approved", Price:23200, image: meight, since: "dec 2013", name: "Hamza" },

    { type: "mobile", id: 13, subtitle: "Techno | Pta Approved | 512gb", location: "Johar, Karachi ", delivery: "Yes", brand: "Techno", condition: "used", Title: "Techno Camon 3030", Description: "512gb | Pta Approved", Price:621000, image: mnine, since: "march 2011", name: "Sameer" },
    { type: "mobile", id: 14, subtitle: "Samsung | Non Pta | 256gb", location: "Korangi, Karachi ", delivery: "No", brand: "Samsung", condition: "used", Title: "Samsung s21 ultra", Description: "256gb | Non Pta", Price: 225000, image: mten, since: "july 2016", name: "Abu Zar" },
    { type: "mobile", id: 15, subtitle: "Redmi | Pta Approved | 64gb", location: "Gulshan, Karachi ", delivery: "Yes", brand: "Redmi Xiomi", condition: "used", Title: "Redmi Xiomi A2 plus", Description: "64gb | Pta Approved", Price:  19000, image: meleven, since: "may 2017", name: "Ameer Hamza" },
    { type: "mobile", id: 16, subtitle: "Vivo | Pta Approved | 128gb", location: "Gulshan, Karachi ", delivery: "Yes", brand: "Vivo", condition: "used", Title: "Vivo v20", Description: "128gb | Pta Approved", Price: 38000, image: mtweleve, since: "sep 2018", name: "Farooq" },

    { type: "mobile", id: 17, subtitle: "Infinix | Pta Approved | 256gb", location: "Akmal Towm, Karachi ", delivery: "No", brand: "Infinix", condition: "New", Title: "Infinix Zero 30", Description: "256gb | Pta Approved", Price: 119000, image: mthirteen, since: "nov 2011", name: "Aslam" },
    { type: "mobile", id: 18, subtitle: "Google | Non Pta  | 128gb", location: "Iqbal, Karachi ", delivery: "No", brand: "Google", condition: "used", Title: "Google Pixel 4", Description: "128gb | Non Pta", Price: 59500, image: mfourteen, since: "dec 2010", name: "Faheem" },
    { type: "mobile", id: 19, subtitle: "Aquos | Patch Pta  | 256gb", location: "Clifton, Karachi ", delivery: "Yes", brand: "Aquos", condition: "used", Title: "Aquos Zero 5g", Description: "256gb | Patch Pta ", Price:  20990, image: mfifhteen, since: "jan 2009", name: "Ahmed" },
    { type: "mobile", id: 20, subtitle: "Redmi Xiomi | Pta Approved | 64gb", location: "Beleview, Karachi ", delivery: "No", brand: "Redmi Xiomi", condition: "Slightly used", Title: "Redmi Xiomi Note 12", Description: "64gb | Pta Approved", Price: " 32,000", image: msixhteen, since: "feb 2008", name: "Yasin" },
    // { type: "mobile", id: 17, subtitle: "Infinix | Pta Approved | 256gb", location: "Korangi, Karachi ", delivery: "No", brand: "Infinix", condition: "New", Title: "Infinix Zero 30", Description: "256gb | Pta Approved", Price:  119000, image: mthirteen, since: "nov 2011", name: "Aslam" },
]



export let vehicles = [

    { type: "vehicles", id: 21, subtitle: "Toyota Parado | Full Option | 2017", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Parado 2017", Description: "Toyota Parado | 2017", Price:  20650000, image: vone, since: "aug 2023", name: "Sarfaraz Ali Asghar" },
    { type: "vehicles", id: 22, subtitle: "Hyundai Tucson | Automatic | 2022", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Hyundai", condition: "used", Title: "Hyundai Tucson 2022", Description: "Hyundai Tucson | 2022", Price:  7150000, image: vtwo, since: "dec 2011", name: "Naseem Shah " },
    { type: "vehicles", id: 23, subtitle: "Suzuki Cultus | Manual | 2020", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Suzuki", condition: "used", Title: "Suzuki Cultus 2020", Description: "Suzuki Cultus | 2020", Price:  3900000, image: vthree, since: "nov 2008", name: "Hanif Akbar" },
    { type: "vehicles", id: 24, subtitle: "Toyota Yaris | Automatic | 2022", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Yaris 2022", Description: "Toyota Yaris | 2020", Price:  5100000, image: vfour, since: "feb 2022", name: "Asad Chandio" },

    { type: "vehicles", id: 25, subtitle: "Toyota Voxy | 5.0L | 2004", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Voxy 2004", Description: "Toyota Voxy | 2004", Price:  6400000, image: vfive, since: "sept 2021", name: "Ashraf Watch" },
    { type: "vehicles", id: 26, subtitle: "Lexus lx570 | Full Cabin | 2019", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Lexus", condition: "used", Title: "Lexus lx570 2019", Description: "Lexus lx570 | 2019", Price:  75000000, image: vsix, since: "nov 2007", name: "Ahmed"},
    { type: "vehicles", id: 27, subtitle: "SuperAsia Loader | 200cc | 2023", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "SuperAsia", condition: "New", Title: "SuperAsia Loader 2023", Description: "SuperAsia Loader | 2023", Price:  305000, image: vseven, since: "june 2022", name: "Fareed Shamsi" },
    { type: "vehicles", id: 28, subtitle: "Honda City | Aspire | 2016", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Honda", condition: "used", Title: "Honda City 1.5 Aspire 2016", Description: "Honda City | 2016", Price:  3100000, image: veight, since: "jan 2007", name: "Shahnawaz Bhatti" },

    { type: "vehicles", id: 29, subtitle: "Suzuki Mehran | Project Car | 1998", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Suzuki", condition: "used", Title: "Suzuki Mehran 1998", Description: "Suzuki Mehran | 1998", Price: 620000, image: vnine, since: "nov 2018", name: "Suleman Yousuf" },
    { type: "vehicles", id: 30, subtitle: "Toyota Corolla | Altis | 2019", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Corolla", Description: "Toyota Corolla | 2019", Price:  6700000, image: vten, since: "oct 2017", name: "Yasin Bond" },
    { type: "vehicles", id: 31, subtitle: "Toyota Landcruiser | Full Cabin | 2020", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Landcruiser 2020", Description: "Toyota Landcruiser | 2020", Price: " 45,000,000", image: veleven, since: "july 2017", name: "Akmal Shah" },
    { type: "vehicles", id: 32, subtitle: "Millat MF 235 | Tractor | 2024", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Millat", condition: "used", Title: "Millat's MF 235 2024", Description: "Millat's MF 235 | 2024", Price: 2500000, image: vtweleve, since: "march 2018", name: "Shaheen Iqbal" },

    { type: "vehicles", id: 33, subtitle: "Toyota Fortuner | 4x4 | 2021", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Fortuner 4x4 2021 ", Description: "Tyota Fortuner  | 2021", Price:  10510000, image: vthirteen, since: "mar 2024", name: "Shahid Afridi" },
    { type: "vehicles", id: 34, subtitle: "Suzuki Jimny  | 4x2 | 2022", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "iPhone", condition: "used", Title: "Suzuki Jimny 4x2 2022", Description: "Suzuki Jimny | 2022", Price: 7500000, image: vfourteen, since: "oct 2022", name: "Shahid Anwar" },
    { type: "vehicles", id: 35, subtitle: "Toyota Aqua | Hybrid | 2023", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Aqua 2023", Description: "Toyota Aqua | 2023", Price: 9200000, image: vfifhteen, since: "march 2011", name: "Jawad Khan Supari" },
    { type: "vehicles", id: 36, subtitle: "Toyota Sienta | Hybrid | 2020", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Sienta 2020/2024", Description: "Toyota Sienta | 2020", Price:  7500000, image: vsixhteen, since: "nov 2007", name: "Shafay Niazi" },

    { type: "vehicles", id: 37, subtitle: "Honda Vezel | Hybrid | 2015", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Honda", condition: "used", Title: "Honda Vezel 2015", Description: "Honda Vezel | 2015", Price: 5500000, image: vseventeen, since: "jan 2009", name: "Virat Aslam" },
    { type: "vehicles", id: 38, subtitle: "Haval Jolion | HEV | 2023", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Haval", condition: "used", Title: "Haval Jolion HEV 2023", Description: "Haval Jolion  HEV | 2023", Price:  10110000, image: veighteen, since: "march 2021", name: "Jawaid Lomri" },
    { type: "vehicles", id: 39, subtitle: "Toyota Landcruiser Parado | Full Cabin | 2020", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Landcruiser Parado", Description: "Toyota Landcruiser Parado  | 2020", Price:  47000000, image: vnineteen, since: "oct 2019 ", name: "Faizan Mirchi" },
    { type: "vehicles", id: 40, subtitle: "BMW i8 | Full Option | 2021", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "BMW", condition: "used", Title: "BMW i8 2021", Description: "BMW i8 | 2021", Price:  32500000, image: vtwenty, since: "nov 2008", name: "Shafay Akmal Majeed Lodhi" },
    // { type: "vehicles", id: 21, subtitle: "Toyota Parado | Full Option | 2017", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Toyota", condition: "used", Title: "Toyota Parado 2017", Description: "Toyota Parado | 2019", Price:  30650000, image: vone, since: "aug 2023", name: "Sarfaraz Ali Asghar" },
]



export let sale = [

    { type: "sale", id: 41, subtitle: "2.5 Marla House| Luxury Property | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Arif Builder", condition: "New Contruction", Title: "2.5 Marla House", Description: "2.5 Marla House | All Docs Clear", Price:  41000000, image:psone,  since: "nov 2007", name: "Ahmed" },
    { type: "sale", id: 42, subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000, image:pstwo,  since: "july 2014", name: "Arfeen" },
    { type: "sale", id: 43,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psthree,  since: "sep 2018", name: "Amin" },
    { type: "sale", id: 44,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psfour,  condition: "New", since: "apr 2020", name: "Talha" },

    { type: "sale", id: 45, subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000, image:psfive,  since: "aug 2002", name: "Adamji" },
    { type: "sale", id: 46,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pssix,  since: "aug 2005", name: "Shoaib" },
    { type: "sale", id: 47,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psseven,  since: "june 2011", name: "Shafay" },
    { type: "sale", id: 48,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pseight ,  since: "oct 2006", name: "Ahmaan" },

    { type: "sale", id: 49,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psnine,  since: "feb 2018", name: "Asfahaan" },
    { type: "sale", id: 50,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psten, since: "june 2013", name: "Abhiyaan" },
    { type: "sale", id: 51,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pseleven,  since: "sep 2019", name: "Rohaan" },
    { type: "sale", id: 52,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pstweleve,  since: "dec 2013", name: "Hamza" },

    { type: "sale", id: 53,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psthirteen,  since: "march 2011", name: "Sameer" },
    { type: "sale", id: 54,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psfourteen, since: "july 2016", name: "Abu Zar" },
    { type: "sale", id: 55,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psfifteen,  since: "may 2017", name: "Ameer Hamza" },
    { type: "sale", id: 56,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pssixteen, since: "sep 2018", name: "Farooq" },

    { type: "sale", id: 57,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psseventeen,  since: "nov 2011", name: "Aslam" },
    { type: "sale", id: 58,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pseighteen,  since: "dec 2010", name: "Faheem" },
    { type: "sale", id: 59,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:psnineteen,  since: "jan 2009", name: "Ahmed" },
    { type: "sale", id: 60,  subtitle: "21 Marla House | Premium Construction | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "21 Marla House", Description: "21 Marla House | All Docs Clear", Price: 250000000,image:pstwenty,  since: "feb 2008", name: "Yasin" },
    // { type: "sale", id: 41, subtitle: "2.5 Marla House| Luxury Property | All Docs Clear", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Arif Builder", condition: "New Contruction", Title: "2.5 Marla House", Description: "2.5 Marla House | All Docs Clear", Price: 41000000, image:psone,  since: "nov 2007", name: "Ahmed" },
]


export let rent = [

    {type: "rent", id: 61, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500, image:   prone,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 62, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:   prtwo,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 63, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:   prthree,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 64, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:    prfour,  since: "nov 2007", name: "Ahmed" },

    {type: "rent", id: 65, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prone,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 66, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prtwo,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 67, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prthree,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 68, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prfour,  since: "nov 2007", name: "Ahmed" },

    {type: "rent", id: 69, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prone,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 70, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prtwo,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 71, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prthree,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 72, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prfour,  since: "nov 2007", name: "Ahmed" },

    {type: "rent", id: 73, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prone,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 74, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prtwo,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 75, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prthree,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 76, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prfour,  since: "nov 2007", name: "Ahmed" },

    {type: "rent", id: 77, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prone,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 78, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prtwo,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 79, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prthree,  since: "nov 2007", name: "Ahmed" },
    {type: "rent", id: 80, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:prfour,  since: "nov 2007", name: "Ahmed" },
    // {type: "rent", id: 61, subtitle: "2 Marla for Rent | Unfurnished | Annual Agreement", location: "Gulshan-e-Iqbal, Karachi ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "2 Marla for Rent", Description: "2 Marla for Rent | Annual Agreement", Price: 75500,image:   prone,  since: "nov 2007", name: "Ahmed" },
]


export let electronics = [

    {type:'electronics', id: 81, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
    {type:'electronics', id: 82, subtitle: "Solar Panels | OSAKA | n-Type", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "OSAKA", condition: "used", Title: "OSAKA Solar Panel n-Type", Description: "OSAKA Solar Panel | n-Type", Price: 75500,image: etwo, since: "july 2014", name: "Arfeen" },
    {type:'electronics', id: 83, subtitle: "Kenwood| 2 Ton | Air Conditioner", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Kenwood", condition: "used", Title: "Kenwood 2 Ton Air Conditioner", Description: "Kenwood AC | 2 Ton", Price: 75500,image: ethree, since: "sep 2018", name: "Amin" },
    {type:'electronics', id: 84, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: efour,  since: "apr 2020", name: "Talha" },

    {type:'electronics', id: 85, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
    {type:'electronics', id: 86, subtitle: "Solar Panels | OSAKA | n-Type", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "OSAKA", condition: "used", Title: "OSAKA Solar Panel n-Type", Description: "OSAKA Solar Panel | n-Type", Price: 75500,image: etwo, since: "july 2014", name: "Arfeen" },
    {type:'electronics', id: 87, subtitle: "Kenwood| 2 Ton | Air Conditioner", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Kenwood", condition: "used", Title: "Kenwood 2 Ton Air Conditioner", Description: "Kenwood AC | 2 Ton", Price: 75500,image: ethree, since: "sep 2018", name: "Amin" },
    {type:'electronics', id: 88, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: efour,  since: "apr 2020", name: "Talha" },

    {type:'electronics', id: 89, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
    {type:'electronics', id: 90, subtitle: "Solar Panels | OSAKA | n-Type", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "OSAKA", condition: "used", Title: "OSAKA Solar Panel n-Type", Description: "OSAKA Solar Panel | n-Type", Price: 75500,image: etwo, since: "july 2014", name: "Arfeen" },
    {type:'electronics', id: 91, subtitle: "Kenwood| 2 Ton | Air Conditioner", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Kenwood", condition: "used", Title: "Kenwood 2 Ton Air Conditioner", Description: "Kenwood AC | 2 Ton", Price: 75500,image: ethree, since: "sep 2018", name: "Amin" },
    {type:'electronics', id: 92, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: efour,  since: "apr 2020", name: "Talha" },

    {type:'electronics', id: 93, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
    {type:'electronics', id: 94, subtitle: "Solar Panels | OSAKA | n-Type", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "OSAKA", condition: "used", Title: "OSAKA Solar Panel n-Type", Description: "OSAKA Solar Panel | n-Type", Price: 75500,image: etwo, since: "july 2014", name: "Arfeen" },
    {type:'electronics', id: 95, subtitle: "Kenwood| 2 Ton | Air Conditioner", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Kenwood", condition: "used", Title: "Kenwood 2 Ton Air Conditioner", Description: "Kenwood AC | 2 Ton", Price: 75500,image: ethree, since: "sep 2018", name: "Amin" },
    {type:'electronics', id: 96, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: efour,  since: "apr 2020", name: "Talha" },

    {type:'electronics', id: 97, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
    {type:'electronics', id: 98, subtitle: "Solar Panels | OSAKA | n-Type", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "OSAKA", condition: "used", Title: "OSAKA Solar Panel n-Type", Description: "OSAKA Solar Panel | n-Type", Price: 75500,image: etwo, since: "july 2014", name: "Arfeen" },
    {type:'electronics', id: 99, subtitle: "Kenwood| 2 Ton | Air Conditioner", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Kenwood", condition: "used", Title: "Kenwood 2 Ton Air Conditioner", Description: "Kenwood AC | 2 Ton", Price: 75500,image: ethree, since: "sep 2018", name: "Amin" },
    {type:'electronics', id: 100, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: efour,  since: "apr 2020", name: "Talha" },
    // {type:'electronics', id: 81, subtitle: "HP Folio 9480| Latest | hdd 1024gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "HP", condition: "used", Title: "HP Folio 9480", Description: "HP Folio 9480 | hdd 1024gb ", Price: 75500,image: eone, since: "nov 2007", name: "Ahmed" },
]


export let bikes = [
    {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 102, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 103, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 104, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

    {type:'bikes', id: 105, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 106, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 107, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 108, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

    {type:'bikes', id: 109, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 110, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 111, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 112, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

    {type:'bikes', id: 113, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 114, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 115, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 116, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

    
    {type:'bikes', id: 117, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 118, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 119, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    {type:'bikes', id: 120, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
]


export let business = [

    {type:'business', id:121, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:122 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:123 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:124 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },

    {type:'business', id:125 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:126 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:127 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:128 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },

    {type:'business', id:129 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:130 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:131 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:132 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },

    {type:'business', id:133 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:134 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:135 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:136 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },

    {type:'business', id:137 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:138 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:139 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    {type:'business', id:140 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: buone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let services = [

    {type:'services', id:141, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:142 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:143 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:144 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },

    {type:'services', id:145 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:146 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:147 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:148 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },

    {type:'services', id:149 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:150 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:151 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:152 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },

    {type:'services', id:153 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:154 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:155 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:156 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },

    {type:'services', id:157 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:158 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:159 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    {type:'services', id:160 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: sone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let jobs = [

    {type:'jobs', id:161, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:162 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:163 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:164 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },

    {type:'jobs', id:165 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:166 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:167 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:168 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },

    {type:'jobs', id:169 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:170 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:171 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:172 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },

    {type:'jobs', id:173 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:174 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:175 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:176 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },

    {type:'jobs', id:177 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:178 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:179 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    {type:'jobs', id:180 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: jone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let animals = [

    {type:'animals', id:181, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:182 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:183 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:184 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },

    {type:'animals', id:185 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:186 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:187 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:188 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },

    {type:'animals', id:189 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:190 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:191 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:192 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },

    {type:'animals', id:193 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:194 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:195 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:196 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },

    {type:'animals', id:197 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:198 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:199 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    {type:'animals', id:200 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: aone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let furniture = [

    {type:'furniture', id:201, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone , since: "apr 2020", name: "Talha" },
    {type:'furniture', id:202 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:203 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:204 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },

    {type:'furniture', id:205 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:206 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:207 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:208 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },

    {type:'furniture', id:209 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:210 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:211 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:212 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },

    {type:'furniture', id:213 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:214 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furnture', id:215 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:216 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },

    {type:'furniture', id:217 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:218 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:219 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    {type:'furniture', id:220 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: fone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let fashion = [

    {type:'fashion', id:221, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone , since: "apr 2020", name: "Talha" },
    {type:'fashion', id:222 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:223 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:224 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },

    {type:'fashion', id:225 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:226 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:227 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:228 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },

    {type:'fashion', id:229 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:230 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:231 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:232 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },

    {type:'fashion', id:233 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:234 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:235 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:236 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },

    {type:'fashion', id:237 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:238 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:239 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    {type:'fashion', id:240 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: faone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]



export let books = [

    {type:'books', id:241, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone , since: "apr 2020", name: "Talha" },
    {type:'books', id:242 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:243 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:244 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },

    {type:'books', id:245 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:246 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:247 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:248 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },

    {type:'books', id:249 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:250 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:251 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:252 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },

    {type:'books', id:253 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:254 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:255 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:256 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },

    {type:'books', id:257 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:258 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:259 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    {type:'books', id:260 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bkone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },

]


export let kids = [

    {type:'kids', id:261, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone , since: "apr 2020", name: "Talha" },
    {type:'kids', id:262 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:263 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:264 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },

    {type:'kids', id:265 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:266 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:267 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:268 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },

    {type:'kids', id:269 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:270 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:271 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:272 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },

    {type:'kids', id:273 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:274 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:275 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:276 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },

    {type:'kids', id:277 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:278 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:279 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    {type:'kids', id:280 , subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: kone,  since: "apr 2020", name: "Talha" },
    // {type:'bikes', id: 101, subtitle: "Samsung | LCD | 4K hd Display", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "Samsung", condition: "used", Title: "Samsung LCD 4k hd Display", Description: "Samsung | LCD", Price: 75500,image: bone,  since: "apr 2020", name: "Talha" },
]




