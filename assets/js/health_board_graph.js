var dates = ['01/04/2020', '02/04/2020', '03/04/2020', '04/04/2020', '05/04/2020', '06/04/2020', '07/04/2020', '08/04/2020', '09/04/2020', '10/04/2020', '11/04/2020', '12/04/2020', '13/04/2020', '14/04/2020', '15/04/2020', '16/04/2020', '17/04/2020', '18/04/2020', '19/04/2020', '20/04/2020', '21/04/2020', '22/04/2020', '23/04/2020', '24/04/2020', '25/04/2020', '26/04/2020', '27/04/2020', '28/04/2020', '29/04/2020', '30/04/2020', '01/05/2020', '02/05/2020', '03/05/2020', '04/05/2020', '05/05/2020', '06/05/2020', '07/05/2020', '08/05/2020', '09/05/2020', '10/05/2020', '11/05/2020', '12/05/2020', '13/05/2020', '14/05/2020', '15/05/2020', '16/05/2020', '17/05/2020', '18/05/2020', '19/05/2020', '20/05/2020', '21/05/2020', '22/05/2020', '23/05/2020', '24/05/2020', '25/05/2020', '26/05/2020', '27/05/2020', '28/05/2020', '29/05/2020', '30/05/2020', '31/05/2020', '01/06/2020', '02/06/2020', '03/06/2020', '04/06/2020', '05/06/2020', '06/06/2020', '07/06/2020', '08/06/2020', '09/06/2020', '10/06/2020', '11/06/2020', '12/06/2020', '13/06/2020', '14/06/2020', '15/06/2020', '16/06/2020', '17/06/2020', '18/06/2020', '19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020', '26/06/2020', '27/06/2020', '28/06/2020', '29/06/2020', '30/06/2020', '01/07/2020', '02/07/2020', '03/07/2020', '04/07/2020', '05/07/2020', '06/07/2020', '07/07/2020', '08/07/2020', '09/07/2020', '10/07/2020', '11/07/2020', '12/07/2020', '13/07/2020', '14/07/2020', '15/07/2020', '16/07/2020', '17/07/2020', '18/07/2020', '19/07/2020', '20/07/2020', '21/07/2020', '22/07/2020', '23/07/2020', '24/07/2020', '25/07/2020', '26/07/2020', '27/07/2020', '28/07/2020', '29/07/2020', '30/07/2020', '31/07/2020', '01/08/2020', '02/08/2020', '03/08/2020', '04/08/2020', '05/08/2020', '06/08/2020', '07/08/2020', '08/08/2020', '09/08/2020', '10/08/2020', '11/08/2020', '12/08/2020', '13/08/2020', '14/08/2020', '15/08/2020', '16/08/2020', '17/08/2020', '18/08/2020', '19/08/2020', '20/08/2020', '21/08/2020', '22/08/2020', '23/08/2020', '24/08/2020', '25/08/2020', '26/08/2020', '27/08/2020', '28/08/2020', '29/08/2020', '30/08/2020', '31/08/2020', '01/09/2020', '02/09/2020', '03/09/2020', '04/09/2020', '05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020', '09/09/2020', '10/09/2020', '11/09/2020', '12/09/2020', '13/09/2020', '14/09/2020', '15/09/2020', '16/09/2020', '17/09/2020', '18/09/2020', '19/09/2020', '20/09/2020', '21/09/2020', '22/09/2020', '23/09/2020', '24/09/2020', '25/09/2020', '26/09/2020', '27/09/2020', '28/09/2020', '29/09/2020', '30/09/2020', '01/10/2020', '02/10/2020', '03/10/2020', '04/10/2020', '05/10/2020', '06/10/2020', '07/10/2020', '08/10/2020', '09/10/2020', '10/10/2020', '11/10/2020', '12/10/2020', '13/10/2020', '14/10/2020', '15/10/2020', '16/10/2020', '17/10/2020', '18/10/2020', '19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020', '24/10/2020', '25/10/2020', '26/10/2020', '27/10/2020', '28/10/2020', '29/10/2020', '30/10/2020', '31/10/2020', '01/11/2020', '02/11/2020', '03/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020', '09/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '18/11/2020', '19/11/2020', '20/11/2020', '21/11/2020', '22/11/2020', '23/11/2020', '24/11/2020', '25/11/2020', '26/11/2020', '27/11/2020', '28/11/2020', '29/11/2020', '30/11/2020', '01/12/2020', '02/12/2020', '03/12/2020', '04/12/2020', '05/12/2020', '06/12/2020', '07/12/2020', '08/12/2020', '09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020', '14/12/2020', '15/12/2020', '16/12/2020', '17/12/2020', '18/12/2020', '19/12/2020', '20/12/2020', '21/12/2020', '22/12/2020', '23/12/2020', '24/12/2020', '25/12/2020', '26/12/2020', '27/12/2020', '28/12/2020', '29/12/2020', '30/12/2020', '31/12/2020', '01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '07/01/2021', '08/01/2021', '11/01/2021', '18/01/2021', '19/01/2021', '20/01/2021', '22/01/2021', '29/01/2021', '12/02/2021', '18/02/2021', '19/02/2021', '23/02/2021', '26/02/2021', '11/03/2021', '12/03/2021', '15/03/2021', '17/03/2021', '26/03/2021', '31/03/2021', '09/04/2021', '12/04/2021', '14/04/2021', '26/04/2021', '29/04/2021', '21/05/2021'];
var betsi = [28, 23, 9, 30, 23, 19, 28, 32, 16, 16, 12, 36, 24, 21, 34, 22, 35, 22, 18, 23, 22, 30, 31, 38, 30, 20, 15, 29, 28, 29, 35, 26, 28, 38, 42, 16, 40, 52, 26, 31, 44, 20, 37, 34, 20, 46, 23, 22, 24, 32, 27, 16, 33, 10, 21, 12, 25, 19, 30, 22, 7, 11, 21, 48, 25, 24, 28, 22, 8, 12, 30, 24, 24, 34, 7, 7, 16, 35, 32, 19, 14, 9, 14, 14, 18, 8, 24, 15, 8, 14, 15, 12, 15, 16, 26, 19, 2, 8, 8, 11, 7, 25, 4, 15, 8, 6, 15, 9, 8, 12, 12, 7, 13, 35, 16, 11, 9, 18, 8, 25, 16, 17, 15, 14, 13, 14, 25, 6, 28, 10, 28, 14, 5, 6, 32, 11, 2, 11, 11, 15, 7, 1, 17, 7, 6, 9, 22, 24, 17, 39, 10, 3, 5, 43, 15, 14, 20, 0, 12, 15, 15, 14, 16, 16, 4, 16, 18, 3, 19, 3, 5, 5, 3, 12, 12, 18, 9, 3, 3, 3, 4, 4, 5, 9, 9, 14, 18, 10, 16, 16, 23, 15, 16, 23, 11, 19, 31, 12, 15, 13, 13, 12, 5, 12, 8, 6, 13, 30, 7, 12, 3, 4, 9, 3, 5, 4, 11, 34, 9, 4, 7, 4, 6, 8, 9, 18, 8, 8, 10, 7, 1, 5, 3, 3, 12, 4, 5, 5, 2, 8, 10, 6, 6, 7, 9, 10, 2, 16, 6, 6, 5, 11, 8, 5, 5, 10, 7, 6, 5, 7, 7, 8, 6, 9, 7, 11, 17, 22, 11, 8, 4, 5, 11, 29, 19, 11, 14, 15, 15, 24, 24, 12, 14, 26, 19, 32, 26, 18, 8, 8, 6, 9, 4, 5, 4, 5, 5, 6, 5, 2, 1, 2, 2, 1, 1];
var hywel = [16, 15, 10, 7, 15, 17, 14, 15, 14, 16, 19, 17, 21, 9, 19, 11, 15, 13, 11, 22, 13, 19, 14, 9, 9, 7, 9, 19, 22, 22, 12, 19, 21, 12, 14, 6, 16, 6, 9, 14, 15, 13, 13, 15, 10, 13, 13, 11, 13, 13, 13, 12, 18, 14, 15, 16, 15, 9, 13, 14, 6, 23, 18, 11, 4, 16, 18, 19, 3, 17, 14, 19, 15, 12, 10, 9, 10, 12, 10, 13, 10, 11, 13, 10, 15, 15, 8, 23, 12, 7, 7, 17, 9, 10, 6, 15, 11, 11, 13, 17, 11, 10, 0, 5, 13, 12, 5, 8, 10, 8, 3, 5, 12, 19, 10, 7, 7, 3, 0, 6, 3, 8, 8, 1, 0, 6, 9, 9, 3, 7, 6, 6, 1, 0, 1, 9, 12, 2, 7, 4, 5, 11, 6, 6, 6, 17, 4, 11, 16, 15, 6, 6, 8, 1, 4, 8, 5, 4, 6, 7, 0, 6, 3, 8, 5, 6, 14, 9, 6, 3, 6, 6, 7, 3, 4, 8, 5, 9, 10, 4, 8, 15, 3, 10, 10, 11, 11, 5, 11, 6, 5, 7, 10, 4, 9, 7, 8, 11, 2, 8, 19, 7, 9, 18, 17, 18, 7, 8, 9, 19, 15, 12, 8, 12, 13, 12, 14, 13, 10, 8, 11, 21, 9, 18, 7, 8, 5, 16, 8, 8, 9, 8, 4, 5, 9, 9, 7, 8, 8, 7, 13, 7, 9, 7, 11, 12, 9, 8, 13, 5, 6, 14, 10, 16, 12, 14, 10, 3, 11, 21, 9, 15, 8, 7, 12, 10, 12, 9, 9, 6, 8, 18, 10, 12, 14, 11, 8, 9, 7, 8, 10, 13, 9, 13, 15, 12, 13, 6, 1, 3, 5, 2, 2, 2, 3, 4, 1, 6, 3, 3, 4, 0, 2, 1, 1];
var powys = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var swansea = [20, 25, 23, 24, 15, 17, 27, 36, 32, 19, 11, 33, 5, 16, 11, 12, 26, 15, 12, 9, 25, 12, 18, 23, 13, 24, 13, 16, 22, 12, 9, 23, 15, 18, 12, 16, 12, 12, 25, 6, 13, 7, 8, 14, 9, 13, 10, 17, 14, 9, 17, 6, 12, 12, 12, 10, 18, 14, 13, 16, 9, 6, 9, 16, 11, 13, 6, 3, 12, 6, 8, 8, 9, 13, 10, 8, 11, 8, 5, 5, 6, 3, 4, 10, 7, 2, 9, 2, 6, 7, 8, 6, 10, 8, 5, 3, 4, 6, 6, 5, 3, 6, 2, 1, 3, 4, 0, 2, 6, 5, 3, 9, 7, 7, 5, 4, 8, 1, 0, 3, 2, 7, 1, 1, 4, 8, 2, 5, 5, 4, 2, 1, 6, 2, 2, 1, 0, 6, 3, 6, 2, 4, 5, 2, 1, 2, 2, 2, 2, 4, 7, 2, 1, 2, 8, 1, 3, 2, 2, 1, 5, 0, 1, 7, 6, 0, 0, 3, 3, 1, 3, 0, 5, 4, 4, 2, 5, 3, 1, 6, 6, 5, 5, 5, 3, 2, 4, 4, 8, 5, 9, 6, 10, 3, 6, 9, 11, 12, 6, 7, 2, 7, 4, 9, 7, 13, 5, 6, 5, 10, 10, 7, 8, 11, 9, 5, 8, 9, 13, 10, 7, 5, 5, 11, 10, 10, 6, 8, 8, 9, 6, 4, 10, 11, 7, 2, 5, 6, 5, 11, 6, 15, 4, 6, 11, 11, 2, 6, 8, 13, 7, 3, 8, 7, 12, 8, 8, 9, 13, 14, 19, 8, 11, 9, 7, 11, 13, 13, 17, 8, 9, 26, 25, 14, 5, 15, 6, 5, 10, 17, 12, 7, 5, 3, 4, 6, 8, 0, 5, 1, 3, 4, 0, 0, 3, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0];
var cardiff = [16, 20, 13, 30, 16, 14, 22, 26, 21, 28, 18, 31, 23, 21, 19, 23, 18, 28, 21, 16, 22, 23, 23, 30, 22, 15, 19, 26, 24, 34, 18, 23, 10, 23, 22, 25, 24, 29, 28, 22, 14, 20, 27, 14, 18, 15, 20, 11, 21, 24, 24, 24, 15, 12, 15, 25, 19, 20, 17, 13, 21, 15, 26, 24, 18, 18, 18, 7, 15, 15, 14, 21, 21, 38, 5, 21, 12, 12, 19, 23, 16, 16, 6, 26, 29, 18, 25, 19, 10, 3, 34, 10, 13, 11, 12, 7, 8, 17, 9, 15, 15, 12, 5, 5, 15, 11, 7, 12, 13, 5, 9, 8, 9, 9, 15, 10, 2, 6, 13, 15, 13, 8, 13, 8, 5, 23, 19, 15, 7, 19, 3, 4, 8, 24, 14, 11, 14, 6, 4, 9, 13, 12, 10, 17, 5, 3, 9, 25, 23, 13, 16, 7, 5, 3, 9, 17, 13, 7, 13, 7, 17, 14, 7, 15, 16, 4, 4, 14, 16, 14, 13, 9, 3, 16, 11, 16, 13, 18, 16, 15, 11, 12, 13, 25, 7, 9, 8, 12, 13, 19, 8, 8, 13, 8, 11, 16, 22, 21, 25, 18, 16, 6, 15, 15, 32, 25, 14, 3, 18, 15, 11, 14, 17, 20, 8, 9, 29, 22, 26, 25, 20, 10, 10, 26, 22, 29, 18, 13, 7, 4, 22, 20, 11, 17, 25, 14, 10, 23, 13, 23, 15, 18, 15, 10, 22, 19, 17, 11, 20, 10, 15, 29, 17, 34, 33, 23, 18, 20, 15, 36, 35, 26, 26, 17, 19, 33, 36, 38, 25, 18, 23, 23, 31, 39, 38, 41, 19, 18, 21, 33, 43, 21, 29, 21, 33, 29, 32, 37, 27, 19, 9, 26, 4, 4, 5, 3, 3, 2, 1, 5, 10, 5, 6, 4, 4];
var cwmtaf = [53, 27, 23, 30, 35, 29, 41, 25, 25, 23, 13, 31, 28, 23, 32, 16, 26, 22, 17, 19, 14, 20, 22, 24, 23, 14, 19, 22, 23, 26, 23, 33, 11, 18, 31, 32, 22, 29, 14, 32, 20, 19, 12, 23, 26, 18, 23, 12, 27, 14, 27, 24, 26, 22, 19, 24, 25, 54, 29, 28, 22, 11, 20, 27, 30, 13, 18, 18, 16, 21, 24, 21, 16, 20, 9, 16, 32, 28, 21, 14, 10, 18, 25, 17, 19, 10, 15, 12, 8, 11, 29, 11, 11, 13, 12, 13, 21, 9, 19, 23, 23, 12, 19, 12, 17, 7, 12, 15, 6, 8, 10, 14, 23, 14, 7, 11, 11, 7, 15, 7, 5, 5, 20, 8, 4, 7, 9, 4, 4, 5, 5, 6, 19, 7, 0, 0, 12, 7, 2, 16, 13, 4, 9, 6, 4, 4, 7, 6, 5, 6, 2, 3, 4, 9, 12, 14, 17, 5, 4, 8, 12, 12, 15, 18, 11, 11, 15, 18, 14, 14, 4, 10, 10, 14, 7, 21, 50, 20, 13, 15, 21, 31, 15, 13, 17, 22, 8, 2, 2, 21, 3, 11, 15, 10, 8, 16, 24, 26, 27, 24, 14, 9, 19, 23, 25, 38, 30, 11, 14, 31, 20, 15, 27, 13, 14, 16, 13, 18, 22, 15, 17, 16, 25, 18, 19, 15, 20, 27, 14, 27, 17, 17, 20, 18, 17, 17, 32, 18, 23, 20, 19, 11, 12, 15, 24, 18, 9, 9, 10, 16, 14, 17, 10, 13, 26, 26, 14, 6, 22, 24, 20, 31, 34, 25, 27, 31, 35, 43, 15, 15, 23, 30, 33, 37, 39, 47, 23, 18, 16, 33, 34, 21, 10, 24, 33, 19, 27, 13, 4, 4, 6, 5, 0, 0, 4, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0];
var aneurin = [74, 29, 31, 13, 30, 27, 63, 24, 18, 27, 33, 20, 29, 16, 36, 20, 31, 29, 23, 25, 21, 23, 29, 22, 28, 19, 20, 36, 17, 25, 25, 23, 15, 16, 19, 21, 17, 16, 10, 13, 14, 19, 24, 12, 17, 20, 10, 11, 15, 16, 10, 10, 19, 11, 8, 12, 15, 14, 10, 10, 8, 11, 17, 18, 19, 4, 13, 12, 7, 20, 13, 20, 13, 9, 17, 7, 15, 13, 14, 11, 16, 11, 9, 6, 17, 14, 15, 10, 6, 7, 12, 11, 6, 8, 18, 6, 4, 13, 8, 4, 9, 11, 11, 12, 7, 9, 9, 13, 11, 13, 6, 3, 8, 4, 8, 5, 8, 8, 13, 8, 14, 10, 16, 3, 3, 7, 10, 6, 6, 10, 7, 0, 8, 6, 14, 7, 12, 5, 11, 13, 5, 7, 7, 1, 4, 1, 5, 1, 7, 6, 11, 12, 6, 11, 11, 16, 11, 9, 5, 8, 16, 10, 7, 6, 13, 18, 8, 6, 7, 7, 10, 4, 0, 10, 5, 5, 12, 14, 18, 13, 21, 23, 20, 17, 48, 21, 43, 26, 30, 18, 28, 13, 39, 31, 41, 31, 27, 20, 30, 42, 24, 19, 25, 15, 18, 23, 29, 20, 23, 27, 24, 34, 28, 21, 27, 29, 29, 33, 22, 21, 50, 20, 9, 23, 29, 20, 17, 19, 22, 17, 18, 26, 19, 23, 17, 16, 12, 21, 20, 31, 25, 15, 27, 17, 25, 15, 11, 11, 27, 12, 16, 24, 23, 27, 29, 21, 7, 23, 23, 30, 38, 32, 25, 24, 21, 29, 30, 27, 33, 18, 30, 23, 27, 34, 28, 38, 15, 21, 17, 29, 36, 21, 26, 20, 28, 18, 26, 32, 41, 43, 16, 23, 20, 37, 21, 26, 7, 1, 7, 2, 4, 9, 2, 9, 9];
