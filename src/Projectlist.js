import React from 'react';
import './Style.css';
class Projectlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        };
      }

      componentDidMount(){
          var xhttp =new XMLHttpRequest();
          xhttp.onreadystatechange=function(){
            if(this.readyState == 4 && this.status==200){
                console.log('success')
                var con1=JSON.parse(this.responseText)
                console.log(con1)
                var a=con1.map(data=>{
                   var b= data.spenttime * data.hourrate
                   return b;
                })
                console.log(a)
                var total=a.reduce(function(a,b){
                    return a+b
                })
                console.log(total)
                document.getElementById("total").innerHTML=total
                

               
               

                con1.map(parsedata =>{
                    document.getElementById("project").innerHTML+=
                    `<tr><td class="dark1">`+
                    parsedata.id+
                    `</td><td class="dark1">`+
                    parsedata.name+
                    `</td><td class="dark1">`+
                    parsedata.projectname+
                    `</td><td class="dark1">`+
                    parsedata.number+
                    `</td><td class="dark1">`+
                    parsedata.email+
                    `</td><td class="dark1">`+
                    parsedata.hourrate+
                    `</td><td class="dark1">`+
                    parsedata.spenttime+
                    `</td></tr class="dark1">`
                })
          }
      }
      xhttp.open("GET","http://localhost:4000/get",true);
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
    xhttp.send();
    }


     del(){
		var data ={
		id: document.getElementById("delid").value,
		}
		console.log(data)
		var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                     alert("deleted")
                }
            }
            xhttp.open("DELETE", "http://localhost:4000/delete", true);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhttp.send(JSON.stringify(data));
        }



         edit(){

                 var mar=document.getElementById("jan").value;
                 var apr=document.getElementById("feb").value;
                 var may=apr-mar;
       
                 console.log(may)
            var data = {
                        editid: document.getElementById("editid").value,
                        name: document.getElementById("edname").value,
                        projectname: document.getElementById("projectname").value,
                        number: document.getElementById("ednumber").value,
                        email: document.getElementById("edemail").value,
                        hourrate: document.getElementById("hourrate").value,
                        spenttime:may

                    
                    }
                    console.log(data)
            
            
                    var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                            
                          
                    }
                }
                xhttp.open("PUT", "http://localhost:4000/edit", true);
                xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhttp.send(JSON.stringify(data));
            }

    render(){
        return(
            <div className="container-fluid bgcol" >
            
                <p className="con3 text-center ">ALL PROJECT LIST</p>
                  <div className="row ">   
                <div className="col-8" id="table">
                <table id="project" className="table table-hover">
							<thead className="thead-dark">
							<tr>
                                <th className="dark">ID</th>
								<th className="dark">Name</th>
								<th className="dark">projectname</th>
								<th className="dark">number</th>
								<th className="dark">email</th>
                                <th className="dark">hourrate</th>
                                <th className="dark">spenttime</th>
                                									
							</tr>
							</thead>
						</table> 
              </div> 
              <div className="col-4" >
              <button type="button" onClick={this.del}  className="btn btn-danger  mt-4 ">DELETE</button>
              <p className="con4">Enter the id to delete the project</p>
              <input type="number" className="form-control w-50 space2 " id="delid" placeholder="enter id" required/>

              
              <p className="con4">where you want to edit.please enter..</p>

              <input type="number" className="form-control w-50 space2 " id="editid" placeholder="id" required/>  

              <input type="text" className="form-control w-50 space2 " id="edname" placeholder="name" required/>
              <input type="text" className="form-control w-50 space2  " id="projectname" placeholder="projectname" required/>

              <input type="number" className="form-control w-50 space2 " id="ednumber" placeholder="number" required/>

              <input type="email" className="form-control w-50 space2 " id="edemail" placeholder="email" required/>
              <input type="number" className="form-control w-50 space2 " id="hourrate" placeholder="hourrate" required/>

              <div className="display1">
              <input type="number" min="1" max="24" className="form-control w-50" id="jan" placeholder="start time"required/>
             <input type="number" min="1" max="24" className="form-control w-50 display ml-4" id="feb" placeholder="end time"required/>
             </div>  
              <button type="botton" onClick={this.edit} className="btn btn-primary btn-block  mt-4 btn1 ">EDIT</button>
              
              

            </div>         
                              
            </div>

           
            <p className="con3 text-center" id="ans">TIME TRACKING</p>
            <div className="box">
            <p className="result text-center">TOTAL REVENUE RATE</p>
            <div id="total" className="result1 text-center"></div>
            </div>

            
            </div>
        )
    }
};
export default Projectlist;