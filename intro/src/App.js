 import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Add from './components/Add';
import Greetings from './components/Greetings';

import Bakchodi from './components/Expressions';

import ListSample from './components/Lists';

import { Fragment } from 'react';
import ShowUsers from './components/ListsDemo2';
import Snacks from './components/Food';
import Character from './components/propsDemo2';
import CheckPassword from './components/Validation';
import Cart from './components/ValidationDemo';
import TinyUi from './components/StylingInline';
import ThemedUi from './components/Styling2';
import StyledUi from './components/Styling3';
import ButtonsUI from './components/BootstrapDemo';
import MakeIcon from './components/IconsDemo';
import CustomButton from './components/EventsDemo';
import AboutMe from './components/EventsDemo2';
import Quantity from './components/StateDemo';
import ProfileUi from './components/StateDemoString';
import StateDemoArr from './components/StateDemoArrays';
import MovieUI from './components/ObjectStateDemo';
import ArrayObjUI from './components/ObjectsArrayStateDemo';
import FormUi from './components/FormsDemo';
import TestUseEffect from './components/UseEffectDemo';
import TestUE from './components/UseEffectDemo2';
import TestUseEffectLogic from './components/UseEffectSample3';
import DummyDatabase from './components/DummyDatabase';
import DummyServer from './components/DummyServer';
import DummyEndUser from './components/DummyEndUser';
import { createContext } from 'react';
import PalletUI from './components/UseReducerDemo';
import PalleteChoice from './components/UseRefDemo';
import TestHook from './components/CustomHooks';
import TestCustomHook from './components/TestCustomHooks';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class MainContent extends Component {

// render(){

//   return <h1>Oh yeah its fun to make Ui like this</h1>
// }

// }


const MainContent = ()=>{return (<h1>Hi There welcome to react js course lmao </h1>)}


const App = ()=>{return (

  <section>
    <h2 className="title">iAwesome!!!</h2>
    <p>its cool to write the code in that format </p>
  </section>


)}

export const Info=createContext()

export const Info1 =createContext()

const FormApp = ()=>{
  const user="akashdeep wadhwa"
  return( <>
     
      {/* <Snacks name="akash" role="developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4AaV3E_5JYk36LTxWSDUeOvlKrNYy1kO8XZFyCjGdw&s/" desc="photo snack"/> */}
    
      {/* <Character name="Goku"
       img="https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2016/11/goku-smiling.jpg?fit=1024%2C668&ssl=1&w=640" universe="dragonball" powerlevel="44">


        <h1>mine favcharacter</h1>

        </Character> */}

{/* 
        <CheckPassword isvalid={false}/>
        <CheckPassword isvalid={true}/> */}

        {/* <TinyUi clr={"black"} bgclr={"pink"}></TinyUi> */}

        {/* <ThemedUi isdark={true}/>
        <ThemedUi isdark={false}/> */}

      {/* <StyledUi></StyledUi> */}
      
      {/* <ButtonsUI></ButtonsUI> */}


      {/* <MakeIcon/> */}

      {/* <CustomButton/> */}


            {/* <Quantity/> */}


        {/* <ProfileUi/> */}

            {/* <StateDemoArr/> */}



            {/* <MovieUI/> */}

            {/* <ArrayObjUI/> */}

            {/* <FormUi/> */}

            {/* <TestUseEffect/> */}

            {/* <TestUE/> */}

            {/* <TestUseEffectLogic/> */}
{/* 
            <Info.Provider value={user}>

            <DummyEndUser></DummyEndUser>

            </Info.Provider> */}



{/* <Info.Provider value={"Cell"}>


          <Info1.Provider value={"Absorb Androids"}>

              <DummyEndUser/>


          </Info1.Provider>



</Info.Provider> */}


{/* <PalleteChoice/> */}

{/* <TestHook/> */}



<TestCustomHook/>

    </>


   
    
  
)
}

export default FormApp