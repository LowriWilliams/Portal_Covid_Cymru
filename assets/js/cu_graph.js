var cardiff = [149, 178, 108, 57, 121, 61, 82, 79, 57, 113, 160, 118, 53, 79, 130, 115, 71, 82, 98, 30, 116, 155, 150, 174, 88, 93, 46, 206, 217, 199, 242, 240, 281, 50, 332, 173, 254, 327, 0, 151, 49, 64, 1518, 271, 459, 253, 301, 388, 425, 277, 0, 245, 486, 258, 330, 261, 203, 0, 244, 413, 204, 199, 247, 140, 238, 227, 169, 207, 131, 176, 182, 172, 96, 175, 150, 118, 159, 123, 44, 105, 78, 118, 67, 53, 57, 58, 68, 65, 56, 64, 43, 45, 29, 67, 50, 80, 37, 30, 55, 102, 56, 55, 47, 35, 53, 49, 88, 57, 49, 43, 44, 36, 40, 16, 22, 21, 25, 19, 13, 29, 35, 22, 12, 22, 8, 22, 12, 19, 29, 15, 18, 6, 17, 25, 20, 21, 22, 19, 5, 10, 26, 22, 19, 24, 13, 14, 8, 38, 0, 13, 0, 47, 30, 13, 13, 28, 25, 12, 9, 12, 12, 10, 4, 0, 25, 19, 10, 10, 5, 1, 0, 10, 10, 2, 9, 9, 5, 0, 13, 0, 11, 7, 7, 5, 0, 11, 27, 6, 2, 10, 21, 0, 15, 12, 6, 1, 8, 2, 0, 8, 14, 1, 3, 7, 1, 0, 8, 0, 15, 13, 2, 1, 0, 11, 8, 4, 25, 7, 13, 0, 13, 20, 9, 19, 12, 23, 0, 35, 56, 22, 25, 52, 76, 0, 60, 96, 40, 61, 64, 83, 0, 98, 158, 124, 88, 108, 47, 0, 73, 154, 94, 165, 89, 124, 0, 79, 231, 38, 99, 73, 73, 0, 115, 141, 56, 61, 62, 94, 0, 73, 110, 49, 52, 68, 66, 0, 79, 139, 74, 0, 128, 89, 0, 102, 207, 107, 100, 147, 138, 0, 120, 276, 131, 179, 177, 147, 0, 210, 0, 301, 293, 217, 229, 0, 267, 516, 273, 254];
var students = [11, 16, 2, 4, 5, 4, 1, 2, 11, 9, 13, 11, 4, 5, 1, 3, 3, 3, 8, 7, 7, 5, 3, 0, 5, 6, 5, 11, 4, 9, 2, 10, 12, 8, 3, 10, 7, 4, 13, 13, 12, 9, 5, 4, 1, 2, 0, 4, 3, 1, 1, 3, 3, 3, 0, 4, 3, 7, 2, 2, 8, 5, 7, 6, 5, 4, 3, 4, 4, 8, 1, 3, 4, 3, 11, 5, 3, 8, 5, 3, 2, 9, 0, 2, 0, 9, 1, 2, 3, 1, 1, 3, 2, 3, 1, 4, 3, 1, 0, 1, 0, 1, 2, 0, 1, 0, 1, 1, 0, 4, 1, 2, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 2, 2, 0, 1, 1, 0, 1, 3, 5, 2, 2, 6, 5, 1, 1, 4, 0, 3, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 1, 0, 1, 1, 0, 2, 3, 4, 1, 1, 0, 2, 2, 3];
var asymptomatic = [3, 1, 0, 0, 0, 1, 0, 5, 8, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 1, 3, 8, 6, 4, 7, 10, 6, 30, 7, 9, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 1, 3, 0, 0, 0, 3, 4, 4, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 1, 1, 3, 0, 0, 0, 2, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5, 3, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0];
var dates = ['05-11-2020', '06-11-2020', '07-11-2020', '08-11-2020', '09-11-2020', '10-11-2020', '11-11-2020', '12-11-2020', '13-11-2020', '14-11-2020', '15-11-2020', '16-11-2020', '17-11-2020', '18-11-2020', '19-11-2020', '20-11-2020', '21-11-2020', '22-11-2020', '23-11-2020', '24-11-2020', '25-11-2020', '26-11-2020', '27-11-2020', '28-11-2020', '29-11-2020', '30-11-2020', '01-12-2020', '02-12-2020', '03-12-2020', '04-12-2020', '05-12-2020', '06-12-2020', '07-12-2020', '08-12-2020', '09-12-2020', '10-12-2020', '11-12-2020', '12-12-2020', '13-12-2020', '14-12-2020', '15-12-2020', '16-12-2020', '17-12-2020', '18-12-2020', '19-12-2020', '20-12-2020', '21-12-2020', '22-12-2020', '23-12-2020', '24-12-2020', '25-12-2020', '26-12-2020', '27-12-2020', '28-12-2020', '29-12-2020', '30-12-2020', '31-12-2020', '01-01-2021', '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021', '06-01-2021', '07-01-2021', '08-01-2021', '09-01-2021', '10-01-2021', '11-01-2021', '12-01-2021', '13-01-2021', '14-01-2021', '15-01-2021', '16-01-2021', '17-01-2021', '18-01-2021', '19-01-2021', '20-01-2021', '21-01-2021', '22-01-2021', '23-01-2021', '24-01-2021', '25-01-2021', '26-01-2021', '27-01-2021', '28-01-2021', '29-01-2021', '30-01-2021', '31-01-2021', '01-02-2021', '02-02-2021', '03-02-2021', '04-02-2021', '05-02-2021', '06-02-2021', '07-02-2021', '08-02-2021', '09-02-2021', '10-02-2021', '11-02-2021', '12-02-2021', '13-02-2021', '14-02-2021', '15-02-2021', '16-02-2021', '17-02-2021', '18-02-2021', '19-02-2021', '20-02-2021', '21-02-2021', '22-02-2021', '23-02-2021', '24-02-2021', '25-02-2021', '26-02-2021', '27-02-2021', '28-02-2021', '01-03-2021', '02-03-2021', '03-03-2021', '04-03-2021', '05-03-2021', '06-03-2021', '07-03-2021', '08-03-2021', '09-03-2021', '10-03-2021', '11-03-2021', '12-03-2021', '13-03-2021', '14-03-2021', '15-03-2021', '16-03-2021', '17-03-2021', '18-03-2021', '19-03-2021', '20-03-2021', '21-03-2021', '22-03-2021', '23-03-2021', '24-03-2021', '25-03-2021', '26-03-2021', '27-03-2021', '28-03-2021', '29-03-2021', '30-03-2021', '31-03-2021', '01-04-2021', '02-04-2021', '03-04-2021', '04-04-2021', '05-04-2021', '06-04-2021', '07-04-2021', '08-04-2021', '09-04-2021', '10-04-2021', '11-04-2021', '12-04-2021', '13-04-2021', '14-04-2021', '15-04-2021', '16-04-2021', '17-04-2021', '18-04-2021', '19-04-2021', '20-04-2021', '21-04-2021', '22-04-2021', '23-04-2021', '24-04-2021', '25-04-2021', '26-04-2021', '27-04-2021', '28-04-2021', '29-04-2021', '30-04-2021', '01-05-2021', '02-05-2021', '03-05-2021', '04-05-2021', '05-05-2021', '06-05-2021', '07-05-2021', '08-05-2021', '09-05-2021', '10-05-2021', '11-05-2021', '12-05-2021', '13-05-2021', '14-05-2021', '15-05-2021', '16-05-2021', '17-05-2021', '18-05-2021', '19-05-2021', '20-05-2021', '21-05-2021', '22-05-2021', '23-05-2021', '24-05-2021', '25-05-2021', '26-05-2021', '27-05-2021', '28-05-2021', '29-05-2021', '30-05-2021', '31-05-2021', '01-06-2021', '02-06-2021', '03-06-2021', '04-06-2021', '05-06-2021', '06-06-2021', '07-06-2021', '08-06-2021', '09-06-2021', '10-06-2021', '11-06-2021', '12-06-2021', '13-06-2021', '14-06-2021', '15-06-2021', '16-06-2021', '17-06-2021', '18-06-2021', '19-06-2021', '20-06-2021', '21-06-2021', '22-06-2021', '23-06-2021', '24-06-2021', '25-06-2021', '26-06-2021', '27-06-2021', '28-06-2021', '29-06-2021', '30-06-2021', '01-07-2021', '02-07-2021', '03-07-2021', '04-07-2021', '05-07-2021', '06-07-2021', '07-07-2021', '08-07-2021', '09-07-2021', '10-07-2021', '11-07-2021', '12-07-2021', '13-07-2021', '14-07-2021', '15-07-2021', '16-07-2021', '17-07-2021', '18-07-2021', '19-07-2021', '20-07-2021', '21-07-2021', '22-07-2021', '23-07-2021', '24-07-2021', '25-07-2021', '26-07-2021', '27-07-2021', '28-07-2021', '29-07-2021', '30-07-2021', '31-07-2021', '01-08-2021', '02-08-2021', '03-08-2021', '04-08-2021', '05-08-2021', '06-08-2021', '07-08-2021', '08-08-2021', '09-08-2021', '10-08-2021', '11-08-2021', '12-08-2021', '13-08-2021', '14-08-2021', '15-08-2021', '16-08-2021', '17-08-2021', '18-08-2021', '19-08-2021', '20-08-2021', '21-08-2021', '22-08-2021', '23-08-2021', '24-08-2021', '25-08-2021', '26-08-2021', '27-08-2021', '28-08-2021', '29-08-2021', '30-08-2021', '31-08-2021', '01-09-2021', '02-09-2021', '03-09-2021', '04-09-2021', '05-09-2021', '06-09-2021', '07-09-2021', '08-09-2021'];
