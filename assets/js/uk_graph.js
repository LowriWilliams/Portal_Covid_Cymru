var dates = ['03-01-2020', '04-01-2020', '05-01-2020', '06-01-2020', '07-01-2020', '08-01-2020', '09-01-2020', '10-01-2020', '11-01-2020', '12-01-2020', '13-01-2020', '14-01-2020', '15-01-2020', '16-01-2020', '17-01-2020', '18-01-2020', '19-01-2020', '20-01-2020', '21-01-2020', '22-01-2020', '23-01-2020', '24-01-2020', '25-01-2020', '26-01-2020', '27-01-2020', '28-01-2020', '29-01-2020', '30-01-2020', '31-01-2020', '01-02-2020', '02-02-2020', '03-02-2020', '04-02-2020', '05-02-2020', '06-02-2020', '07-02-2020', '08-02-2020', '09-02-2020', '10-02-2020', '11-02-2020', '12-02-2020', '13-02-2020', '14-02-2020', '15-02-2020', '16-02-2020', '17-02-2020', '18-02-2020', '19-02-2020', '20-02-2020', '21-02-2020', '22-02-2020', '23-02-2020', '24-02-2020', '25-02-2020', '26-02-2020', '27-02-2020', '28-02-2020', '29-02-2020', '01-03-2020', '02-03-2020', '03-03-2020', '04-03-2020', '05-03-2020', '06-03-2020', '07-03-2020', '08-03-2020', '09-03-2020', '10-03-2020', '11-03-2020', '12-03-2020', '13-03-2020', '14-03-2020', '15-03-2020', '16-03-2020', '17-03-2020', '18-03-2020', '19-03-2020', '20-03-2020', '21-03-2020', '22-03-2020', '23-03-2020', '24-03-2020', '25-03-2020', '26-03-2020', '27-03-2020', '28-03-2020', '29-03-2020', '30-03-2020', '31-03-2020', '01-04-2020', '02-04-2020', '03-04-2020', '04-04-2020', '05-04-2020', '06-04-2020', '07-04-2020', '08-04-2020', '09-04-2020', '10-04-2020', '11-04-2020', '12-04-2020', '13-04-2020', '14-04-2020', '15-04-2020', '16-04-2020', '17-04-2020', '18-04-2020', '19-04-2020', '20-04-2020', '21-04-2020', '22-04-2020', '23-04-2020', '24-04-2020', '25-04-2020', '26-04-2020', '27-04-2020', '28-04-2020', '29-04-2020', '30-04-2020', '01-05-2020', '02-05-2020', '03-05-2020', '04-05-2020', '05-05-2020', '06-05-2020', '07-05-2020', '08-05-2020', '09-05-2020', '10-05-2020', '11-05-2020', '12-05-2020', '13-05-2020', '14-05-2020', '15-05-2020', '16-05-2020', '17-05-2020', '18-05-2020', '19-05-2020', '20-05-2020', '21-05-2020', '22-05-2020', '23-05-2020', '24-05-2020', '25-05-2020', '26-05-2020', '27-05-2020', '28-05-2020', '29-05-2020', '30-05-2020', '31-05-2020', '01-06-2020', '02-06-2020', '03-06-2020', '04-06-2020', '05-06-2020', '06-06-2020', '07-06-2020', '08-06-2020', '09-06-2020', '10-06-2020', '11-06-2020', '12-06-2020', '13-06-2020', '14-06-2020', '15-06-2020', '16-06-2020', '17-06-2020', '18-06-2020', '19-06-2020', '20-06-2020', '21-06-2020', '22-06-2020', '23-06-2020', '24-06-2020', '25-06-2020', '26-06-2020', '27-06-2020', '28-06-2020', '29-06-2020', '30-06-2020', '01-07-2020', '02-07-2020', '03-07-2020', '04-07-2020', '05-07-2020', '06-07-2020', '07-07-2020', '08-07-2020', '09-07-2020', '10-07-2020', '11-07-2020', '12-07-2020', '13-07-2020', '14-07-2020', '15-07-2020', '16-07-2020', '17-07-2020', '18-07-2020', '19-07-2020', '20-07-2020', '21-07-2020', '22-07-2020', '23-07-2020', '24-07-2020', '25-07-2020', '26-07-2020', '27-07-2020', '28-07-2020', '29-07-2020', '30-07-2020', '31-07-2020', '01-08-2020', '02-08-2020', '03-08-2020', '04-08-2020', '05-08-2020', '06-08-2020', '07-08-2020', '08-08-2020', '09-08-2020', '10-08-2020', '11-08-2020', '12-08-2020', '13-08-2020', '14-08-2020', '15-08-2020', '16-08-2020', '17-08-2020', '18-08-2020', '19-08-2020', '20-08-2020', '21-08-2020', '22-08-2020', '23-08-2020', '24-08-2020', '25-08-2020', '26-08-2020', '27-08-2020', '28-08-2020', '29-08-2020', '30-08-2020', '31-08-2020', '01-09-2020', '02-09-2020', '03-09-2020', '04-09-2020', '05-09-2020', '06-09-2020', '07-09-2020', '08-09-2020', '09-09-2020', '10-09-2020', '11-09-2020', '12-09-2020', '13-09-2020', '14-09-2020', '15-09-2020', '16-09-2020', '17-09-2020', '18-09-2020', '19-09-2020', '20-09-2020', '21-09-2020', '22-09-2020', '23-09-2020', '24-09-2020', '25-09-2020', '26-09-2020', '27-09-2020', '28-09-2020', '29-09-2020', '30-09-2020', '01-10-2020', '02-10-2020', '03-10-2020', '04-10-2020', '05-10-2020', '06-10-2020', '07-10-2020', '08-10-2020', '09-10-2020', '10-10-2020', '11-10-2020', '12-10-2020', '13-10-2020', '14-10-2020', '15-10-2020', '16-10-2020', '17-10-2020', '18-10-2020', '19-10-2020', '20-10-2020', '21-10-2020', '22-10-2020', '23-10-2020', '24-10-2020', '25-10-2020', '26-10-2020', '27-10-2020', '28-10-2020', '29-10-2020', '30-10-2020', '31-10-2020', '01-11-2020', '02-11-2020', '03-11-2020', '04-11-2020', '05-11-2020', '06-11-2020', '07-11-2020', '08-11-2020', '09-11-2020', '10-11-2020', '11-11-2020', '12-11-2020', '13-11-2020', '14-11-2020', '15-11-2020', '16-11-2020', '17-11-2020', '18-11-2020', '19-11-2020', '20-11-2020', '21-11-2020', '22-11-2020', '23-11-2020', '24-11-2020', '25-11-2020', '26-11-2020', '27-11-2020', '28-11-2020', '29-11-2020', '30-11-2020', '01-12-2020', '02-12-2020', '03-12-2020', '04-12-2020', '05-12-2020', '06-12-2020', '07-12-2020', '08-12-2020', '09-12-2020', '10-12-2020', '11-12-2020', '12-12-2020', '13-12-2020', '14-12-2020', '15-12-2020', '16-12-2020', '17-12-2020', '18-12-2020', '19-12-2020', '20-12-2020', '21-12-2020', '22-12-2020', '23-12-2020', '24-12-2020', '25-12-2020', '26-12-2020', '27-12-2020', '28-12-2020', '29-12-2020', '30-12-2020', '31-12-2020', '01-01-2021', '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021', '06-01-2021', '07-01-2021', '08-01-2021', '09-01-2021', '10-01-2021'];
var scotland = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3, 5, 5, 2, 5, 4, 9, 24, 25, 36, 32, 18, 24, 32, 39, 56, 51, 43, 83, 85, 135, 175, 165, 186, 139, 179, 430, 317, 292, 399, 344, 361, 255, 268, 336, 392, 318, 315, 322, 155, 291, 390, 354, 307, 411, 367, 263, 222, 366, 371, 288, 354, 273, 197, 200, 313, 319, 301, 273, 170, 169, 171, 272, 215, 225, 156, 181, 141, 136, 166, 188, 143, 187, 90, 57, 61, 96, 105, 113, 72, 60, 55, 29, 55, 48, 39, 55, 18, 18, 53, 33, 49, 29, 21, 18, 18, 14, 12, 17, 27, 21, 25, 29, 15, 21, 11, 27, 26, 26, 14, 12, 9, 5, 17, 15, 8, 5, 10, 8, 5, 12, 11, 9, 4, 2, 7, 6, 18, 7, 19, 6, 3, 5, 11, 17, 21, 23, 7, 22, 10, 16, 20, 27, 4, 3, 4, 22, 17, 30, 18, 31, 18, 23, 64, 66, 43, 60, 48, 29, 52, 47, 47, 65, 51, 43, 26, 49, 50, 77, 71, 123, 83, 66, 44, 67, 68, 51, 88, 123, 160, 154, 156, 101, 159, 141, 208, 146, 176, 159, 161, 175, 221, 244, 70, 267, 267, 290, 203, 350, 245, 255, 383, 486, 465, 558, 714, 344, 222, 806, 640, 668, 775, 764, 758, 697, 800, 1054, 1027, 1246, 1009, 956, 961, 1297, 1429, 1351, 1196, 1167, 316, 993, 1456, 1739, 1712, 1401, 1433, 1303, 1122, 1327, 1202, 1128, 1281, 1101, 1148, 951, 999, 1433, 1216, 1072, 1596, 1115, 912, 832, 1261, 1212, 1357, 1118, 1159, 717, 1248, 1264, 1089, 1018, 887, 844, 949, 771, 880, 1225, 969, 788, 746, 369, 754, 951, 958, 966, 777, 643, 677, 692, 897, 933, 1001, 1064, 800, 734, 845, 689, 858, 744, 572, 934, 1504, 1316, 1190, 1314, 1165, 1149, 740, 967, 1895, 2045, 2622, 2539, 2137, 2464, 1905, 2529, 2039, 2649, 2309, 1865, 1877];
var england = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 3, 12, 4, 11, 32, 25, 39, 39, 58, 40, 46, 63, 99, 159, 201, 253, 97, 361, 625, 574, 628, 873, 535, 793, 1258, 1130, 1809, 2506, 2139, 2060, 2107, 2414, 3630, 3583, 3576, 2910, 5107, 3176, 2978, 4788, 3798, 4263, 3841, 3672, 2999, 3854, 3188, 3118, 3985, 3548, 3607, 2401, 3087, 3020, 3084, 3004, 2826, 2152, 2264, 1989, 1403, 2484, 2501, 2228, 2019, 1485, 1842, 1611, 2133, 1694, 1349, 1007, 891, 1067, 1146, 1189, 1112, 1136, 788, 816, 857, 824, 854, 1083, 979, 584, 494, 492, 609, 519, 560, 715, 320, 294, 444, 462, 431, 451, 422, 228, 92, 651, 63, 304, 392, 372, 292, 219, 252, 252, 281, 323, 324, 215, 178, 210, 107, 261, 175, 192, 142, 99, 196, 177, 523, 502, 579, 492, 331, 572, 606, 617, 480, 806, 615, 497, 372, 506, 597, 635, 796, 672, 535, 399, 519, 702, 688, 710, 721, 616, 547, 700, 812, 814, 722, 676, 856, 617, 804, 826, 796, 679, 988, 699, 1035, 925, 1059, 1284, 934, 952, 634, 975, 707, 1035, 908, 1060, 938, 758, 1065, 875, 1350, 1106, 891, 1487, 1149, 1041, 1239, 1507, 1669, 1477, 2576, 2528, 2094, 2286, 2578, 3143, 3008, 2837, 2259, 2649, 3396, 2788, 3771, 3638, 3279, 3754, 4187, 5083, 5632, 5723, 4639, 4800, 3316, 5651, 5656, 5589, 4797, 10806, 21309, 10685, 12648, 11528, 14952, 10772, 12628, 10383, 11647, 14310, 16132, 16139, 12176, 13299, 14704, 16365, 17814, 22948, 17354, 17116, 19332, 16487, 17883, 19629, 21245, 19740, 20821, 18864, 20602, 15860, 17330, 21863, 21137, 20268, 21875, 18293, 19036, 18622, 19970, 30843, 24540, 24298, 21998, 19423, 17549, 17189, 20291, 17845, 17615, 16668, 13329, 9854, 15893, 14637, 13557, 13323, 10054, 10869, 11618, 13323, 11992, 13412, 12666, 14294, 11623, 10459, 12960, 17622, 17899, 17468, 17164, 17882, 16504, 23432, 22401, 24452, 22775, 32155, 28742, 32288, 34247, 35561, 31560, 31307, 25619, 36511, 47164, 43554, 49510, 50746, 49248, 46853, 53180, 54940, 56060, 46841, 61757, 54257, 50291];
var wales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 9, 10, 13, 22, 34, 30, 12, 13, 21, 21, 89, 67, 71, 60, 150, 113, 180, 172, 148, 210, 112, 274, 284, 345, 387, 344, 302, 291, 283, 16, 502, 340, 367, 313, 238, 272, 284, 244, 292, 334, 276, 304, 274, 234, 243, 299, 178, 203, 232, 117, 183, 160, 183, 174, 195, 145, 95, 87, 152, 118, 223, 124, 105, 133, 128, 126, 183, 162, 101, 166, 110, 166, 138, 185, 140, 106, 141, 97, 72, 102, 86, 82, 59, 67, 82, 35, 76, 42, 40, 42, 42, 38, 63, 77, 45, 39, 62, 65, 53, 48, 31, 25, 100, 71, 51, 47, 125, 65, 46, 25, 116, 26, 32, 41, 26, 34, 15, 8, 2, 13, 16, 10, 7, 16, 11, 21, 18, 18, 16, 10, 31, 15, 22, 22, 43, 45, 30, 22, 45, 21, 32, 9, 26, 21, 37, 24, 22, 14, 15, 17, 19, 26, 12, 13, 8, 15, 18, 27, 18, 14, 24, 21, 19, 34, 34, 20, 19, 28, 34, 35, 34, 40, 56, 39, 51, 42, 50, 51, 77, 98, 133, 150, 165, 102, 133, 164, 162, 183, 110, 199, 168, 185, 212, 199, 234, 281, 389, 348, 320, 370, 362, 286, 366, 388, 398, 462, 576, 432, 596, 425, 752, 638, 766, 627, 467, 487, 764, 946, 727, 979, 674, 950, 626, 1148, 962, 1134, 761, 1324, 1104, 1158, 1207, 1414, 1375, 1737, 1301, 819, 1646, 1119, 1202, 1272, 1352, 958, 744, 931, 444, 928, 867, 797, 933, 1333, 892, 705, 638, 1048, 1020, 1016, 808, 892, 595, 907, 1251, 1105, 1445, 1004, 802, 667, 1480, 1473, 1471, 1645, 1916, 2021, 780, 2238, 1968, 2234, 2494, 0, 1228, 615, 530, 11468, 2801, 3065, 2334, 2563, 2761, 3013, 2161, 0, 2237, 4142, 2273, 2510, 2281, 1831, 0, 2764, 4011, 1898, 2069, 2238, 1718, 2487, 2373, 1660];
var ireland = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 5, 3, 0, 2, 1, 10, 5, 11, 7, 10, 6, 9, 9, 22, 20, 20, 24, 37, 32, 34, 49, 86, 123, 53, 103, 85, 130, 94, 91, 69, 97, 84, 138, 112, 128, 89, 76, 85, 121, 113, 137, 148, 159, 83, 30, 116, 142, 106, 104, 82, 66, 34, 55, 73, 87, 66, 78, 69, 45, 53, 50, 38, 56, 41, 30, 44, 60, 38, 26, 40, 28, 16, 20, 18, 42, 23, 41, 25, 39, 28, 26, 16, 17, 13, 7, 12, 4, 8, 33, 3, 14, 6, 6, 3, 13, 4, 16, 3, 7, 4, 2, 8, 1, 3, 0, 4, 1, 0, 2, 1, 4, 2, 1, 6, 3, 1, 7, 4, 0, 0, 0, 5, 4, 3, 4, 0, 0, 0, 2, 9, 16, 19, 0, 0, 0, 2, 9, 8, 15, 0, 0, 0, 9, 9, 8, 10, 0, 0, 0, 8, 10, 43, 15, 0, 0, 0, 48, 29, 8, 74, 65, 27, 39, 41, 34, 51, 20, 71, 119, 10, 47, 72, 69, 85, 89, 49, 58, 49, 71, 77, 61, 118, 106, 141, 40, 49, 78, 88, 104, 87, 109, 79, 129, 149, 163, 222, 176, 125, 75, 220, 189, 273, 319, 187, 220, 320, 424, 259, 934, 726, 462, 616, 669, 828, 923, 1080, 902, 1066, 877, 863, 1217, 763, 1299, 1031, 1012, 820, 913, 1039, 1042, 1252, 923, 896, 727, 722, 840, 822, 566, 649, 685, 493, 570, 679, 516, 595, 528, 420, 471, 514, 791, 548, 607, 511, 472, 331, 549, 518, 487, 369, 357, 342, 280, 79, 533, 442, 391, 315, 351, 290, 391, 416, 456, 449, 451, 419, 397, 351, 483, 441, 538, 476, 483, 419, 486, 510, 656, 510, 640, 505, 555, 439, 787, 841, 0, 998, 0, 1634, 1566, 2143, 1929, 0, 3576, 1662, 1801, 1378, 1985, 1410, 1500, 1442, 1112];
