var dates = ['01/04/2020', '02/04/2020', '03/04/2020', '04/04/2020', '05/04/2020', '06/04/2020', '07/04/2020', '08/04/2020', '09/04/2020', '10/04/2020', '11/04/2020', '12/04/2020', '13/04/2020', '14/04/2020', '15/04/2020', '16/04/2020', '17/04/2020', '18/04/2020', '19/04/2020', '20/04/2020', '21/04/2020', '22/04/2020', '23/04/2020', '24/04/2020', '25/04/2020', '26/04/2020', '27/04/2020', '28/04/2020', '29/04/2020', '30/04/2020', '01/05/2020', '02/05/2020', '03/05/2020', '04/05/2020', '05/05/2020', '06/05/2020', '07/05/2020', '08/05/2020', '09/05/2020', '10/05/2020', '11/05/2020', '12/05/2020', '13/05/2020', '14/05/2020', '15/05/2020', '16/05/2020', '17/05/2020', '18/05/2020', '19/05/2020', '20/05/2020', '21/05/2020', '22/05/2020', '23/05/2020', '24/05/2020', '25/05/2020', '26/05/2020', '27/05/2020', '28/05/2020', '29/05/2020', '30/05/2020', '31/05/2020', '01/06/2020', '02/06/2020', '03/06/2020', '04/06/2020', '05/06/2020', '06/06/2020', '07/06/2020', '08/06/2020', '09/06/2020', '10/06/2020', '11/06/2020', '12/06/2020', '13/06/2020', '14/06/2020', '15/06/2020', '16/06/2020', '17/06/2020', '18/06/2020', '19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020', '26/06/2020', '27/06/2020', '28/06/2020', '29/06/2020', '30/06/2020', '01/07/2020', '02/07/2020', '03/07/2020', '04/07/2020', '05/07/2020', '06/07/2020', '07/07/2020', '08/07/2020', '09/07/2020', '10/07/2020', '11/07/2020', '12/07/2020', '13/07/2020', '14/07/2020', '15/07/2020', '16/07/2020', '17/07/2020', '18/07/2020', '19/07/2020', '20/07/2020', '21/07/2020', '22/07/2020', '23/07/2020', '24/07/2020', '25/07/2020', '26/07/2020', '27/07/2020', '28/07/2020', '29/07/2020', '30/07/2020', '31/07/2020', '01/08/2020', '02/08/2020', '03/08/2020', '04/08/2020', '05/08/2020', '06/08/2020', '07/08/2020', '08/08/2020', '09/08/2020', '10/08/2020', '11/08/2020', '12/08/2020', '13/08/2020', '14/08/2020', '15/08/2020', '16/08/2020', '17/08/2020', '18/08/2020', '19/08/2020', '20/08/2020', '21/08/2020', '22/08/2020', '23/08/2020', '24/08/2020', '25/08/2020', '26/08/2020', '27/08/2020', '28/08/2020', '29/08/2020', '30/08/2020', '31/08/2020', '01/09/2020', '02/09/2020', '03/09/2020', '04/09/2020', '05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020', '09/09/2020', '10/09/2020', '11/09/2020', '12/09/2020', '13/09/2020', '14/09/2020', '15/09/2020', '16/09/2020', '17/09/2020', '18/09/2020', '19/09/2020', '20/09/2020', '21/09/2020', '22/09/2020', '23/09/2020', '24/09/2020', '25/09/2020', '26/09/2020', '27/09/2020', '28/09/2020', '29/09/2020', '30/09/2020', '01/10/2020', '02/10/2020', '03/10/2020', '04/10/2020', '05/10/2020', '06/10/2020', '07/10/2020', '08/10/2020', '09/10/2020', '10/10/2020', '11/10/2020', '12/10/2020', '13/10/2020', '14/10/2020', '15/10/2020', '16/10/2020', '17/10/2020', '18/10/2020', '19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020', '24/10/2020', '25/10/2020', '26/10/2020', '27/10/2020', '28/10/2020', '29/10/2020', '30/10/2020', '31/10/2020', '01/11/2020', '02/11/2020', '03/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020', '09/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '18/11/2020', '19/11/2020', '20/11/2020', '21/11/2020', '22/11/2020', '23/11/2020', '24/11/2020', '25/11/2020', '26/11/2020', '27/11/2020', '28/11/2020', '29/11/2020', '30/11/2020', '01/12/2020', '02/12/2020', '03/12/2020', '04/12/2020', '05/12/2020', '06/12/2020', '07/12/2020', '08/12/2020', '09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020', '14/12/2020', '15/12/2020', '16/12/2020', '17/12/2020', '18/12/2020', '19/12/2020', '20/12/2020', '21/12/2020', '22/12/2020', '23/12/2020', '24/12/2020', '25/12/2020', '26/12/2020', '27/12/2020', '28/12/2020', '29/12/2020', '30/12/2020', '31/12/2020', '01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '07/01/2021', '08/01/2021', '11/01/2021', '18/01/2021', '19/01/2021', '20/01/2021', '22/01/2021', '29/01/2021', '12/02/2021', '18/02/2021', '19/02/2021', '23/02/2021', '26/02/2021', '11/03/2021', '12/03/2021', '15/03/2021', '17/03/2021', '26/03/2021', '31/03/2021', '09/04/2021', '12/04/2021', '14/04/2021', '26/04/2021', '29/04/2021', '21/05/2021', '26/05/2021', '09/07/2021', '12/07/2021', '23/07/2021', '27/07/2021', '30/07/2021', '24/08/2021'];
var betsi_cum = [28, 51, 60, 90, 113, 132, 160, 192, 208, 224, 236, 272, 296, 317, 351, 373, 408, 430, 448, 471, 493, 523, 554, 592, 622, 642, 657, 686, 714, 743, 778, 804, 832, 870, 912, 928, 968, 1020, 1046, 1077, 1121, 1141, 1178, 1212, 1232, 1278, 1301, 1323, 1347, 1379, 1406, 1422, 1455, 1465, 1486, 1498, 1523, 1542, 1572, 1594, 1601, 1612, 1633, 1681, 1706, 1730, 1758, 1780, 1788, 1800, 1830, 1854, 1878, 1912, 1919, 1926, 1942, 1977, 2009, 2028, 2042, 2051, 2065, 2079, 2097, 2105, 2129, 2144, 2152, 2166, 2181, 2193, 2208, 2224, 2250, 2269, 2271, 2279, 2287, 2298, 2305, 2330, 2334, 2349, 2357, 2363, 2378, 2387, 2395, 2407, 2419, 2426, 2439, 2474, 2490, 2501, 2510, 2528, 2536, 2561, 2577, 2594, 2609, 2623, 2636, 2650, 2675, 2681, 2709, 2719, 2747, 2761, 2766, 2772, 2804, 2815, 2817, 2828, 2839, 2854, 2861, 2862, 2879, 2886, 2892, 2901, 2923, 2947, 2964, 3003, 3013, 3016, 3021, 3064, 3079, 3093, 3113, 3113, 3125, 3140, 3155, 3169, 3185, 3201, 3205, 3221, 3239, 3242, 3261, 3264, 3269, 3274, 3277, 3289, 3301, 3319, 3328, 3331, 3334, 3337, 3341, 3345, 3350, 3359, 3368, 3382, 3400, 3410, 3426, 3442, 3465, 3480, 3496, 3519, 3530, 3549, 3580, 3592, 3607, 3620, 3633, 3645, 3650, 3662, 3670, 3676, 3689, 3719, 3726, 3738, 3741, 3745, 3754, 3757, 3762, 3766, 3777, 3811, 3820, 3824, 3831, 3835, 3841, 3849, 3858, 3876, 3884, 3892, 3902, 3909, 3910, 3915, 3918, 3921, 3933, 3937, 3942, 3947, 3949, 3957, 3967, 3973, 3979, 3986, 3995, 4005, 4007, 4023, 4029, 4035, 4040, 4051, 4059, 4064, 4069, 4079, 4086, 4092, 4097, 4104, 4111, 4119, 4125, 4134, 4141, 4152, 4169, 4191, 4202, 4210, 4214, 4219, 4230, 4259, 4278, 4289, 4303, 4318, 4333, 4357, 4381, 4393, 4407, 4433, 4452, 4484, 4510, 4528, 4536, 4544, 4550, 4559, 4563, 4568, 4572, 4577, 4582, 4588, 4593, 4595, 4596, 4598, 4600, 4601, 4603, 4605, 4611, 4617, 4621, 4626, 4640];
var hywel_cum = [16, 31, 41, 48, 63, 80, 94, 109, 123, 139, 158, 175, 196, 205, 224, 235, 250, 263, 274, 296, 309, 328, 342, 351, 360, 367, 376, 395, 417, 439, 451, 470, 491, 503, 517, 523, 539, 545, 554, 568, 583, 596, 609, 624, 634, 647, 660, 671, 684, 697, 710, 722, 740, 754, 769, 785, 800, 809, 822, 836, 842, 865, 883, 894, 898, 914, 932, 951, 954, 971, 985, 1004, 1019, 1031, 1041, 1050, 1060, 1072, 1082, 1095, 1105, 1116, 1129, 1139, 1154, 1169, 1177, 1200, 1212, 1219, 1226, 1243, 1252, 1262, 1268, 1283, 1294, 1305, 1318, 1335, 1346, 1356, 1356, 1361, 1374, 1386, 1391, 1399, 1409, 1417, 1420, 1425, 1437, 1456, 1466, 1473, 1480, 1483, 1483, 1489, 1492, 1500, 1508, 1509, 1509, 1515, 1524, 1533, 1536, 1543, 1549, 1555, 1556, 1556, 1557, 1566, 1578, 1580, 1587, 1591, 1596, 1607, 1613, 1619, 1625, 1642, 1646, 1657, 1673, 1688, 1694, 1700, 1708, 1709, 1713, 1721, 1726, 1730, 1736, 1743, 1743, 1749, 1752, 1760, 1765, 1771, 1785, 1794, 1800, 1803, 1809, 1815, 1822, 1825, 1829, 1837, 1842, 1851, 1861, 1865, 1873, 1888, 1891, 1901, 1911, 1922, 1933, 1938, 1949, 1955, 1960, 1967, 1977, 1981, 1990, 1997, 2005, 2016, 2018, 2026, 2045, 2052, 2061, 2079, 2096, 2114, 2121, 2129, 2138, 2157, 2172, 2184, 2192, 2204, 2217, 2229, 2243, 2256, 2266, 2274, 2285, 2306, 2315, 2333, 2340, 2348, 2353, 2369, 2377, 2385, 2394, 2402, 2406, 2411, 2420, 2429, 2436, 2444, 2452, 2459, 2472, 2479, 2488, 2495, 2506, 2518, 2527, 2535, 2548, 2553, 2559, 2573, 2583, 2599, 2611, 2625, 2635, 2638, 2649, 2670, 2679, 2694, 2702, 2709, 2721, 2731, 2743, 2752, 2761, 2767, 2775, 2793, 2803, 2815, 2829, 2840, 2848, 2857, 2864, 2872, 2882, 2895, 2904, 2917, 2932, 2944, 2957, 2963, 2964, 2967, 2972, 2974, 2976, 2978, 2981, 2985, 2986, 2992, 2995, 2998, 3002, 3002, 3004, 3005, 3006, 3007, 3009, 3012, 3013, 3013, 3019];
var powys_cum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var swansea_cum = [20, 45, 68, 92, 107, 124, 151, 187, 219, 238, 249, 282, 287, 303, 314, 326, 352, 367, 379, 388, 413, 425, 443, 466, 479, 503, 516, 532, 554, 566, 575, 598, 613, 631, 643, 659, 671, 683, 708, 714, 727, 734, 742, 756, 765, 778, 788, 805, 819, 828, 845, 851, 863, 875, 887, 897, 915, 929, 942, 958, 967, 973, 982, 998, 1009, 1022, 1028, 1031, 1043, 1049, 1057, 1065, 1074, 1087, 1097, 1105, 1116, 1124, 1129, 1134, 1140, 1143, 1147, 1157, 1164, 1166, 1175, 1177, 1183, 1190, 1198, 1204, 1214, 1222, 1227, 1230, 1234, 1240, 1246, 1251, 1254, 1260, 1262, 1263, 1266, 1270, 1270, 1272, 1278, 1283, 1286, 1295, 1302, 1309, 1314, 1318, 1326, 1327, 1327, 1330, 1332, 1339, 1340, 1341, 1345, 1353, 1355, 1360, 1365, 1369, 1371, 1372, 1378, 1380, 1382, 1383, 1383, 1389, 1392, 1398, 1400, 1404, 1409, 1411, 1412, 1414, 1416, 1418, 1420, 1424, 1431, 1433, 1434, 1436, 1444, 1445, 1448, 1450, 1452, 1453, 1458, 1458, 1459, 1466, 1472, 1472, 1472, 1475, 1478, 1479, 1482, 1482, 1487, 1491, 1495, 1497, 1502, 1505, 1506, 1512, 1518, 1523, 1528, 1533, 1536, 1538, 1542, 1546, 1554, 1559, 1568, 1574, 1584, 1587, 1593, 1602, 1613, 1625, 1631, 1638, 1640, 1647, 1651, 1660, 1667, 1680, 1685, 1691, 1696, 1706, 1716, 1723, 1731, 1742, 1751, 1756, 1764, 1773, 1786, 1796, 1803, 1808, 1813, 1824, 1834, 1844, 1850, 1858, 1866, 1875, 1881, 1885, 1895, 1906, 1913, 1915, 1920, 1926, 1931, 1942, 1948, 1963, 1967, 1973, 1984, 1995, 1997, 2003, 2011, 2024, 2031, 2034, 2042, 2049, 2061, 2069, 2077, 2086, 2099, 2113, 2132, 2140, 2151, 2160, 2167, 2178, 2191, 2204, 2221, 2229, 2238, 2264, 2289, 2303, 2308, 2323, 2329, 2334, 2344, 2361, 2373, 2380, 2385, 2388, 2392, 2398, 2406, 2406, 2411, 2412, 2415, 2419, 2419, 2419, 2422, 2423, 2426, 2428, 2428, 2428, 2428, 2428, 2428, 2428, 2430, 2430, 2430, 2431, 2432, 2432, 2438];
var cardiff_cum = [16, 36, 49, 79, 95, 109, 131, 157, 178, 206, 224, 255, 278, 299, 318, 341, 359, 387, 408, 424, 446, 469, 492, 522, 544, 559, 578, 604, 628, 662, 680, 703, 713, 736, 758, 783, 807, 836, 864, 886, 900, 920, 947, 961, 979, 994, 1014, 1025, 1046, 1070, 1094, 1118, 1133, 1145, 1160, 1185, 1204, 1224, 1241, 1254, 1275, 1290, 1316, 1340, 1358, 1376, 1394, 1401, 1416, 1431, 1445, 1466, 1487, 1525, 1530, 1551, 1563, 1575, 1594, 1617, 1633, 1649, 1655, 1681, 1710, 1728, 1753, 1772, 1782, 1785, 1819, 1829, 1842, 1853, 1865, 1872, 1880, 1897, 1906, 1921, 1936, 1948, 1953, 1958, 1973, 1984, 1991, 2003, 2016, 2021, 2030, 2038, 2047, 2056, 2071, 2081, 2083, 2089, 2102, 2117, 2130, 2138, 2151, 2159, 2164, 2187, 2206, 2221, 2228, 2247, 2250, 2254, 2262, 2286, 2300, 2311, 2325, 2331, 2335, 2344, 2357, 2369, 2379, 2396, 2401, 2404, 2413, 2438, 2461, 2474, 2490, 2497, 2502, 2505, 2514, 2531, 2544, 2551, 2564, 2571, 2588, 2602, 2609, 2624, 2640, 2644, 2648, 2662, 2678, 2692, 2705, 2714, 2717, 2733, 2744, 2760, 2773, 2791, 2807, 2822, 2833, 2845, 2858, 2883, 2890, 2899, 2907, 2919, 2932, 2951, 2959, 2967, 2980, 2988, 2999, 3015, 3037, 3058, 3083, 3101, 3117, 3123, 3138, 3153, 3185, 3210, 3224, 3227, 3245, 3260, 3271, 3285, 3302, 3322, 3330, 3339, 3368, 3390, 3416, 3441, 3461, 3471, 3481, 3507, 3529, 3558, 3576, 3589, 3596, 3600, 3622, 3642, 3653, 3670, 3695, 3709, 3719, 3742, 3755, 3778, 3793, 3811, 3826, 3836, 3858, 3877, 3894, 3905, 3925, 3935, 3950, 3979, 3996, 4030, 4063, 4086, 4104, 4124, 4139, 4175, 4210, 4236, 4262, 4279, 4298, 4331, 4367, 4405, 4430, 4448, 4471, 4494, 4525, 4564, 4602, 4643, 4662, 4680, 4701, 4734, 4777, 4798, 4827, 4848, 4881, 4910, 4942, 4979, 5006, 5025, 5034, 5060, 5064, 5068, 5073, 5076, 5079, 5081, 5082, 5087, 5097, 5102, 5108, 5112, 5124, 5126, 5130, 5136, 5137, 5141, 5151];
var cwmtaf_cum = [53, 80, 103, 133, 168, 197, 238, 263, 288, 311, 324, 355, 383, 406, 438, 454, 480, 502, 519, 538, 552, 572, 594, 618, 641, 655, 674, 696, 719, 745, 768, 801, 812, 830, 861, 893, 915, 944, 958, 990, 1010, 1029, 1041, 1064, 1090, 1108, 1131, 1143, 1170, 1184, 1211, 1235, 1261, 1283, 1302, 1326, 1351, 1405, 1434, 1462, 1484, 1495, 1515, 1542, 1572, 1585, 1603, 1621, 1637, 1658, 1682, 1703, 1719, 1739, 1748, 1764, 1796, 1824, 1845, 1859, 1869, 1887, 1912, 1929, 1948, 1958, 1973, 1985, 1993, 2004, 2033, 2044, 2055, 2068, 2080, 2093, 2114, 2123, 2142, 2165, 2188, 2200, 2219, 2231, 2248, 2255, 2267, 2282, 2288, 2296, 2306, 2320, 2343, 2357, 2364, 2375, 2386, 2393, 2408, 2415, 2420, 2425, 2445, 2453, 2457, 2464, 2473, 2477, 2481, 2486, 2491, 2497, 2516, 2523, 2523, 2523, 2535, 2542, 2544, 2560, 2573, 2577, 2586, 2592, 2596, 2600, 2607, 2613, 2618, 2624, 2626, 2629, 2633, 2642, 2654, 2668, 2685, 2690, 2694, 2702, 2714, 2726, 2741, 2759, 2770, 2781, 2796, 2814, 2828, 2842, 2846, 2856, 2866, 2880, 2887, 2908, 2958, 2978, 2991, 3006, 3027, 3058, 3073, 3086, 3103, 3125, 3133, 3135, 3137, 3158, 3161, 3172, 3187, 3197, 3205, 3221, 3245, 3271, 3298, 3322, 3336, 3345, 3364, 3387, 3412, 3450, 3480, 3491, 3505, 3536, 3556, 3571, 3598, 3611, 3625, 3641, 3654, 3672, 3694, 3709, 3726, 3742, 3767, 3785, 3804, 3819, 3839, 3866, 3880, 3907, 3924, 3941, 3961, 3979, 3996, 4013, 4045, 4063, 4086, 4106, 4125, 4136, 4148, 4163, 4187, 4205, 4214, 4223, 4233, 4249, 4263, 4280, 4290, 4303, 4329, 4355, 4369, 4375, 4397, 4421, 4441, 4472, 4506, 4531, 4558, 4589, 4624, 4667, 4682, 4697, 4720, 4750, 4783, 4820, 4859, 4906, 4929, 4947, 4963, 4996, 5030, 5051, 5061, 5085, 5118, 5137, 5164, 5177, 5181, 5185, 5191, 5196, 5196, 5196, 5200, 5200, 5200, 5200, 5200, 5202, 5203, 5204, 5204, 5204, 5204, 5204, 5206, 5209, 5210, 5212, 5214];
var aneurin_cum = [74, 103, 134, 147, 177, 204, 267, 291, 309, 336, 369, 389, 418, 434, 470, 490, 521, 550, 573, 598, 619, 642, 671, 693, 721, 740, 760, 796, 813, 838, 863, 886, 901, 917, 936, 957, 974, 990, 1000, 1013, 1027, 1046, 1070, 1082, 1099, 1119, 1129, 1140, 1155, 1171, 1181, 1191, 1210, 1221, 1229, 1241, 1256, 1270, 1280, 1290, 1298, 1309, 1326, 1344, 1363, 1367, 1380, 1392, 1399, 1419, 1432, 1452, 1465, 1474, 1491, 1498, 1513, 1526, 1540, 1551, 1567, 1578, 1587, 1593, 1610, 1624, 1639, 1649, 1655, 1662, 1674, 1685, 1691, 1699, 1717, 1723, 1727, 1740, 1748, 1752, 1761, 1772, 1783, 1795, 1802, 1811, 1820, 1833, 1844, 1857, 1863, 1866, 1874, 1878, 1886, 1891, 1899, 1907, 1920, 1928, 1942, 1952, 1968, 1971, 1974, 1981, 1991, 1997, 2003, 2013, 2020, 2020, 2028, 2034, 2048, 2055, 2067, 2072, 2083, 2096, 2101, 2108, 2115, 2116, 2120, 2121, 2126, 2127, 2134, 2140, 2151, 2163, 2169, 2180, 2191, 2207, 2218, 2227, 2232, 2240, 2256, 2266, 2273, 2279, 2292, 2310, 2318, 2324, 2331, 2338, 2348, 2352, 2352, 2362, 2367, 2372, 2384, 2398, 2416, 2429, 2450, 2473, 2493, 2510, 2558, 2579, 2622, 2648, 2678, 2696, 2724, 2737, 2776, 2807, 2848, 2879, 2906, 2926, 2956, 2998, 3022, 3041, 3066, 3081, 3099, 3122, 3151, 3171, 3194, 3221, 3245, 3279, 3307, 3328, 3355, 3384, 3413, 3446, 3468, 3489, 3539, 3559, 3568, 3591, 3620, 3640, 3657, 3676, 3698, 3715, 3733, 3759, 3778, 3801, 3818, 3834, 3846, 3867, 3887, 3918, 3943, 3958, 3985, 4002, 4027, 4042, 4053, 4064, 4091, 4103, 4119, 4143, 4166, 4193, 4222, 4243, 4250, 4273, 4296, 4326, 4364, 4396, 4421, 4445, 4466, 4495, 4525, 4552, 4585, 4603, 4633, 4656, 4683, 4717, 4745, 4783, 4798, 4819, 4836, 4865, 4901, 4922, 4948, 4968, 4996, 5014, 5040, 5072, 5113, 5156, 5172, 5195, 5215, 5252, 5273, 5299, 5306, 5307, 5314, 5316, 5320, 5329, 5331, 5340, 5343, 5343, 5346, 5348, 5350, 5351, 5351];
