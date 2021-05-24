var dates = ['05-04-2021', '06-04-2021', '07-04-2021', '08-04-2021', '09-04-2021', '10-04-2021', '11-04-2021', '12-04-2021', '13-04-2021', '14-04-2021', '15-04-2021', '16-04-2021', '17-04-2021', '18-04-2021', '19-04-2021', '20-04-2021', '21-04-2021', '22-04-2021', '23-04-2021', '24-04-2021', '25-04-2021', '26-04-2021', '27-04-2021', '28-04-2021', '29-04-2021', '30-04-2021', '01-05-2021', '02-05-2021', '03-05-2021', '04-05-2021', '05-05-2021', '06-05-2021', '07-05-2021', '08-05-2021', '09-05-2021', '10-05-2021', '11-05-2021', '12-05-2021', '13-05-2021', '14-05-2021', '15-05-2021', '16-05-2021', '17-05-2021', '18-05-2021', '19-05-2021', '20-05-2021', '21-05-2021', '22-05-2021', '23-05-2021', '24-05-2021', '25-05-2021', '26-05-2021', '27-05-2021', '28-05-2021', '29-05-2021', '30-05-2021', '31-05-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 40, 42, 43, 43, 42, 43, 43, 42, 43, 43];
var daily_cases = [72, 105, 105, 90, 72, 51, 54, 107, 63, 79, 71, 60, 38, 54, 74, 57, 63, 55, 48, 38, 32, 56, 60, 48, 55, 34, 32, 27, 27, 56, 45, 65, 39, 31, 30, 42, 65, 61, 38, 44, 27, 31, 50, 45, 35, 46, 49, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var daily_deaths = [1, 2, 0, 1, 2, 2, 0, 2, 0, 3, 1, 0, 2, 2, 0, 1, 1, 0, 2, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 2, 2, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 2, 1, 0, 0, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "22-05-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 4155, 4374, 4644, 4482, 4338, 4299, 4329, 4374, 4406, 4410];
var daily_tests = [3632, 6466, 5033, 4672, 4443, 2717, 2661, 5278, 5563, 4458, 4180, 4124, 2504, 2433, 5257, 5347, 4737, 4228, 4152, 2402, 2451, 5701, 6307, 4992, 4412, 3727, 2336, 2378, 3560, 7547, 5758, 4774, 4331, 2943, 2741, 6299, 6405, 4882, 4639, 4037, 2619, 2491, 5777, 5490, 4611, 4086, 4014, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
