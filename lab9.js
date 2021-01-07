

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };

function arrayCut(arr)
{
    for(var i = 0; i <= arr.length+2; i++) {
        console.log(arr.length,"Осталось",arr,'  i-',i);
        arr.pop();

    }
}

function z1()
{
    console.log('group :',student.group);
    console.log('name :',student.name);
    console.log('last_name :',student.last_name);

}    

function z2()
{
    let array = [0,1,2,3];
    arrayCut(array);
}

function z3()
{
    var word = prompt("введите слово");
    isPalindrome(word);
}


function z4()
{
    var matr = [[1,2,3],[4,5,6],[7,8,9]];
    var sc = 10;
    scalarMultiplication(sc,matr);
}

function isPalindrome(word)
{
    var word_copy = word.split("");
    var word_reverse = word.split("").reverse();
    //console.log('word ',word_copy);
    //console.log('word rev = ',word_reverse)
    
    var a =true;
    for(var i = 0;i<=word_copy.length-1;i++)
    {
        if(word_copy[i] != word_reverse[i])
        {
           a = false
           //console.log('not P')
        }
       //console.log('i- ',i)
    }
    console.log(a);
}

function scalarMultiplication(scalar,matrix)
{
    for(var i = 0;i <= matrix.length-1;i++)
    {
        for(var j= 0;j <=matrix[i].length-1;j++)
        {
            matrix[i][j] *= scalar;
        }
        console.log(matrix[i]);
    }
}
