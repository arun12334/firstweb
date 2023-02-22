import React,{Component} from "react";
import Form from "./Form";
import './Front.css';
class Front extends Component{
    constructor(props){
        super(props);
        this.state={props};
    }
    dis(){
        document.getElementById('lis').style.display="block";
    }
    disp(){
        document.getElementById('three').style.display="block";
    }
    create(){
        document.getElementById('disp').style.display="block";
        document.getElementById('headd').style.backgroundColor="lightgray";
    }
    render(){
        return(
        <div id="headd">
            <div id="disp"><Form/></div>
        <header>
            <div id="first">
                <img src={this.props.photo}></img>
                <h1 id="logo">GainCare</h1>
            </div>
            <div id="second">
                <h3>Asset Management</h3>
                <img src={this.props.log}></img>
            </div>
               <div id="third">
                 <div id="side">
                    <h1>Welcome,</h1>
                    <h3>Wilson</h3>
                 </div>
                <img src={this.props.mn}></img>
               </div>
        </header>
              <nav id="navi">
                <a><img src={this.props.hm}></img></a>
                <a><img src={this.props.gr}></img></a>
                <a><img src={this.props.con}></img></a>
                <a><img src={this.props.br}></img></a>
                <a id="drop"><img src={this.props.tab} onClick={this.dis}></img>
                <ul id="lis">
                    <li id="ast"><a href="#" onClick={this.disp}>Asset Mgmt.<span>&rsaquo;</span>
                    <div id="three">
                        <div id="head">
                        <h4>Map Equipments & Costumers</h4>
                        <button id="b1">Edit</button>
                        <button id="b2" onClick={this.create}>Create</button></div>
                        <table id="tabl">
                            <tr>
                             <th>Equipment Serial No</th>
                             <th>Equipment Make</th>
                            <th>Equipment Make</th>
                            <th>Facility</th>
                            <th>Country Of Origin</th>
                            </tr>
                            <tr>
                            <td>BWZ03711</td>
                            <td>CAT</td>
                            <td>Caterpillar</td>
                            <td></td>
                            <td>India</td>
                            </tr>
                            <tr>
                            <td>BWZ03711</td>
                            <td>CAT</td>
                            <td>Caterpillar</td>
                            <td></td>
                            <td>India</td>
                            </tr>
                            <tr>
                            <td>BWZ03711</td>
                            <td>CAT</td>
                            <td>Caterpillar</td>
                            <td></td>
                            <td>India</td>
                            </tr>
                            <tr>
                            <td>BWZ03711</td>
                            <td>CAT</td>
                            <td>Caterpillar</td>
                            <td></td>
                            <td>India</td>
                            </tr>
                            </table>
            </div>
            </a>
            </li>
                    <li><a href="#">Region Mrmt.<span>&rsaquo;</span></a></li>
                    <li><a href="#">Master Code Mgemt.<span>&rsaquo;</span></a></li>
                    <li><a href="#">Service Mgmt.<span>&rsaquo;</span></a></li>
                    <li><a href="#">User Mgmt.<span>&rsaquo;</span></a></li>
                    <li><a href="#">Configuration Mgmt.<span>&rsaquo;</span></a></li>
                     <li><a href="#">Tenancy Mgmt.<span>&rsaquo;</span></a></li>
                </ul>
                </a>
                <a><img src={this.props.sh}></img></a>
              </nav>
              
        </div>  
    )
}
}
export default Front;