JSHell.setup({})
Console.src=document.getElementById('console')

let  run = () => {
  Console.src.innerHTML=""
  let parts = document.getElementById('editor').value
  console.log(parts);
  let line = 0;
  for (let i of parts) {
    line++;
    Console.log(`${JSHell.out.Prefix(line+':')}   ${JSHell.execute(i)}`);
  }
}




//UI FEATURES
const toolkit_toggle = (e) => {
e.style.backgroundColor="red"
}

