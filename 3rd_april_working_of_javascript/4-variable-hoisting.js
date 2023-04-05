console.log(var_keyword); // undefined at global scope.
{
  let let_keyword;

  console.log(let_keyword, var_keyword); // both undefined.
  var_keyword = "var3"; // initialized before decleration.

  const const_keyword = "var2";
  var var_keyword;

  let_keyword = "var1"; // initialization after decleration.
  console.log(let_keyword, const_keyword, var_keyword);
}
console.log(var_keyword); // initialized in block scoe but also avaliable at global scope.
