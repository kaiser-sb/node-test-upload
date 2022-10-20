module.exports = checkAge;
function checkAge (name, age)
{
    if (age <= 10)
    {
        console.log(`Sorry ${name}. You can't join the course now!`);
    }
    else if (age <= 16)
    {
        console.log(`Congratulations ${name}! You can join the course as Junior fellow.`);
    }
    else
    {
        console.log(`Congratulations ${name}! You are old enough to join at College Level!`);
    }
    //console.log("It Works!!");
}



