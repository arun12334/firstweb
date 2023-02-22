import React,{Component} from 'react';
class Form extends Component{
    del(){
        document.getElementById('bo').style.display="none";
    }
   render(){
    return(
        <div id="bo">
                <div id="head2">
                <h3>Details</h3>
                <button onClick={this.del}>X</button>
                </div>
                <form>
                <div id="first2">
                <lable for="sno">Equipment Serial No</lable><br/>
                <input type="number" id="sno" placeholder="Select" /><br/><br/>
                <lable for="md">Equipment Make Desc</lable><br/>
                <input type="text" id="md"  /><br/><br/>
                <lable for="coo">Country of Origin</lable><br/>
                <input type="text" id="coo"  /><br/><br/></div>
                <div id="second2">
                <lable for="em">Equipment Serial No</lable><br/>
                <input type="text" id="em" /><br/><br/>
                <lable for="fac">Equipment Serial No</lable><br/>
                <input type="text" id="fac" /><br/><br/></div>
                </form>
                <footer>
                    <button id="clr">Clear</button>
                    <button id="sav">Save</button>
                </footer>
            
            </div>
    )
    }
}
export default Form;