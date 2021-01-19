function z1(){
	console.log('Zadacha 1')
	let student = {
		group: 201,
		last_name: "Иванов",
		first_name: "Иван"
	};
	console.log('Свойства объекта: ');
	for (key in student) 
	{
  	console.log(key);
	}
	console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);
}

function z2(){
	console.log('Zadacha 2')
	function arrayCut(arr) {
		for (let i = 0; i <= arr.length; i++) {
			console.log(arr.length, arr,'  i-',i);
        arr.pop();
		}
	}
	let array = [0,1,2,3];
    arrayCut(array);
}

function z3(){
	console.log('Zadacha 3')
	var word = prompt("введите слово");
    isPalindrome(word);
}

function z4(){
	console.log('Zadacha 4')
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
        }
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