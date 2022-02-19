function startTimer() {
     //600000 milli seconds is 10 min 
     var tenMinutes = 60 * 10;
    let timer = document.querySelector('#countdown')
    setInterval(function() {
        let minutes = parseInt( tenMinutes / 60, 10)
        let seconds = parseInt( tenMinutes % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timer.textContent = minutes + ":" + seconds;
        if (--tenMinutes < 0) {
            tenMinutes = duration;
        }
    }, 1000)
}
window.onload = function() {
 startTimer();
    const tableData = document.querySelectorAll("td")
    for (let node of tableData) {

        node.addEventListener('click',function() {
            if (node.classList.contains('milestone')){
                node.style.backgroundColor = 'salmon'
            }
            else {
                node.style.backgroundColor = 'pink'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('terminal')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('zoom')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('coffee')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('github')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('html')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('javascript')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('css')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('slack')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })
        node.addEventListener('click',function() {
            if (node.classList.contains('keyboard')){
                node.style.backgroundColor = 'salmon'
            }
           node.classList.toggle('selected')
        })

        if (node.textContent != "") continue;
        let charCode = Math.round(65 + Math.random() * 25)
        node.textContent = String.fromCharCode(charCode)
    }
}

    //  const startingMinutes = 10;
    //     let time = startingMinutes * 60;

    //     const countdownEl = document.getElementById('countdown');

    //     setInterval(updateCountdown, 1000)

    //     function updateCountdown() {
    //     const minutes = math.floor(time / 60);
    //     let seconds = time % 60;

    //     seconds = seconds < 10 ? '0' + seconds : seconds;

    //     countdownEl.innerHTML = '${minutes}: ${seconds}';
    //     time--;
       
    //     };
    

