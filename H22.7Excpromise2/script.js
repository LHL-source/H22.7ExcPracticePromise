/*H22.7 exercise: promise part 2*/

//console.log('hello');



/*make function for : makeAllCaps works? yes-----------------*/

//const makeAllCaps2 = () => {
//var testCap = arrayOfWords.map.toUpperCase()
//return testCap
//}
//makeAllCaps2(arrayOfWords);

// works? y*/
//const testCap = arrayOfWords.map((koek) => {
//   return koek.toUpperCase(); /*works? excellent job*/
//});

//console.log('testCap: ', testCap);

/*-end--------------------------------------------------------------*/

/*put the .map in a function to re-use works? not yet---------------------*/
//const testCap1 = () => {
//arrayOfWords.map((eachWord) => {
//   var wordUp = eachWord.toUpperCase(); /*works? excellent job*/
//   return wordUp
//});
/*map*/
//return
//}
/*testCap1*/
//testCap1();
//console.log('testCap1: ', testCap1);
/*-------------------------------------------------------------------------*/

/*make a function toUpperWords works? excellent job---------------------------------*/
//const num1 = [3, 4, 5];

//const test1 = (koek) => {
//    var test3 = arrayOfWords.map((eachWord) => {
//console.log('eachWord:', eachWord); /*w? yes*/
//var wordUp = eachWord.toUpperCase();
//return wordUp
//})
//return test3
//} /*test1*/

//const test2 = test1(arrayOfWords);
//console.log('test2:', test2);
/*eind-----------------------------------------------------------------*/


/*order in sort: alphabetical order w? yes----------------------------*/
const fruit = ['banana', 'orange', 'appel'];
//const fruit2 = 'apple';
///var fruit3 = fruit.sort(); /*w? y good job*/
//console.log('fruitSort: ', fruit3); /*w? yes*/
/*end------------------------------------------------------------------*/


/*arrow function for order in sort. W? yes good job------------------------------*/

//const toSortFruit = (allFruit) => {
//   var fruit4 = fruit.sort();
//    console.log('fruit4: ', fruit4);
//   return fruit4
//}
//var fruit5 = toSortFruit(fruit);
//console.log('fruit5/invoke toSortFruit:  ', fruit5);
/*end----------------------------------------------------------------------------*/
/* check if the array is a string works ? not yet---------------------------*/


//var isLetter1 = function isLetter(koek) {
//   var testIsLetter = (koek) => () typeof char === 'string';
//   console.log('testIsLetter in typeof char: ', testIsLetter);
//   if (testIsLetter = true) {
//       console.log('testIsLetter in If:', testIsLetter);
//return; /*return is false or true*/
//} /*if*/
//} /*isLetxx*/
//var isLetter2 = isLetter1(arrayOfWords);
//console.log('isLetter2', isLetter2);

/*end------------------------------------------------------------*/

/*Promise opdracht part2 works ? not yet----------------------------*/
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];
const makeAllCaps = () => {};
const sortWords = () => {};

const wordResult1 = new Promise((resolve, reject) => {
        //console.log("Entering function wordResult1:  "); /*w? yeh*/
        const testIf = true;
        if (testIf === true) {
            // console.log('entering resolve:'); /*W? yes*/
            var wordArr1 = arrayOfWords.forEach((currentValue) => {
                console.log('currentValueInSide:', currentValue); /*W? y*/
                console.log('wordArr1_InSide: ', wordArr1); /*iw? ?*/
                var testCap = currentValue.toUpperCase();
                console.log('testCap: ', testCap);
                return testCap

            }) /*wordArr1*/
            console.log('wordArr1_OutSide:  ', wordArr1);
            resolve(wordArr1);
        } /*if*/
        else {
            reject(console.log('entering reject: '), testIf);
        } /*else*/

        return /*proxx*/
    }) /*proxx*/
    /* call promise---------------------------------*/
const callPromise = () => {
    wordResult1
        .then(function(testResProm1) {
            console.log("testResProm1: ", testResProm1);
        }) /*then*/

    .catch(function(testCatchProm1) {
        console.log('testCatchProm1:  ', testCatchProm1); /*testCatchProm1*/
    }) /*catch*/
    return
} /*callPro*/
callPromise(arrayOfWords);
/*end promise---------------------------------*/
/*test type of string*/