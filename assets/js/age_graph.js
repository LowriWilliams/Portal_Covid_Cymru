var dates = ['31-05-2020', '01-06-2020', '02-06-2020', '03-06-2020', '04-06-2020', '06-06-2020', '07-06-2020', '08-06-2020', '09-06-2020', '10-06-2020', '11-06-2020', '12-06-2020', '13-06-2020', '15-06-2020', '17-06-2020', '18-06-2020', '19-06-2020', '20-06-2020', '21-06-2020', '22-06-2020', '23-06-2020', '24-06-2020', '26-06-2020', '27-06-2020', '28-06-2020', '29-06-2020', '30-06-2020', '02-07-2020', '03-07-2020', '04-07-2020', '05-07-2020', '06-07-2020', '07-07-2020', '08-07-2020', '09-07-2020', '10-07-2020', '11-07-2020', '12-07-2020', '13-07-2020', '15-07-2020', '17-07-2020', '18-07-2020', '19-07-2020', '20-07-2020', '22-07-2020', '26-07-2020', '27-07-2020', '28-07-2020', '30-07-2020', '04-08-2020', '06-08-2020', '08-08-2020', '09-08-2020', '18-08-2020', '19-08-2020', '28-08-2020', '30-08-2020', '31-08-2020', '01-09-2020', '03-09-2020', '06-09-2020', '07-09-2020', '10-09-2020', '15-09-2020', '16-09-2020', '18-09-2020', '19-09-2020', '24-09-2020', '25-09-2020', '30-09-2020', '01-10-2020', '02-10-2020', '03-10-2020', '04-10-2020', '05-10-2020', '06-10-2020', '07-10-2020', '08-10-2020', '09-10-2020', '10-10-2020', '11-10-2020', '12-10-2020', '13-10-2020', '14-10-2020', '15-10-2020', '16-10-2020', '17-10-2020', '18-10-2020', '19-10-2020', '20-10-2020', '21-10-2020', '22-10-2020', '23-10-2020', '24-10-2020', '25-10-2020', '26-10-2020', '27-10-2020', '28-10-2020', '29-10-2020', '30-10-2020', '31-10-2020', '02-11-2020', '03-11-2020', '04-11-2020', '05-11-2020', '06-11-2020', '07-11-2020', '08-11-2020', '09-11-2020', '10-11-2020', '11-11-2020', '12-11-2020', '14-11-2020', '15-11-2020', '16-11-2020', '17-11-2020', '18-11-2020', '20-11-2020', '22-11-2020', '23-11-2020', '24-11-2020', '25-11-2020', '26-11-2020', '27-11-2020', '28-11-2020', '29-11-2020', '30-11-2020', '02-12-2020', '03-12-2020', '04-12-2020', '05-12-2020', '06-12-2020', '07-12-2020', '08-12-2020', '09-12-2020', '10-12-2020', '11-12-2020', '12-12-2020', '15-12-2020', '16-12-2020', '17-12-2020', '18-12-2020', '19-12-2020', '20-12-2020', '21-12-2020', '22-12-2020', '23-12-2020'];
var tmp_1 = [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 3, 0, 4, 0, 0, 0, 0, 6, 0, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0, 27, 0, 0, 3, 0, 1, 7, 1, 2, 0, 2, 1, 0, 1, 3, 0, 15, 4, 1, 5, 4, 11, 4, 22, 47, 14, 15, 10, 51, 9, 61, 13, 12, 12, 12, 19, 8, 32, 20, 14, 26, 16, 7, 21, 29, 22, 31, 30, 30, 21, 41, 44, 47, 18, 55, 38, 33, 54, 44, 45, 64, 47, 69, 35, 40, 52, 45, 29, 22, 43, 6, 41, 23, 59, 57, 41, 28, 24, 90, 90, 40, 18, 56, 71, 54, 80, 42, 45, 117, 70, 94, 111, 107, 122, 44, 114, 90, 114, 125, 72, 13, 640, 118, 146, 115, 136, 132, 147];
var tmp_2 = [6, 0, 2, 4, 0, 2, 0, 0, 0, 2, 0, 4, 0, 4, 1, 1, 1, 0, 2, 1, 2, 1, 1, 0, 1, 2, 1, 2, 3, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 58, 0, 1, 0, 1, 0, 13, 4, 0, 5, 12, 5, 3, 1, 11, 2, 36, 23, 14, 15, 15, 29, 23, 39, 94, 24, 31, 12, 133, 36, 203, 62, 81, 99, 76, 103, 66, 113, 86, 144, 108, 89, 99, 153, 247, 192, 189, 146, 192, 105, 258, 196, 188, 108, 191, 125, 140, 191, 183, 153, 181, 141, 212, 119, 118, 140, 127, 83, 75, 89, 34, 94, 65, 128, 101, 84, 55, 44, 213, 194, 71, 55, 92, 146, 119, 166, 80, 92, 247, 170, 154, 183, 237, 256, 80, 255, 218, 252, 257, 144, 30, 1107, 253, 238, 178, 195, 240, 225];
var tmp_3 = [33, 4, 9, 9, 4, 17, 8, 9, 6, 2, 0, 25, 7, 4, 26, 9, 6, 8, 17, 15, 20, 10, 46, 12, 1, 18, 5, 11, 2, 4, 1, 1, 1, 3, 1, 1, 1, 1, 1, 183, 5, 2, 5, 2, 3, 23, 7, 3, 1, 16, 4, 5, 9, 50, 4, 70, 23, 11, 11, 29, 62, 28, 84, 154, 40, 77, 46, 347, 60, 349, 92, 93, 140, 86, 160, 100, 163, 147, 188, 143, 102, 96, 176, 206, 133, 167, 136, 212, 133, 236, 206, 249, 142, 310, 242, 248, 271, 268, 284, 393, 235, 539, 225, 226, 217, 274, 189, 146, 147, 91, 181, 130, 309, 248, 184, 118, 115, 428, 353, 168, 113, 175, 233, 224, 235, 174, 130, 334, 273, 287, 275, 333, 393, 123, 383, 368, 404, 440, 308, 62, 2141, 486, 552, 406, 453, 499, 544];
var tmp_4 = [27, 6, 6, 9, 6, 11, 2, 4, 4, 6, 0, 16, 3, 7, 25, 3, 0, 2, 25, 17, 14, 8, 45, 13, 2, 22, 3, 11, 5, 7, 1, 1, 2, 2, 3, 0, 0, 1, 1, 153, 1, 1, 3, 2, 4, 21, 8, 5, 5, 24, 5, 8, 3, 15, 6, 35, 7, 6, 7, 16, 39, 19, 90, 125, 25, 65, 32, 256, 57, 284, 53, 75, 89, 87, 71, 53, 105, 99, 107, 77, 64, 61, 116, 123, 101, 106, 92, 133, 70, 143, 128, 162, 103, 212, 175, 214, 183, 237, 219, 285, 215, 352, 183, 222, 219, 199, 139, 127, 141, 53, 146, 115, 280, 223, 140, 112, 98, 312, 316, 136, 103, 149, 236, 187, 231, 175, 118, 370, 245, 234, 274, 303, 327, 141, 371, 306, 349, 404, 287, 70, 2080, 445, 546, 398, 440, 435, 566];
var tmp_5 = [34, 12, 6, 11, 3, 18, 4, 10, 4, 6, 0, 17, 6, 2, 30, 6, 6, 7, 15, 11, 10, 10, 44, 6, 5, 33, 5, 8, 3, 7, 0, 1, 2, 1, 1, 0, 2, 1, 1, 157, 3, 0, 6, 2, 7, 7, 9, 3, 7, 17, 2, 1, 2, 17, 2, 36, 16, 2, 5, 7, 33, 23, 62, 103, 27, 61, 32, 215, 54, 266, 58, 53, 88, 47, 71, 60, 99, 94, 100, 89, 66, 65, 84, 118, 79, 130, 80, 126, 84, 147, 139, 168, 106, 192, 162, 133, 162, 221, 201, 259, 231, 377, 175, 187, 192, 215, 139, 93, 134, 79, 134, 111, 266, 210, 119, 103, 111, 324, 268, 152, 111, 131, 182, 163, 210, 140, 107, 322, 244, 220, 258, 307, 276, 122, 362, 307, 321, 389, 215, 84, 1801, 418, 465, 356, 385, 419, 489];
var tmp_6 = [55, 6, 12, 11, 9, 11, 12, 2, 9, 6, 0, 17, 6, 7, 29, 8, 4, 2, 15, 10, 20, 6, 25, 8, 2, 23, 5, 6, 5, 6, 4, 2, 1, 1, 2, 2, 0, 2, 2, 155, 2, 1, 5, 2, 3, 19, 7, 4, 4, 21, 5, 5, 4, 20, 3, 39, 16, 3, 4, 10, 27, 21, 59, 128, 33, 58, 38, 233, 49, 287, 67, 72, 82, 64, 89, 73, 116, 97, 103, 105, 55, 84, 101, 107, 88, 151, 87, 145, 91, 132, 122, 156, 115, 183, 161, 193, 176, 211, 214, 255, 210, 390, 177, 207, 216, 248, 174, 99, 124, 64, 146, 155, 304, 233, 157, 110, 105, 307, 256, 119, 82, 143, 185, 157, 179, 138, 127, 340, 236, 214, 239, 260, 283, 129, 336, 295, 355, 361, 296, 86, 1904, 456, 512, 393, 426, 469, 501];
var tmp_7 = [20, 8, 4, 10, 4, 12, 3, 3, 2, 2, 0, 14, 8, 2, 14, 8, 3, 1, 8, 8, 9, 3, 18, 3, 5, 8, 0, 4, 1, 1, 0, 0, 0, 2, 1, 0, 0, 2, 3, 95, 3, 0, 3, 0, 1, 12, 3, 2, 1, 11, 2, 1, 1, 13, 1, 12, 2, 0, 2, 5, 13, 9, 29, 56, 19, 26, 19, 129, 30, 156, 27, 40, 39, 32, 42, 44, 57, 60, 58, 39, 34, 30, 52, 65, 40, 70, 44, 61, 50, 78, 66, 82, 63, 85, 90, 90, 66, 113, 129, 138, 98, 196, 81, 89, 106, 121, 87, 63, 73, 34, 85, 103, 141, 114, 75, 71, 57, 155, 132, 77, 40, 71, 87, 99, 130, 103, 74, 159, 99, 126, 151, 177, 174, 59, 213, 164, 216, 254, 165, 55, 1088, 275, 301, 222, 221, 266, 315];
var tmp_8 = [20, 9, 10, 8, 4, 9, 3, 2, 6, 5, 0, 14, 4, 4, 23, 3, 4, 2, 6, 3, 7, 3, 5, 3, 4, 4, 3, 10, 0, 2, 2, 1, 0, 2, 1, 0, 0, 3, 2, 31, 11, 2, 2, 0, 8, 16, 3, 0, 4, 7, 2, 3, 1, 6, 1, 3, 3, 1, 2, 2, 7, 3, 21, 28, 12, 9, 11, 54, 14, 80, 13, 21, 16, 15, 25, 10, 39, 24, 34, 22, 29, 23, 27, 31, 38, 52, 20, 32, 33, 47, 33, 48, 47, 42, 47, 53, 58, 81, 68, 81, 55, 129, 55, 56, 62, 69, 55, 50, 60, 35, 42, 73, 84, 63, 40, 51, 31, 116, 97, 61, 29, 36, 63, 49, 95, 65, 53, 109, 74, 77, 82, 106, 109, 42, 116, 109, 100, 145, 147, 49, 477, 174, 180, 141, 155, 164, 117];
var tmp_9 = [47, 13, 13, 11, 3, 22, 4, 9, 5, 8, 0, 22, 8, 5, 21, 7, 3, 1, 6, 3, 7, 4, 6, 0, 1, 6, 2, 9, 4, 2, 4, 1, 0, 1, 2, 5, 3, 2, 1, 15, 7, 3, 2, 4, 14, 13, 1, 2, 8, 14, 2, 4, 4, 7, 2, 6, 1, 1, 0, 2, 4, 2, 8, 13, 4, 10, 8, 27, 6, 57, 10, 12, 5, 11, 12, 11, 22, 7, 16, 12, 10, 18, 23, 16, 24, 49, 27, 16, 28, 47, 21, 18, 47, 39, 40, 41, 21, 43, 49, 61, 50, 131, 40, 38, 48, 40, 38, 50, 79, 33, 42, 58, 110, 67, 36, 41, 40, 85, 84, 42, 30, 37, 40, 37, 87, 59, 45, 111, 45, 52, 50, 69, 62, 29, 62, 85, 89, 92, 132, 57, 191, 132, 95, 80, 96, 107, 74];
var tmp_10 = [28, 1, 5, 9, 2, 15, 4, 3, 5, 1, 0, 11, 3, 4, 9, 2, 2, 0, 6, 2, 6, 1, 1, 1, 3, 0, 2, 5, 1, 1, 1, 1, 1, 1, 3, 1, 0, 4, 0, 6, 2, 0, 2, 2, 3, 8, 2, 0, 6, 5, 2, 6, 0, 6, 0, 5, 1, 0, 0, 2, 1, 1, 2, 3, 1, 1, 4, 6, 4, 27, 3, 3, 5, 2, 3, 0, 6, 4, 2, 5, 2, 4, 9, 3, 8, 19, 12, 2, 10, 18, 6, 12, 13, 14, 24, 13, 25, 12, 13, 20, 18, 69, 29, 19, 18, 14, 25, 19, 41, 15, 17, 34, 49, 17, 16, 15, 14, 38, 34, 26, 14, 17, 7, 15, 32, 28, 11, 38, 16, 13, 22, 14, 19, 10, 25, 26, 34, 23, 77, 24, 39, 44, 30, 45, 56, 29, 34];
