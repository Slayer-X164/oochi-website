const movingEyes = ()=>{
    window.addEventListener('mousemove',(e)=>{
        const circle_lines = document.querySelectorAll(".circle_line")

        let mouseX = e.clientX
        let mouseY = e.clientY

        let deltaX = mouseX - window.innerWidth/2
        let deltaY = mouseY - window.innerHeight/2

        let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)

        circle_lines.forEach(circle_line => {
            circle_line.style.transform = `rotate(${angle-180}deg) `
        })
    })
}
movingEyes()