import React from 'react';
import { whileStatement } from '@babel/types';

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            list: [

            ]
        }
    }

    handleClick(e){
        console.log(e)
    }


    render(){
        return(<ul>
            <li huruf="#" onclick={this.handleClick}></li>
            </ul>
        );
    }
}

export default List;