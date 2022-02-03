import React from 'react';
import Navbar from '../components/navbar/navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WcMatchList from '../components/wc/wc';
import ClMatchList from '../components/cl/cl';
import Bl1MatchList from '../components/bl1/bl1';
import DedMatchList from '../components/ded/ded';
import BsaMatchList from '../components/bsa/bsa';
import PdMatchList from '../components/pd/pd';
import Fl1MatchList from '../components/fl1/fl1';
import ElcMatchList from '../components/elc/elc';
import PplMatchList from '../components/ppl/ppl';
import EcMatchList from '../components/ec/ec';
import SaMatchList from '../components/sa/sa';
import PlMatchList from '../components/pl/pl';
import CliMatchList from '../components/cl/cl';


function Main() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/wc" element={<WcMatchList/>}/>
                        <Route path="/bl1" element={<Bl1MatchList/>}/>
                        <Route path="/cl" element={<ClMatchList/>}/>
                        <Route path="/ded" element={<DedMatchList/>}/>
                        <Route path="/bsa" element={<BsaMatchList/>}/>
                        <Route path="/pd" element={<PdMatchList/>}/>
                        <Route path="/fl1" element={<Fl1MatchList/>}/>
                        <Route path="/elc" element={<ElcMatchList/>}/>
                        <Route path="/ppl" element={<PplMatchList/>}/>
                        <Route path="/ec" element={<EcMatchList/>}/>
                        <Route path="/sa" element={<SaMatchList/>}/>
                        <Route path="/pl" element={<PlMatchList/>}/>
                        <Route path="/cli" element={<CliMatchList/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            
        </div>
    )
}

export default Main;