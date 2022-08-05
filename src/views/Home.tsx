import React, { Component } from "react";

import Space from "../helper_components/Spacer";

import BaseBread from "../components/BaseBread";
import TopBread from "../components/TopBread";
import Tomato from "../components/Tomato";
import Meat from "../components/Meat";
import Lattice from "../components/Lattice";

class Home extends Component<{}, {latticeCount: number, meatCount: number, tomatoCount: number}> {
    constructor(props: any){
        super(props);
        this.state = { 
            latticeCount: 1, 
            meatCount: 1, 
            tomatoCount: 1, 
        };

        this.addLattice = this.addLattice.bind(this);
        this.addMeat = this.addMeat.bind(this);
        this.addTomato = this.addTomato.bind(this);

        this.removeLattice = this.removeLattice.bind(this);
        this.removeMeat = this.removeMeat.bind(this);
        this.removeTomato = this.removeTomato.bind(this);
    }

    addLattice(){
        this.setState((state, props) => ({latticeCount: (state.latticeCount + 1)}));
    }

    removeLattice(){
        this.setState((state, props) => ({ latticeCount: (state.latticeCount - 1) }));
    }

    addTomato() {
        this.setState((state, props) => ({ tomatoCount: (state.tomatoCount + 1) }));
    }

    removeTomato() {
        this.setState((state, props) => ({ tomatoCount: (state.tomatoCount - 1) }));
    }

    addMeat() {
        this.setState((state, props) => ({ meatCount: (state.meatCount + 1) }));
    }

    removeMeat() {
        this.setState((state, props) => ({ meatCount: (state.meatCount - 1) }));
    }

    
    
    render(){
        
        return(
            <div className="container">
                <Space></Space>
                <div className="card border border-3 border-info">
                    <div className='card-body text-center'>
                        <h1 className='text-secondary'>ACA Burger 🍔</h1>
                    </div>
                </div>
                <Space></Space>
                <div className='card border border-3 border-info'>
                    <div className='card-body text-center'>
                        <div className="card-body">
                            <h4 className='text-secondary'>Choose Topings</h4>
                            {this.state.latticeCount === 0 && this.state.tomatoCount === 0 && this.state.meatCount === 0 &&
                                <div className="alert alert-warning">
                                    <h4 className="alert-heading">A Quick one!</h4>
                                    <p>Would you like some butter with your bun bread?</p>
                                </div>
                            }
                            {this.state.latticeCount === 3 && this.state.tomatoCount === 3 && this.state.meatCount === 3 &&
                                <div className="alert alert-success">
                                    <h4 className="alert-heading">Side Note!</h4>
                                    <p>Finish our Max-Burger in 30 mins and win big!!</p>
                                    <h4>🤑🤑🤑🤑🤑</h4>
                                </div>
                            }
                            <div className="alert alert-info">
                                <h4 className="alert-heading">Take Note!</h4>
                                <p>Please note that you can only add up to 3 of each of the available toppings!</p>
                            </div>
                            <div className="row mb-1">
                                <p className="col">lattice</p>
                                {this.state.latticeCount > 0 &&
                                    <button className="col badge rounded-pill text-bg-light btn-size"  onClick={this.removeLattice}>-</button>
                                }
                                {this.state.latticeCount < 3 &&
                                    <button className="col badge rounded-pill text-bg-light" onClick={this.addLattice}>+</button>
                                }
                            </div>
                            <div className="row mb-1">
                                <p className="col">tomatoes</p>
                                {this.state.tomatoCount > 0 &&
                                    <button className="col badge rounded-pill text-bg-light" onClick={this.removeTomato}>-</button>
                                }

                                {this.state.tomatoCount < 3 &&
                                    <button className="col badge rounded-pill text-bg-light" onClick={this.addTomato}>+</button>
                                }
                            </div>
                            <div className="row mb-1">
                                <p className="col">meat</p>
                                {this.state.meatCount > 0 &&
                                    <button className="col badge rounded-pill text-bg-light" onClick={this.removeMeat}>-</button>
                                }
                                {this.state.meatCount < 3 &&
                                    <button className="col badge rounded-pill text-bg-light" onClick={this.addMeat}>+</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Space></Space>
                <div className='card border border-3 border-info'>
                    <div className='card-body text-center'>
                        <div className="card-body">
                            <TopBread></TopBread>
                                {
                                [...Array(this.state.latticeCount)].map((x, i) => {
                                    return <Lattice></Lattice>;
                                })
                                }
                                {
                                    [...Array(this.state.tomatoCount)].map((x, i) => {
                                        return <Tomato></Tomato>;
                                    })
                                }
                                {
                                    [...Array(this.state.meatCount)].map((x, i) => {
                                        return <Meat></Meat>;
                                    })
                                }
                            <BaseBread></BaseBread>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;