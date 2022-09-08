let courses=document.querySelector(".courses");
let course=document.querySelector(".group");
let Add=document.querySelector("#Add");
let Remove=document.querySelector("#Remove");
let Form=document.querySelector("#form");
let gpa=document.querySelector(".GPA>h1");
let root = document.querySelector(':root');

CourseNo=1


Add.addEventListener("click",(e)=>{
    e.preventDefault();
    if (CourseNo<50){
        courses.insertAdjacentHTML("beforeend", course.outerHTML );
        document.querySelectorAll("#number")[CourseNo].innerHTML=CourseNo+1 +".";
        CourseNo+=1;
    }
})

Remove.addEventListener("click",(e)=>{
    e.preventDefault();
    if (CourseNo>1){
        const el = document.querySelector(".group:last-child");
        el.outerHTML='';
        CourseNo-=1;
    }
})

Form.addEventListener("submit",(e)=>{
    let GPAS=[];
    let CGPA=0;
    e.preventDefault();
    
    Marks=document.querySelectorAll("#marks")
    Marks.forEach(element => {
        if (Number(element.value) >= 85){
            GPAS.push(4.0);    
        }
        else if (Number(element.value) <= 84 && Number(element.value) >= 80 ){
            GPAS.push(3.8);
        }
        else if (Number(element.value) <= 79 && Number(element.value) >= 75 ){
            GPAS.push(3.4);
        }
        else if (Number(element.value) <= 74 && Number(element.value) >= 71 ){
            GPAS.push(3.0);
        }
        else if (Number(element.value) <= 70 && Number(element.value) >= 68 ){
            GPAS.push(2.8);
        }
        else if (Number(element.value) <= 67 && Number(element.value) >= 64 ){
            GPAS.push(2.4);
        }
        else if (Number(element.value) <= 63 && Number(element.value) >= 61 ){
            GPAS.push(2.0);
        }
        else if (Number(element.value) <= 60 && Number(element.value) >= 57 ){
            GPAS.push(1.8);
        }
        else if (Number(element.value) <= 56 && Number(element.value) >= 53 ){
            GPAS.push(1.4);
        }
        else if (Number(element.value) <= 52 && Number(element.value) >= 50 ){
            GPAS.push(1.0);
        }
        else if (Number(element.value) < 50){
            GPAS.push(0.0);
        }
    });

    GPAS.forEach(element => {
        CGPA+=element;
    });

    CGPA = CGPA/GPAS.length;

    gpa.innerHTML=CGPA.toFixed(1);

    document.body.scrollTop = 0; 
    
    document.documentElement.scrollTop = 0;

})


var quoteArray = ["GPA CALCULATOR"];
var textPosition = 0; 
var speed = 100;

typewriter = () => {
    document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
  }

window.addEventListener("dblclick",()=>{
    const colors=["#89ABE3FF:#FCF6F5FF","#2BAE66FF:#FCF6F5FF","#F65058FF:#28334AFF","#E3C9CEFF:#9FC131FF"];
    const r=Math.floor(Math.random() * 4);
    const c1=colors[r].split(":")[0];
    const c2=colors[r].split(":")[1];
    root.style.setProperty('--color1',c1);
    root.style.setProperty('--color2',c2);
})

window.addEventListener("load", typewriter)