import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from 'react';

function MapContainer(props) {

    const width = window.innerWidth;

    return (
        <YMaps>
            <Map defaultState={{ center: [59.995062, 30.382236], zoom: 15 }} width={width > 400 ? '400px' : '320px'} height={width > 400 ? '320px' : '240px'} >
                <Placemark geometry={[59.995062, 30.382236]} />
            </Map>
        </YMaps >
    )
}

export default MapContainer;