var dates = ['09-06-2021', '10-06-2021', '11-06-2021', '12-06-2021', '13-06-2021', '14-06-2021', '15-06-2021', '16-06-2021', '17-06-2021', '18-06-2021', '19-06-2021', '20-06-2021', '21-06-2021', '22-06-2021', '23-06-2021', '24-06-2021', '25-06-2021', '26-06-2021', '27-06-2021', '28-06-2021', '29-06-2021', '30-06-2021', '01-07-2021', '02-07-2021', '03-07-2021', '04-07-2021', '05-07-2021', '06-07-2021', '07-07-2021', '08-07-2021', '09-07-2021', '10-07-2021', '11-07-2021', '12-07-2021', '13-07-2021', '14-07-2021', '15-07-2021', '16-07-2021', '17-07-2021', '18-07-2021', '19-07-2021', '20-07-2021', '21-07-2021', '22-07-2021', '23-07-2021', '24-07-2021', '25-07-2021', '26-07-2021', '27-07-2021', '28-07-2021', '29-07-2021', '30-07-2021', '31-07-2021', '01-08-2021', '02-08-2021', '03-08-2021', '04-08-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 726, 700, 683, 666, 644, 639, 652, 673, 665, 660];
var daily_cases = [129, 139, 130, 86, 112, 159, 194, 189, 222, 174, 195, 187, 342, 343, 413, 413, 376, 252, 364, 628, 637, 596, 645, 577, 496, 555, 777, 771, 777, 713, 778, 655, 714, 915, 1098, 1206, 1119, 954, 639, 619, 910, 820, 801, 819, 680, 554, 503, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var daily_deaths = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 3, 1, 1, 2, 2, 1, 0, 2, 2, 2, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "26-07-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 6543, 6230, 5959, 5762, 5618, 5508, 5656, 5897, 5804, 5744];
var daily_tests = [4628, 4817, 5075, 3123, 2746, 6319, 7594, 6798, 6538, 6312, 4162, 4105, 9287, 9266, 8167, 8052, 7233, 4637, 4815, 10951, 10856, 10016, 9302, 8780, 5720, 5950, 11716, 11444, 9906, 9034, 8307, 5614, 5673, 10661, 10825, 10247, 9139, 7833, 5253, 5047, 8737, 8126, 7335, 6774, 6385, 4473, 3975, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
