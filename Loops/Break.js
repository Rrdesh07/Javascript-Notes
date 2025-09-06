//Break
// The break keyword can be used to break out of a loop early

for (let i = 0; i < 10; i++) {
    if(i==3){
        break;
    }
    console.log(i);
}

// output: 0 1 2

// No matter the end condition , when break statement is encountered, the loop will exit immediately.