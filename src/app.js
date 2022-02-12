const colors = require('colors');

let cArr = [
  `
      /\\_____/\\
     /  o   o  \\
    ( ==  ^  == )
     )         (
    (           )
   ( (  )   (  ) )
  (__(__)___(__)__)
  `,
  `
      |\\__/,|   (\`\\
    _.|o o  |_   ) )
  -(((---(((--------
  `,
  `
    |\\__/,|   (\`\\ 
    |_ _  |.--.) )
    ( T   )     /
   (((^_(((/(((_/
  `,
];
function makeText(text) {
  if (text.length > 90) {
    text = text.slice(0, 90) + ' *\n* ' + text.slice(90);
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  } else if (text.length > 75) {
    text = text.slice(0, 75) + ' *\n* ' + text.slice(75);
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  } else if (text.length > 60) {
    text = text.slice(0, 60) + ' *\n* ' + text.slice(60);
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  } else if (text.length > 45) {
    text = text.slice(0, 45) + ' *\n* ' + text.slice(45);
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  } else if (text.length > 30) {
    text = text.slice(0, 30) + ' *\n* ' + text.slice(30);
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  } else if (text.length > 15) {
    text = text.slice(0, 15) + ' *\n* ' + text.slice(15);
  }
  if (text.length < 15) {
    while (text.length < 16) {
      text += ' ';
    }
  }
  return `
*******************
* ${text}*
*******************`;
}
exports.compile = async function (text, color) {
  if (!text) {
    console.log("I can't say empty string!");
  }
  color = color.replace('-', '');
  switch (color) {
    case 'black':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].black
      );
      break;
    case 'red':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].red
      );
      break;
    case 'green':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].green
      );
      break;
    case 'yellow':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].yellow
      );
      break;
    case 'blue':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].blue
      );
      break;
    case 'magenta':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].magenta
      );
      break;
    case 'cyan':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].cyan
      );
      break;
    case 'white':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].white
      );
      break;
    case 'gray':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].gray
      );
      break;
    case 'grey':
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].grey
      );
      break;
    default:
      console.log(
        `${makeText(text)}
  \\
   \\
    \\` + cArr[Math.floor(Math.random() * cArr.length)].white
      );
      break;
  }
};
