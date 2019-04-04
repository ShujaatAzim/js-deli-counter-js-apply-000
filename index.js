function takeANumber(currentLine, name) {
  currentLine.push(name);
    return `Welcome, ${name}. You are number ${currentLine.indexOf(name) + 1} in line.`
}

count = 0;
function nowServing(currentLine) {
  count++;
  var line = currentLine;
  currentLine.push(count);
  line.push(count);
  
  if (currentLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${count}.`;
  }
}


function currentLine(line) {
  var arr = [];
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
      for (let i = 0; i < line.length; i++) {
        var count = i + 1;
          arr.push(`${count}. ${line[i]}`);
      }
  return `The line is currently: ${arr.join(", ")}`;
    }
}
