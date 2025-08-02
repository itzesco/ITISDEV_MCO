const branches = [
  {
    name: "Abreeza Davao",
    phones: ["063 933 824 9917", "(082) 327 0329"],
    address: "3rd floor expansion wing Abreeza Mall J.P. Laurel Ave. Brgy. 20 B Davao City 8000"
  },
  {
    name: "Alabang Molito",
    phones: ["(8)807-0096", "(0969)629-4443"],
    address: "2nd floor Molito Bldg 3, Alabang Zapote rd. Corner Madrigal ave. Alabang Muntinlupa City"
  },
  {
    name: "Ali Mall",
    phones: ["911-1736", "(0995)664-4180"],
    address: "Lower Grd. Flr., Ali Mall Araneta Center, Cubao, Quezon City"
  },
  {
    name: "Angono",
    phones: ["(0908)876-2265", "(0917)807-4700"],
    address: "Whitehouse Commercial Building Domsa Corner M.L. Quezon Avenue Mahabang Parang, Angono Rizal"
  },
  {
    name: "Avida Taft",
    phones: ["7943-1490", "7943-1490"],
    address: "Brgy. 36, Zone 3 Taft Ave, Pasay City"
  },
  {
    name: "Ayala Cagaya de Oro City",
    phones: ["(088) 859 2022", "(088) 859 2022"],
    address: "3067 Centrio Mall, CM Recto Avenue, Cagayan De Oro City"
  },
  {
    name: "Ayala Cebu City",
    phones: [],
    address: "Basement 2, Ayala Center Cebu City"
  },
  {
    name: "Ayala Central Bloc",
    phones: ["9177953035", "(032)231-7168"],
    address: "3rd Floor, Ayala Central BlocV. Padriga St., Cebu IT Park, Cebu City"
  },
  {
    name: "Ayala Circuit Makati",
    phones: ["(0945)613-5715", "(02)806-8832"],
    address: "3rd Level, Ayala Circuit Makati, Makati City"
  },
  {
    name: "Ayala Cloverleaf",
    phones: ["(7) 791 9567", "(02)8791-9567"],
    address: "#409 4th Floor Cloverleaf Ayala Malls Balintawak, Brgy.Balingasa, Quezon City"
  },
  {
    name: "Ayala Feliz",
    phones: ["(7) 744 6643", "(02)8744-6643"],
    address: "3rd Level Ayala Feliz Marcos Hi-way, Dela Paz, Pasig City"
  },
  {
    name: "Ayala Lipa",
    phones: ["(043) 8 773 8829", "(043)773-8829"],
    address: "Ayala High 5 Square, Ayala Hwy, Lipa, Batangas"
  },
  {
    name: "Ayala Marikina",
    phones: ["027 2133979", "(02)7213-3979"],
    address: "GF S202-203 Ayala Malls Liwasang Kalayaan St. Marikina Heights, Marikina City"
  },
  {
    name: "Ayala Tagaytay",
    phones: ["9171754143", "(046)419-4801"],
    address: "Tagaytay – Nasugbu Hwy, Silang Junction South, Tagaytay, Cavite"
  },
  {
    name: "Baliwag Bayan",
    phones: ["0947-639-6671", "(044)766-6388"],
    address: "826 F. Vergel De Dios., Baliuag, Bulacan"
  },
  {
    name: "Banawe",
    phones: ["7001-1266", "(0927)133-2162"],
    address: "847 Banawe St. Corner Linaw St. Brgy Saint Peter Quezon City."
  },
  {
    name: "BARBERINA",
    phones: ["805-7813", "805-7813"],
    address: "3L Madison Galleries, Don Jesus, Blvd., Alabang Hills, Muntinlupa"
  },
  {
    name: "Betterliving",
    phones: ["831-7003"],
    address: "177 E. G/F BPI Bldg., Doña Soledad Ave., Betterliving, Parañaque"
  },
  {
    name: "Bf Aguirre",
    phones: ["0998.585.6893", "(8)998-5406", "(8)856-7529"],
    address: "Grd. Flr. D’ Square Bldg., 295 Aguirre Ave. cor. Francisco Cruz St, BF Home Phase 3, Parañaque"
  },
  {
    name: "Bf Resort Las Pinas",
    phones: ["88382398"],
    address: "Unit 104 #17 Vatican City drive, Bf Resort Village., Talon Dos, Las Piñas City"
  },
  {
    name: "BF Sucat",
    phones: ["(02)8807-7728", "(0969)629-4431", "(0945)501-8683"],
    address: "#16 President Aguirre Avenue BF Homes Sucat Parañaque"
  },
  {
    name: "Binan",
    phones: ["0927.928.9665", "(049)411-4480"],
    address: "2nd Floor Pavillion Mall, San Antonio, Biñan, Laguna"
  },
  {
    name: "BOHOL 1 ICM",
    phones: ["0907.369.1533"],
    address: "Grd. Flr. Island City Mall, Tagbilaran, Bohol City"
  },
  {
    name: "BOHOL 2 ALTA",
    phones: ["(038) 501.9578", "(093)0489-6251"],
    address: "Lower Ground Floor, Alta Citta Mall, Tagbilaran City, Bohol"
  },
  {
    name: "Bonifacio Global City",
    phones: ["(0945)7429-440"],
    address: "2nd ave cor 31st St. Bonifacio Global City Yellow Building, Taguig, Philippines"
  },
  {
    name: "Boracay",
    phones: ["(0956)937-4528"],
    address: "Ground Floor, The Soppes at Station B Sinagpa, Brgy., Balabag Malay Aklan 5608"
  },
  {
    name: "Borongan Samar",
    phones: ["(055) 8 560 0325", "(0917)860-0901"],
    address: "(E. Cinco St.Purok C, Borongan City, Eastern Samar"
  },
  {
    name: "Buting Pasig",
    phones: ["(0916)221-0052", "(02) 7373 9257"],
    address: "Tri -Ax Two Center, Delos Santo, St., Cor. San Guillermo Ave., Buting, Pasig City"
  },
  {
    name: "C&B Marikina",
    phones: ["02874-15437"],
    address: "C&B Circle Mall 2nd Floor Liwasang Kalayaan, Marikina Heights, Marikina City"
  },
  {
    name: "Calamba",
    phones: ["0906.057.2433", "(049)502-2394"],
    address: "Grd Flr. J. Alcasid Bldg. Brgy. Uno, Crossing, Calamba City, Laguna"
  },
  {
    name: "Calapan",
    phones: [],
    address: "LNA Panaligan Bldg. JP Rizal St. San Vicente, Calapan"
  },
  {
    name: "Candon Ilocos Sur",
    phones: ["9278510507"],
    address: ""
  },
  {
    name: "Cash & Carry",
    phones: ["9491856886", "78364038"],
    address: "Filmore corner Calatagan St., Brgy. Palanan, Makati City"
  },
  {
    name: "Cauayan Isabela",
    phones: ["0917 640 9595", "0917 867 7477", "(078) 652 3766"],
    address: "2nd Flr. CU Bldg. Maharlika Hi-way, Cauayan, Isabela"
  },
  {
    name: "Chino Roces, Makati City",
    phones: ["(0945)501-8685", "(0969)629-4434"],
    address: "2116 Don Chino Roces Ave Pio Del Pilar, Makati, Philippines"
  },
  {
    name: "Citadella",
    phones: ["8835-21506", "(0966)750-5201"],
    address: "Lot 1 Blk 1 Unit 1A Fenina Bldg. J. Agiilar Ave(CAA Road) Pulang Lupa Dos Las Piñas City"
  },
  {
    name: "Congressional",
    phones: ["(8)925 4472", "(02)8925-4472"],
    address: "G/F One Joroma Place, San Beda Ave. cor. Congressional Ave., Q.C."
  },
  {
    name: "Cotabato",
    phones: ["(0905) 756 6300", "(064) 552 3705"],
    address: "Don Rufino Alonzo St., Cotabato City"
  },
  {
    name: "Daet",
    phones: ["(054) 440.5111", "(054)440-5111"],
    address: "J. Lukban St., Daet, Camarines Norte"
  },
  {
    name: "Dagupan Burgos",
    phones: ["0936-762-3309", "523-7266"],
    address: "Grd. Flr. TN Bldg. Burgos St., Dagupan City, Pangasinan"
  },
  {
    name: "DAVID'S CUT ZABARTE",
    phones: ["0945 110 3433", "8998 3882"],
    address: "BLK 02 LOT 18 ZABARTE ROAD BRGY KALIGAYAHAN QUEZON CITY"
  },
  {
    name: "DC CALOOCAN",
    phones: ["9063503208", "709-5058"],
    address: "2/F CU2 -11 PUREGOLD MONUMENTO SAMSON RD BRGY. 76 CALOOCAN CITY"
  },
  {
    name: "DC CUBAO",
    phones: ["9951736429", "253-2394"],
    address: "Unit 20-A Puregold Cubao Gen.Roxas St.Soccoro Q.C"
  },
  {
    name: "DC MALARIA",
    phones: ["9567499846", "983-7286"],
    address: "HGL BLDG. 2nd Floor Savemore, Bankers Village 2 Malaria Brgy.184 North Caloocan City"
  },
  {
    name: "DC PARANAQUE",
    phones: ["9266201002", "88524884"],
    address: "Commercial Unit B1 & B2 Puregold Priceclub Bldg. Ninoy Aquino Ave. Brgy. Sto. Niño, Parañaque City"
  },
  {
    name: "DC PILAR",
    phones: ["9061558699"],
    address: "Unit 4PDC Compound Dona Pilar Aguirre Ave., Rose Road Pilar Vill. Las Pinas City"
  },
  {
    name: "DC SAN PEDRO",
    phones: ["099.141.71706"],
    address: "Lobby 10 Puregold Price Club Bldg. Nat'l Road Hi-way Corner Magsaysay Road, San Antonio, San Pedro, Laguna"
  },
  {
    name: "DC TAGAPO",
    phones: ["0929.195.5983"],
    address: "Puregold Supermarket, Brgy. Tagapo, Sta. Rosa, Laguna"
  },
  {
    name: "DC WALTERMART HARBOR SUBIC",
    phones: ["0908-971-5050", "047-602-0090"],
    address: "1136 CBD Area Harbor Point Mall Subic Bay Free Port Zone 2222"
  },
  {
    name: "DC WALTERMART PANIQUI",
    phones: ["0956-475-5893", "045-606-0500"],
    address: "Waltermart Paniqui, Tarlac"
  },
  {
    name: "DC WM BATANGAS",
    phones: ["9173747025"],
    address: "3F Waltermart Batangas P. Burgos St., Brgy. Calicanto, Batangas City"
  },
  {
    name: "DC WM MAKILING",
    phones: ["9498961495", "(049) 545 4150"],
    address: "2nd Level Unit 207 Waltermart Km Maharlika Hiway Brgy Makiling, Calamba City, Laguna 4027"
  },
  {
    name: "DC WM NASUGBU",
    phones: ["9654565380", "0995 6639 733", "(043) 741-5704"],
    address: "GF unit 6 waltermart J.P. Laurel St. Brgy. Lumbangan Nasugbu, Batangas"
  },
  {
    name: "DC WM SAN JOSE",
    phones: ["0997 781 5788"],
    address: "GF RA Bldg. Maharlika Highway cor. Bonifacio St., San Jose City, Nueva Ecija (Besides Jollibee Bayan)"
  },
  {
    name: "DC WM SUCAT",
    phones: ["9061520059", "8-4038575"],
    address: "Wsct 214-B, Waltermart Sucat.Dr.A Santos Ave.Brgy.San Isidro Panaque City"
  },
  {
    name: "Dela Rosa Carpark 1",
    phones: ["(0906)377-5202"],
    address: "3F Unit 310 - 311 Dela Rosa Carpark 1 Makati City"
  },
  {
    name: "Digos",
    phones: ["(0923) 081 4220"],
    address: "3rd Level, Gaisani Mall, Q85W+XQ2, Digos City, Davao del Sur"
  },
  {
    name: "DIPOLOG",
    phones: ["0930 676 8122"],
    address: "469 Gen. Luna Brgy., Estaka, Dipolog City"
  },
  {
    name: "District Dasmarinas",
    phones: ["(0939) 785 7712", "(046) 506 6223"],
    address: "2/F The District Dasmarinas Molino Paliparan Road"
  },
  {
    name: "Don Antonio",
    phones: ["(8) 951 0045", "(02)8951-0045"],
    address: "Unit A Blk. 3 Lot 9 Brgy. Holy Spirit, Don Antonio Heights, Q.C."
  },
  {
    name: "Dumaguete Main",
    phones: ["0966 965 4568", "(035) 422 9200"],
    address: "Grd. Flr. Spanish Heritage San Juan St., Dumaguete City"
  },
  {
    name: "Eastwood",
    phones: ["(0929)378-8337", "02-8-5849856"],
    address: "G/F 5A Orchard Rd.,One Orchard Rd. Eastwood Ave., Q.c."
  },
  {
    name: "Edsa Shangrila",
    phones: ["0908 892 6452", "(02) 8696 1992"],
    address: "#30 Basement Level, Shangrila Mall, Mandaluyong City"
  },
  {
    name: "Elizabeth Mall Cebu",
    phones: ["(0917)777-1041", "(032)261-5606"],
    address: "2nd Flr. Elizabeth Mall Leon Kidlat St., N. Bakaso Ave., Cebu City"
  },
  {
    name: "Ever Gotesco",
    phones: ["8742-7074"],
    address: "G/F Ever Gotesco Mall, Commonwealth Ave., Q.C."
  },
  {
    name: "Festival Mall",
    phones: ["9770191241", "850-3850"],
    address: "3rd Level Festival Mall, Alabang, Muntinlupa"
  },
  {
    name: "Fishermall",
    phones: ["(0917)138-5284"],
    address: "2nd Floor, Fishermall 325 Quezon Avenue Cor. Roosevelt Avenue, Barangay Sta. Cruz, District I, Quezon City"
  },
  {
    name: "Gagalangin",
    phones: ["(0939)899-5789"],
    address: "542 Pampanga St. Gagalangin Tondo Manila Brgy. 173 Zone 15"
  },
  {
    name: "Garden Walk",
    phones: ["09317522233"],
    address: "Ground Level, Garden Walk Felix Avenue 1900 Cainta"
  },
  {
    name: "Gateway, Araneta City",
    phones: ["(0945)168-9772"],
    address: "Level 3, Gateway Mall 2, Araneta City, General Aguinaldo Ave, Cubao, Quezon City, Metro Manila"
  },
  {
    name: "General Santos",
    phones: ["0917 502 8972"],
    address: "#332 2nd Flr. KCC Mall of Gensan, J. Catolico Sr. Ave., Gen. Santos City 9500"
  },
  {
    name: "Greenhills Lifestyle Center",
    phones: ["(0906)904-8546"],
    address: "2nd Floor, Greenhills Mall, Lifestyle Center, Greenhills Shopping Mall, San Juan, Metro Manila"
  },
  {
    name: "Greenhills Shoppesville Arcade",
    phones: ["(0905) 708-8709"],
    address: "2nd Floor, Shoppesville Arcade, Greenhills, San Juan, M. Mla."
  },
  {
    name: "Greenville Taguig",
    phones: ["0928 169 9610", "(02) 8654 7907"],
    address: "Block 11, Lot 15 Grenville Tuktukan, Taguig City"
  },
  {
    name: "Guagua",
    phones: ["0908-266-3888", "(045) 405-0422"],
    address: "2nd Flr. Ocampo’s Bldg., Plaza Burgos, Guagua, Pampanga"
  },
  {
    name: "Harbor Point",
    phones: ["0920-809-8021", "(047) 306-5385"],
    address: "1136 CBD Area Harbor Point Mall Subic Bay Free Port Zone 2222"
  },
  {
    name: "Heritage Mansion",
    phones: ["(0917)152-2239"],
    address: "Heritage Mansion, Kisad Rd., Baguio City"
  },
  {
    name: "Imall Canlubang",
    phones: ["(0915) 376 4092", "(0905) 249 5587"],
    address: "1st level 21 I Mall Jose Yulo Blvd. Cor. Dona Cecilia Araneta Ave. Canlubang, Laguna"
  },
  {
    name: "Isetann",
    phones: ["0936-5161796", "8736-1618"],
    address: "2nd Flr. Isetann Cinerama Complex Mall, C. M. Recto Ave., Quiapo, Manila"
  },
  {
    name: "Jp Rizal",
    phones: ["(0977) 034 6900", "(02) 8895 8845"],
    address: "1114 MVM Mansion Bldg., Antipolo St. cor. JP Rizal, Makati City"
  },
  {
    name: "Kamias",
    phones: ["9976507324", "89203716"],
    address: "90 Kamias Road, corner K-K Kamias, Q.C."
  },
  {
    name: "Kawit Cavite",
    phones: ["(0998)922-6258", "(0945)867-7425"],
    address: "2nd Flr. Robertson Plaza #1 Centennial Rd. Brgy. Tabon 1, Kawit Cavite"
  },
  {
    name: "KCC Zamboanga",
    phones: ["(0936) 358 9416", "(062) 955 9028"],
    address: "3F KCC Mall, Governor Ramos Avenue Camino Nuevo, Zamboanga City"
  },
  {
    name: "La Union",
    phones: ["0912-966-8188", "072-6078361"],
    address: "2nd Flr. Landbank Bldg. Gov. Luna St., San Fernando City, La Union"
  },
  {
    name: "Legaspi",
    phones: ["0907.175.1389", "(052)435-3017"],
    address: "2nd Flr. Pacific Mall, Brgy. 36, Capantawan, Legaspi City"
  },
  {
    name: "Lemery",
    phones: ["0936.995.0278", "(043)214-2670"],
    address: "Brgy. Malinis, Palanas, Lemery, Batangas"
  },
  {
    name: "Malabon",
    phones: ["9494048717", "281-1231"],
    address: "2nd Flr. #25 Rizal Ave., cor. Leono St., Tanong, Malabon, Metro Manila"
  },
  {
    name: "Malaybalay",
    phones: ["(0953)053-7805"],
    address: "Purok 5, Brgy., Casisang Malaybalay City, Bukidnon"
  },
  {
    name: "Malisiqui Pangasinan",
    phones: ["0927-053-5677", "(075) 536-5907"],
    address: ""
  },
  {
    name: "Malolos Crossing",
    phones: ["0905-093-1079", "044-791-9365"],
    address: "2nd Flr. E&R Bldg. Mc Arthur Hi-way cor.Mabini Sts. Brgy. Ginhawa, Malolos, Bulacan"
  },
  {
    name: "Market Market",
    phones: ["(0928) 781 7962", "(02) 8886 6456"],
    address: "3rd Flr. Market Market Mall, Global City Taguig, Metro Manila"
  },
  {
    name: "Market Place",
    phones: [],
    address: ""
  },
  {
    name: "Marquee Mall",
    phones: ["0949-656-8927", "(045) 304-0813"],
    address: "2nd Flr. Marquee Mall, Francisco de la Paz St., Angeles City"
  },
  {
    name: "Mckinley Taguig",
    phones: ["(0917) 878 5088", "(02) 7758 3262"],
    address: "G/F Viceroy Tower Florence Way, McKinley, Taguig"
  },
  {
    name: "Merville",
    phones: ["(0905)800-0223", "(8)823-0672"],
    address: "Grd. Flr. Woodsville City Village Mall, Edison Ave. cor. West Service Road, Merville"
  },
  {
    name: "Meycauayan",
    phones: ["0905-275-7023", "044-913-7198"],
    address: "Unit 2 &3 Meycauayan College Main, Calvario,Meycauayan, Bulacan"
  },
  {
    name: "Midsayap",
    phones: ["(0985)185-0099"],
    address: "3rd Level Poblacion 5. Sayap Center Point"
  },
  {
    name: "Monaco, Taytay",
    phones: ["(0915) 945-9104", "(0985) 113-5050", "(02)8288-1920"],
    address: "Monaco Strip Commercial Bldg. Ground floor, unit 1-07, Barangay Dolores, Ortigas Extension Avenue, Taytay Rizal"
  },
  {
    name: "Newpoint Angeles",
    phones: ["0916-938-2013", "(045) 409-1247"],
    address: "Doña Teresa Ave, Nepo Center Angeles City"
  },
  {
    name: "Newport Plaza",
    phones: ["(0995)231-9475"],
    address: "Retail 09b, Ground Floor- Plaza 66, Newport City, Pasay City"
  },
  {
    name: "North Towers SM City North Edsa",
    phones: ["(0995)664-2374"],
    address: "2nd Floor , North Tower, SM City North Edsa"
  },
  {
    name: "Olongapo Magsaysay",
    phones: ["0946-970-1959", "047-222-9799"],
    address: "Magsaysay Drive Olongapo"
  },
  {
    name: "One Ecom",
    phones: ["permanent closed", "(08) 836 8865"],
    address: "Unit 11 & 12, G/F One E-Com Center Bldg. Palm Coast Ave, SM Bay City, Pasay City"
  },
  {
    name: "Ozamis",
    phones: ["(0954)429-1703", "(0998)478-4705"],
    address: "Don Anselmo Bernad Avenue, Ozamis City ."
  },
  {
    name: "Pacita, San Pedro Laguna",
    phones: ["0905.888.1753", "868-1131"],
    address: "Stall 3A-3B Plaza Pacita Comm'l. Complex, San Pedro, Laguna"
  },
  {
    name: "Pagadian",
    phones: ["9169012384", "(062) 925 1445"],
    address: "UG-18 Gaisano Capital Mall, Pagadian City"
  },
  {
    name: "Parkmall Mandaue",
    phones: ["0917.772.0589", "(032)520-1603", "(032)520-1607"],
    address: "3rd Level Pacific Mall Mandaue, Ibabao Estancia, Mandaue City"
  },
  {
    name: "Paseo De Sta. Rosa",
    phones: ["0917 328 4372"],
    address: "Unit 3 2nd Flr. Paseo 2 Paseo de Sta. Rosa, Laguna"
  },
  {
    name: "Pasig Boulevard",
    phones: ["(0967)461-2177"],
    address: "Unit 202 One Infinite Lifestyle Center 147 Pasig Blvd, Pineda Pasig City"
  },
  {
    name: "Pasig Central",
    phones: ["86410161"],
    address: "2nd Flr. Javier Bldg. Cor. Mabini & Elcalde Sts., Kapasigan, Pasig City"
  },
  {
    name: "Podium",
    phones: ["9279620458", "(08) 633 7299"],
    address: "4th Level, The Podium Mall ADB Avenue Ortigas Center, Mandaluyong City"
  },
  {
    name: "Porta Vaga",
    phones: ["0961 293 9848", "(074) 661 0902"],
    address: "4th Flr. Porta Vaga Bldg. Session Road, Baguio City"
  },
  {
    name: "Project 8",
    phones: ["(0915)647-6888"],
    address: "20 Shorthorn St., Brgy. Bahay Toro Project 8, Quezon City"
  },
  {
    name: "QC Pavillion",
    phones: ["0917.708.6959", "(032)231-3146", "(032)266-8378"],
    address: "QC Pavillion Barrodo Ave., Lahug , Cebu City"
  },
  {
    name: "Regalado",
    phones: ["(7) 744 6643", "7007-2063"],
    address: "#75 D Regalado Ave., Fairviewpark Subd., Brgy. Greater Fairview, QC"
  },
  {
    name: "Robinson Place Tacloban - Marasbara",
    phones: ["(0918)947-1200", "(0917)860-0901"],
    address: "Level 2 expansion Mall Atruim Robinson Place Tacloban Brgy.77 Marasbaras Tacloban City"
  },
  {
    name: "ROBINSONS CEBU",
    phones: ["(032)254-3531"],
    address: "2nd Flr. Robinson’s Place, Fuente Osmeña St., Cebu City"
  },
  {
    name: "Robinsons Fuentes Cebu",
    phones: ["(0968)8587888"],
    address: "ROBINSONS FUENTE 2nd floor Fuente Osmeña,Cebu City"
  },
  {
    name: "Robinsons North Tacloban",
    phones: ["+63 999 998 8297", "(053)520-0469"],
    address: "Brgy.91 Abucay Robinson North Tacloban City"
  },
  {
    name: "Robinsons Novaliches",
    phones: ["9176158845", "935-8774"],
    address: "2nd Level Space 10 Quirino Ave. Brgy. Pasong Putik, Q.C."
  },
  {
    name: "Robinsons Place Antipolo",
    phones: ["0949 721 0081"],
    address: "A-204, Robinsons Place Antipolo, 251 A Sumulong Hi-way Corner Circumferential Road, Antipolo, 1890 Rizal"
  },
  {
    name: "Robinsons Place Butuan",
    phones: ["(0995) 859 4947"],
    address: "3rd Level Robinson’s place Butuan,JC Aquino Ave., Butuan City 8600"
  },
  {
    name: "Robinsons Place Calasiao",
    phones: ["0966 415 4725", "(075)523-4264"],
    address: "2nd Level Robinson’s Place, San Miguel , Calasiao, Pangasinan"
  },
  {
    name: "Robinsons Place Dasmarinas",
    phones: ["9277184479", "046-4163475"],
    address: "3rd Level Robinson’s Place, Palapala, Dasmariñas, Cavite"
  },
  {
    name: "Robinsons Place Dumaguete",
    phones: ["(0915) 230 6710", "(035) 421 1800"],
    address: "Stall#228-229, 2nd Level, Robinson’s Place, Calindaan, Dumaguete City"
  },
  {
    name: "Robinsons Place Ermita",
    phones: ["09165958473", "(02)536-8011"],
    address: "3rd Level Pedro Gil Wing, Robinson’s Place, Ermita, Manila"
  },
  {
    name: "Robinsons Place Galleria",
    phones: ["(0998)89893603/(0942)754-7327", "02-8-6379219 / 02-8-6375503"],
    address: "3rd Level , East Lane, Robinson’s Galleria, EDSA, Q. C."
  },
  {
    name: "Robinsons Place Laoag",
    phones: ["0912 629 4036", "(077)781-3688"],
    address: "2nd Floor, Expansion Bldg. Robinson’s Place Ilocos Brgy.1 San Nicolas Ilocos Norte"
  },
  {
    name: "Robinsons Place Lipa",
    phones: ["0917.504.2092", "(043)8757-0093"],
    address: "Level 2, Expansion Wing, Robinson’s Place,Brgy.Mataas na Lupa,Lipa City,Batangas"
  },
  {
    name: "Robinsons Place Magnolia",
    phones: ["0975.360.0585", "(0949)982-9501"],
    address: "Level 3 Unit 314 New Wing, Aurora Blvd. Corner Dona Hemady St. QC"
  },
  {
    name: "Robinsons Place Malolos",
    phones: ["044-794-0375"],
    address: "3rd Level Robinson’s Place Malolos 316 Sumapang Matanda, Malolos Bulacan"
  },
  {
    name: "Robinsons Place Naga",
    phones: ["0946-011-20-47", "(054) 881-32-61"],
    address: "2nd Floor, Robinsons Place, Triangulo Naga City"
  },
  {
    name: "Robinsons Place Otis",
    phones: ["0977.853.0212", "559-0735"],
    address: "2nd Level Robinson’s Place Otis, Paz Mendoza Guanzon St., Paco Manila"
  },
  {
    name: "Robinsons Place Pavia, Iloilo City",
    phones: ["(033) 8 336 7954", "(33)519-7028"],
    address: "Level 1, 3 Unit L3-43 Robinsons Place Pavia, Sen. Benigno S Aquino, Jr. Brgy Ungka 2, Pavia Iloilo"
  },
  {
    name: "Robinsons Place Santiago",
    phones: ["(0936) 272 3592", "(078) 323 0881"],
    address: "2nd Flr. Robinsons’s Place, Mabini, Santiago, Isabela"
  },
  {
    name: "Robinsons Place Tuguegarao",
    phones: ["0956 992 9071", "(078) 396 0417"],
    address: "Level 2, Robinsons Place Tuguegarao, Pan-Philippine Hwy, Tuguegarao, Cagayan"
  },
  {
    name: "Roces",
    phones: ["9177755922"],
    address: "Unit 68 6a, Don A roces Brgy. Obrero Quezon City"
  },
  {
    name: "Royal Plaza",
    phones: ["(0969)629-4445", "7-239-1903", "(0945)501-8670"],
    address: "Unit 104 the Royal Plaza Commercial Center Domingo M Guevara street barangay Highway hills mandaluyong City"
  },
  {
    name: "Ruby Road",
    phones: ["0917 859 7904", "(02) 8637 0804 - 05"],
    address: "G/F Hanston Bldg., Ruby Road, Ortigas Center, Pasig City"
  },
  {
    name: "San Carlos Town Center",
    phones: ["(0915)205-4117", "(0995)887-5080"],
    address: "2nd flr. San Carlos Town Center Rizal Ave. corner Zamora St. San Carlos City, Pangasina"
  },
  {
    name: "San Jose Nueva Ecija",
    phones: ["0997 781 5788"],
    address: "2nd Flr. Rafael Amparo Bldg., Bonifacio St., San Jose, Nueva Ecija"
  },
  {
    name: "San Juan",
    phones: ["9173596425", "(8)722-0686"],
    address: "#5 F Blumentritt St. Glialcon Bldg San Juan"
  },
  {
    name: "San Pablo, Laguna",
    phones: ["(0945)562-5937"],
    address: "Block 2, Maharlika Highway, Barangay 1-B, San Pablo City, Laguna"
  },
  {
    name: "Santana Grove",
    phones: ["0917 513 8163", "(02) 8828 9281"],
    address: "Ground Floor, Unit 8 Santana Grove cor.DR.A. Santos & Sorina Ave, Sucat Pque."
  },
  {
    name: "Shaw Kapitolyo",
    phones: ["permanent closed"],
    address: "Grd. Flr. Gaisano Bldg. 88 Shaw Blvd., Brgy. Oranbo, Kapitolyo,Pasig City"
  },
  {
    name: "Silang Cavite",
    phones: ["9383318974", "(046)414-0906"],
    address: "V. Toledo corner M.H. Del Pilar Sts., Silang, Cavite"
  },
  {
    name: "SM BACOOR",
    phones: ["9196982732", "(046) 424 7857"],
    address: "L/Grd Flr.,Unit 17 SM City Bacoor, Tirona St.cor. Aguinaldo Hi-way, Bacoor Cavite"
  },
  {
    name: "SM Bataan",
    phones: ["(0927)802-0843", "(0931)858-1487"],
    address: "2nd Floor, SM City Bataan Lerma St. Brgy Ibayo, Balanga City Bataan"
  },
  {
    name: "SM Bf Sucat Paranaque",
    phones: ["09509199792 / 09239846568", "403-1534"],
    address: "3rd Floor, 301-302 SM CITY BF PARAÑAQUE Dr. A Santos Avenue co. Presidents Ave. Brgy BF Homes Dist. ll Parañaque City."
  },
  {
    name: "SM Cabanatuan",
    phones: ["0949-320-8651", "044-954-0411"],
    address: "3rd Flr.SM City Cabanatuan, Brgy 4, Concepcion Maharlika Highway, Cabanatuan City, N. Eci."
  },
  {
    name: "SM Cebu",
    phones: ["(0943)603-9888"],
    address: "2nd Floor SM City, North Reclamation Area, Cebu City"
  },
  {
    name: "SM Center Dagupan",
    phones: ["0938-3269148 0938-5526827", "(075) 523-5577"],
    address: "2nd Level, SM Center Dagupan,67 Calasiao – Dagupan Rd, Calasiao, Dagupan,Pangasinan"
  },
  {
    name: "SM Center Imus",
    phones: ["(046)435-1607", "(0995)319-4211", "(0915)695-29720"],
    address: "Ground Floor, SM Center Imus Along NIA Road, Bgy Alapan 1C, 4103 Imus, Cavite"
  },
  {
    name: "SM Center Las Pinas",
    phones: ["9261542034", "873-4786"],
    address: "Lower Grd. Flr. SM Center Las Pinas, Alabang Zapote Road, Talon 2, Las Piñas"
  },
  {
    name: "SM Center Lemery",
    phones: ["(0917)310-7207", "(043)741-5082"],
    address: "2nd Floor, SM Center Lemery Illustre Avenue, Corner Calle P Gomez, Lemery, 4209 Batangas"
  },
  {
    name: "SM Center Muntinlupa",
    phones: ["(0915)965-6084", "(02)865-91650"],
    address: "Ground Floor , SM Supercenter Muntinlupa, Nat’l. Road Tunasan, Muntinlupa"
  },
  {
    name: "SM Center Ormoc",
    phones: ["9322717736", "(053) 5609744"],
    address: "DISTRICT 14 REAL ST. ORMOC CITY"
  },
  {
    name: "SM Center Pasig",
    phones: ["8584-9620"],
    address: "Unit 149 SM Center Pasig, Frontera Verde, C5 Bgry. Ugong, Pasig City"
  },
  {
    name: "SM Center Pulilan",
    phones: ["(0994)805-3416", "(044) 913-3308"],
    address: "2nd Floor, SM Center Pulilan Plaridel Pulilan, Diversion Road, Pulilan Bulacan"
  },
  {
    name: "SM City Bacolod",
    phones: ["9218186546", "(034) 468 0108"],
    address: "3RD FLOOR NORTH WING, SM CITY BACOLOD BACOLOD CITY"
  },
  {
    name: "SM City Baguio",
    phones: ["0945-7956262", "(074) 422-1456"],
    address: "Lower Grd Flr., SM City Baguio, Luneta Hill, Baguio City"
  },
  {
    name: "SM City Baliwag",
    phones: ["(0981)555-6117", "(044)769-5934"],
    address: "2nd Flr. SM City Baliwag Doña Remedios Trinidad Hi-way, Pagala, Baliwag, Bulacan"
  },
  {
    name: "SM City Batangas",
    phones: ["0915-7931119", "(043)783-0372"],
    address: "Grd. Flr. SM City Batangas, Brgy. Pallocan West, Batangas City"
  },
  {
    name: "SM City Bicutan",
    phones: ["(0916)934-1399", "(02)822-9220"],
    address: "Lower Ground Floor, SM City Bicutan Building B, Doña Soledad Ave, Parañaque, 1700 Metro Manila"
  },
  {
    name: "SM City Butuan",
    phones: ["9096394284"],
    address: "2F unit 274 SM City Butuan JC Aquino Ave. Butuan City"
  },
  {
    name: "SM City Cagayan de Oro City, Downtown",
    phones: ["0975 125 1828", "(088) 859 1982"],
    address: "4TH FLOOR SM DOWN TOWN PREMIER, C.M. RECTO AVE, CAGAYAN DE ORO CITY"
  },
  {
    name: "SM City Cagayan de Oro City, Uptown",
    phones: ["0916 178 8808", "(088) 859 1148"],
    address: "GROUND FLR. SM CITY UPPER CARMEN, CAGAYAN DE ORO CITY"
  },
  {
    name: "SM City Calamba",
    phones: ["9087282681", "(049) 530 0131"],
    address: "2nd Flr.SM City Calamba, Brgy. Real, Nat’l. Hi-way, Calamba, Laguna"
  },
  {
    name: "SM City Caloocan",
    phones: ["(0977)300-9694"],
    address: "3rd Floor SM City Caloocan, Deparo Road, Barangay 171, Zone 15, District 1, Bagumbong 1421 Caloocan City, Metro Manila, Philippines"
  },
  {
    name: "SM City Cauayan",
    phones: ["0905-4624548", "(078) 3233423"],
    address: "Level 1 Building D. Sm City Cauayan, Maharlika Highway, Brgy. District 2, 3305"
  },
  {
    name: "SM City Daet",
    phones: [],
    address: "David's Salon 3rd floor SM City Daet, Vinzons ave.,Brgy. Lag on Daet Cam. Norte"
  },
  {
    name: "SM City Davao, Ecoland",
    phones: ["082-299-3558", "(0985)137-8682"],
    address: "Ground Floor SM City Davao Corner Tulip & Ecowest Drive, Matina, Davao City"
  },
  {
    name: "SM City Fairview, 2nd Floor",
    phones: ["0939 919 7121", "8927 4279"],
    address: "2ND FLOOR SM FAIRVIEW QUIRINO H-WAY CORNER REGALADO AVE., BRGY. GREATER LAGRO Q.C."
  },
  {
    name: "SM City Fairview, Parkway",
    phones: ["0977 651 9232"],
    address: "UGF PARKWAY BLDG. SM FAIRVIEW QUIRINO H-WAY COR. REGALADO AVE., BRGY. GREATER LAGRO Q.C."
  },
  {
    name: "SM City Iloilo",
    phones: ["0975 021 1218/ 09093238551", "(033) 337 1184"],
    address: "B.AQUINO AVE., MANDURRAIO ILO ILO CITY"
  },
  {
    name: "SM City Laoag",
    phones: ["(0920)244-9912"],
    address: "3rd Floor, SM City Laoag, Barangay, 51-B Airport Rd, Laoag City, 2900 Ilocos Norte"
  },
  {
    name: "SM City Legazpi",
    phones: ["0926 415 8674"],
    address: "3RD FLOOR SM CITY LEGAZPI BRGY. BITANO, TAHAO RD. LEGAZPI CITY 4500"
  },
  {
    name: "SM City Lucena",
    phones: ["09660892084", "(042)710-4947"],
    address: "3rd Floor, SM City Lucena, Dalahican Rd. cor. Maharlika Hi-Way,Ibabang Dupay,Lucena"
  },
  {
    name: "SM City Main, North Edsa",
    phones: ["0927 166 9865", "8927 3316"],
    address: "2ND FLOOR MAIN BLDG., EDSA COR NORTH AVE., BGRY. STO CRISTO AND BRGY PAG ASA QUEZON CITY"
  },
  {
    name: "SM City Makati",
    phones: ["(0995)664-2458", "8818-3135"],
    address: "4th Flr. SM Makati Dept. Store, Ayala Center, Makati City"
  },
  {
    name: "SM City Manila",
    phones: ["(02)868-21382"],
    address: "L/Grd. Flr. SM City Manila, San Marcelino St., Manila"
  },
  {
    name: "SM City Marikina",
    phones: ["0917-1235074", "8477-1898"],
    address: "2nd Flr. SM City Marikina, Marcos Hi-way, District 1, Calumpang, Marikina City"
  },
  {
    name: "SM City Marilao",
    phones: ["9954931440", "(044) 815 7326"],
    address: "2nd Flr. SM City Marilao,Brgy. Lias, Marilao, Bulacan"
  },
  {
    name: "SM City Masinag",
    phones: ["0995-4895006"],
    address: "Upper Grd. Flr. SM City Masinag, Bgy. Mayamot, Antipolo City"
  },
  {
    name: "SM City Mindpro - Zamboanga",
    phones: ["(0936) 358 9416"],
    address: "3rd Flr. Mindoro Bldg., La Purisima St. Zamboanga City"
  },
  {
    name: "SM City Naga",
    phones: ["0906 360 0997", "(O54) 871 0043"],
    address: "2ND FLOOR SM CITY NAGA BRGY. TRIANGULO, NAGA CITY, CAMARINES SUR, 4400"
  },
  {
    name: "SM City North Annex",
    phones: ["0922 731 7105", "8441 1774"],
    address: "Lower Grand Floor, Annex 1 Building. SM City North Edsa Brgy. Sto. Cristo, Quezon City"
  },
  {
    name: "SM City Novaliches",
    phones: ["0917 894 1330", "8442 4992"],
    address: "2ND FLR. SM CITY NOVALICHES BRGY. SAN BARTOLOME QUEZON CITY"
  },
  {
    name: "SM City Pampanga",
    phones: ["(045)455-0265", "(0927)280-2586", "(0917)539-7808"],
    address: "2nd Flr. SM City Pampanga, Mexico, Pampanga"
  },
  {
    name: "SM City Puerto Princesa",
    phones: ["0916 710 3838", "(048) 433 4287"],
    address: "2ND FLOOR SM CITY PUERTO PRINCESA PALAWAN, MALVAR COR. BRGY. SAN MIGUEL"
  },
  {
    name: "SM City Rosales",
    phones: ["0917-6525969", "(075) 653-0130"],
    address: "Grd. Flr.SM City Rosales. Carmen East Rosales, Pangasinan"
  },
  {
    name: "SM City San Lazaro",
    phones: ["(0917)303-4551", "8242-1326"],
    address: "Lower Ground Floor, SM City San Lazaro, Felix Huertas S Cor. A.H. Lacson St. Brgy. 350 Zone 35 Sta. Cruz Manila"
  },
  {
    name: "SM City San Mateo",
    phones: ["0920-6283511", "8656-2798"],
    address: "3rd Flr. SM City San Mateo, Gen Luna, St., Brgy. Ampid 1, San Mateo Rizal"
  },
  {
    name: "SM City San Pablo",
    phones: ["0967 642 0817", "(049) 521 9998"],
    address: "2nd Floor, SM City San Pablo, San Rafael, San Pablo City"
  },
  {
    name: "SM City Southmall",
    phones: ["(0967)348-2940", "800-5323"],
    address: "Lower Grd. Flr. SM Southmall, Alabang-Zapote Rd., Las Piñas City"
  },
  {
    name: "SM City Sta. Mesa",
    phones: ["(0995)413-5060", "for transfer"],
    address: "3rd Flr.SM City Sta. Mesa, R. Magsaysay Blvd., Sta. Mesa,QC"
  },
  {
    name: "SM City Sta. Rosa",
    phones: ["(049)534-2805", "(0923)585-5458"],
    address: "2nd Floor, Old National Highway, Brgy, Manila S Rd, Santa Rosa, Laguna"
  },
  {
    name: "SM City Valenzuela",
    phones: ["9367132450"],
    address: "Lower Grd. Flr. SM Valenzuela, Mc Arthur Hi-way, Valenzuela City"
  },
  {
    name: "SM Clark",
    phones: ["0967-240-6824", "045-499-0019"],
    address: "Grd. Flr. SM City Clark. M.A. Roxas Hi-way,Clark Eco. Zone,Clarkfield,Pampanga"
  },
  {
    name: "SM Consolacion",
    phones: ["(032)238-3219"],
    address: "2nd level SM CITY Consolacion, Barangay Lamac, Consolacion"
  },
  {
    name: "SM Dasmarinas",
    phones: ["9067885739", "(046) 432-3033"],
    address: "2nd Floor, SM City Dasmarinas, 4114 Governor’s Dr, Brgy Sampalok 1, Dasmariñas,"
  },
  {
    name: "SM Davao",
    phones: ["(082)299-3558", "(0985)137-8682"],
    address: "2nd Level, SM City Davao Corner Tulip & Ecowest Drive Matina Davao city"
  },
  {
    name: "SM East Ortigas",
    phones: ["(0977)735-7860", "8635-2566"],
    address: "2nd Flr. SM City East Ortigas, Ortigas extension, Brgy. Sta. Lucia , Pasig City"
  },
  {
    name: "SM Grand Central",
    phones: ["9059316531"],
    address: "5th Level,SM City Grand Central, Rizal Ave. Extension Barangay 88 Zone 8 District II , Grace park East,1403 Caloocan City, Metro Manila, Philippines"
  },
  {
    name: "SM Hypermarket Sucat-Lopez",
    phones: ["(0915)733-5389"],
    address: "Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila"
  },
  {
    name: "SM Lanang",
    phones: ["(0912)418-0132", "(082)285-1134"],
    address: "Lower Grd. Flr. SM Lanang Premiere, JP Laurel Avenue, Lanang, Davao City"
  },
  {
    name: "SM Lipa",
    phones: ["9152877546", "(043)784-0216"],
    address: "Grd. Flr. SM City Lipa, Ayala National Hi-Way, Lipa City, Batangas"
  },
  {
    name: "SM Mall of Asia South Wing (1)",
    phones: ["(0968)406-3385"],
    address: "2nd Flr. South Wing Parking Bldg.,SM Mall of Asia, Pres.Macapagal Ave., Pasay"
  },
  {
    name: "SM Mall of Asia, Northwing",
    phones: ["(0968)449-7643"],
    address: "2nd Level, SM Mall of Asia, Northwing, Main Mall Entrance ( In front of Cyberzone)"
  },
  {
    name: "SM Megamall, 2nd Floor",
    phones: ["9199418821", "(08) 635 9614"],
    address: "2nd Flr. Bldg. A, SM Megamall, EDSA, Mandaluyong City"
  },
  {
    name: "SM Megamall, 5th Floor",
    phones: ["9982957147", "(08) 638 4419"],
    address: "5th Flr. Bldg. A, SM Megamall, EDSA, Mandaluyong City"
  },
  {
    name: "SM Molino",
    phones: ["09150650203 / 09155988390", "(046)4849633"],
    address: "2nd Flr. SM Supercenter Molino, Bacoor, Cavite"
  },
  {
    name: "SM Olongapo Central",
    phones: ["9070-847-778"],
    address: "3/F SM Olongapo, RM Drive Cor Gordon Ave, Pag-asa, Olongapo, Zambales"
  },
  {
    name: "SM San Jose Del Monte Bulacan",
    phones: ["(0975)633-3389", "(044) 913 1869"],
    address: "2nd Floor, SM San Jose del Monte Bulacan, Quirino Hwy, San Jose del Monte City, 3023 Bulacan"
  },
  {
    name: "SM Seaside City Cebu",
    phones: ["(0917)795-3035"],
    address: "3rd Level, Mountain Wing, SM Seaside Cebu, South Reclamation Project Cebu.."
  },
  {
    name: "SM Sta. Rosa Laguna",
    phones: ["(049)534-2805", "(0923)585-5458"],
    address: "2nd Floor, Old National Highway, Brgy, Manila S Rd, Santa Rosa, Laguna"
  },
  {
    name: "SM Sucat",
    phones: ["09952786497", "825-0779"],
    address: "3rd Flr. SM City Sucat, Dr.A.Santos Ave.,Brgy.San Dionisio, Pque."
  },
  {
    name: "SM Tarlac",
    phones: ["0933-1025474", "(045) 606-0058"],
    address: "Lower Grd Flr., SM City Tarlac, Mc Arthur Hi-way, Tarlac City, Tarlac"
  },
  {
    name: "SM Taytay",
    phones: ["8661-2091", "(0966)358-1163"],
    address: "Basement 1 Bldg. B SM City Taytay , Brgy. Dolores, Taytay, Rizal"
  },
  {
    name: "SM Telabastagan",
    phones: ["(0906)477-2065", "(045)403-9023"],
    address: "2nd Floor, SM City Telabastagan, MacArthur Highway, San Fernando, Pampanga"
  },
  {
    name: "SM Trece",
    phones: ["(0905)330-3181", "‎(046)437-8591"],
    address: "Unit 215 2/Flr SM City Trece Martires,Governor’s Drive, San Agustin Trece Martires City Cavite 4109"
  },
  {
    name: "SMDC Grace",
    phones: ["(0961)028-0059", "(8)636-5161"],
    address: "Ground Floor, Unit 121, SMDC Grace Cayetano Boulevardmar Brgy. Ususan, Taguig City"
  },
  {
    name: "SMDC Light",
    phones: ["(0995)664-4328", "805-9875"],
    address: "2nd Flr. SM Light Residences EDSA cor. Madison St., Mandaluyong City"
  },
  {
    name: "South Town Mall",
    phones: ["0917.716.3427"],
    address: "2nd Level South Town Centre, SRP Road, Brgy. Bulacao, Talisay City, Cebu 6045"
  },
  {
    name: "South Triangle - Timog",
    phones: ["(0961)798-4791"],
    address: "Heart of the City Condominium Ground Floor: Unit 3 Office Area 40 Sgt. Esguerra Avenue Baranggay South Triangle Diliman, Quezon City, 1103"
  },
  {
    name: "Southgate",
    phones: ["8477-6191", "(0955)653-5452"],
    address: "2nd Flr. Alpha Land Southgate Mall, Chino Roces Ext., cor. EDSA, Makati"
  },
  {
    name: "Southwoods",
    phones: ["0945 520 8839"],
    address: "Block 1A Lot 2 Rosario Main Road, Barangay Rosario, San Pedro City, Laguna"
  },
  {
    name: "Sta. Cruz Laguna",
    phones: ["(0969)629-4440", "(049)501-6116", "(02) 8881-0885"],
    address: "Brgy. 3, P. Guevarra Ave., Sta. Cruz, Laguna"
  },
  {
    name: "Sta. Lucia",
    phones: ["(8)681 5443", "(02)8681-5443"],
    address: "2nd Flr. Grand Mall Sta. Lucia Shopping Mall, Cainta, Rizal"
  },
  {
    name: "Sto. Tomas Batangas",
    phones: ["(0917)182-0415"],
    address: "2nd Flr. San Antonio Maharlika Highway Lifestyle Strip Sto. Tomas Batangas"
  },
  {
    name: "Surigao",
    phones: ["9514518366"],
    address: "2nd Floor New Palma Building (Fronting Surigao City Public Market) Borromeo Street, Surigao City"
  },
  {
    name: "Tagum",
    phones: ["(0950) 505 0259", "(084)655-9185"],
    address: "Grd. Flr. NCCC Mall, Tagum City, Davao"
  },
  {
    name: "Trinoma",
    phones: ["7617-6169"],
    address: "Level 1 Trinoma EDSA cor. North Ave, QC"
  },
  {
    name: "Valencia Bukidnon",
    phones: ["0977 831 9484", "(088) 828 3831"],
    address: "LCC BLDG. P-2 POBLACION VALENCIA CITY"
  },
  {
    name: "Valero",
    phones: ["894-5685"],
    address: "Grd Flr. Valero Carpark, Valero St. Salcedo Village, Makati City"
  },
  {
    name: "Vigan",
    phones: ["09661952949 / 09667009825", "(077)632-0990"],
    address: "Aniceto Mansion, Crisologo St, Plaza Burgos., Vigan City Ilocos Sur"
  },
  {
    name: "Vista Mall Bataan",
    phones: ["0917-693-4562", "047-633-9235"],
    address: "2nd Floor,Roman Super Hi-way,Cupang Proper, Balanga City, Bataan"
  },
  {
    name: "Vista Mall Malolos",
    phones: ["0975-646-4609/0917-507-1670"],
    address: ""
  },
  {
    name: "Waltermart Concepcion",
    phones: ["0909-275-2599", "045-606-3761"],
    address: "St Jude Village Alfonso Concepcion Tarlac"
  },
  {
    name: "Waltermart Dasmarinas",
    phones: ["(0997)696-218", "(046)686-5288"],
    address: "2nd Flr. Waltermart Dasmariñas, Aguinaldo Hi-way, Dasmariñas, Cavite"
  },
  {
    name: "Waltermart E. Rodriguez",
    phones: ["(0999)411-9496"],
    address: "2nd Floor, Waltermart E. Rodriguez , E Rodriguez Sr. Ave, Quezon City, Metro Manila"
  },
  {
    name: "Waltermart North Edsa",
    phones: ["9274907146", "(02) 87368 090"],
    address: "3rd flr. Waltermart North edsa Veterans village Quezon city"
  },
  {
    name: "Waltermart Pasong Tamo",
    phones: ["9088926451", "(02) 8889 7751"],
    address: "4th Flr. WalterMart Pasong Tamo , Makati City"
  },
  {
    name: "Waltermart Plaridel",
    phones: ["(044)673-4053", "(044)670-1395"],
    address: "Waltermart Cagayan Valley Rd., Plaridel, Bulacan"
  },
  {
    name: "Waltermart Sta. Maria",
    phones: ["0923 732 9743", "(044) 913 5476"],
    address: "2nd flr., Waltermart Center, Brgy. Sta. Clara, Sta. Maria, Bulacan"
  },
  {
    name: "Waltermart Sta. Rosa",
    phones: ["0917 328 4373"],
    address: "2nd Floor, Waltermart Balibago, Balibago, Sta.Rosa, Laguna"
  },
  {
    name: "Waltermart Tanauan",
    phones: ["(0916) 373 7403", "(043) 784 4862"],
    address: "2nd Flr. Waltermart Tanauan, JP Laurel Nat’l. Hi-Way, Brgy. Darasa Tanauan Batangas"
  },
  {
    name: "White Plains",
    phones: ["0935161196/09985454341", "421-1605"],
    address: "92 Katipunan Road, White Plains, QC"
  },
  {
    name: "Wilson",
    phones: ["9171336265"],
    address: "2nd Flr. Promenade Bldg. 198 Wilson St. cor. P. Guevarra St. San Juan, M. Mla."
  },
  {
    name: "Wmall Macapagal",
    phones: ["(02)8815-4078"],
    address: "Level 4, WMM 421 WMall Macapagal Diosdado Macapagal Ave., Cor Coral Way Brgy. 76 Pasay City"
  }
];

