import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MapContainer(props) {
    return (
        <YMaps>
            <Map defaultState={{ center: [59.995062, 30.382236], zoom: 15 }} >
                <Placemark geometry={[59.995062, 30.382236]} />
            </Map>
        </YMaps>
    )
}

export default MapContainer;