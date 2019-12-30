import React from 'react';
import './Style.css';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        };
      }

     submit(){
        var start=document.getElementById("estart").value;
        var end=document.getElementById("eend").value;
        var spent=end-start;
       
        console.log(spent)
        var data={ name:document.getElementById("name").value,
                   proname:document.getElementById("proname").value,
                   number:document.getElementById("number").value,
                   hourrate:document.getElementById("rate").value,
                    spenttime:spent
                }
                console.log(data)
            
        var email=document.getElementById("email").value;
        
        var filter = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/ig;
    
        if (!filter.test(email)) {
        alert('Please provide a valid email address');}
        else{
            data.email=document.getElementById("email").value;
            var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState == 4 && this.status==200){
            var a=this.responseText;
            alert("Registered Successfully");
        }
        else{console.log("error1");
        }
    }
    xhttp.open("POST","http://localhost:4000/post",true);
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
    xhttp.send(JSON.stringify(data));
        }
    console.log(data);
    }


    render(){
        return(
            <div className="container-fluid bgcol" >
            
            <div className="row ">   
                <div className="col-4 "></div>
                <div className="col-8">
                    <p className="con2 ">ADD YOUR PROJECT DETAILS</p>
                    <form onSubmit={this.submit} >                   
                        <label className="details"> USER NAME:</label><input type="text" className="form-control w-50 " id="name" placeholder="user name"required/><br/>
                        <label className="details"> PROJECT NAME:</label><input type="text" className="form-control w-50" id="proname" placeholder="user name"required/><br/>
                      <label className="details"> PHONE NUMBER:</label><input type="number" className="form-control w-50"  id="number" placeholder="number"required/><br/>
                        <label className="details"> EMAIL:</label><input type="email" className="form-control w-50" id="email" placeholder="email"required/><br/>
                        <label className="details"> HOUR RATE:</label><input type="number" className="form-control w-50" id="rate" placeholder=""required/><br/>
                        <div className="display">
                        
                        <input type="number" className="form-control w-50" id="estart" min="1" max="24"  placeholder="start time"/>
                        <input type="number" className="form-control w-50 display ml-4" id="eend" min="1" max="24" placeholder="end time"/>
                        
                        </div>
                        <button type="submit"  className="btn btn-primary btn-block  space ">CREATE</button>
                    </form>   
                </div>           
                              
            </div>

            </div>
        )
    }
};
export default Form;