function renderBranches(branchesToRender) {
  const list = document.getElementById('branches-list');
  list.innerHTML = '';
  if (branchesToRender.length === 0) {
    list.innerHTML = '<div class="col-span-full text-center text-gray-500">No branches found.</div>';
    return;
  }
  branchesToRender.forEach(branch => {
    const card = document.createElement('div');
    card.className = 'bg-white border-t-4 border-blue-700 shadow p-6 flex flex-col h-full transition-transform duration-200 hover:shadow-md';
    card.innerHTML = `
      <div class="flex items-center mb-4">
        <div class="bg-salon-blue/10 rounded-full p-3 mr-3">
          <i class="fas fa-store text-salon-blue text-xl"></i>
        </div>
        <h3 class="text-lg font-bold text-salon-blue">${branch.name}</h3>
      </div>
      <div class="mb-3 flex flex-col gap-3">
        ${branch.phones && branch.phones.length > 0 ? branch.phones.map(phone => `<div class="text-gray-700 text-sm flex items-center mb-1"><i class=\"fas fa-phone-alt mr-2 text-salon-blue\"></i><a href=\"tel:${phone.replace(/[^\d+]/g, '')}\" class=\"hover:underline\">${phone}</a></div>`).join('') : ''}
      </div>
      <div class="text-gray-600 text-sm flex-1 flex items-start"><i class="fas fa-map-marker-alt mr-2 text-salon-blue mt-1"></i><span>${branch.address}</span></div>
    `;
    list.appendChild(card);
  });
}

function filterBranches(query) {
  query = query.trim().toLowerCase();
  if (!query) return branches;
  return branches.filter(branch => {
    const name = branch.name.toLowerCase();
    const address = branch.address.toLowerCase();
    const phones = (branch.phones || []).join(' ').toLowerCase();
    return (
      name.includes(query) ||
      address.includes(query) ||
      phones.includes(query) ||
      address === query 
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('branch-search');
  renderBranches(branches);
  searchInput.addEventListener('input', (e) => {
    const filtered = filterBranches(e.target.value);
    renderBranches(filtered);
  });
}); 