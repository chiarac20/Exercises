function ageOfVote (yearOfBirth, targetYear){
    const age=targetYear-yearOfBirth;
    if (age <18){
        return 'Non può votare';
    }
    if (age <25){
        return 'Può votare alla Camera';
    }
    return 'Anche al Senato';
}
console.log (ageOfVote(process.argv[2], process.argv[3]));
