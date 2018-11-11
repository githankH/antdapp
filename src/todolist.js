import React, {Component} from 'react';
import { List, Icon } from 'antd';
import TodoItem from './todos';


class TodoLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[],
        };
        //this.handleItems = this.handleItems.bind(this);
    }

    initTodoData(lists, count){
        for(let i=0;i<count;++i)
            lists.push({
                title: `todo-name${i}`,
                desc: `sjadlfkjsdaj32jlj-${i*100}`,
                content: `AAABBBCCCDDDEEEE-${i*1000}`,
                timestamp: new Date().toTimeString(),
                likes: Math.floor(Math.random()*200),
            });
    }

    componentDidMount(){
        let randomdata = [];
        this.initTodoData(randomdata,40);
        //this.setState({todos: randomdata})
        setTimeout(()=>this.setState({todos: randomdata}),0);
    }

    handleItems(item){
        return(<TodoItem {...item} />);
    }

    render(){
        return(
            <List 
                itemLayout='vertical'
                size='large'
                 pagination={{
                    onChange: (page) => console.log(page),
                    pageSize: 5,
                  }} 
                dataSource={this.state.todos}
                //renderItem={(item)=>this.handleItems(item)}
                renderItem={this.handleItems.bind(this)}
            />
        );
    }
}

export default TodoLists;