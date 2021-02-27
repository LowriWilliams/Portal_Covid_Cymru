var dates = ['09-01-2021', '10-01-2021', '11-01-2021', '12-01-2021', '13-01-2021', '14-01-2021', '15-01-2021', '16-01-2021', '17-01-2021', '18-01-2021', '19-01-2021', '20-01-2021', '21-01-2021', '22-01-2021', '23-01-2021', '24-01-2021', '25-01-2021', '26-01-2021', '27-01-2021', '28-01-2021', '29-01-2021', '30-01-2021', '31-01-2021', '01-02-2021', '02-02-2021', '03-02-2021', '04-02-2021', '05-02-2021', '06-02-2021', '07-02-2021', '08-02-2021', '09-02-2021', '10-02-2021', '11-02-2021', '12-02-2021', '13-02-2021', '14-02-2021', '15-02-2021', '16-02-2021', '17-02-2021', '18-02-2021', '19-02-2021', '20-02-2021', '21-02-2021', '22-02-2021', '23-02-2021', '24-02-2021', '25-02-2021', '26-02-2021', '27-02-2021', '28-02-2021', '01-03-2021', '02-03-2021', '03-03-2021', '04-03-2021', '05-03-2021', '06-03-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 289, 281, 277, 279, 280, 272, 272, 279, 277, 276];
var daily_cases = [1142, 1179, 1735, 1601, 1463, 1311, 1212, 1005, 826, 1397, 1081, 971, 909, 769, 530, 376, 843, 729, 700, 563, 597, 486, 460, 612, 599, 583, 501, 501, 359, 284, 492, 469, 450, 377, 407, 282, 289, 453, 442, 373, 343, 310, 267, 271, 331, 276, 227, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 12, 12, 11, 10, 10, 10, 10, 11, 11, 11];
var daily_deaths = [33, 41, 54, 48, 43, 53, 41, 40, 26, 43, 26, 38, 34, 39, 31, 34, 27, 37, 21, 29, 42, 22, 22, 29, 33, 26, 22, 23, 27, 18, 17, 18, 19, 16, 23, 19, 20, 15, 12, 13, 11, 17, 15, 12, 11, 11, 7, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "25-02-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 4695, 4585, 4478, 4634, 4839, 4706, 4611, 4650, 4643, 4652];
var daily_tests = [6124, 5949, 10207, 9559, 8573, 8435, 7432, 5395, 4620, 8831, 8013, 7218, 6750, 6248, 3920, 2833, 6772, 7164, 6299, 5551, 5928, 3898, 3327, 6392, 6990, 6806, 6045, 5802, 3450, 2998, 6110, 5924, 5598, 5314, 4940, 3259, 3173, 6255, 6405, 5571, 5468, 5338, 3384, 3197, 5769, 5376, 4339, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
