var counDownDate = new Date("Aug 17, 2024 00:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = counDownDate - now;

        var days = Math.floor(distance / (1000*60*60*24));
        var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        var mins = Math.floor((distance % (1000*60*60)) / (1000*60));
        var seconds = Math.floor((distance % (1000*60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0){
            clearInterval(x);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = mins;
            document.getElementById("secondss").innerHTML = seconds;


        }

    },1000);