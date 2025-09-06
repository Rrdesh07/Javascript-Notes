//Continue

// The continue keyword stops the current iteration of a loop and immediately moves on to the next one

for (let i = 0; i < 10; i++) {
    if(i==3){
        continue;
    }
    console.log(i);
}

//output : 0 1 2 4 5 6 7 8 9