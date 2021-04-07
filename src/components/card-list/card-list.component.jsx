import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
    // Render card-list populated with filtered monster list
    // Add unique key in map method as cards are created
    <div className='card-list'>
        {
            props.monsters.map(monster => {
                return <Card key={ monster.id } monster={ monster } />
            })
        }
    </div>
);