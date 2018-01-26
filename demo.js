
class Dialog{
    constructor(title = "标题党", content = "今天是美好的第一天!"){ 
          this.content=content; 
          this.title=title;  
          this.btn=document.getElementById("btn");
          btn.onclick=()=>{
             this.init();
          }
    }
    init(){
        this.dialogwrap();
        this.addEvent();
    }
    createEle(ele,cls,con){
        let oEle=document.createElement(ele);
        oEle.className=cls;
        oEle.innerHTML=con||"";
        return oEle;
    }
    head(){
        let head=this.createEle("div","head",this.title);
        head.innerHTML="<span class='btn'>&times;</span>";
        this.div.appendChild(head);
    }
    main(){
        let main=this.createEle("div","main",this.content);
        this.div.appendChild(main);
    }
    dialogwrap(){
        this.wrap=this.createEle("div","wrap");
        this.div=this.createEle("div","div");
        this.wrap.appendChild(this.div);
        this.head();
        this.main();
        document.body.appendChild(this.wrap);
    }
    addEvent(){
        let btn=document.querySelector(".btn");
        btn.addEventListener("click",()=>{
            this.close();
        })
    }
    close(){
        this.wrap.parentNode.removeChild(this.wrap);
    }
}
