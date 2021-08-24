const sentence = "hello there from lighthouse labs";
let time = 50;
for(let char of sentence){
  setTimeout(() => {
    process.stdout.write(char+`\n`);
  }, time);
  time += 50;
}



