import React from 'react';


interface MyProps {
}


const DemoStyleComponent: React.FC<MyProps> = (props: MyProps) => {


    return (
        <React.Fragment>
            <h4>Demo Style Component</h4>

            {/* Here is an example of you can create inline styling in React. */}
            
            
            <p>Paragraph 1: Liquorice fruitcake soufflé icing biscuit oat cake icing muffin. Cake tiramisu chocolate bar pastry cake halvah carrot cake gingerbread. Marzipan jelly powder biscuit chocolate bar ice cream marshmallow.</p>
            
            {/* Notice, that inline styling in React exects an object of styling rules. Also notice that the attribute names aren't separated by a hyphen like "background-color", instead
            they are now camel cased like "backgroundColor". */}
            <p style={{
                color: 'blue',
                backgroundColor: 'grey',
                textAlign: 'right'
            }}>Paragraph 2: Caramels cheesecake tootsie roll dessert macaroon tootsie roll croissant lemon drops. Croissant toffee tiramisu cake oat cake wafer. Jujubes lemon drops pudding wafer gummi bears icing lemon drops tootsie roll sugar plum. Chocolate bear claw gummies jelly beans gingerbread gingerbread tiramisu.</p>
            
            
            <p style={{
                color: 'green',
                backgroundColor: 'black',
                textAlign: 'left'
            }}>Paragraph 3: Macaroon biscuit ice cream carrot cake muffin sweet muffin sesame snaps jelly beans. Sesame snaps caramels cheesecake topping lollipop gingerbread gingerbread jujubes tiramisu. Jujubes carrot cake bear claw oat cake jelly-o. Danish candy canes halvah croissant chocolate cake gummi bears candy.</p>
            
            
            <p>Paragraph 4: Brownie ice cream bonbon sugar plum fruitcake jelly-o pie cake caramels. Soufflé caramels donut liquorice cake chocolate cake. Gingerbread muffin jelly jelly-o halvah macaroon tiramisu sugar plum.</p>

        </React.Fragment>
    );
}

export default DemoStyleComponent;