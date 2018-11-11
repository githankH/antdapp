import React from 'react';
import { List, Icon } from 'antd';


const IconText = ({type, text})=> {
    return (
        <span>
            <Icon type={type} style={{marginRight: '8px'}} />
            {text}
        </span>
    );
}

const TodoItem = ({title,desc,content,timestamp,likes}) => {
    return(
        <List.Item 
            key={title} 
            actions = {[<IconText type="star-o" text="156" />, 
                       <IconText type="like-o" text={likes} />, 
                       <IconText type='clock-circle' text={timestamp} />]} 
        >
            <List.Item.Meta 
                title = {title}
                description = {desc}
            />
            {content}
        </List.Item>
    );
};
export default TodoItem;