import React from 'react';


interface MyProps {
}


const TodoStyleComponent: React.FC<MyProps> = (props: MyProps) => {


    return (
        <React.Fragment>
            <h4>Todo Style Component</h4>

            {/* TODO: read the elements below, and give them the styles they are requesting. */}
            <p>Paragraph: give this text a background color of grey.</p>

            <ul>
                <li>Blue Align Left</li>
                <li>Purple Align Middle</li>
                <li>Green Align Right</li>
            </ul>

        </React.Fragment>
    );
}

export default TodoStyleComponent;