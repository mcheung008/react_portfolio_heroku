import React from 'react';
import CardInfo from './CardInfo';



function Card(props) {

// * Images are not high quality thus cardinfo is displayed
// Todo: add ".selected" to props.item (line 11) to show cardinfo only when selected
// Todo: add hover element to cards, see project 2

    return(
        <div className="d-inline-block m-card" onClick={(e) => props.click(props.item)}>
            <img className="m-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default Card;