import React from 'react';
import './Style.css';

class Timetracking extends React.Component{
    
    
    componentDidMount(){
        var xhttp =new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState == 4 && this.status==200){
              console.log('success')
              var con2=JSON.parse(this.responseText)
              console.log(con2)
              
              con2.map(parsedata =>{
                  document.getElementById("project1").innerHTML+=
                  `<tr><td class="dark1">`+
                  parsedata.comment+
                  `</td></tr class="dark1">`
              })
        }
    }
    xhttp.open("GET","http://localhost:4000/comget",true);
  xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
  xhttp.send();
  }

    

    compost(){
       
        var spentdata={ comment:document.getElementById("comment").value,
                   
                }
                console.log(spentdata)
                var xhttp= new XMLHttpRequest();
                 xhttp.onreadystatechange=function(){
                   if(this.readyState == 4 && this.status==200){
                       console.log(this.responseText)
                     
                        alert("Registered Successfully");
                          }
                         else{console.log("error1");
                          }
                            }
                xhttp.open("POST","http://localhost:4000/spent",true);
                 xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
                  xhttp.send(JSON.stringify(spentdata));
        }
        


       

    render(){
        return(
            
            <div className="container-fluid bgcol" >
                 
                 

                 <div className="row ">   
                <div className="col-12" id="table">
                <p className="con5 text-center">Any comment about project please enter below</p><br/>
                    <form >
                        <div >
                        <input type="text "id="comment"   className="w-50 inputh" placeholder="enter your comments about project"/>
                        <button type="button" onClick={this.compost}  className="btn btn-primary btn-block  mt-4 btn2 ">POST</button>
                         </div>
                    </form>
                </div>
                
                </div>

                <div className="row ">   
                <div className="col-12" >
                <table id="project1" className="table table-hover mt-3 w-50 table1 ">
							<thead className="thead-dark">
							<tr>
                                <th className="dark text-center">comments</th>
								 									
							</tr>
							</thead>
						</table> 
              </div> 
              </div>

                
            </div>
            
        )
    }
};
export default Timetracking;