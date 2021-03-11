import React from 'react';
import Main, {
	All,
	BannerSt,
	Footer,
	MapResultSt,
	SearchSt,
	SideListSt,
} from '../stylesheets/Styles';
import SearchField from 'react-search-field';
import '../stylesheets/App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

let position = [40.741895, -73.989308];

const Home = () => {
	return (
		<Main>
			<BannerSt>
				<h1>Sex Offenders Near Me</h1>
				<h4>Search By Location</h4>
			</BannerSt>
			<SearchSt>
				<SearchField placeholder='(Location Here)' classNames='Search' />
			</SearchSt>
			<All>
				<SideListSt></SideListSt>
				<MapResultSt>
					<MapContainer
						center={position}
						zoom={18}
						scrollWheelZoom={true}
						attributionControl={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
						/>
						<Marker position={position}>
							<Popup>You like to have sex with little kids</Popup>
						</Marker>
					</MapContainer>
				</MapResultSt>
			</All>
			<Footer>@By Nevsimao</Footer>
		</Main>
	);
};

export default Home;
