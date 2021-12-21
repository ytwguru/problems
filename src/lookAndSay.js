const lookAndSay = (height) => {
  if(height <= 1) {
    console.log(height);
    return `1`;
  } else {
    return interpretChar(lookAndSay(height - 1));
  }
};

const interpretChar = (val) => {
  let newChar = "";
  let found = []; //store numbers
  let count = []; //store occurrences
  let x = 0;

  if(val) {
    for (let i = 0; i < val.length ; i++) {
      const current = val.charAt(i); //next character
      if(!found[x] || found[x] !== current) {
        found.push(current);
        count.push(1);
        x = count.length - 1;
      } else{
        count[x] ++;
      }
    }
  }

  for(let i = 0; i < found.length; i++) {
    newChar += `${count[i]}${found[i]}`;
  }

  console.log(newChar);
  return newChar;
};

lookAndSay(7);