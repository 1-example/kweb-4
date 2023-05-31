const getDivisors = num => {
    const output = [];
    for (let i = 0; i<=Math.sqrt(num); i++){
        if (i*i === num) output.push(i);
        else if (num%i === 0) output.push(i, num/i);
    }
    return output.sort((first, second) => first-second)
}
