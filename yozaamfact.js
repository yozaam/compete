function fact(n){
	if(n==0 ||n==1) return n;
  return n*fact(n-1);
}

console.log(fact(5));
alert(fact(5));
