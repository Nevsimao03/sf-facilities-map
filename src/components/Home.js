import React, { useState } from 'react';
import Main, {
	All,
	BannerSt,
	Footer,
	MapResultSt,
	SearchSt,
	Link,
	SideListSt,
} from '../stylesheets/Styles';
import '../stylesheets/App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useSWR from 'swr';

let position = [37.76501750599999, -122.40126092359778];
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Home = () => {
	const url = 'https://data.sfgov.org/resource/nc68-ngbr.json';

	const { data, error } = useSWR(url, { fetcher });

	const places = data && !error ? data.slice(0, 100) : [];

	const [searchText, setSearchText] = useState('');
	const [Info, setInfo] = useState(places);

	const excludeColumns = ['facility_id'];

	const handleSubmit = (value) => {
		setSearchText(value);
		filterData(value);
	};

	const filterData = (value) => {
		const lowercasedValue = value.toLowerCase().trim();
		if (lowercasedValue === '') setInfo(places);
		else {
			const filteredData = places.filter((item) => {
				return Object.keys(item).some((key) =>
					excludeColumns.includes(key)
						? false
						: item[key].toString().toLowerCase().includes(lowercasedValue)
				);
			});
			setInfo(filteredData);
		}
	};

	return (
		<Main>
			<BannerSt>
				<h1>SF City Facilities</h1>
			</BannerSt>
			<SearchSt onSubmit={handleSubmit}>
				Search:{' '}
				<input
					style={{ marginLeft: 5 }}
					type='text'
					placeholder='Type to search...'
					value={searchText}
					onChange={(event) => handleSubmit(event.target.value)}
				/>
			</SearchSt>
			<All>
				<SideListSt className='sideList'>
					{Info.map((n, i) => {
						return (
							<div key={i} style={{ overflow: 'hidden' }}>
								<b>Name: </b>
								{n.common_name}
								<br />
								<b>Department: </b>
								{n.department_name}
								<br />
							</div>
						);
					})}
					{Info.length === 0 && <span>No records found!</span>}
				</SideListSt>
				<MapResultSt>
					<MapContainer
						center={position}
						zoom={12}
						scrollWheelZoom={true}
						attributionControl={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
						/>
						{places.map((places) => (
							<Marker
								position={[
									places.geom.coordinates[1],
									places.geom.coordinates[0],
								]}
								key={places.dept_id}>
								<Popup>
									<h4>
										{places.common_name}, {places.owned_leased}
									</h4>
									<p>{places.department_name}</p>
									<p>
										{places.address}, {places.city} {places.zip_code}
									</p>
								</Popup>
							</Marker>
						))}
					</MapContainer>
				</MapResultSt>
			</All>
			<Footer>
				<Link href='https://github.com/Nevsimao03'>Github</Link>
			</Footer>
		</Main>
	);
};

export default Home;
